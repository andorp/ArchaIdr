module Canvas

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
