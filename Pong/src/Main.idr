module Main


namespace Console

  %foreign "browser:lambda:(msg)=>console.log(msg)"
  prim__consoleLog : String -> PrimIO ()

  export
  consoleLog : HasIO io => String -> io ()
  consoleLog msg = primIO $ prim__consoleLog msg


namespace Window

  %foreign "browser:lambda:(s)=>canvasContext.fillStyle=s"
  prim__fillStyle : String -> PrimIO ()

  export
  fillStyle : HasIO io => String -> io ()
  fillStyle s = primIO $ prim__fillStyle s

  %foreign "browser:lambda:(x,y,w,h)=>canvasContext.fillRect(Number(x),Number(y),Number(w),Number(h))"
  prim__fillRect : Int -> Int -> Int -> Int -> PrimIO ()

  export
  fillRect : HasIO io => Int -> Int -> Int -> Int -> io ()
  fillRect x y w h = primIO $ prim__fillRect x y w h

  %foreign "browser:lambda:(a,i)=>setInterval(a,Number(i))"
  prim__setInterval : PrimIO () -> Int -> PrimIO ()

  export
  setInterval : (HasIO io) => IO () -> Int -> io ()
  setInterval a i = primIO $ prim__setInterval (toPrim a) i


namespace GameLogic

  public export
  data State : Type where
    MkState : Int -> State

  export
  Show State where
    show (MkState ball) = show ball

  export
  initBall : State
  initBall = MkState 1

  export
  incBall : (1 _ : State) -> State
  incBall (MkState b) = MkState (b + 2)

  export
  drawBall : (1 _ : State) -> IO ()
  drawBall (MkState b) = do
    fillStyle "black"
    fillRect 0 0 800 600
    fillStyle "red"
    fillRect b 100 5 5

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
main = gameLoop 30 initBall incBall drawBall
