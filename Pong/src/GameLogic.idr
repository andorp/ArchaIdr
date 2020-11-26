module GameLogic

import Canvas


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
  Width : Int
  Height : Int
  Ball : Ball
  Velocity : Velocity
  Paddle1 : Paddle
  Paddle2 : Paddle

export
initBall : IO State
initBall = pure $ MkState
  !width
  !height
  (MkBall 0 0)
  (MkVelocity 5 5)
  (MkPaddle 250 100)
  (MkPaddle 250 100)

ballReset : State -> State
ballReset (MkState w h _ (MkVelocity dx dy) p1 p2)
         = MkState w h (MkBall (w `div` 2) (h `div` 2)) (MkVelocity (-dx) dy) p1 p2

changeXDirection : State -> State
changeXDirection (MkState w h b (MkVelocity dx dy) p1 p2) = MkState w h b (MkVelocity (-dx) dy) p1 p2

changeYDirection : State -> State
changeYDirection (MkState w h b (MkVelocity dx dy) p1 p2) = MkState w h b (MkVelocity dx (-dy)) p1 p2

ift : (State -> Bool) -> (State -> State) -> State -> State
ift p t s = if p s then t s else s

ifte : (State -> Bool) -> (State -> State) -> (State -> State) -> State -> State
ifte p t e s = if p s then t s else e s

rollBall : State -> State
rollBall (MkState w h (MkBall x y) (MkVelocity dx dy) p1 p2)
        = MkState w h (MkBall (x + dx) (y + dy)) (MkVelocity dx dy) p1 p2

ballInPaddle1 : State -> Bool
ballInPaddle1 (MkState _ _ (MkBall _ y) _ (MkPaddle py ph) _) = py < y && y < (py + ph)

ballInPaddle2 : State -> Bool
ballInPaddle2 (MkState _ _ (MkBall _ y) _ _ (MkPaddle py ph)) = py < y && y < (py + ph)

computerMovement : State -> State
computerMovement (MkState w h b@(MkBall x y) v p1 (MkPaddle py ph))
  = MkState w h b v p1 (MkPaddle py' ph)
  where
    cp : Int
    cp = py + (ph `div` 2)
    py' : Int
    py' =      if (cp < y - (ph `div` 3)) then py + 6
          else if (cp > y + (ph `div` 3)) then py - 6
          else py

bounceBall : State -> State
bounceBall
  = ift (\(MkState _ h (MkBall _ y) _ _ _) => y > h) changeYDirection
  . ift (\(MkState _ _ (MkBall _ y) _ _ _) => y < 0) changeYDirection
  . ift (\(MkState w _ (MkBall x _) _ _ _) => x > w)
        (ifte ballInPaddle2 changeXDirection ballReset)
  . ift (\(MkState _ _ (MkBall x _) _ _ _) => x < 0)
        (ifte ballInPaddle1 changeXDirection ballReset)

export
-- moveBall : (1 _ : State) -> State
moveBall : State -> State
moveBall
  = bounceBall
  . computerMovement
  . rollBall

export
setPaddle1y : Int -> State -> State
setPaddle1y y (MkState w h b v (MkPaddle _ ph) p2)
  = MkState w h b v (MkPaddle (y - (ph `div` 2)) ph) p2

export
setPaddle2y : Int -> State -> State
setPaddle2y y (MkState w h b v p1 (MkPaddle _ ph))
  = MkState w h b v p1 (MkPaddle (y - (ph `div` 2)) ph)

PADDLE_THICKNESS : Int
PADDLE_THICKNESS = 10

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

export
drawBall : State -> IO ()
drawBall (MkState w h (MkBall x y) _ (MkPaddle y1 h1) (MkPaddle y2 h2)) = do
  -- blanks out the screen with black
  colorRect 0 0 w h "black"
  -- left paddle
  colorRect 0 y1 PADDLE_THICKNESS h1 "white"
  -- right paddle
  colorRect (w - PADDLE_THICKNESS) y2 PADDLE_THICKNESS h2 "white"
  -- red ball
  colorCircle x y 10 "white"
