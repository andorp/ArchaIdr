module Console

%foreign "browser:lambda:(msg)=>console.log(msg)"
prim__consoleLog : String -> PrimIO ()

export
consoleLog : HasIO io => String -> io ()
consoleLog msg = primIO $ prim__consoleLog msg
