module Main

import Console
import Canvas
import Window
import GameLogic

namespace GameLoop

  %foreign "browser:lambda:(s)=>{gameState=s;}"
  prim__setGameState : State -> PrimIO ()

  setGameState : State -> IO ()
  setGameState s = primIO $ prim__setGameState s

  %foreign "browser:lambda:()=>{return gameState;}"
  prim__getGameState : PrimIO State

  getGameState : IO State
  getGameState = primIO prim__getGameState

  updateGameState : ((1 _ : State) -> State) -> IO ()
  updateGameState update = do
    s <- getGameState
    setGameState (update s)

  drawGameState : ((1 _ : State) -> IO ()) -> IO ()
  drawGameState draw = do
    s <- getGameState
    draw s

  export
  gameLoop : Int -> State -> ((1 _ : State) -> State) -> ((1 _ : State) -> IO ()) -> IO ()
  gameLoop fps initState update draw = do
    setGameState initState
    setInterval
      (do updateGameState update
          drawGameState draw)
      (1000 `div` fps)


main : IO ()
main = do
  consoleLog "Starting..."
  gameLoop 30 initBall moveBall drawBall
