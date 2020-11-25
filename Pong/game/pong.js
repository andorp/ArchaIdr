class IdrisError extends Error { }
function __prim_js2idris_array(x){if(x.length ===0){return {h:0}}else{return {h:1,a1:x[0],a2: __prim_js2idris_array(x.slice(1))}}}
function __prim_idris2js_array(x){const result = Array();while (x.h != 0) {result.push(x.a1); x = x.a2;}return result;}
const __esPrim_crashExp = (x=>{throw new IdrisError(x)});
const __esPrim_idrisworld = (Symbol('idrisworld'));
const __esPrim_int_bound_63 = (BigInt(2) ** BigInt(63) );

function Main_GameLogic_case__moveBall$2cdy$27_492(arg_0, arg_1, arg_2, arg_3, arg_4){//src/Main.idr:107:13--107:57
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

function Main_GameLogic_case__moveBall$2cdx$27_453(arg_0, arg_1, arg_2, arg_3, arg_4){//src/Main.idr:104:13--104:57
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

function Main_GameLogic_n__1773_432_y$27(arg_0, arg_1, arg_2, arg_3){//src/Main.idr:100:7--101:9
 return ((arg_0 + arg_2) % __esPrim_int_bound_63);
}

function Main_GameLogic_n__1773_431_x$27(arg_0, arg_1, arg_2, arg_3){//src/Main.idr:97:7--98:9
 return ((arg_1 + arg_3) % __esPrim_int_bound_63);
}

function Main_GameLogic_n__1773_434_dy$27(arg_0, arg_1, arg_2, arg_3){//src/Main.idr:106:7--107:10
 return Main_GameLogic_case__moveBall$2cdy$27_492(arg_0, arg_1, arg_2, arg_3, Prelude_Basics_$7c$7c(Prelude_EqOrd_$3e$5fOrd$5f$5fInt(Main_GameLogic_n__1773_432_y$27(arg_0, arg_1, arg_2, arg_3), (600n % __esPrim_int_bound_63)), (()=>Prelude_EqOrd_$3c$5fOrd$5f$5fInt(Main_GameLogic_n__1773_432_y$27(arg_0, arg_1, arg_2, arg_3), (0n % __esPrim_int_bound_63)))));
}

function Main_GameLogic_n__1773_433_dx$27(arg_0, arg_1, arg_2, arg_3){//src/Main.idr:103:7--104:10
 return Main_GameLogic_case__moveBall$2cdx$27_453(arg_0, arg_1, arg_2, arg_3, Prelude_Basics_$7c$7c(Prelude_EqOrd_$3e$5fOrd$5f$5fInt(Main_GameLogic_n__1773_431_x$27(arg_0, arg_1, arg_2, arg_3), (800n % __esPrim_int_bound_63)), (()=>Prelude_EqOrd_$3c$5fOrd$5f$5fInt(Main_GameLogic_n__1773_431_x$27(arg_0, arg_1, arg_2, arg_3), (0n % __esPrim_int_bound_63)))));
}

function Main_GameLoop_updateGameState(arg_0, ext_0){//src/Main.idr:133:3--134:18
 const imp$5fgen_0 = Main_GameLoop_getGameState(ext_0);
 return Main_GameLoop_setGameState(arg_0(imp$5fgen_0), ext_0);
}

function Main_Window_setInterval(arg_0, arg_1, arg_2, arg_3){//src/Main.idr:68:3--70:14
 switch(arg_1.h){
  case 0: {
   return arg_1.a2(undefined)((eta_0) => {return Main_Window_prim$5f$5fsetInterval(arg_2, arg_3, eta_0);});
   break; }
  default:
   throw new Error('unhandled con case on Prelude/IO.idr:35:3--35:32');
 }
}

function Main_GameLoop_setGameState(arg_0, ext_0){//src/Main.idr:124:3--125:15
 return Main_GameLoop_prim$5f$5fsetGameState(arg_0, ext_0);
}

const Main_Window_prim$5f$5fsetInterval = ((a,i)=>setInterval(a,Number(i)))


const Main_GameLoop_prim$5f$5fsetGameState = ((s)=>{gameState=s;})


const Main_GameLoop_prim$5f$5fgetGameState = (()=>{return gameState;})


const Main_Canvas_prim$5f$5ffillStyle = ((s)=>canvasContext.fillStyle=s)


const Main_Canvas_prim$5f$5ffillRect = ((x,y,w,h)=>canvasContext.fillRect(Number(x),Number(y),Number(w),Number(h)))


const Main_Canvas_prim$5f$5ffill = (()=>canvasContext.fill())


const Main_Console_prim$5f$5fconsoleLog = ((msg)=>console.log(msg))


const Main_Canvas_prim$5f$5fbeginPath = (()=>canvasContext.beginPath())


const Main_Canvas_prim$5f$5farc = ((x,y,r,s,e,b)=>canvasContext.arc(Number(x),Number(y),Number(r),Number(s),Number(e),true))


function Main_GameLogic_moveBall(arg_0){//src/Main.idr:92:3--94:11
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_1;
   switch(arg_0.a1.h){
    case 0: {
     let imp$5fgen_2;
     switch(arg_0.a2.h){
      case 0: {
       imp$5fgen_2 = ({h:0, a1: ({h:0, a1: Main_GameLogic_n__1773_431_x$27(arg_0.a1.a2, arg_0.a1.a1, arg_0.a2.a2, arg_0.a2.a1), a2: Main_GameLogic_n__1773_432_y$27(arg_0.a1.a2, arg_0.a1.a1, arg_0.a2.a2, arg_0.a2.a1)}), a2: ({h:0, a1: Main_GameLogic_n__1773_433_dx$27(arg_0.a1.a2, arg_0.a1.a1, arg_0.a2.a2, arg_0.a2.a1), a2: Main_GameLogic_n__1773_434_dy$27(arg_0.a1.a2, arg_0.a1.a1, arg_0.a2.a2, arg_0.a2.a1)})});
       break; }
      default:
       throw new Error('unhandled con case on src/Main.idr:86:23--86:31');
     }
     imp$5fgen_1 = imp$5fgen_2;
     break; }
    default:
     throw new Error('unhandled con case on src/Main.idr:86:15--86:19');
   }
   return imp$5fgen_1;
   break; }
  default:
   throw new Error('unhandled con case on src/Main.idr:93:21--93:26');
 }
}

function Main_main(ext_0){//src/Main.idr:153:1--154:5
 Main_Console_consoleLog(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_4 = arg_483(eta_0);
const imp$5fgen_3 = arg_485(eta_0);
return imp$5fgen_4(imp$5fgen_3);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_5 = arg_644(eta_0);
return arg_645(imp$5fgen_5)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_6 = arg_647(eta_0);
return imp$5fgen_6(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), 'Starting...')(ext_0);
 return Main_GameLoop_gameLoop(30n, Main_GameLogic_initBall(), (eta_0) => {return Main_GameLogic_moveBall(eta_0);}, (eta_0) => {return Main_GameLogic_drawBall(eta_0);}, ext_0);
}

function Main_GameLogic_initBall(){//src/Main.idr:88:3--90:11
 return ({h:0, a1: ({h:0, a1: 0n, a2: 0n}), a2: ({h:0, a1: 5n, a2: 5n})});
}

function Main_GameLoop_getGameState(ext_0){//src/Main.idr:130:3--131:15
 return Main_GameLoop_prim$5f$5fgetGameState(ext_0);
}

function Main_GameLoop_gameLoop(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Main.idr:143:3--145:11
 Main_GameLoop_setGameState(arg_1, ext_0);
 return Main_Window_setInterval(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_8 = arg_483(eta_0);
const imp$5fgen_7 = arg_485(eta_0);
return imp$5fgen_8(imp$5fgen_7);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_9 = arg_644(eta_0);
return arg_645(imp$5fgen_9)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_10 = arg_647(eta_0);
return imp$5fgen_10(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), (eta_0) => {Main_GameLoop_updateGameState(arg_2, eta_0);
return Main_GameLoop_drawGameState(arg_3, eta_0);}, Prelude_Num_div$5fIntegral$5f$5fInt((1000n % __esPrim_int_bound_63), arg_0))(ext_0);
}

function Main_Canvas_fillStyle(arg_0, ext_0){//src/Main.idr:18:3--20:12
 return Main_Canvas_prim$5f$5ffillStyle(arg_0, ext_0);
}

function Main_Canvas_fillRect(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Main.idr:25:3--27:11
 return Main_Canvas_prim$5f$5ffillRect(arg_0, arg_1, arg_2, arg_3, ext_0);
}

function Main_Canvas_fill(ext_0){//src/Main.idr:46:3--48:7
 return Main_Canvas_prim$5f$5ffill(ext_0);
}

function Main_GameLoop_drawGameState(arg_0, ext_0){//src/Main.idr:138:3--139:16
 const imp$5fgen_11 = Main_GameLoop_getGameState(ext_0);
 return arg_0(imp$5fgen_11)(ext_0);
}

function Main_GameLogic_drawBall(arg_0){//src/Main.idr:109:3--111:11
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_12;
   switch(arg_0.a1.h){
    case 0: {
     imp$5fgen_12 = (eta_0) => {Main_colorRect(0n, 0n, (800n % __esPrim_int_bound_63), (600n % __esPrim_int_bound_63), 'black', eta_0);
Main_colorRect(0n, (210n % __esPrim_int_bound_63), 10n, (100n % __esPrim_int_bound_63), 'white', eta_0);
return Main_colorCircle(arg_0.a1.a1, arg_0.a1.a2, 10n, 'white', eta_0);};
     break; }
    default:
     throw new Error('unhandled con case on src/Main.idr:86:15--86:19');
   }
   return imp$5fgen_12;
   break; }
  default:
   throw new Error('unhandled con case on src/Main.idr:110:21--110:26');
 }
}

function Main_Console_consoleLog(arg_0, arg_1, arg_2){//src/Main.idr:9:3--11:13
 switch(arg_1.h){
  case 0: {
   return arg_1.a2(undefined)((eta_0) => {return Main_Console_prim$5f$5fconsoleLog(arg_2, eta_0);});
   break; }
  default:
   throw new Error('unhandled con case on Prelude/IO.idr:35:3--35:32');
 }
}

function Main_colorRect(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0){//src/Main.idr:51:1--52:10
 Main_Canvas_fillStyle(arg_4, ext_0);
 return Main_Canvas_fillRect(arg_0, arg_1, arg_2, arg_3, ext_0);
}

function Main_colorCircle(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Main.idr:56:1--57:12
 Main_Canvas_fillStyle(arg_3, ext_0);
 Main_Canvas_beginPath(ext_0);
 Main_Canvas_arc(arg_0, arg_1, arg_2, 0.0, 6.283185307179586, ext_0);
 return Main_Canvas_fill(ext_0);
}

function Main_Canvas_beginPath(ext_0){//src/Main.idr:39:3--41:12
 return Main_Canvas_prim$5f$5fbeginPath(ext_0);
}

function Main_Canvas_arc(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0){//src/Main.idr:32:3--34:6
 return Main_Canvas_prim$5f$5farc(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0);
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


function Main__main(){
try{PrimIO_unsafePerformIO(undefined, (eta_0) => {return Main_main(eta_0);});}catch(e){if(e instanceof IdrisError){console.log('ERROR: ' + e.message)}else{throw e} }
}
