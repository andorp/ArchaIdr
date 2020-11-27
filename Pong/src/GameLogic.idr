module GameLogic

import Canvas

PADDLE_THICKNESS : Int
PADDLE_THICKNESS = 10

WINNING_SCORE : Int
WINNING_SCORE = 5

record Ball where
  constructor MkBall
  X : Int
  Y : Int

record Velocity where
  constructor MkVelocity
  DX : Int
  DY : Int

record Paddle where
  constructor MkPaddle
  Y      : Int
  Height : Int

export
record State where
  constructor MkState
  Width     : Int
  Height    : Int
  Ball      : Ball
  Velocity  : Velocity
  Paddle1   : Paddle
  Paddle2   : Paddle
  Score1    : Int
  Score2    : Int
  ShowWin   : Bool

export
initBall : IO State
initBall = pure $ MkState
  !width
  !height
  (MkBall (!width `div` 2) (!height `div` 2))
  (MkVelocity 5 5)
  (MkPaddle 250 100)
  (MkPaddle 250 100)
  0
  0
  False

ballReset : State -> State
ballReset (MkState w h _ (MkVelocity dx dy) p1 p2 s1 s2 sw)
  = let matchWon = s1 >= WINNING_SCORE || s2 >= WINNING_SCORE
    in MkState
        w
        h
        (MkBall (w `div` 2) (h `div` 2))
        (MkVelocity (-dx) 3)
        p1
        p2
        s1
        s2
        matchWon

changeXDirection : State -> State
-- changeXDirection s = record { Velocity.DX $= ((-1)*) } s
changeXDirection (MkState w h b (MkVelocity dx dy) p1 p2 s1 s2 sw)
                = MkState w h b (MkVelocity (-dx) dy) p1 p2 s1 s2 sw

changeYDirection : State -> State
-- changeYDirection s = record { Velocity.DY $= ((-1)*) } s
changeYDirection (MkState w h b (MkVelocity dx dy) p1 p2 s1 s2 sw)
                = MkState w h b (MkVelocity dx (-dy)) p1 p2 s1 s2 sw

rollBall : State -> State
rollBall (MkState w h (MkBall x y) (MkVelocity dx dy) p1 p2 s1 s2 sw)
        = MkState w h (MkBall (x + dx) (y + dy)) (MkVelocity dx dy) p1 p2 s1 s2 sw

ballInPaddle1 : State -> Bool
ballInPaddle1 s = s.Paddle1.Y < s.Ball.Y
               && s.Ball.Y    < (s.Paddle1.Y + s.Paddle1.Height)

ballInPaddle2 : State -> Bool
ballInPaddle2 s = s.Paddle2.Y < s.Ball.Y
               && s.Ball.Y    < (s.Paddle2.Y + s.Paddle2.Height)

computerMovement : State -> State
computerMovement (MkState w h b@(MkBall x y) v p1 (MkPaddle py ph) s1 s2 sw)
  = MkState w h b v p1 (MkPaddle py' ph) s1 s2 sw
  where
    cp : Int
    cp = py + (ph `div` 2)
    py' : Int
    py' =      if (cp < y - (ph `div` 3)) then py + 6
          else if (cp > y + (ph `div` 3)) then py - 6
          else py

changeBallVelPaddle1 : State -> State
changeBallVelPaddle1 (MkState w h (MkBall x y) (MkVelocity dx dy) (MkPaddle py ph) p2 s1 s2 sw)
  = MkState w h (MkBall x y) (MkVelocity dx ((y - (py + (ph `div` 2))) `div` 3)) (MkPaddle py ph) p2 s1 s2 sw

changeBallVelPaddle2 : State -> State
changeBallVelPaddle2 (MkState w h (MkBall x y) (MkVelocity dx dy) p1 (MkPaddle py ph) s1 s2 sw)
  = MkState w h (MkBall x y) (MkVelocity dx ((y - (py + (ph `div` 2))) `div` 3)) p1 (MkPaddle py ph) s1 s2 sw

bounceBall : State -> State
bounceBall s =
       if (s.Ball.Y > s.Height) then (changeYDirection s)
  else if (s.Ball.Y < 0)        then (changeYDirection s)
  else if (s.Ball.X > s.Width) then
            (if (ballInPaddle2 s)
                then (changeBallVelPaddle2 (changeXDirection s))
                else ballReset (record { Score1 $= (+1) } s))
  else if (s.Ball.X < 0) then
            (if (ballInPaddle1 s)
                then (changeBallVelPaddle1 (changeXDirection s))
                else ballReset (record { Score2 $= (+1) } s))
  else s

export
-- moveBall : (1 _ : State) -> State
moveBall : State -> State
moveBall s
  = if s.ShowWin then s
    else bounceBall $ computerMovement $ rollBall s

export
setPaddle1y : Int -> State -> State
setPaddle1y y (MkState w h b v (MkPaddle _ ph) p2 s1 s2 sw)
  = MkState w h b v (MkPaddle (y - (ph `div` 2)) ph) p2 s1 s2 sw

export
setPaddle2y : Int -> State -> State
setPaddle2y y (MkState w h b v p1 (MkPaddle _ ph) s1 s2 sw)
  = MkState w h b v p1 (MkPaddle (y - (ph `div` 2)) ph) s1 s2 sw

export
restartGame : State -> State
restartGame s =
  if s.ShowWin
    then ballReset $ record { ShowWin = False , Score1 = 0 , Score2 = 0 } s
    else s

colorRect : Int -> Int -> Int -> Int -> String -> IO ()
colorRect l t w h c = do
  fillStyle c
  fillRect l t w h

colorCircle : Int -> Int -> Int -> String -> IO ()
colorCircle x y r c = do
  fillStyle c
  beginPath
--  arc x y r 0.0 (3.14 * 2)
  arc x y r 0.0 6.283185307179586
  fill

drawNet : State -> IO ()
drawNet s = traverse_
  (\i => colorRect ((s.Width `div` 2) - 1) (i * 40) 2 20 "white")
  [0 .. (s.Height `div` 40)]

export
drawBall : State -> IO ()
drawBall s = do
  -- blanks out the screen with black
  colorRect 0 0 s.Width s.Height "black"
  if s.ShowWin
    then do
      fillStyle "white"
      fillText
        (if s.Score1 >= WINNING_SCORE
          then "Left Player Won!"
          else if s.Score2 >= WINNING_SCORE
            then "Right Player Won!"
            else "")
        350 200
      fillText "click to continue" 350 500
    else do
      -- draw net
      drawNet s
      -- left paddle
      colorRect 0 s.Paddle1.Y PADDLE_THICKNESS s.Paddle1.Height "white"
      -- right paddle
      colorRect (s.Width - PADDLE_THICKNESS) s.Paddle2.Y PADDLE_THICKNESS s.Paddle2.Height "white"
      -- ball
      colorCircle s.Ball.X s.Ball.Y 10 "white"
      -- Score for player 1
      fillText (show s.Score1) 100 100
      -- Score for player 2
      fillText (show s.Score2) (s.Width - 100) 100
