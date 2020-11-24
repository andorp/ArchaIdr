class IdrisError extends Error { }
function __prim_js2idris_array(x){if(x.length ===0){return {h:0}}else{return {h:1,a1:x[0],a2: __prim_js2idris_array(x.slice(1))}}}
function __prim_idris2js_array(x){const result = Array();while (x.h != 0) {result.push(x.a1); x = x.a2;}return result;}
const __esPrim_crashExp = (x=>{throw new IdrisError(x)});
const __esPrim_idrisworld = (Symbol('idrisworld'));
const __esPrim_int_bound_63 = (BigInt(2) ** BigInt(63) );

function Main_GameLoop_updateGameState(arg_0, ext_0){//src/Main.idr:78:3--79:18
 const imp$5fgen_0 = Main_GameLoop_getGameState(ext_0);
 return Main_GameLoop_setGameState(arg_0(imp$5fgen_0), ext_0);
}

function Main_Window_setInterval(arg_0, arg_1, arg_2, arg_3){//src/Main.idr:33:3--35:14
 switch(arg_1.h){
  case 0: {
   return arg_1.a2(undefined)((eta_0) => {return Main_Window_prim$5f$5fsetInterval(arg_2, arg_3, eta_0);});
   break; }
  default:
   throw new Error('unhandled con case on Prelude/IO.idr:35:3--35:32');
 }
}

function Main_GameLoop_setGameState(arg_0, ext_0){//src/Main.idr:69:3--70:15
 return Main_GameLoop_prim$5f$5fsetGameState(arg_0, ext_0);
}

const Main_Window_prim$5f$5fsetInterval = ((a,i)=>setInterval(a,Number(i)))


const Main_GameLoop_prim$5f$5fsetGameState = ((s)=>{gameState=s;})


const Main_GameLoop_prim$5f$5fgetGameState = (()=>{return gameState;})


const Main_Window_prim$5f$5ffillStyle = ((s)=>canvasContext.fillStyle=s)


const Main_Window_prim$5f$5ffillRect = ((x,y,w,h)=>canvasContext.fillRect(Number(x),Number(y),Number(w),Number(h)))


function Main_main(ext_0){//src/Main.idr:98:1--99:5
 return Main_GameLoop_gameLoop(30n, Main_GameLogic_initBall(), (eta_0) => {return Main_GameLogic_incBall(eta_0);}, (eta_0) => {return (eta_1) => {return Main_GameLogic_drawBall(eta_0, eta_1);};}, ext_0);
}

function Main_GameLogic_initBall(){//src/Main.idr:48:3--50:11
 return 1n;
}

function Main_GameLogic_incBall(arg_0){//src/Main.idr:52:3--54:10
 return ((arg_0 + 2n) % __esPrim_int_bound_63);
}

function Main_GameLoop_getGameState(ext_0){//src/Main.idr:75:3--76:15
 return Main_GameLoop_prim$5f$5fgetGameState(ext_0);
}

function Main_GameLoop_gameLoop(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Main.idr:88:3--90:11
 Main_GameLoop_setGameState(arg_1, ext_0);
 return Main_Window_setInterval(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_2 = arg_483(eta_0);
const imp$5fgen_1 = arg_485(eta_0);
return imp$5fgen_2(imp$5fgen_1);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_3 = arg_644(eta_0);
return arg_645(imp$5fgen_3)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_4 = arg_647(eta_0);
return imp$5fgen_4(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), (eta_0) => {Main_GameLoop_updateGameState(arg_2, eta_0);
return Main_GameLoop_drawGameState(arg_3, eta_0);}, Prelude_Num_div$5fIntegral$5f$5fInt((1000n % __esPrim_int_bound_63), arg_0))(ext_0);
}

function Main_Window_fillStyle(arg_0, arg_1, arg_2){//src/Main.idr:19:3--21:12
 switch(arg_1.h){
  case 0: {
   return arg_1.a2(undefined)((eta_0) => {return Main_Window_prim$5f$5ffillStyle(arg_2, eta_0);});
   break; }
  default:
   throw new Error('unhandled con case on Prelude/IO.idr:35:3--35:32');
 }
}

function Main_Window_fillRect(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5){//src/Main.idr:26:3--28:11
 switch(arg_1.h){
  case 0: {
   return arg_1.a2(undefined)((eta_0) => {return Main_Window_prim$5f$5ffillRect(arg_2, arg_3, arg_4, arg_5, eta_0);});
   break; }
  default:
   throw new Error('unhandled con case on Prelude/IO.idr:35:3--35:32');
 }
}

function Main_GameLoop_drawGameState(arg_0, ext_0){//src/Main.idr:83:3--84:16
 const imp$5fgen_5 = Main_GameLoop_getGameState(ext_0);
 return arg_0(imp$5fgen_5)(ext_0);
}

function Main_GameLogic_drawBall(arg_0, ext_0){//src/Main.idr:56:3--58:11
 Main_Window_fillStyle(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_7 = arg_483(eta_0);
const imp$5fgen_6 = arg_485(eta_0);
return imp$5fgen_7(imp$5fgen_6);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_8 = arg_644(eta_0);
return arg_645(imp$5fgen_8)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_9 = arg_647(eta_0);
return imp$5fgen_9(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), 'black')(ext_0);
 Main_Window_fillRect(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_11 = arg_483(eta_0);
const imp$5fgen_10 = arg_485(eta_0);
return imp$5fgen_11(imp$5fgen_10);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_12 = arg_644(eta_0);
return arg_645(imp$5fgen_12)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_13 = arg_647(eta_0);
return imp$5fgen_13(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), 0n, 0n, (800n % __esPrim_int_bound_63), (600n % __esPrim_int_bound_63))(ext_0);
 Main_Window_fillStyle(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_15 = arg_483(eta_0);
const imp$5fgen_14 = arg_485(eta_0);
return imp$5fgen_15(imp$5fgen_14);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_16 = arg_644(eta_0);
return arg_645(imp$5fgen_16)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_17 = arg_647(eta_0);
return imp$5fgen_17(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), 'red')(ext_0);
 return Main_Window_fillRect(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_19 = arg_483(eta_0);
const imp$5fgen_18 = arg_485(eta_0);
return imp$5fgen_19(imp$5fgen_18);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_20 = arg_644(eta_0);
return arg_645(imp$5fgen_20)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_21 = arg_647(eta_0);
return imp$5fgen_21(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), arg_0, (100n % __esPrim_int_bound_63), 5n, 5n)(ext_0);
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

function Prelude_Num_div$5fIntegral$5f$5fInt(arg_0, arg_1){//Prelude/Num.idr:111:1--122:8
 return Prelude_Num_case__div_440(arg_1, arg_0, Prelude_EqOrd_$3d$3d$5fEq$5f$5fInt(arg_1, (0n % __esPrim_int_bound_63)));
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
 const imp$5fgen_22 = arg_3(ext_0);
 return arg_2(imp$5fgen_22);
}


function Main__main(){
try{PrimIO_unsafePerformIO(undefined, (eta_0) => {return Main_main(eta_0);});}catch(e){if(e instanceof IdrisError){console.log('ERROR: ' + e.message)}else{throw e} }
}
