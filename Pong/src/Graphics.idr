module Graphics

import Dom
import Scene

PI : Double
PI = 3.141592653589793

PADDLE_THICKNESS : Int
PADDLE_THICKNESS = 10

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

drawNet : CanvasContext -> Int -> Int -> IO ()
drawNet c width height = traverse_
  (\i => colorRect c ((width `div` 2) - 1) (i * 40) 2 20 "white")
  [0 .. (height `div` 40)]

export
drawBall : CanvasContext -> Scene -> IO ()

drawBall c (Empty width height) = do
  -- blanks out the screen with black
  colorRect c 0 0 width height "black"

drawBall c (Player1Won width height) = do
  -- blanks out the screen with black
  colorRect c 0 0 width height "black"
  fillStyle c "white"
  fillText  c "Left Player Won!"  ((width `div` 16) * 7) ((height `div` 6) * 2)
  fillText  c "Click to continue" ((width `div` 16) * 7) ((height `div` 6) * 5)

drawBall c (Player2Won width height) = do
  -- blanks out the screen with black
  colorRect c 0 0 width height "black"
  fillStyle c "white"
  fillText  c "Right Player Won!" ((width `div` 16) * 7) ((height `div` 6) * 2)
  fillText  c "Click to continue" ((width `div` 16) * 7) ((height `div` 6) * 5)

drawBall c (InGame width height (paddle1y, paddle1h) (paddle2y, paddle2h) (ballx,bally) score1 score2) = do
  -- blanks out the screen with black
  colorRect c 0 0 width height "black"
  drawNet c width height
  colorRect c 0                          paddle1y PADDLE_THICKNESS paddle1h "white"
  colorRect c (width - PADDLE_THICKNESS) paddle2y PADDLE_THICKNESS paddle2h "white"
  colorCircle c ballx bally 10 "white"
  fillText c (show score1) (width `div` 8)       (height `div` 6)
  fillText c (show score2) ((width `div` 8) * 7) (height `div` 6)
