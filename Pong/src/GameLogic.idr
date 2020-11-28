module GameLogic

import Scene

WINNING_SCORE : Int
WINNING_SCORE = 5

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

export
renderScene : State -> Scene
renderScene s =
  if s.ShowWin
    then
      (if s.Score1 >= WINNING_SCORE
        then Player1Won s.Width s.Height
        else if s.Score2 >= WINNING_SCORE
              then Player2Won s.Width s.Height
              else Empty s.Width s.Height)
    else
      InGame
        s.Width
        s.Height
        (s.Paddle1.Y, s.Paddle1.Height)
        (s.Paddle2.Y, s.Paddle2.Height)
        (s.Ball.X, s.Ball.Y)
        s.Score1
        s.Score2
