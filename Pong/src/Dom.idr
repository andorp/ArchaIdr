module Dom

export
data DomNode = MkNode AnyPtr

export
data DomEvent = MkEvent AnyPtr

%foreign "browser:lambda: x => console.log(x)"
prim__consoleLog : String -> PrimIO ()
export
consoleLog : HasIO io => String -> io ()
consoleLog x = primIO $ prim__consoleLog x

%foreign "browser:lambda: tag => document.createElement(tag)"
prim__createElement : String -> PrimIO AnyPtr
export
createElement : HasIO io => String -> io DomNode
createElement tag = MkNode <$> (primIO $ prim__createElement tag)

%foreign "browser:lambda: (node, child) => node.appendChild(child)"
prim__appendChild : AnyPtr -> AnyPtr -> PrimIO ()
export
appendChild : HasIO io => DomNode -> DomNode -> io ()
appendChild (MkNode n) (MkNode c) = primIO $ prim__appendChild n c

%foreign "browser:lambda: () => document.body"
prim__body : () -> PrimIO AnyPtr
export
body : HasIO io => io DomNode
body = MkNode <$> (primIO $ prim__body ())

%foreign "browser:lambda: (n,k,v) => {n.setAttribute(k,v)}"
prim__setAttribute : AnyPtr -> String -> String -> PrimIO ()
export
setAttribute : HasIO io => DomNode -> String -> String -> io ()
setAttribute (MkNode n) k v = primIO $ prim__setAttribute n k v

%foreign "browser:lambda: (event, callback, node) => node.addEventListener(event, x=>callback(x)())"
prim__addEventListener : String -> (AnyPtr -> PrimIO ()) -> AnyPtr -> PrimIO ()
export
addEventListener : HasIO io => String -> DomNode -> (DomEvent -> IO ()) -> io ()
addEventListener event (MkNode n) callback =
  primIO $ prim__addEventListener event (\ptr => toPrim  $ callback $ MkEvent ptr) n


export
data CanvasContext = MkCanvasContext AnyPtr

%foreign "browser:lambda: (c,t) => c.getContext(t)"
prim__getContext : AnyPtr -> String -> PrimIO AnyPtr
export
getContext : HasIO io => DomNode -> String -> io CanvasContext
getContext (MkNode x) c = map MkCanvasContext $ primIO $ prim__getContext x c

%foreign "browser:lambda: ((c,s) => {c.fillStyle = s;})"
prim__fillStyle : AnyPtr -> String -> PrimIO ()
export
fillStyle : HasIO io => CanvasContext -> String -> io ()
fillStyle (MkCanvasContext x) s = primIO $ prim__fillStyle x s

%foreign "browser:lambda: (c,x,y,w,h) => c.fillRect(Number(x),Number(y),Number(w),Number(h))"
prim__fillRect : AnyPtr -> Int -> Int -> Int -> Int -> PrimIO ()
export
fillRect : HasIO io => CanvasContext -> Int -> Int -> Int -> Int -> io ()
fillRect (MkCanvasContext p) x y w h = primIO $ prim__fillRect p x y w h

%foreign "browser:lambda: (c,t,x,y)=>c.fillText(t,Number(x),Number(y))"
prim__fillText : AnyPtr -> String -> Int -> Int -> PrimIO ()
export
fillText : CanvasContext -> String -> Int -> Int -> IO ()
fillText (MkCanvasContext p) t x y = primIO $ prim__fillText p t x y

%foreign "browser:lambda:(c,x,y,r,s,e,b)=>c.arc(Number(x),Number(y),Number(r),Number(s),Number(e),true)"
prim__arc : AnyPtr -> Int -> Int -> Int -> Double -> Double -> PrimIO ()
export
arc : HasIO io => CanvasContext -> Int -> Int -> Int -> Double -> Double -> io ()
arc (MkCanvasContext p) x y r s e = primIO $ prim__arc p x y r s e

%foreign "browser:lambda: c =>c.beginPath()"
prim__beginPath : AnyPtr -> PrimIO ()
export
beginPath : HasIO io => CanvasContext -> io ()
beginPath (MkCanvasContext p) = primIO $ prim__beginPath p

%foreign "browser:lambda: c=>c.fill()"
prim__fill : AnyPtr -> PrimIO ()
export
fill : HasIO io => CanvasContext -> io ()
fill (MkCanvasContext p) = primIO $ prim__fill p

%foreign "browser:lambda: n=>(BigInt(n.width))"
prim__width : AnyPtr -> PrimIO Int
export
width : HasIO io => DomNode -> io Int
width (MkNode p) = primIO $ prim__width p

%foreign "browser:lambda: n=>(BigInt(n.height))"
prim__height : AnyPtr -> PrimIO Int
export
height : HasIO io => DomNode -> io Int
height (MkNode p) = primIO $ prim__height p

%foreign "browser:lambda: e=>(BigInt(e.clientX))"
prim__clientX : AnyPtr -> PrimIO Int
export
clientX : HasIO io => DomEvent -> io Int
clientX (MkEvent p) = primIO $ prim__clientX p

%foreign "browser:lambda: e=>(BigInt(e.clientY))"
prim__clientY : AnyPtr -> PrimIO Int
export
clientY : HasIO io => DomEvent -> io Int
clientY (MkEvent p) = primIO $ prim__clientY p

export
data DOMRect = MkRect AnyPtr

%foreign "browser:lambda: c=>c.getBoundingClientRect()"
prim__getBoundingClientRect : AnyPtr -> PrimIO AnyPtr
export
getBoundingClientRect : HasIO io => DomNode -> io DOMRect
getBoundingClientRect (MkNode p) = map MkRect $ primIO $ prim__getBoundingClientRect p

%foreign "browser:lambda: r=>BigInt(r.left)"
prim__left : AnyPtr -> PrimIO Int
export
left : HasIO io => DOMRect -> io Int
left (MkRect p) = primIO $ prim__left p

%foreign "browser:lambda: r=>BigInt(r.top)"
prim__top : AnyPtr -> PrimIO Int
export
top : HasIO io => DOMRect -> io Int
top (MkRect p) = primIO $ prim__top p

%foreign "browser:lambda: ()=>document.documentElement"
prim__documentElement : () -> PrimIO AnyPtr
export
documentElement : HasIO io => io DomNode
documentElement = map MkNode $ primIO $ prim__documentElement ()

%foreign "browser:lambda: e=>BigInt(e.scrollLeft)"
prim__scrollLeft : AnyPtr -> PrimIO Int
export
scrollLeft : HasIO io => DomNode -> io Int
scrollLeft (MkNode p) = primIO $ prim__scrollLeft p

%foreign "browser:lambda: e=>BigInt(e.scrollTop)"
prim__scrollTop : AnyPtr -> PrimIO Int
export
scrollTop : HasIO io => DomNode -> io Int
scrollTop (MkNode p) = primIO $ prim__scrollTop p

%foreign "browser:lambda: (a,i)=>setInterval(a,Number(i))"
prim__setInterval : PrimIO () -> Int -> PrimIO ()
export
setInterval : (HasIO io) => IO () -> Int -> io ()
setInterval a i = primIO $ prim__setInterval (toPrim a) i
