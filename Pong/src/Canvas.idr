module Canvas

%foreign "browser:lambda:((s)=>canvasContext.fillStyle=s)"
prim__fillStyle : String -> PrimIO ()

export
fillStyle : String -> IO ()
fillStyle s = primIO $ prim__fillStyle s

%foreign "browser:lambda:((t,x,y)=>{canvasContext.fillText(t,Number(x),Number(y));})"
prim__fillText : String -> Int -> Int -> PrimIO ()

export
fillText : String -> Int -> Int -> IO ()
fillText t x y = primIO $ prim__fillText t x y

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

%foreign "browser:lambda:(()=>{return BigInt(canvas.width);})"
prim__width : PrimIO Int

export
width : IO Int
width = primIO prim__width

%foreign "browser:lambda:(()=>{return BigInt(canvas.height);})"
prim__height : PrimIO Int

export
height : IO Int
height = primIO prim__height



export
data Event : Type where

%foreign "browser:lambda:((e)=>{return events[e];})"
prim__currentEvent : String -> PrimIO Event

export
currentEvent : String -> IO Event
currentEvent e = primIO $ prim__currentEvent e

%foreign "browser:lambda:((e,l)=>{canvas.addEventListener(e,function(evt){events[e]=evt;l();events[e]=undefined;});})"
prim__addEventListener : String -> (PrimIO ()) -> PrimIO ()

export
addEventListener : String -> (IO ()) -> IO ()
addEventListener e l = primIO $ prim__addEventListener e (toPrim l)

%foreign "browser:lambda:((e)=>{return BigInt(e.clientX);})"
prim__clientX : Event -> PrimIO Int

export
clientX : Event -> IO Int
clientX e = primIO $ prim__clientX e

%foreign "browser:lambda:((e)=>{return BigInt(e.clientY);})"
prim__clientY : Event -> PrimIO Int

export
clientY : Event -> IO Int
clientY e = primIO $ prim__clientY e

export
data DOMRect : Type where

%foreign "browser:lambda:(()=>{return canvas.getBoundingClientRect();})"
prim__getBoundingClientRect : PrimIO DOMRect

export
getBoundingClientRect : IO DOMRect
getBoundingClientRect = primIO prim__getBoundingClientRect

%foreign "browser:lambda:((d)=>{return BigInt(d.left);})"
prim__left : DOMRect -> PrimIO Int

export
left : DOMRect -> IO Int
left d = primIO $ prim__left d

%foreign "browser:lambda:((d)=>{return BigInt(d.top);})"
prim__top : DOMRect -> PrimIO Int

export
top : DOMRect -> IO Int
top d = primIO $ prim__top d

export
data Element : Type where

%foreign "browser:lambda:(()=>{return document.documentElement;})"
prim__documentElement : PrimIO Element

export
documentElement : IO Element
documentElement = primIO prim__documentElement

%foreign "browser:lambda:((e)=>{return BigInt(e.scrollLeft);})"
prim__scrollLeft : Element -> PrimIO Int

export
scrollLeft : Element -> IO Int
scrollLeft e = primIO $ prim__scrollLeft e

%foreign "browser:lambda:((e)=>{return BigInt(e.scrollTop);})"
prim__scrollTop : Element -> PrimIO Int

export
scrollTop : Element -> IO Int
scrollTop e = primIO $ prim__scrollTop e
