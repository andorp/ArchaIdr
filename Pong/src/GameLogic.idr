module GameLogic

import Canvas

colorRect : Int -> Int -> Int -> Int -> String -> IO ()
colorRect l t w h c = do
  fillStyle c
  fillRect l t w h

colorCircle : Int -> Int -> Int -> String -> IO ()
colorCircle x y r c = do
  fillStyle c
  beginPath
  arc x y r 0.0 6.283185307179586
  fill

record Ball where
  constructor MkBall
  X : Int
  Y : Int

record Velocity where
  constructor MkVelocity
  dX : Int
  dY : Int

public export
data State : Type where
  MkState : Ball -> Velocity -> State

export
initBall : State
initBall = MkState (MkBall 0 0) (MkVelocity 5 5)

export
moveBall : (1 _ : State) -> State
moveBall (MkState (MkBall x y) (MkVelocity dx dy))
  = MkState (MkBall x' y') (MkVelocity dx' dy')
  where
    x' : Int
    x' = x + dx

    y' : Int
    y' = y + dy

    dx' : Int
    dx' = if x' > 800 || x' < 0 then (-1 * dx) else dx

    dy' : Int
    dy' = if y' > 600 || y' < 0 then (-1 * dy) else dy

export
drawBall : (1 _ : State) -> IO ()
drawBall (MkState (MkBall x y) _) = do
  -- blanks out the screen with black
  colorRect 0 0 800 600 "black"
  -- left paddle
  colorRect 0 210 10 100 "white"
  -- red ball
  colorCircle x y 10 "white"
