module GameLogic

import Dom

PADDLE_THICKNESS : Int
PADDLE_THICKNESS = 10

WINNING_SCORE : Int
WINNING_SCORE = 5

PI : Double
PI = 3.141592653589793

record Ball where
  constructor MkBall
  X : Int
  Y : Int

record Velocity where
  constructor MkVelocity
  dX : Int
  dY : Int

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
initBall : Int -> Int -> IO State
initBall width height = pure $ MkState
  width
  height
  (MkBall (width `div` 2) (height `div` 2))
  (MkVelocity 5 5)
  (MkPaddle 250 100)
  (MkPaddle 250 100)
  0
  0
  False

ballReset : State -> State
ballReset s = record
  { Ball->X = s.Width  `div` 2
  , Ball->Y = s.Height `div` 2
  , Velocity->dX $= negate
  , Velocity->dY = 3
  , ShowWin = (s.Score1 >= WINNING_SCORE || s.Score2 >= WINNING_SCORE)
  } s

rollBall : State -> State
rollBall s = record
  { Ball->X $= (+s.Velocity.dX)
  , Ball->Y $= (+s.Velocity.dY)
  } s

computerMovement : State -> State
computerMovement s = record
  { Paddle2->Y
      =      if (cp < s.Ball.Y - (s.Paddle2.Height `div` 3)) then s.Paddle2.Y + 6
        else if (cp > s.Ball.Y + (s.Paddle2.Height `div` 3)) then s.Paddle2.Y - 6
        else s.Paddle2.Y
  } s
  where
    cp : Int
    cp = s.Paddle2.Y + (s.Paddle2.Height `div` 2)

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
  where
    ballInPaddle1 : State -> Bool
    ballInPaddle1 s = s.Paddle1.Y < s.Ball.Y
                   && s.Ball.Y    < (s.Paddle1.Y + s.Paddle1.Height)

    ballInPaddle2 : State -> Bool
    ballInPaddle2 s = s.Paddle2.Y < s.Ball.Y
                   && s.Ball.Y    < (s.Paddle2.Y + s.Paddle2.Height)

    changeXDirection : State -> State
    changeXDirection = record { Velocity->dX $= negate }

    changeYDirection : State -> State
    changeYDirection = record { Velocity->dY $= negate }

    changeBallVelPaddle1 : State -> State
    changeBallVelPaddle1 s = record
      { Velocity->dY = (s.Ball.Y - (s.Paddle1.Y + (s.Paddle1.Height `div` 2))) `div` 3
      } s

    changeBallVelPaddle2 : State -> State
    changeBallVelPaddle2 s = record
      { Velocity->dY = (s.Ball.Y - (s.Paddle2.Y + (s.Paddle2.Height `div` 2))) `div` 3
      } s

export
-- moveBall : (1 _ : State) -> State
moveBall : State -> State
moveBall s
  = if s.ShowWin then s
    else bounceBall $ computerMovement $ rollBall s

export
setPaddle1y : Int -> State -> State
setPaddle1y y s = record { Paddle1->Y = y - (s.Paddle1.Height `div` 2) } s

export
setPaddle2y : Int -> State -> State
setPaddle2y y s = record { Paddle2->Y = y - (s.Paddle2.Height `div` 2) } s

export
restartGame : State -> State
restartGame s =
  if s.ShowWin
    then ballReset $ record { ShowWin = False , Score1 = 0 , Score2 = 0 } s
    else s

namespace Graphics

  colorRect : CanvasContext -> Int -> Int -> Int -> Int -> String -> IO ()
  colorRect c l t w h q = do
    fillStyle c q
    fillRect c l t w h

  colorCircle : CanvasContext -> Int -> Int -> Int -> String -> IO ()
  colorCircle c x y r t = do
    fillStyle c t
    beginPath c
    arc c x y r 0.0 (PI * 2)
    fill c

  drawNet : CanvasContext -> State -> IO ()
  drawNet c s = traverse_
    (\i => colorRect c ((s.Width `div` 2) - 1) (i * 40) 2 20 "white")
    [0 .. (s.Height `div` 40)]

  export
  drawBall : CanvasContext -> State -> IO ()
  drawBall c s = do
    -- blanks out the screen with black
    colorRect c 0 0 s.Width s.Height "black"
    if s.ShowWin
      then do
        fillStyle c "white"
        fillText c
          (if s.Score1 >= WINNING_SCORE
            then "Left Player Won!"
            else if s.Score2 >= WINNING_SCORE
              then "Right Player Won!"
              else "")
          350 200
        fillText c "click to continue" 350 500
      else do
        -- draw net
        drawNet c s
        -- left paddle
        colorRect c 0 s.Paddle1.Y PADDLE_THICKNESS s.Paddle1.Height "white"
        -- right paddle
        colorRect c (s.Width - PADDLE_THICKNESS) s.Paddle2.Y PADDLE_THICKNESS s.Paddle2.Height "white"
        -- ball
        colorCircle c s.Ball.X s.Ball.Y 10 "white"
        -- Score for player 1
        fillText c (show s.Score1) 100 100
        -- Score for player 2
        fillText c (show s.Score2) (s.Width - 100) 100
