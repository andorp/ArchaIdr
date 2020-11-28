module GameLoop

import Dom
import Data.IORef


parameters (state : Type)

  record GameContext where
    constructor MkGameContext
    canvas        : DomNode
    canvasContext : CanvasContext
    fps           : Int
    stateRef      : IORef state

  export
  createGameContext : DomNode -> Int -> IO state -> IO GameContext
  createGameContext c f i = pure $ MkGameContext c !(getContext c "2d") f !(i >>= newIORef)

  export
  gameLoop : GameContext -> (state -> state) -> (state -> scene) -> (CanvasContext -> scene -> IO ()) -> IO ()
  gameLoop ctx update scene draw = do
    setInterval
      (do s0 <- readIORef ctx.stateRef
          let s1 = update s0
          draw ctx.canvasContext (scene s1)
          writeIORef ctx.stateRef s1)
      (1000 `div` ctx.fps)

  export
  registerHandler : GameContext -> String -> (DomNode -> DomEvent -> IO (state -> state)) -> IO ()
  registerHandler ctx eventType handler = do
    addEventListener eventType ctx.canvas $ \e => do
      u <- handler ctx.canvas e
      s0 <- readIORef ctx.stateRef
      writeIORef ctx.stateRef $ u s0
