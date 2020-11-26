class IdrisError extends Error { }
function __prim_js2idris_array(x){if(x.length ===0){return {h:0}}else{return {h:1,a1:x[0],a2: __prim_js2idris_array(x.slice(1))}}}
function __prim_idris2js_array(x){const result = Array();while (x.h != 0) {result.push(x.a1); x = x.a2;}return result;}
const __esPrim_crashExp = (x=>{throw new IdrisError(x)});
const __esPrim_idrisworld = (Symbol('idrisworld'));
const __esPrim_int_bound_63 = (BigInt(2) ** BigInt(63) );

function Main_GameLoop_updateGameState(arg_0, ext_0){//src/Main.idr:31:3--32:18
 const imp$5fgen_0 = Main_GameLoop_getGameState(ext_0);
 return Main_GameLoop_setGameState(arg_0(imp$5fgen_0), ext_0);
}

function Main_GameLoop_setGameState(arg_0, ext_0){//src/Main.idr:22:3--23:15
 return Main_GameLoop_prim$5f$5fsetGameState(arg_0, ext_0);
}

function Main_GameLoop_registerHandler(arg_0, arg_1, ext_0){//src/Main.idr:50:3--52:18
 Console_consoleLog(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_2 = arg_483(eta_0);
const imp$5fgen_1 = arg_485(eta_0);
return imp$5fgen_2(imp$5fgen_1);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_3 = arg_644(eta_0);
return arg_645(imp$5fgen_3)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_4 = arg_647(eta_0);
return imp$5fgen_4(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), 'registerHandler')(ext_0);
 return Canvas_addEventListener(arg_0, (eta_0) => {const imp$5fgen_6 = Canvas_currentEvent(arg_0, eta_0);
const imp$5fgen_5 = arg_1(imp$5fgen_6)(eta_0);
return Main_GameLoop_updateGameState(imp$5fgen_5, eta_0);}, ext_0);
}

const Main_GameLoop_prim$5f$5fsetGameState = ((s)=>{gameState=s;})


const Main_GameLoop_prim$5f$5fgetGameState = (()=>{return gameState;})


function Main_main(ext_0){//src/Main.idr:60:1--61:5
 Console_consoleLog(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_8 = arg_483(eta_0);
const imp$5fgen_7 = arg_485(eta_0);
return imp$5fgen_8(imp$5fgen_7);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_9 = arg_644(eta_0);
return arg_645(imp$5fgen_9)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_10 = arg_647(eta_0);
return imp$5fgen_10(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), 'Starting...')(ext_0);
 const imp$5fgen_20 = Canvas_getBoundingClientRect(ext_0);
 const imp$5fgen_19 = Canvas_documentElement(ext_0);
 const imp$5fgen_18 = Canvas_left(imp$5fgen_20, ext_0);
 const imp$5fgen_17 = Canvas_scrollLeft(imp$5fgen_19, ext_0);
 Console_consoleLog(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_12 = arg_483(eta_0);
const imp$5fgen_11 = arg_485(eta_0);
return imp$5fgen_12(imp$5fgen_11);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_13 = arg_644(eta_0);
return arg_645(imp$5fgen_13)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_14 = arg_647(eta_0);
return imp$5fgen_14(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), Prelude_Show_show$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(undefined, undefined, ({h:0, a1: ({h:0, a1: (x) => {return Prelude_Show_show$5fShow$5f$5fString(x);}, a2: (d) => {return (x) => {return Prelude_Show_showPrec$5fShow$5f$5fString(d, x);};}}), a2: ({h:0, a1: (x) => {return Prelude_Show_show$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(undefined, undefined, ({h:0, a1: ({h:0, a1: (x_0) => {return Prelude_Show_show$5fShow$5f$5fInt(x_0);}, a2: (d) => {return (x_0) => {return Prelude_Show_showPrec$5fShow$5f$5fInt(d, x_0);};}}), a2: ({h:0, a1: (x_0) => {return Prelude_Show_show$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(undefined, undefined, ({h:0, a1: ({h:0, a1: (x_1) => {return Prelude_Show_show$5fShow$5f$5fString(x_1);}, a2: (d) => {return (x_1) => {return Prelude_Show_showPrec$5fShow$5f$5fString(d, x_1);};}}), a2: ({h:0, a1: (x_1) => {return Prelude_Show_show$5fShow$5f$5fInt(x_1);}, a2: (d) => {return (x_1) => {return Prelude_Show_showPrec$5fShow$5f$5fInt(d, x_1);};}})}), x_0);}, a2: (d) => {return (x_0) => {return Prelude_Show_showPrec$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(undefined, undefined, ({h:0, a1: ({h:0, a1: (x_1) => {return Prelude_Show_show$5fShow$5f$5fString(x_1);}, a2: (d_0) => {return (x_1) => {return Prelude_Show_showPrec$5fShow$5f$5fString(d_0, x_1);};}}), a2: ({h:0, a1: (x_1) => {return Prelude_Show_show$5fShow$5f$5fInt(x_1);}, a2: (d_0) => {return (x_1) => {return Prelude_Show_showPrec$5fShow$5f$5fInt(d_0, x_1);};}})}), d, x_0);};}})}), x);}, a2: (d) => {return (x) => {return Prelude_Show_showPrec$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(undefined, undefined, ({h:0, a1: ({h:0, a1: (x_0) => {return Prelude_Show_show$5fShow$5f$5fInt(x_0);}, a2: (d_0) => {return (x_0) => {return Prelude_Show_showPrec$5fShow$5f$5fInt(d_0, x_0);};}}), a2: ({h:0, a1: (x_0) => {return Prelude_Show_show$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(undefined, undefined, ({h:0, a1: ({h:0, a1: (x_1) => {return Prelude_Show_show$5fShow$5f$5fString(x_1);}, a2: (d_0) => {return (x_1) => {return Prelude_Show_showPrec$5fShow$5f$5fString(d_0, x_1);};}}), a2: ({h:0, a1: (x_1) => {return Prelude_Show_show$5fShow$5f$5fInt(x_1);}, a2: (d_0) => {return (x_1) => {return Prelude_Show_showPrec$5fShow$5f$5fInt(d_0, x_1);};}})}), x_0);}, a2: (d_0) => {return (x_0) => {return Prelude_Show_showPrec$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(undefined, undefined, ({h:0, a1: ({h:0, a1: (x_1) => {return Prelude_Show_show$5fShow$5f$5fString(x_1);}, a2: (d_1) => {return (x_1) => {return Prelude_Show_showPrec$5fShow$5f$5fString(d_1, x_1);};}}), a2: ({h:0, a1: (x_1) => {return Prelude_Show_show$5fShow$5f$5fInt(x_1);}, a2: (d_1) => {return (x_1) => {return Prelude_Show_showPrec$5fShow$5f$5fInt(d_1, x_1);};}})}), d_0, x_0);};}})}), d, x);};}})}), ({h:0, a1: 'left', a2: ({h:0, a1: imp$5fgen_18, a2: ({h:0, a1: 'right', a2: imp$5fgen_17})})})))(ext_0);
 Main_GameLoop_registerHandler('mousemove', (e) => {return (eta_0) => {const imp$5fgen_16 = Main_calculateMousePos(e, eta_0);
let imp$5fgen_15;
switch(imp$5fgen_16.h){
 case 0: {
  imp$5fgen_15 = (eta_1) => {return GameLogic_setPaddle1y(imp$5fgen_16.a2, eta_1);};
  break; }
 default:
  throw new Error('unhandled con case on src/Main.idr:8:33--8:43');
}
return imp$5fgen_15;};}, ext_0);
 return Main_GameLoop_gameLoop(30n, (eta_0) => {return GameLogic_initBall(eta_0);}, (eta_0) => {return GameLogic_moveBall(eta_0);}, (eta_0) => {return GameLogic_drawBall(eta_0);}, ext_0);
}

function Main_GameLoop_getGameState(ext_0){//src/Main.idr:28:3--29:15
 return Main_GameLoop_prim$5f$5fgetGameState(ext_0);
}

function Main_GameLoop_gameLoop(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Main.idr:41:3--43:11
 const imp$5fgen_21 = arg_1(ext_0);
 Main_GameLoop_setGameState(imp$5fgen_21, ext_0);
 return Window_setInterval(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_23 = arg_483(eta_0);
const imp$5fgen_22 = arg_485(eta_0);
return imp$5fgen_23(imp$5fgen_22);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_24 = arg_644(eta_0);
return arg_645(imp$5fgen_24)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_25 = arg_647(eta_0);
return imp$5fgen_25(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), (eta_0) => {Main_GameLoop_updateGameState(arg_2, eta_0);
return Main_GameLoop_drawGameState(arg_3, eta_0);}, Prelude_Num_div$5fIntegral$5f$5fInt((1000n % __esPrim_int_bound_63), arg_0))(ext_0);
}

function Main_GameLoop_drawGameState(arg_0, ext_0){//src/Main.idr:36:3--37:16
 const imp$5fgen_26 = Main_GameLoop_getGameState(ext_0);
 return arg_0(imp$5fgen_26)(ext_0);
}

function Main_calculateMousePos(arg_0, ext_0){//src/Main.idr:8:1--9:18
 const imp$5fgen_34 = Canvas_getBoundingClientRect(ext_0);
 const imp$5fgen_33 = Canvas_documentElement(ext_0);
 const imp$5fgen_32 = Canvas_clientX(arg_0, ext_0);
 const imp$5fgen_31 = Canvas_left(imp$5fgen_34, ext_0);
 const imp$5fgen_30 = Canvas_scrollLeft(imp$5fgen_33, ext_0);
 const imp$5fgen_29 = Canvas_clientY(arg_0, ext_0);
 const imp$5fgen_28 = Canvas_top(imp$5fgen_34, ext_0);
 const imp$5fgen_27 = Canvas_scrollTop(imp$5fgen_33, ext_0);
 return ({h:0, a1: Prelude_Num_$2d$5fNeg$5f$5fInt(Prelude_Num_$2d$5fNeg$5f$5fInt(imp$5fgen_32, imp$5fgen_31), imp$5fgen_30), a2: Prelude_Num_$2d$5fNeg$5f$5fInt(Prelude_Num_$2d$5fNeg$5f$5fInt(imp$5fgen_29, imp$5fgen_28), imp$5fgen_27)});
}

function GameLogic_case__case$20block$20in$20computerMovement$2cpy$27_837(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9){//src/GameLogic.idr:75:16--76:18
 switch(arg_9){
  case 0n: {
   return Prelude_Num_$2d$5fNeg$5f$5fInt(arg_1, 6n);
   break; }
  case 1n: {
   return arg_1;
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_case__computerMovement$2cpy$27_782(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9){//src/GameLogic.idr:74:16--78:11
 switch(arg_9){
  case 0n: {
   return ((arg_1 + 6n) % __esPrim_int_bound_63);
   break; }
  case 1n: {
   return GameLogic_case__case$20block$20in$20computerMovement$2cpy$27_837(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, Prelude_EqOrd_$3e$5fOrd$5f$5fInt(GameLogic_n__2069_762_cp(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8), ((arg_4 + Prelude_Num_div$5fIntegral$5f$5fInt(arg_0, 3n)) % __esPrim_int_bound_63)));
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_case__ifte_678(arg_0, arg_1, arg_2, arg_3, arg_4){//src/GameLogic.idr:55:16--55:40
 switch(arg_4){
  case 0n: {
   return arg_2(arg_0);
   break; }
  case 1n: {
   return arg_1(arg_0);
   break; }
  default:
   throw new Error('unhandled const case on src/GameLogic.idr:54:18--54:22');
 }
}

function GameLogic_case__ift_647(arg_0, arg_1, arg_2, arg_3){//src/GameLogic.idr:52:13--52:35
 switch(arg_3){
  case 0n: {
   return arg_1(arg_0);
   break; }
  case 1n: {
   return arg_0;
   break; }
  default:
   throw new Error('unhandled const case on src/GameLogic.idr:51:17--51:21');
 }
}

function GameLogic_n__2069_763_py$27(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8){//src/GameLogic.idr:73:5--74:8
 const imp$5fgen_35 = ({h:0, a1: arg_5, a2: arg_4});
 return GameLogic_case__computerMovement$2cpy$27_782(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, imp$5fgen_35, arg_7, arg_8, Prelude_EqOrd_$3c$5fOrd$5f$5fInt(GameLogic_n__2069_762_cp(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, imp$5fgen_35, arg_7, arg_8), Prelude_Num_$2d$5fNeg$5f$5fInt(arg_4, Prelude_Num_div$5fIntegral$5f$5fInt(arg_0, 3n))));
}

function GameLogic_n__2069_762_cp(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8){//src/GameLogic.idr:71:5--72:7
 return ((arg_1 + Prelude_Num_div$5fIntegral$5f$5fInt(arg_0, 2n)) % __esPrim_int_bound_63);
}

function GameLogic_setPaddle1y(arg_0, arg_1){//src/GameLogic.idr:95:1--97:12
 switch(arg_1.h){
  case 0: {
   let imp$5fgen_36;
   switch(arg_1.a5.h){
    case 0: {
     imp$5fgen_36 = ({h:0, a1: arg_1.a1, a2: arg_1.a2, a3: arg_1.a3, a4: arg_1.a4, a5: ({h:0, a1: Prelude_Num_$2d$5fNeg$5f$5fInt(arg_0, Prelude_Num_div$5fIntegral$5f$5fInt(arg_1.a5.a2, 2n)), a2: arg_1.a5.a2}), a6: arg_1.a6});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:28:13--28:19');
   }
   return imp$5fgen_36;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:96:22--96:27');
 }
}

function GameLogic_rollBall(arg_0){//src/GameLogic.idr:57:1--58:9
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_37;
   switch(arg_0.a3.h){
    case 0: {
     let imp$5fgen_38;
     switch(arg_0.a4.h){
      case 0: {
       imp$5fgen_38 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: ({h:0, a1: ((arg_0.a3.a1 + arg_0.a4.a1) % __esPrim_int_bound_63), a2: ((arg_0.a3.a2 + arg_0.a4.a2) % __esPrim_int_bound_63)}), a4: ({h:0, a1: arg_0.a4.a1, a2: arg_0.a4.a2}), a5: arg_0.a5, a6: arg_0.a6});
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:27:14--27:22');
     }
     imp$5fgen_37 = imp$5fgen_38;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:10--26:14');
   }
   return imp$5fgen_37;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:57:12--57:17');
 }
}

function GameLogic_moveBall(ext_0){//src/GameLogic.idr:87:1--90:9
 return GameLogic_bounceBall(GameLogic_computerMovement(GameLogic_rollBall(ext_0)));
}

function GameLogic_initBall(ext_0){//src/GameLogic.idr:31:1--33:9
 const imp$5fgen_40 = Canvas_width(ext_0);
 const imp$5fgen_39 = Canvas_height(ext_0);
 return ({h:0, a1: imp$5fgen_40, a2: imp$5fgen_39, a3: ({h:0, a1: 0n, a2: 0n}), a4: ({h:0, a1: 5n, a2: 5n}), a5: ({h:0, a1: (250n % __esPrim_int_bound_63), a2: (100n % __esPrim_int_bound_63)}), a6: ({h:0, a1: (250n % __esPrim_int_bound_63), a2: (100n % __esPrim_int_bound_63)})});
}

function GameLogic_ifte(arg_0, arg_1, arg_2, arg_3){//src/GameLogic.idr:54:1--55:5
 return GameLogic_case__ifte_678(arg_3, arg_2, arg_1, arg_0, arg_0(arg_3));
}

function GameLogic_ift(arg_0, arg_1, arg_2){//src/GameLogic.idr:51:1--52:4
 return GameLogic_case__ift_647(arg_2, arg_1, arg_0, arg_0(arg_2));
}

function GameLogic_drawBall(arg_0){//src/GameLogic.idr:121:1--123:9
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_41;
   switch(arg_0.a3.h){
    case 0: {
     let imp$5fgen_42;
     switch(arg_0.a5.h){
      case 0: {
       let imp$5fgen_43;
       switch(arg_0.a6.h){
        case 0: {
         imp$5fgen_43 = (eta_0) => {GameLogic_colorRect(0n, 0n, arg_0.a1, arg_0.a2, 'black', eta_0);
GameLogic_colorRect(0n, arg_0.a5.a1, GameLogic_PADDLE$5fTHICKNESS(), arg_0.a5.a2, 'white', eta_0);
GameLogic_colorRect(Prelude_Num_$2d$5fNeg$5f$5fInt(arg_0.a1, GameLogic_PADDLE$5fTHICKNESS()), arg_0.a6.a1, GameLogic_PADDLE$5fTHICKNESS(), arg_0.a6.a2, 'white', eta_0);
return GameLogic_colorCircle(arg_0.a3.a1, arg_0.a3.a2, 10n, 'white', eta_0);};
         break; }
        default:
         throw new Error('unhandled con case on src/GameLogic.idr:29:13--29:19');
       }
       imp$5fgen_42 = imp$5fgen_43;
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:28:13--28:19');
     }
     imp$5fgen_41 = imp$5fgen_42;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:10--26:14');
   }
   return imp$5fgen_41;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:122:12--122:17');
 }
}

function GameLogic_computerMovement(arg_0){//src/GameLogic.idr:67:1--68:17
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_44;
   switch(arg_0.a3.h){
    case 0: {
     let imp$5fgen_45;
     switch(arg_0.a6.h){
      case 0: {
       imp$5fgen_45 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: arg_0.a3, a4: arg_0.a4, a5: arg_0.a5, a6: ({h:0, a1: GameLogic_n__2069_763_py$27(arg_0.a6.a2, arg_0.a6.a1, arg_0.a5, arg_0.a4, arg_0.a3.a2, arg_0.a3.a1, arg_0.a3, arg_0.a2, arg_0.a1), a2: arg_0.a6.a2})});
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:29:13--29:19');
     }
     imp$5fgen_44 = imp$5fgen_45;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:10--26:14');
   }
   return imp$5fgen_44;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:67:20--67:25');
 }
}

function GameLogic_colorRect(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0){//src/GameLogic.idr:108:1--109:10
 Canvas_fillStyle(arg_4, ext_0);
 return Canvas_fillRect(arg_0, arg_1, arg_2, arg_3, ext_0);
}

function GameLogic_colorCircle(arg_0, arg_1, arg_2, arg_3, ext_0){//src/GameLogic.idr:113:1--114:12
 Canvas_fillStyle(arg_3, ext_0);
 Canvas_beginPath(ext_0);
 Canvas_arc(arg_0, arg_1, arg_2, 0.0, 6.283185307179586, ext_0);
 return Canvas_fill(ext_0);
}

function GameLogic_changeYDirection(arg_0){//src/GameLogic.idr:48:1--49:17
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_46;
   switch(arg_0.a4.h){
    case 0: {
     imp$5fgen_46 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: arg_0.a3, a4: ({h:0, a1: arg_0.a4.a1, a2: Prelude_Num_negate$5fNeg$5f$5fInt(arg_0.a4.a2)}), a5: arg_0.a5, a6: arg_0.a6});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:27:14--27:22');
   }
   return imp$5fgen_46;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:48:20--48:25');
 }
}

function GameLogic_changeXDirection(arg_0){//src/GameLogic.idr:45:1--46:17
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_47;
   switch(arg_0.a4.h){
    case 0: {
     imp$5fgen_47 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: arg_0.a3, a4: ({h:0, a1: Prelude_Num_negate$5fNeg$5f$5fInt(arg_0.a4.a1), a2: arg_0.a4.a2}), a5: arg_0.a5, a6: arg_0.a6});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:27:14--27:22');
   }
   return imp$5fgen_47;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:45:20--45:25');
 }
}

function GameLogic_bounceBall(ext_0){//src/GameLogic.idr:78:1--79:11
 return GameLogic_ift((lamc_0) => {switch(lamc_0.h){
 case 0: {
  let imp$5fgen_48;
  switch(lamc_0.a3.h){
   case 0: {
    imp$5fgen_48 = Prelude_EqOrd_$3e$5fOrd$5f$5fInt(lamc_0.a3.a2, lamc_0.a2);
    break; }
   default:
    throw new Error('unhandled con case on src/GameLogic.idr:26:10--26:14');
  }
  return imp$5fgen_48;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:51:8--51:13');
}}, (eta_0) => {return GameLogic_changeYDirection(eta_0);}, GameLogic_ift((lamc_0) => {switch(lamc_0.h){
 case 0: {
  let imp$5fgen_49;
  switch(lamc_0.a3.h){
   case 0: {
    imp$5fgen_49 = Prelude_EqOrd_$3c$5fOrd$5f$5fInt(lamc_0.a3.a2, (0n % __esPrim_int_bound_63));
    break; }
   default:
    throw new Error('unhandled con case on src/GameLogic.idr:26:10--26:14');
  }
  return imp$5fgen_49;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:51:8--51:13');
}}, (eta_0) => {return GameLogic_changeYDirection(eta_0);}, GameLogic_ift((lamc_0) => {switch(lamc_0.h){
 case 0: {
  let imp$5fgen_50;
  switch(lamc_0.a3.h){
   case 0: {
    imp$5fgen_50 = Prelude_EqOrd_$3e$5fOrd$5f$5fInt(lamc_0.a3.a1, lamc_0.a1);
    break; }
   default:
    throw new Error('unhandled con case on src/GameLogic.idr:26:10--26:14');
  }
  return imp$5fgen_50;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:51:8--51:13');
}}, (eta_0) => {return GameLogic_ifte((eta_1) => {return GameLogic_ballInPaddle2(eta_1);}, (eta_1) => {return GameLogic_changeXDirection(eta_1);}, (eta_1) => {return GameLogic_ballReset(eta_1);}, eta_0);}, GameLogic_ift((lamc_0) => {switch(lamc_0.h){
 case 0: {
  let imp$5fgen_51;
  switch(lamc_0.a3.h){
   case 0: {
    imp$5fgen_51 = Prelude_EqOrd_$3c$5fOrd$5f$5fInt(lamc_0.a3.a1, (0n % __esPrim_int_bound_63));
    break; }
   default:
    throw new Error('unhandled con case on src/GameLogic.idr:26:10--26:14');
  }
  return imp$5fgen_51;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:51:8--51:13');
}}, (eta_0) => {return GameLogic_ifte((eta_1) => {return GameLogic_ballInPaddle1(eta_1);}, (eta_1) => {return GameLogic_changeXDirection(eta_1);}, (eta_1) => {return GameLogic_ballReset(eta_1);}, eta_0);}, ext_0))));
}

function GameLogic_ballReset(arg_0){//src/GameLogic.idr:41:1--42:10
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_52;
   switch(arg_0.a4.h){
    case 0: {
     imp$5fgen_52 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: ({h:0, a1: Prelude_Num_div$5fIntegral$5f$5fInt(arg_0.a1, 2n), a2: Prelude_Num_div$5fIntegral$5f$5fInt(arg_0.a2, 2n)}), a4: ({h:0, a1: Prelude_Num_negate$5fNeg$5f$5fInt(arg_0.a4.a1), a2: arg_0.a4.a2}), a5: arg_0.a5, a6: arg_0.a6});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:27:14--27:22');
   }
   return imp$5fgen_52;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:41:13--41:18');
 }
}

function GameLogic_ballInPaddle2(arg_0){//src/GameLogic.idr:64:1--65:14
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_53;
   switch(arg_0.a3.h){
    case 0: {
     let imp$5fgen_54;
     switch(arg_0.a6.h){
      case 0: {
       imp$5fgen_54 = Prelude_Basics_$26$26(Prelude_EqOrd_$3c$5fOrd$5f$5fInt(arg_0.a6.a1, arg_0.a3.a2), (()=>Prelude_EqOrd_$3c$5fOrd$5f$5fInt(arg_0.a3.a2, ((arg_0.a6.a1 + arg_0.a6.a2) % __esPrim_int_bound_63))));
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:29:13--29:19');
     }
     imp$5fgen_53 = imp$5fgen_54;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:10--26:14');
   }
   return imp$5fgen_53;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:64:17--64:22');
 }
}

function GameLogic_ballInPaddle1(arg_0){//src/GameLogic.idr:61:1--62:14
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_55;
   switch(arg_0.a3.h){
    case 0: {
     let imp$5fgen_56;
     switch(arg_0.a5.h){
      case 0: {
       imp$5fgen_56 = Prelude_Basics_$26$26(Prelude_EqOrd_$3c$5fOrd$5f$5fInt(arg_0.a5.a1, arg_0.a3.a2), (()=>Prelude_EqOrd_$3c$5fOrd$5f$5fInt(arg_0.a3.a2, ((arg_0.a5.a1 + arg_0.a5.a2) % __esPrim_int_bound_63))));
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:28:13--28:19');
     }
     imp$5fgen_55 = imp$5fgen_56;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:10--26:14');
   }
   return imp$5fgen_55;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:61:17--61:22');
 }
}

function GameLogic_PADDLE$5fTHICKNESS(){//src/GameLogic.idr:105:1--106:17
 return 10n;
}

function Canvas_width(ext_0){//src/Canvas.idr:41:1--43:6
 return Canvas_prim$5f$5fwidth(ext_0);
}

function Canvas_top(arg_0, ext_0){//src/Canvas.idr:105:1--107:4
 return Canvas_prim$5f$5ftop(arg_0, ext_0);
}

function Canvas_scrollTop(arg_0, ext_0){//src/Canvas.idr:129:1--131:10
 return Canvas_prim$5f$5fscrollTop(arg_0, ext_0);
}

function Canvas_scrollLeft(arg_0, ext_0){//src/Canvas.idr:122:1--124:11
 return Canvas_prim$5f$5fscrollLeft(arg_0, ext_0);
}

const Canvas_prim$5f$5fwidth = ((()=>{return BigInt(canvas.width);}))


const Canvas_prim$5f$5ftop = (((d)=>{return BigInt(d.top);}))


const Canvas_prim$5f$5fscrollTop = (((e)=>{return BigInt(e.scrollTop);}))


const Canvas_prim$5f$5fscrollLeft = (((e)=>{return BigInt(e.scrollLeft);}))


const Canvas_prim$5f$5fleft = (((d)=>{return BigInt(d.left);}))


const Canvas_prim$5f$5fheight = ((()=>{return BigInt(canvas.height);}))


const Canvas_prim$5f$5fgetBoundingClientRect = ((()=>{return canvas.getBoundingClientRect();}))


const Canvas_prim$5f$5ffillStyle = ((s)=>canvasContext.fillStyle=s)


const Canvas_prim$5f$5ffillRect = ((x,y,w,h)=>canvasContext.fillRect(Number(x),Number(y),Number(w),Number(h)))


const Canvas_prim$5f$5ffill = (()=>canvasContext.fill())


const Canvas_prim$5f$5fdocumentElement = ((()=>{return document.documentElement;}))


const Canvas_prim$5f$5fcurrentEvent = (((e)=>{return events[e];}))


const Canvas_prim$5f$5fclientY = (((e)=>{return BigInt(e.clientY);}))


const Canvas_prim$5f$5fclientX = (((e)=>{return BigInt(e.clientX);}))


const Canvas_prim$5f$5fbeginPath = (()=>canvasContext.beginPath())


const Canvas_prim$5f$5farc = ((x,y,r,s,e,b)=>canvasContext.arc(Number(x),Number(y),Number(r),Number(s),Number(e),true))


const Canvas_prim$5f$5faddEventListener = (((e,l)=>{canvas.addEventListener(e,function(evt){events[e]=evt;l();events[e]=undefined;});}))


function Canvas_left(arg_0, ext_0){//src/Canvas.idr:98:1--100:5
 return Canvas_prim$5f$5fleft(arg_0, ext_0);
}

function Canvas_height(ext_0){//src/Canvas.idr:48:1--50:7
 return Canvas_prim$5f$5fheight(ext_0);
}

function Canvas_getBoundingClientRect(ext_0){//src/Canvas.idr:91:1--93:22
 return Canvas_prim$5f$5fgetBoundingClientRect(ext_0);
}

function Canvas_fillStyle(arg_0, ext_0){//src/Canvas.idr:6:1--8:10
 return Canvas_prim$5f$5ffillStyle(arg_0, ext_0);
}

function Canvas_fillRect(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Canvas.idr:13:1--15:9
 return Canvas_prim$5f$5ffillRect(arg_0, arg_1, arg_2, arg_3, ext_0);
}

function Canvas_fill(ext_0){//src/Canvas.idr:34:1--36:5
 return Canvas_prim$5f$5ffill(ext_0);
}

function Canvas_documentElement(ext_0){//src/Canvas.idr:115:1--117:16
 return Canvas_prim$5f$5fdocumentElement(ext_0);
}

function Canvas_currentEvent(arg_0, ext_0){//src/Canvas.idr:60:1--62:13
 return Canvas_prim$5f$5fcurrentEvent(arg_0, ext_0);
}

function Canvas_clientY(arg_0, ext_0){//src/Canvas.idr:81:1--83:8
 return Canvas_prim$5f$5fclientY(arg_0, ext_0);
}

function Canvas_clientX(arg_0, ext_0){//src/Canvas.idr:74:1--76:8
 return Canvas_prim$5f$5fclientX(arg_0, ext_0);
}

function Canvas_beginPath(ext_0){//src/Canvas.idr:27:1--29:10
 return Canvas_prim$5f$5fbeginPath(ext_0);
}

function Canvas_arc(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0){//src/Canvas.idr:20:1--22:4
 return Canvas_prim$5f$5farc(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0);
}

function Canvas_addEventListener(arg_0, arg_1, ext_0){//src/Canvas.idr:67:1--69:17
 return Canvas_prim$5f$5faddEventListener(arg_0, arg_1, ext_0);
}

function Prelude_Basics_not(arg_0){//Prelude/Basics.idr:92:1--95:4
 switch(arg_0){
  case 0n: {
   return 1n;
   break; }
  case 1n: {
   return 0n;
   break; }
  default:
   throw new Error('unhandled const case on Prelude/Basics.idr:94:14--94:18');
 }
}

function Prelude_Basics_$26$26(arg_0, arg_1){//Prelude/Basics.idr:98:1--101:2
 switch(arg_0){
  case 0n: {
   return arg_1();
   break; }
  case 1n: {
   return 1n;
   break; }
  default:
   throw new Error('unhandled const case on Prelude/Basics.idr:100:15--100:19');
 }
}

function Builtin_snd(arg_0, arg_1, arg_2){//Builtin.idr:62:1--65:4
 switch(arg_2.h){
  case 0: {
   return arg_2.a2;
   break; }
  default:
   throw new Error('unhandled con case on Builtin.idr:64:26--64:32');
 }
}

function Builtin_idris$5fcrash(arg_0, ext_0){//Builtin.idr:175:1--177:12
 return __esPrim_crashExp(ext_0);
}

function Builtin_fst(arg_0, arg_1, arg_2){//Builtin.idr:57:1--60:4
 switch(arg_2.h){
  case 0: {
   return arg_2.a1;
   break; }
  default:
   throw new Error('unhandled con case on Builtin.idr:59:26--59:32');
 }
}

function Prelude_Types_case__unpack$2cunpack$27_4057(arg_0, arg_1, arg_2, arg_3, arg_4){//Prelude/Types.idr:477:11--479:100
 switch(arg_4){
  case 0n: {
   return arg_1;
   break; }
  case 1n: {
   return Prelude_Types_n__3950_4045_unpack$27(arg_0, Prelude_Num_$2d$5fNeg$5f$5fInt(arg_3, 1n), arg_2, ({h:1, a1: (arg_2.charAt(Number(arg_3))), a2: arg_1}));
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function Prelude_Types_n__3950_4045_unpack$27(arg_0, arg_1, arg_2, arg_3){//Prelude/Types.idr:475:5--476:12
 return Prelude_Types_case__unpack$2cunpack$27_4057(arg_0, arg_3, arg_2, arg_1, Prelude_EqOrd_$3c$5fOrd$5f$5fInt(arg_1, (0n % __esPrim_int_bound_63)));
}

function Prelude_Types_fromInteger$5fNum$5f$5fNat(arg_0){//Prelude/Types.idr:57:1--64:7
 return arg_0;
}

function Prelude_Types_compare$5fOrd$5f$5fNat(arg_0, arg_1){//Prelude/Types.idr:70:1--77:7
 switch(arg_0){
  case 0n: {
   let imp$5fgen_57;
   switch(arg_1){
    case 0n: {
     imp$5fgen_57 = 1n;
     break; }
    default:
     imp$5fgen_57 = 0n;
   }
   return imp$5fgen_57;
   break; }
  default:
   const imp$5fgen_60 = (arg_0 - 1n);
   let imp$5fgen_58;
   switch(arg_1){
    case 0n: {
     imp$5fgen_58 = 2n;
     break; }
    default:
     const imp$5fgen_59 = (arg_1 - 1n);
     imp$5fgen_58 = Prelude_Types_compare$5fOrd$5f$5fNat(imp$5fgen_60, imp$5fgen_59);
   }
   return imp$5fgen_58;
 }
}

function Prelude_Types_unpack(arg_0){//Prelude/Types.idr:466:1--473:7
 return Prelude_Types_n__3950_4045_unpack$27(arg_0, Prelude_Num_$2d$5fNeg$5f$5fInt((Prelude_Types_Strings_length(arg_0) % __esPrim_int_bound_63), 1n), arg_0, ({h:0}));
}

function Prelude_Types_strCons(ext_0, ext_1){//Prelude/Types.idr:437:1--447:8
 return (ext_0 + ext_1);
}

function Prelude_Types_Strings_length(arg_0){//Prelude/Types.idr:397:3--407:9
 return Prelude_Types_fromInteger$5fNum$5f$5fNat(BigInt(arg_0.length));
}

function Prelude_Types_isDigit(arg_0){//Prelude/Types.idr:508:1--511:8
 return Prelude_Basics_$26$26(Prelude_EqOrd_$3e$3d$5fOrd$5f$5fChar(arg_0, '0'), (()=>Prelude_EqOrd_$3c$3d$5fOrd$5f$5fChar(arg_0, '9')));
}

function Prelude_Types_Strings_$2b$2b(arg_0, arg_1){//Prelude/Types.idr:393:3--395:4
 return (arg_0 + arg_1);
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

function Prelude_Num_$2d$5fNeg$5f$5fInt(ext_0, ext_1){//Prelude/Num.idr:102:1--107:7
 return ((ext_0 - ext_1) % __esPrim_int_bound_63);
}

function Prelude_EqOrd_case__case$20block$20in$20compare_1301(arg_0, arg_1, arg_2){//Prelude/EqOrd.idr:139:39--139:64
 switch(arg_2){
  case 0n: {
   return 1n;
   break; }
  case 1n: {
   return 2n;
   break; }
  default:
   throw new Error('unhandled const case on Prelude/EqOrd.idr:16:22--16:26');
 }
}

function Prelude_EqOrd_case__compare_1284(arg_0, arg_1, arg_2){//Prelude/EqOrd.idr:139:17--141:4
 switch(arg_2){
  case 0n: {
   return 0n;
   break; }
  case 1n: {
   return Prelude_EqOrd_case__case$20block$20in$20compare_1301(arg_0, arg_1, Prelude_EqOrd_$3d$3d$5fEq$5f$5fInteger(arg_1, arg_0));
   break; }
  default:
   throw new Error('unhandled const case on Prelude/EqOrd.idr:91:21--91:25');
 }
}

function Prelude_EqOrd_compare$5fOrd$5f$5fInteger(arg_0, arg_1){//Prelude/EqOrd.idr:137:1--146:7
 return Prelude_EqOrd_case__compare_1284(arg_1, arg_0, Prelude_EqOrd_$3c$5fOrd$5f$5fInteger(arg_0, arg_1));
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

function Prelude_EqOrd_$3e$5fOrd$5f$5fChar(arg_0, arg_1){//Prelude/EqOrd.idr:200:1--209:7
 switch(((arg_0 > arg_1) ? BigInt(1) : BigInt(0))){
  case 0n: {
   return 1n;
   break; }
  default:
   return 0n;
 }
}

function Prelude_EqOrd_$3e$3d$5fOrd$5f$5fChar(arg_0, arg_1){//Prelude/EqOrd.idr:200:1--209:7
 switch(((arg_0 >= arg_1) ? BigInt(1) : BigInt(0))){
  case 0n: {
   return 1n;
   break; }
  default:
   return 0n;
 }
}

function Prelude_EqOrd_$3d$3d$5fEq$5f$5fOrdering(arg_0, arg_1){//Prelude/EqOrd.idr:79:1--86:75
 switch(arg_0){
  case 0n: {
   let imp$5fgen_61;
   switch(arg_1){
    case 0n: {
     imp$5fgen_61 = 0n;
     break; }
    default:
     imp$5fgen_61 = 1n;
   }
   return imp$5fgen_61;
   break; }
  case 1n: {
   let imp$5fgen_62;
   switch(arg_1){
    case 1n: {
     imp$5fgen_62 = 0n;
     break; }
    default:
     imp$5fgen_62 = 1n;
   }
   return imp$5fgen_62;
   break; }
  case 2n: {
   let imp$5fgen_63;
   switch(arg_1){
    case 2n: {
     imp$5fgen_63 = 0n;
     break; }
    default:
     imp$5fgen_63 = 1n;
   }
   return imp$5fgen_63;
   break; }
  default:
   return 1n;
 }
}

function Prelude_EqOrd_$3d$3d$5fEq$5f$5fInteger(arg_0, arg_1){//Prelude/EqOrd.idr:40:1--44:7
 switch(((arg_0 === arg_1) ? BigInt(1) : BigInt(0))){
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

function Prelude_EqOrd_$3d$3d$5fEq$5f$5fChar(arg_0, arg_1){//Prelude/EqOrd.idr:64:1--68:7
 switch(((arg_0 === arg_1) ? BigInt(1) : BigInt(0))){
  case 0n: {
   return 1n;
   break; }
  default:
   return 0n;
 }
}

function Prelude_EqOrd_$3c$5fOrd$5f$5fInteger(arg_0, arg_1){//Prelude/EqOrd.idr:137:1--146:7
 switch(((arg_0 < arg_1) ? BigInt(1) : BigInt(0))){
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

function Prelude_EqOrd_$3c$3d$5fOrd$5f$5fChar(arg_0, arg_1){//Prelude/EqOrd.idr:200:1--209:7
 switch(((arg_0 <= arg_1) ? BigInt(1) : BigInt(0))){
  case 0n: {
   return 1n;
   break; }
  default:
   return 0n;
 }
}

function Prelude_EqOrd_$2f$3d$5fEq$5f$5fOrdering(arg_0, arg_1){//Prelude/EqOrd.idr:79:1--86:75
 return Prelude_Basics_not(Prelude_EqOrd_$3d$3d$5fEq$5f$5fOrdering(arg_0, arg_1));
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

function Prelude_Show_case__case$20block$20in$20showLitChar_6212(arg_0, arg_1){//Prelude/Show.idr:147:23--149:40
 switch(arg_1){
  case 0n: {
   return (eta_0) => {return Prelude_Types_strCons('\u{5c}', Prelude_Show_protectEsc((eta_1) => {return Prelude_Types_isDigit(eta_1);}, Prelude_Show_show$5fShow$5f$5fInt(BigInt(arg_0.codePointAt(0))), eta_0));};
   break; }
  case 1n: {
   return (eta_0) => {return Prelude_Types_strCons(arg_0, eta_0);};
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function Prelude_Show_case__showLitChar_6189(arg_0, arg_1){//Prelude/Show.idr:145:7--150:8
 switch(arg_1.h){
  case 1: {
   return (eta_0) => {return Prelude_Types_strCons('\u{5c}', Prelude_Types_Strings_$2b$2b(arg_1.a1, eta_0));};
   break; }
  case 0: {
   return Prelude_Show_case__case$20block$20in$20showLitChar_6212(arg_0, Prelude_EqOrd_$3e$5fOrd$5f$5fChar(arg_0, '\u{7f}'));
   break; }
  default:
   throw new Error('unhandled con case on Prelude/Show.idr:158:35--158:47');
 }
}

function Prelude_Show_case__protectEsc_5936(arg_0, arg_1, arg_2, arg_3){//Prelude/Show.idr:131:26--131:63
 switch(arg_3){
  case 0n: {
   return '\u{5c}&';
   break; }
  case 1n: {
   return '';
   break; }
  default:
   throw new Error('unhandled const case on Prelude/Show.idr:95:43--95:47');
 }
}

function Prelude_Show_n__1638_6006_getAt(arg_0, arg_1, arg_2){//Prelude/Show.idr:158:5--159:10
 switch(arg_1){
  case 0n: {
   let imp$5fgen_64;
   switch(arg_2.h){
    case 1: {
     imp$5fgen_64 = ({h:1, a1: arg_2.a1});
     break; }
    default:
     let imp$5fgen_65;
     switch(arg_2.h){
      case 0: {
       imp$5fgen_65 = ({h:0});
       break; }
      default:
       throw new Error('unhandled con case on Prelude/Show.idr:158:20--158:31');
     }
     imp$5fgen_64 = imp$5fgen_65;
   }
   return imp$5fgen_64;
   break; }
  default:
   const imp$5fgen_68 = (arg_1 - 1n);
   let imp$5fgen_66;
   switch(arg_2.h){
    case 1: {
     imp$5fgen_66 = Prelude_Show_n__1638_6006_getAt(arg_0, imp$5fgen_68, arg_2.a2);
     break; }
    default:
     let imp$5fgen_67;
     switch(arg_2.h){
      case 0: {
       imp$5fgen_67 = ({h:0});
       break; }
      default:
       throw new Error('unhandled con case on Prelude/Show.idr:158:20--158:31');
     }
     imp$5fgen_66 = imp$5fgen_67;
   }
   return imp$5fgen_66;
 }
}

function Prelude_Show_n__1638_6005_asciiTab(arg_0){//Prelude/Show.idr:151:5--152:13
 return ({h:1, a1: 'NUL', a2: ({h:1, a1: 'SOH', a2: ({h:1, a1: 'STX', a2: ({h:1, a1: 'ETX', a2: ({h:1, a1: 'EOT', a2: ({h:1, a1: 'ENQ', a2: ({h:1, a1: 'ACK', a2: ({h:1, a1: 'BEL', a2: ({h:1, a1: 'BS', a2: ({h:1, a1: 'HT', a2: ({h:1, a1: 'LF', a2: ({h:1, a1: 'VT', a2: ({h:1, a1: 'FF', a2: ({h:1, a1: 'CR', a2: ({h:1, a1: 'SO', a2: ({h:1, a1: 'SI', a2: ({h:1, a1: 'DLE', a2: ({h:1, a1: 'DC1', a2: ({h:1, a1: 'DC2', a2: ({h:1, a1: 'DC3', a2: ({h:1, a1: 'DC4', a2: ({h:1, a1: 'NAK', a2: ({h:1, a1: 'SYN', a2: ({h:1, a1: 'ETB', a2: ({h:1, a1: 'CAN', a2: ({h:1, a1: 'EM', a2: ({h:1, a1: 'SUB', a2: ({h:1, a1: 'ESC', a2: ({h:1, a1: 'FS', a2: ({h:1, a1: 'GS', a2: ({h:1, a1: 'RS', a2: ({h:1, a1: 'US', a2: ({h:0})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})});
}

function Prelude_Show_show$5fShow$5f$5fString(arg_0){//Prelude/Show.idr:173:1--177:7
 return Prelude_Types_strCons('\"', Prelude_Show_showLitString(Prelude_Types_unpack(arg_0))('\"'));
}

function Prelude_Show_show$5fShow$5f$5fInt(arg_0){//Prelude/Show.idr:102:1--106:7
 return Prelude_Show_showPrec$5fShow$5f$5fInt(({h:0}), arg_0);
}

function Prelude_Show_show$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(arg_0, arg_1, arg_2, arg_3){//Prelude/Show.idr:190:1--194:7
 switch(arg_3.h){
  case 0: {
   let imp$5fgen_69;
   switch(Builtin_fst(undefined, undefined, arg_2).h){
    case 0: {
     imp$5fgen_69 = Builtin_fst(undefined, undefined, arg_2).a1(arg_3.a1);
     break; }
    default:
     throw new Error('unhandled con case on Prelude/Show.idr:46:3--46:28');
   }
   let imp$5fgen_70;
   switch(Builtin_snd(undefined, undefined, arg_2).h){
    case 0: {
     imp$5fgen_70 = Builtin_snd(undefined, undefined, arg_2).a1(arg_3.a2);
     break; }
    default:
     throw new Error('unhandled con case on Prelude/Show.idr:46:3--46:28');
   }
   return Prelude_Types_Strings_$2b$2b('(', Prelude_Types_Strings_$2b$2b(imp$5fgen_69, Prelude_Types_Strings_$2b$2b(', ', Prelude_Types_Strings_$2b$2b(imp$5fgen_70, ')'))));
   break; }
  default:
   throw new Error('unhandled con case on Prelude/Show.idr:191:26--191:32');
 }
}

function Prelude_Show_showPrec$5fShow$5f$5fString(arg_0, arg_1){//Prelude/Show.idr:173:1--177:7
 return Prelude_Show_show$5fShow$5f$5fString(arg_1);
}

function Prelude_Show_showPrec$5fShow$5f$5fInt(ext_0, ext_1){//Prelude/Show.idr:102:1--106:7
 return Prelude_Show_primNumShow(undefined, (eta_0) => {return (''+eta_0);}, ext_0, ext_1);
}

function Prelude_Show_showPrec$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(arg_0, arg_1, arg_2, arg_3, arg_4){//Prelude/Show.idr:190:1--194:7
 return Prelude_Show_show$5fShow$5f$5f$28$7c$28$28Builtin$2ePair$20$24a$29$20$24b$29$2c$28$28Builtin$2eMkPair$20$24a$29$20$24b$29$7c$29(undefined, undefined, arg_2, arg_4);
}

function Prelude_Show_compare$5fOrd$5f$5fPrec(arg_0, arg_1){//Prelude/Show.idr:36:1--41:58
 switch(arg_0.h){
  case 4: {
   let imp$5fgen_71;
   switch(arg_1.h){
    case 4: {
     imp$5fgen_71 = Prelude_Types_compare$5fOrd$5f$5fNat(arg_0.a1, arg_1.a1);
     break; }
    default:
     imp$5fgen_71 = Prelude_EqOrd_compare$5fOrd$5f$5fInteger(Prelude_Show_precCon(arg_0), Prelude_Show_precCon(arg_1));
   }
   return imp$5fgen_71;
   break; }
  default:
   return Prelude_EqOrd_compare$5fOrd$5f$5fInteger(Prelude_Show_precCon(arg_0), Prelude_Show_precCon(arg_1));
 }
}

function Prelude_Show_$3e$3d$5fOrd$5f$5fPrec(arg_0, arg_1){//Prelude/Show.idr:36:1--41:58
 return Prelude_EqOrd_$2f$3d$5fEq$5f$5fOrdering(Prelude_Show_compare$5fOrd$5f$5fPrec(arg_0, arg_1), 0n);
}

function Prelude_Show_showParens(arg_0, arg_1){//Prelude/Show.idr:64:1--68:11
 switch(arg_0){
  case 1n: {
   return arg_1;
   break; }
  case 0n: {
   return Prelude_Types_Strings_$2b$2b('(', Prelude_Types_Strings_$2b$2b(arg_1, ')'));
   break; }
  default:
   throw new Error('unhandled const case on Prelude/Show.idr:67:21--67:25');
 }
}

function Prelude_Show_showLitString(arg_0){//Prelude/Show.idr:163:1--164:14
 switch(arg_0.h){
  case 0: {
   return (eta_0) => {return eta_0;};
   break; }
  case 1: {
   let imp$5fgen_72;
   switch(arg_0.a1){
    case '\"': {
     imp$5fgen_72 = (eta_0) => {return Prelude_Types_Strings_$2b$2b('\u{5c}\"', Prelude_Show_showLitString(arg_0.a2)(eta_0));};
     break; }
    default:
     imp$5fgen_72 = (eta_0) => {return Prelude_Show_showLitChar(arg_0.a1)(Prelude_Show_showLitString(arg_0.a2)(eta_0));};
   }
   return imp$5fgen_72;
   break; }
  default:
   throw new Error('unhandled con case on Prelude/Show.idr:163:17--163:26');
 }
}

function Prelude_Show_showLitChar(arg_0){//Prelude/Show.idr:133:1--134:12
 switch(arg_0){
  case '\u{7}': {
   return (arg_1) => {return Prelude_Types_Strings_$2b$2b('\u{5c}a', arg_1);};
   break; }
  case '\u{8}': {
   return (arg_1) => {return Prelude_Types_Strings_$2b$2b('\u{5c}b', arg_1);};
   break; }
  case '\u{c}': {
   return (arg_1) => {return Prelude_Types_Strings_$2b$2b('\u{5c}f', arg_1);};
   break; }
  case '\n': {
   return (arg_1) => {return Prelude_Types_Strings_$2b$2b('\u{5c}n', arg_1);};
   break; }
  case '\r': {
   return (arg_1) => {return Prelude_Types_Strings_$2b$2b('\u{5c}r', arg_1);};
   break; }
  case '\u{9}': {
   return (arg_1) => {return Prelude_Types_Strings_$2b$2b('\u{5c}t', arg_1);};
   break; }
  case '\u{b}': {
   return (arg_1) => {return Prelude_Types_Strings_$2b$2b('\u{5c}v', arg_1);};
   break; }
  case '\u{e}': {
   return (eta_0) => {return Prelude_Show_protectEsc((arg_1) => {return Prelude_EqOrd_$3d$3d$5fEq$5f$5fChar(arg_1, 'H');}, '\u{5c}SO', eta_0);};
   break; }
  case '\u{7f}': {
   return (arg_1) => {return Prelude_Types_Strings_$2b$2b('\u{5c}DEL', arg_1);};
   break; }
  case '\u{5c}': {
   return (arg_1) => {return Prelude_Types_Strings_$2b$2b('\u{5c}\u{5c}', arg_1);};
   break; }
  default:
   return Prelude_Show_case__showLitChar_6189(arg_0, Prelude_Show_n__1638_6006_getAt(arg_0, Prelude_Types_fromInteger$5fNum$5f$5fNat(BigInt(arg_0.codePointAt(0))), Prelude_Show_n__1638_6005_asciiTab(arg_0)));
 }
}

function Prelude_Show_protectEsc(arg_0, arg_1, arg_2){//Prelude/Show.idr:130:1--131:11
 return Prelude_Types_Strings_$2b$2b(arg_1, Prelude_Types_Strings_$2b$2b(Prelude_Show_case__protectEsc_5936(arg_2, arg_1, arg_0, Prelude_Show_firstCharIs(arg_0, arg_2)), arg_2));
}

function Prelude_Show_primNumShow(arg_0, arg_1, arg_2, arg_3){//Prelude/Show.idr:99:1--100:12
 const imp$5fgen_73 = arg_1(arg_3);
 return Prelude_Show_showParens(Prelude_Basics_$26$26(Prelude_Show_$3e$3d$5fOrd$5f$5fPrec(arg_2, ({h:5})), (()=>Prelude_Show_firstCharIs((arg_4) => {return Prelude_EqOrd_$3d$3d$5fEq$5f$5fChar(arg_4, '-');}, imp$5fgen_73))), imp$5fgen_73);
}

function Prelude_Show_precCon(arg_0){//Prelude/Show.idr:19:1--23:8
 switch(arg_0.h){
  case 0: {
   return 0n;
   break; }
  case 1: {
   return 1n;
   break; }
  case 2: {
   return 2n;
   break; }
  case 3: {
   return 3n;
   break; }
  case 4: {
   return 4n;
   break; }
  case 5: {
   return 5n;
   break; }
  case 6: {
   return 6n;
   break; }
  default:
   throw new Error('unhandled con case on Prelude/Show.idr:22:11--22:15');
 }
}

function Prelude_Show_firstCharIs(arg_0, arg_1){//Prelude/Show.idr:95:1--96:12
 switch(arg_1){
  case '': {
   return 1n;
   break; }
  default:
   return arg_0((arg_1.charAt(0)));
 }
}

function Prelude_IO_map$5fFunctor$5f$5fIO(arg_0, arg_1, arg_2, arg_3, ext_0){//Prelude/IO.idr:15:1--19:8
 const imp$5fgen_74 = arg_3(ext_0);
 return arg_2(imp$5fgen_74);
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
