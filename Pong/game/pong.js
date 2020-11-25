class IdrisError extends Error { }
function __prim_js2idris_array(x){if(x.length ===0){return {h:0}}else{return {h:1,a1:x[0],a2: __prim_js2idris_array(x.slice(1))}}}
function __prim_idris2js_array(x){const result = Array();while (x.h != 0) {result.push(x.a1); x = x.a2;}return result;}
const __esPrim_crashExp = (x=>{throw new IdrisError(x)});
const __esPrim_idrisworld = (Symbol('idrisworld'));
const __esPrim_int_bound_63 = (BigInt(2) ** BigInt(63) );

function Main_GameLoop_updateGameState(arg_0, ext_0){//src/Main.idr:22:3--23:18
 const imp$5fgen_0 = Main_GameLoop_getGameState(ext_0);
 return Main_GameLoop_setGameState(arg_0(imp$5fgen_0), ext_0);
}

function Main_GameLoop_setGameState(arg_0, ext_0){//src/Main.idr:13:3--14:15
 return Main_GameLoop_prim$5f$5fsetGameState(arg_0, ext_0);
}

const Main_GameLoop_prim$5f$5fsetGameState = ((s)=>{gameState=s;})


const Main_GameLoop_prim$5f$5fgetGameState = (()=>{return gameState;})


function Main_main(ext_0){//src/Main.idr:42:1--43:5
 Console_consoleLog(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_2 = arg_483(eta_0);
const imp$5fgen_1 = arg_485(eta_0);
return imp$5fgen_2(imp$5fgen_1);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_3 = arg_644(eta_0);
return arg_645(imp$5fgen_3)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_4 = arg_647(eta_0);
return imp$5fgen_4(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), 'Starting...')(ext_0);
 return Main_GameLoop_gameLoop(30n, GameLogic_initBall(), (eta_0) => {return GameLogic_moveBall(eta_0);}, (eta_0) => {return GameLogic_drawBall(eta_0);}, ext_0);
}

function Main_GameLoop_getGameState(ext_0){//src/Main.idr:19:3--20:15
 return Main_GameLoop_prim$5f$5fgetGameState(ext_0);
}

function Main_GameLoop_gameLoop(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Main.idr:32:3--34:11
 Main_GameLoop_setGameState(arg_1, ext_0);
 return Window_setInterval(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_6 = arg_483(eta_0);
const imp$5fgen_5 = arg_485(eta_0);
return imp$5fgen_6(imp$5fgen_5);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_7 = arg_644(eta_0);
return arg_645(imp$5fgen_7)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_8 = arg_647(eta_0);
return imp$5fgen_8(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), (eta_0) => {Main_GameLoop_updateGameState(arg_2, eta_0);
return Main_GameLoop_drawGameState(arg_3, eta_0);}, Prelude_Num_div$5fIntegral$5f$5fInt((1000n % __esPrim_int_bound_63), arg_0))(ext_0);
}

function Main_GameLoop_drawGameState(arg_0, ext_0){//src/Main.idr:27:3--28:16
 const imp$5fgen_9 = Main_GameLoop_getGameState(ext_0);
 return arg_0(imp$5fgen_9)(ext_0);
}

function GameLogic_case__moveBall$2cdy$27_458(arg_0, arg_1, arg_2, arg_3, arg_4){//src/GameLogic.idr:50:11--50:55
 switch(arg_4){
  case 0n: {
   return ((Prelude_Num_negate$5fNeg$5f$5fInt((1n % __esPrim_int_bound_63)) * arg_2) % __esPrim_int_bound_63);
   break; }
  case 1n: {
   return arg_2;
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_case__moveBall$2cdx$27_419(arg_0, arg_1, arg_2, arg_3, arg_4){//src/GameLogic.idr:47:11--47:55
 switch(arg_4){
  case 0n: {
   return ((Prelude_Num_negate$5fNeg$5f$5fInt((1n % __esPrim_int_bound_63)) * arg_3) % __esPrim_int_bound_63);
   break; }
  case 1n: {
   return arg_3;
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_n__1709_398_y$27(arg_0, arg_1, arg_2, arg_3){//src/GameLogic.idr:43:5--44:7
 return ((arg_0 + arg_2) % __esPrim_int_bound_63);
}

function GameLogic_n__1709_397_x$27(arg_0, arg_1, arg_2, arg_3){//src/GameLogic.idr:40:5--41:7
 return ((arg_1 + arg_3) % __esPrim_int_bound_63);
}

function GameLogic_n__1709_400_dy$27(arg_0, arg_1, arg_2, arg_3){//src/GameLogic.idr:49:5--50:8
 return GameLogic_case__moveBall$2cdy$27_458(arg_0, arg_1, arg_2, arg_3, Prelude_Basics_$7c$7c(Prelude_EqOrd_$3e$5fOrd$5f$5fInt(GameLogic_n__1709_398_y$27(arg_0, arg_1, arg_2, arg_3), (600n % __esPrim_int_bound_63)), (()=>Prelude_EqOrd_$3c$5fOrd$5f$5fInt(GameLogic_n__1709_398_y$27(arg_0, arg_1, arg_2, arg_3), (0n % __esPrim_int_bound_63)))));
}

function GameLogic_n__1709_399_dx$27(arg_0, arg_1, arg_2, arg_3){//src/GameLogic.idr:46:5--47:8
 return GameLogic_case__moveBall$2cdx$27_419(arg_0, arg_1, arg_2, arg_3, Prelude_Basics_$7c$7c(Prelude_EqOrd_$3e$5fOrd$5f$5fInt(GameLogic_n__1709_397_x$27(arg_0, arg_1, arg_2, arg_3), (800n % __esPrim_int_bound_63)), (()=>Prelude_EqOrd_$3c$5fOrd$5f$5fInt(GameLogic_n__1709_397_x$27(arg_0, arg_1, arg_2, arg_3), (0n % __esPrim_int_bound_63)))));
}

function GameLogic_moveBall(arg_0){//src/GameLogic.idr:35:1--37:9
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_10;
   switch(arg_0.a1.h){
    case 0: {
     let imp$5fgen_11;
     switch(arg_0.a2.h){
      case 0: {
       imp$5fgen_11 = ({h:0, a1: ({h:0, a1: GameLogic_n__1709_397_x$27(arg_0.a1.a2, arg_0.a1.a1, arg_0.a2.a2, arg_0.a2.a1), a2: GameLogic_n__1709_398_y$27(arg_0.a1.a2, arg_0.a1.a1, arg_0.a2.a2, arg_0.a2.a1)}), a2: ({h:0, a1: GameLogic_n__1709_399_dx$27(arg_0.a1.a2, arg_0.a1.a1, arg_0.a2.a2, arg_0.a2.a1), a2: GameLogic_n__1709_400_dy$27(arg_0.a1.a2, arg_0.a1.a1, arg_0.a2.a2, arg_0.a2.a1)})});
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:29:21--29:29');
     }
     imp$5fgen_10 = imp$5fgen_11;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:29:13--29:17');
   }
   return imp$5fgen_10;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:36:19--36:24');
 }
}

function GameLogic_initBall(){//src/GameLogic.idr:31:1--33:9
 return ({h:0, a1: ({h:0, a1: 0n, a2: 0n}), a2: ({h:0, a1: 5n, a2: 5n})});
}

function GameLogic_drawBall(arg_0){//src/GameLogic.idr:52:1--54:9
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_12;
   switch(arg_0.a1.h){
    case 0: {
     imp$5fgen_12 = (eta_0) => {GameLogic_colorRect(0n, 0n, (800n % __esPrim_int_bound_63), (600n % __esPrim_int_bound_63), 'black', eta_0);
GameLogic_colorRect(0n, (210n % __esPrim_int_bound_63), 10n, (100n % __esPrim_int_bound_63), 'white', eta_0);
return GameLogic_colorCircle(arg_0.a1.a1, arg_0.a1.a2, 10n, 'white', eta_0);};
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:29:13--29:17');
   }
   return imp$5fgen_12;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:53:19--53:24');
 }
}

function GameLogic_colorRect(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0){//src/GameLogic.idr:5:1--6:10
 Canvas_fillStyle(arg_4, ext_0);
 return Canvas_fillRect(arg_0, arg_1, arg_2, arg_3, ext_0);
}

function GameLogic_colorCircle(arg_0, arg_1, arg_2, arg_3, ext_0){//src/GameLogic.idr:10:1--11:12
 Canvas_fillStyle(arg_3, ext_0);
 Canvas_beginPath(ext_0);
 Canvas_arc(arg_0, arg_1, arg_2, 0.0, 6.283185307179586, ext_0);
 return Canvas_fill(ext_0);
}

const Canvas_prim$5f$5ffillStyle = ((s)=>canvasContext.fillStyle=s)


const Canvas_prim$5f$5ffillRect = ((x,y,w,h)=>canvasContext.fillRect(Number(x),Number(y),Number(w),Number(h)))


const Canvas_prim$5f$5ffill = (()=>canvasContext.fill())


const Canvas_prim$5f$5fbeginPath = (()=>canvasContext.beginPath())


const Canvas_prim$5f$5farc = ((x,y,r,s,e,b)=>canvasContext.arc(Number(x),Number(y),Number(r),Number(s),Number(e),true))


function Canvas_fillStyle(arg_0, ext_0){//src/Canvas.idr:6:1--8:10
 return Canvas_prim$5f$5ffillStyle(arg_0, ext_0);
}

function Canvas_fillRect(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Canvas.idr:13:1--15:9
 return Canvas_prim$5f$5ffillRect(arg_0, arg_1, arg_2, arg_3, ext_0);
}

function Canvas_fill(ext_0){//src/Canvas.idr:34:1--36:5
 return Canvas_prim$5f$5ffill(ext_0);
}

function Canvas_beginPath(ext_0){//src/Canvas.idr:27:1--29:10
 return Canvas_prim$5f$5fbeginPath(ext_0);
}

function Canvas_arc(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0){//src/Canvas.idr:20:1--22:4
 return Canvas_prim$5f$5farc(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0);
}

function Prelude_Basics_$7c$7c(arg_0, arg_1){//Prelude/Basics.idr:104:1--107:2
 switch(arg_0){
  case 0n: {
   return 0n;
   break; }
  case 1n: {
   return arg_1();
   break; }
  default:
   throw new Error('unhandled const case on Prelude/Basics.idr:106:15--106:19');
 }
}

function Builtin_idris$5fcrash(arg_0, ext_0){//Builtin.idr:175:1--177:12
 return __esPrim_crashExp(ext_0);
}

function Prelude_Num_case__div_440(arg_0, arg_1, arg_2){//Prelude/Num.idr:114:9--116:6
 switch(arg_2){
  case 1n: {
   return ((arg_1 / arg_0) % __esPrim_int_bound_63);
   break; }
  default:
   return Builtin_idris$5fcrash(undefined, 'Unhandled input for Prelude.Num.case block in div at Prelude/Num.idr:113:3--116:6');
 }
}

function Prelude_Num_negate$5fNeg$5f$5fInt(arg_0){//Prelude/Num.idr:102:1--107:7
 return ((0n - arg_0) % __esPrim_int_bound_63);
}

function Prelude_Num_div$5fIntegral$5f$5fInt(arg_0, arg_1){//Prelude/Num.idr:111:1--122:8
 return Prelude_Num_case__div_440(arg_1, arg_0, Prelude_EqOrd_$3d$3d$5fEq$5f$5fInt(arg_1, (0n % __esPrim_int_bound_63)));
}

function Prelude_EqOrd_$3e$5fOrd$5f$5fInt(arg_0, arg_1){//Prelude/EqOrd.idr:128:1--137:7
 switch(((arg_0 > arg_1) ? BigInt(1) : BigInt(0))){
  case 0n: {
   return 1n;
   break; }
  default:
   return 0n;
 }
}

function Prelude_EqOrd_$3d$3d$5fEq$5f$5fInt(arg_0, arg_1){//Prelude/EqOrd.idr:36:1--40:7
 switch(((arg_0 === arg_1) ? BigInt(1) : BigInt(0))){
  case 0n: {
   return 1n;
   break; }
  default:
   return 0n;
 }
}

function Prelude_EqOrd_$3c$5fOrd$5f$5fInt(arg_0, arg_1){//Prelude/EqOrd.idr:128:1--137:7
 switch(((arg_0 < arg_1) ? BigInt(1) : BigInt(0))){
  case 0n: {
   return 1n;
   break; }
  default:
   return 0n;
 }
}

function PrimIO_case__unsafePerformIO_442(arg_0, arg_1, arg_2, arg_3){//PrimIO.idr:103:32--104:76
 return PrimIO_unsafeDestroyWorld(undefined, undefined, arg_3);
}

function PrimIO_unsafePerformIO(arg_0, arg_1){//PrimIO.idr:100:1--102:16
 return PrimIO_unsafeCreateWorld(undefined, (w) => {return PrimIO_case__unsafePerformIO_442(undefined, undefined, undefined, arg_1(w));});
}

function PrimIO_unsafeDestroyWorld(arg_0, arg_1, arg_2){//PrimIO.idr:97:1--98:19
 return arg_2;
}

function PrimIO_unsafeCreateWorld(arg_0, arg_1){//PrimIO.idr:94:1--95:18
 return arg_1(__esPrim_idrisworld);
}

function Prelude_IO_map$5fFunctor$5f$5fIO(arg_0, arg_1, arg_2, arg_3, ext_0){//Prelude/IO.idr:15:1--19:8
 const imp$5fgen_13 = arg_3(ext_0);
 return arg_2(imp$5fgen_13);
}

function Window_setInterval(arg_0, arg_1, arg_2, arg_3){//src/Window.idr:6:1--8:12
 switch(arg_1.h){
  case 0: {
   return arg_1.a2(undefined)((eta_0) => {return Window_prim$5f$5fsetInterval(arg_2, arg_3, eta_0);});
   break; }
  default:
   throw new Error('unhandled con case on Prelude/IO.idr:35:3--35:32');
 }
}

const Window_prim$5f$5fsetInterval = ((a,i)=>setInterval(a,Number(i)))


const Console_prim$5f$5fconsoleLog = ((msg)=>console.log(msg))


function Console_consoleLog(arg_0, arg_1, arg_2){//src/Console.idr:6:1--8:11
 switch(arg_1.h){
  case 0: {
   return arg_1.a2(undefined)((eta_0) => {return Console_prim$5f$5fconsoleLog(arg_2, eta_0);});
   break; }
  default:
   throw new Error('unhandled con case on Prelude/IO.idr:35:3--35:32');
 }
}


function Main__main(){
try{PrimIO_unsafePerformIO(undefined, (eta_0) => {return Main_main(eta_0);});}catch(e){if(e instanceof IdrisError){console.log('ERROR: ' + e.message)}else{throw e} }
}
