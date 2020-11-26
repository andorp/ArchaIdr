module Main

import Console
import Canvas
import Window
import GameLogic

calculateMousePos : Event -> IO (Int, Int)
calculateMousePos e = do
  rect <- getBoundingClientRect
  root <- documentElement
  pure
    ( !(clientX e) - !(left rect) - !(scrollLeft root)
    , !(clientY e) - !(top  rect) - !(scrollTop  root)
    )

namespace GameLoop

  %foreign "browser:lambda:(s)=>{gameState=s;}"
  prim__setGameState : State -> PrimIO ()

  setGameState : State -> IO ()
  setGameState s = primIO $ prim__setGameState s

  %foreign "browser:lambda:()=>{return gameState;}"
  prim__getGameState : PrimIO State

  getGameState : IO State
  getGameState = primIO prim__getGameState

  updateGameState : (State -> State) -> IO ()
  updateGameState update = do
    s <- getGameState
    setGameState (update s)

  drawGameState : (State -> IO ()) -> IO ()
  drawGameState draw = do
    s <- getGameState
    draw s

  export
  gameLoop : Int -> IO State -> (State -> State) -> (State -> IO ()) -> IO ()
  gameLoop fps mkInitState update draw = do
    mkInitState >>= setGameState
    setInterval
      (do updateGameState update
          drawGameState draw)
      (1000 `div` fps)

  export
  registerHandler : String -> (Event -> IO (State -> State)) -> IO ()
  registerHandler eventType handler = do
    consoleLog "registerHandler"
    addEventListener eventType $ do
      e <- currentEvent eventType
      u <- handler e
      updateGameState u

-- TODO: Use: https://github.com/rbarreiro/ifui/blob/663e9bc6ea59338cfdea56d3d5b2740a7bf73d84/Ifui/HtmlViews.idr
main : IO ()
main = do
  consoleLog "Starting..."
  rect <- getBoundingClientRect
  root <- documentElement
  l <- left rect
  r <- scrollLeft root
  consoleLog $ show ("left", l, "right", r)
  registerHandler "mousemove" $ \e => do
    (_, y) <- calculateMousePos e
    pure $ setPaddle1y y
  gameLoop 30 initBall moveBall drawBall
