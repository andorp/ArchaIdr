module Main

import Dom
import GameLogic
import GameLoop
import Graphics
import Scene


calculateMousePos : DomNode -> DomEvent -> IO (Int, Int)
calculateMousePos n e = do
  rect <- getBoundingClientRect n
  root <- documentElement
  pure
    ( !(clientX e) - !(left rect) - !(scrollLeft root)
    , !(clientY e) - !(top  rect) - !(scrollTop  root)
    )

movePaddle1 : DomNode -> DomEvent -> IO (State -> State)
movePaddle1 c e = do
  (_, y) <- calculateMousePos c e
  pure $ setPaddle1y y

restartGameOnClick : DomNode -> DomEvent -> IO (State -> State)
restartGameOnClick _ _ = pure restartGame


main : IO ()
main = do
  consoleLog "Staring..."
  canvas <- do
    canvas <- createElement "canvas"
    setAttribute canvas "id" "gameCanvas"
    setAttribute canvas "width" "800"
    setAttribute canvas "height" "600"
    appendChild !body canvas
    pure canvas
  gameContext <- createGameContext _ canvas 30 (initBall !(width canvas) !(height canvas))
  registerHandler _ gameContext "mousemove" movePaddle1
  registerHandler _ gameContext "mousedown" restartGameOnClick
  gameLoop _ gameContext moveBall renderScene drawBall
  consoleLog "Done."
