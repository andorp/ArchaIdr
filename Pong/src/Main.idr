module Main


namespace Console

  %foreign "browser:lambda:(msg)=>console.log(msg)"
  prim__consoleLog : String -> PrimIO ()

  export
  consoleLog : HasIO io => String -> io ()
  consoleLog msg = primIO $ prim__consoleLog msg

namespace Canvas

  %foreign "browser:lambda:(s)=>canvasContext.fillStyle=s"
  prim__fillStyle : String -> PrimIO ()

  export
  fillStyle : String -> IO ()
  fillStyle s = primIO $ prim__fillStyle s

  %foreign "browser:lambda:(x,y,w,h)=>canvasContext.fillRect(Number(x),Number(y),Number(w),Number(h))"
  prim__fillRect : Int -> Int -> Int -> Int -> PrimIO ()

  export
  fillRect : Int -> Int -> Int -> Int -> IO ()
  fillRect x y w h = primIO $ prim__fillRect x y w h

  %foreign "browser:lambda:(x,y,r,s,e,b)=>canvasContext.arc(Number(x),Number(y),Number(r),Number(s),Number(e),true)"
  prim__arc : Int -> Int -> Int -> Double -> Double -> PrimIO ()

  export
  arc : Int -> Int -> Int -> Double -> Double -> IO ()
  arc x y r s e = primIO $ prim__arc x y r s e

  %foreign "browser:lambda:()=>canvasContext.beginPath()"
  prim__beginPath : PrimIO ()

  export
  beginPath : IO ()
  beginPath = primIO prim__beginPath

  %foreign "browser:lambda:()=>canvasContext.fill()"
  prim__fill : PrimIO ()

  export
  fill : IO ()
  fill = primIO prim__fill


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

namespace Window

  %foreign "browser:lambda:(a,i)=>setInterval(a,Number(i))"
  prim__setInterval : PrimIO () -> Int -> PrimIO ()

  export
  setInterval : (HasIO io) => IO () -> Int -> io ()
  setInterval a i = primIO $ prim__setInterval (toPrim a) i

namespace GameLogic

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
