module Window

%foreign "browser:lambda:(a,i)=>setInterval(a,Number(i))"
prim__setInterval : PrimIO () -> Int -> PrimIO ()

export
setInterval : (HasIO io) => IO () -> Int -> io ()
setInterval a i = primIO $ prim__setInterval (toPrim a) i
