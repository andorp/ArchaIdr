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
 Canvas_getBoundingClientRect(ext_0);
 Canvas_documentElement(ext_0);
 Main_GameLoop_registerHandler('mousemove', (e) => {return (eta_0) => {const imp$5fgen_12 = Main_calculateMousePos(e, eta_0);
let imp$5fgen_11;
switch(imp$5fgen_12.h){
 case 0: {
  imp$5fgen_11 = (eta_1) => {return GameLogic_setPaddle1y(imp$5fgen_12.a2, eta_1);};
  break; }
 default:
  throw new Error('unhandled con case on src/Main.idr:8:33--8:43');
}
return imp$5fgen_11;};}, ext_0);
 Main_GameLoop_registerHandler('mousedown', (e) => {return (eta_0) => {return (eta_1) => {return GameLogic_restartGame(eta_1);};};}, ext_0);
 return Main_GameLoop_gameLoop(30n, (eta_0) => {return GameLogic_initBall(eta_0);}, (eta_0) => {return GameLogic_moveBall(eta_0);}, (eta_0) => {return (eta_1) => {return GameLogic_drawBall(eta_0, eta_1);};}, ext_0);
}

function Main_GameLoop_getGameState(ext_0){//src/Main.idr:28:3--29:15
 return Main_GameLoop_prim$5f$5fgetGameState(ext_0);
}

function Main_GameLoop_gameLoop(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Main.idr:41:3--43:11
 const imp$5fgen_13 = arg_1(ext_0);
 Main_GameLoop_setGameState(imp$5fgen_13, ext_0);
 return Window_setInterval(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_15 = arg_483(eta_0);
const imp$5fgen_14 = arg_485(eta_0);
return imp$5fgen_15(imp$5fgen_14);};};};};}}), a2: (b) => {return (a) => {return (arg_644) => {return (arg_645) => {return (eta_0) => {const imp$5fgen_16 = arg_644(eta_0);
return arg_645(imp$5fgen_16)(eta_0);};};};};}, a3: (a) => {return (arg_647) => {return (eta_0) => {const imp$5fgen_17 = arg_647(eta_0);
return imp$5fgen_17(eta_0);};};}}), a2: (a) => {return (arg_6794) => {return arg_6794;};}}), (eta_0) => {Main_GameLoop_updateGameState(arg_2, eta_0);
return Main_GameLoop_drawGameState(arg_3, eta_0);}, Prelude_Num_div$5fIntegral$5f$5fInt((1000n % __esPrim_int_bound_63), arg_0))(ext_0);
}

function Main_GameLoop_drawGameState(arg_0, ext_0){//src/Main.idr:36:3--37:16
 const imp$5fgen_18 = Main_GameLoop_getGameState(ext_0);
 return arg_0(imp$5fgen_18)(ext_0);
}

function Main_calculateMousePos(arg_0, ext_0){//src/Main.idr:8:1--9:18
 const imp$5fgen_26 = Canvas_getBoundingClientRect(ext_0);
 const imp$5fgen_25 = Canvas_documentElement(ext_0);
 const imp$5fgen_24 = Canvas_clientX(arg_0, ext_0);
 const imp$5fgen_23 = Canvas_left(imp$5fgen_26, ext_0);
 const imp$5fgen_22 = Canvas_scrollLeft(imp$5fgen_25, ext_0);
 const imp$5fgen_21 = Canvas_clientY(arg_0, ext_0);
 const imp$5fgen_20 = Canvas_top(imp$5fgen_26, ext_0);
 const imp$5fgen_19 = Canvas_scrollTop(imp$5fgen_25, ext_0);
 return ({h:0, a1: Prelude_Num_$2d$5fNeg$5f$5fInt(Prelude_Num_$2d$5fNeg$5f$5fInt(imp$5fgen_24, imp$5fgen_23), imp$5fgen_22), a2: Prelude_Num_$2d$5fNeg$5f$5fInt(Prelude_Num_$2d$5fNeg$5f$5fInt(imp$5fgen_21, imp$5fgen_20), imp$5fgen_19)});
}

function GameLogic_case__case$20block$20in$20case$20block$20in$20drawBall_1415(arg_0, arg_1, arg_2, arg_3){//src/GameLogic.idr:174:16--176:20
 switch(arg_3){
  case 0n: {
   return 'Right Player Won!';
   break; }
  case 1n: {
   return '';
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_case__case$20block$20in$20drawBall_1392(arg_0, arg_1, arg_2, arg_3){//src/GameLogic.idr:172:10--176:21
 switch(arg_3){
  case 0n: {
   return 'Left Player Won!';
   break; }
  case 1n: {
   let imp$5fgen_27;
   switch(arg_0.h){
    case 0: {
     imp$5fgen_27 = arg_0.a8;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
   }
   return GameLogic_case__case$20block$20in$20case$20block$20in$20drawBall_1415(arg_0, arg_1, arg_2, Prelude_EqOrd_$3e$3d$5fOrd$5f$5fInt(imp$5fgen_27, GameLogic_WINNING$5fSCORE()));
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_case__drawBall_1353(arg_0, arg_1, arg_2){//src/GameLogic.idr:168:3--192:1
 switch(arg_2){
  case 0n: {
   return (eta_0) => {const imp$5fgen_29 = Canvas_fillStyle('white', eta_0);
let imp$5fgen_28;
switch(arg_0.h){
 case 0: {
  imp$5fgen_28 = arg_0.a7;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
Canvas_fillText(GameLogic_case__case$20block$20in$20drawBall_1392(arg_0, arg_1, imp$5fgen_29, Prelude_EqOrd_$3e$3d$5fOrd$5f$5fInt(imp$5fgen_28, GameLogic_WINNING$5fSCORE())), (350n % __esPrim_int_bound_63), (200n % __esPrim_int_bound_63), eta_0);
return Canvas_fillText('click to continue', (350n % __esPrim_int_bound_63), (500n % __esPrim_int_bound_63), eta_0);};
   break; }
  case 1n: {
   return (eta_0) => {GameLogic_drawNet(arg_0)(eta_0);
let imp$5fgen_30;
switch(arg_0.h){
 case 0: {
  imp$5fgen_30 = arg_0.a5;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
let imp$5fgen_31;
switch(imp$5fgen_30.h){
 case 0: {
  imp$5fgen_31 = imp$5fgen_30.a1;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
}
let imp$5fgen_32;
switch(arg_0.h){
 case 0: {
  imp$5fgen_32 = arg_0.a5;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
let imp$5fgen_33;
switch(imp$5fgen_32.h){
 case 0: {
  imp$5fgen_33 = imp$5fgen_32.a2;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
}
GameLogic_colorRect(0n, imp$5fgen_31, GameLogic_PADDLE$5fTHICKNESS(), imp$5fgen_33, 'white', eta_0);
let imp$5fgen_34;
switch(arg_0.h){
 case 0: {
  imp$5fgen_34 = arg_0.a1;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
let imp$5fgen_35;
switch(arg_0.h){
 case 0: {
  imp$5fgen_35 = arg_0.a6;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
let imp$5fgen_36;
switch(imp$5fgen_35.h){
 case 0: {
  imp$5fgen_36 = imp$5fgen_35.a1;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
}
let imp$5fgen_37;
switch(arg_0.h){
 case 0: {
  imp$5fgen_37 = arg_0.a6;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
let imp$5fgen_38;
switch(imp$5fgen_37.h){
 case 0: {
  imp$5fgen_38 = imp$5fgen_37.a2;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
}
GameLogic_colorRect(Prelude_Num_$2d$5fNeg$5f$5fInt(imp$5fgen_34, GameLogic_PADDLE$5fTHICKNESS()), imp$5fgen_36, GameLogic_PADDLE$5fTHICKNESS(), imp$5fgen_38, 'white', eta_0);
let imp$5fgen_39;
switch(arg_0.h){
 case 0: {
  imp$5fgen_39 = arg_0.a3;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
let imp$5fgen_40;
switch(imp$5fgen_39.h){
 case 0: {
  imp$5fgen_40 = imp$5fgen_39.a1;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
}
let imp$5fgen_41;
switch(arg_0.h){
 case 0: {
  imp$5fgen_41 = arg_0.a3;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
let imp$5fgen_42;
switch(imp$5fgen_41.h){
 case 0: {
  imp$5fgen_42 = imp$5fgen_41.a2;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
}
GameLogic_colorCircle(imp$5fgen_40, imp$5fgen_42, 10n, 'white', eta_0);
let imp$5fgen_43;
switch(arg_0.h){
 case 0: {
  imp$5fgen_43 = arg_0.a7;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
Canvas_fillText(Prelude_Show_show$5fShow$5f$5fInt(imp$5fgen_43), (100n % __esPrim_int_bound_63), (100n % __esPrim_int_bound_63), eta_0);
let imp$5fgen_44;
switch(arg_0.h){
 case 0: {
  imp$5fgen_44 = arg_0.a8;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
let imp$5fgen_45;
switch(arg_0.h){
 case 0: {
  imp$5fgen_45 = arg_0.a1;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
return Canvas_fillText(Prelude_Show_show$5fShow$5f$5fInt(imp$5fgen_44), Prelude_Num_$2d$5fNeg$5f$5fInt(imp$5fgen_45, (100n % __esPrim_int_bound_63)), (100n % __esPrim_int_bound_63), eta_0);};
   break; }
  default:
   throw new Error('unhandled const case on src/GameLogic.idr:37:15--37:19');
 }
}

function GameLogic_case__restartGame_1222(arg_0, arg_1){//src/GameLogic.idr:141:3--143:11
 switch(arg_1){
  case 0n: {
   let imp$5fgen_46;
   switch(arg_0.h){
    case 0: {
     imp$5fgen_46 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: arg_0.a3, a4: arg_0.a4, a5: arg_0.a5, a6: arg_0.a6, a7: 0n, a8: 0n, a9: 1n});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:139:15--139:20');
   }
   return GameLogic_ballReset(imp$5fgen_46);
   break; }
  case 1n: {
   return arg_0;
   break; }
  default:
   throw new Error('unhandled const case on src/GameLogic.idr:37:15--37:19');
 }
}

function GameLogic_case__moveBall_1188(arg_0, arg_1){//src/GameLogic.idr:125:5--126:52
 switch(arg_1){
  case 0n: {
   return arg_0;
   break; }
  case 1n: {
   return GameLogic_bounceBall(GameLogic_computerMovement(GameLogic_rollBall(arg_0)));
   break; }
  default:
   throw new Error('unhandled const case on src/GameLogic.idr:37:15--37:19');
 }
}

function GameLogic_case__case$20block$20in$20case$20block$20in$20case$20block$20in$20case$20block$20in$20bounceBall_1155(arg_0, arg_1){//src/GameLogic.idr:116:14--118:61
 switch(arg_1){
  case 0n: {
   return GameLogic_changeBallVelPaddle1(GameLogic_changeXDirection(arg_0));
   break; }
  case 1n: {
   let imp$5fgen_47;
   switch(arg_0.h){
    case 0: {
     imp$5fgen_47 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: arg_0.a3, a4: arg_0.a4, a5: arg_0.a5, a6: arg_0.a6, a7: arg_0.a7, a8: ((arg_0.a8 + (1n % __esPrim_int_bound_63)) % __esPrim_int_bound_63), a9: arg_0.a9});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:107:14--107:19');
   }
   return GameLogic_ballReset(imp$5fgen_47);
   break; }
  default:
   throw new Error('unhandled const case on src/GameLogic.idr:80:26--80:30');
 }
}

function GameLogic_case__case$20block$20in$20case$20block$20in$20case$20block$20in$20bounceBall_1149(arg_0, arg_1){//src/GameLogic.idr:115:8--119:9
 switch(arg_1){
  case 0n: {
   return GameLogic_case__case$20block$20in$20case$20block$20in$20case$20block$20in$20case$20block$20in$20bounceBall_1155(arg_0, GameLogic_ballInPaddle1(arg_0));
   break; }
  case 1n: {
   return arg_0;
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_case__case$20block$20in$20case$20block$20in$20case$20block$20in$20bounceBall_1111(arg_0, arg_1){//src/GameLogic.idr:112:14--114:61
 switch(arg_1){
  case 0n: {
   return GameLogic_changeBallVelPaddle2(GameLogic_changeXDirection(arg_0));
   break; }
  case 1n: {
   let imp$5fgen_48;
   switch(arg_0.h){
    case 0: {
     imp$5fgen_48 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: arg_0.a3, a4: arg_0.a4, a5: arg_0.a5, a6: arg_0.a6, a7: ((arg_0.a7 + (1n % __esPrim_int_bound_63)) % __esPrim_int_bound_63), a8: arg_0.a8, a9: arg_0.a9});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:107:14--107:19');
   }
   return GameLogic_ballReset(imp$5fgen_48);
   break; }
  default:
   throw new Error('unhandled const case on src/GameLogic.idr:84:26--84:30');
 }
}

function GameLogic_case__case$20block$20in$20case$20block$20in$20bounceBall_1105(arg_0, arg_1){//src/GameLogic.idr:111:8--121:7
 switch(arg_1){
  case 0n: {
   return GameLogic_case__case$20block$20in$20case$20block$20in$20case$20block$20in$20bounceBall_1111(arg_0, GameLogic_ballInPaddle2(arg_0));
   break; }
  case 1n: {
   let imp$5fgen_49;
   switch(arg_0.h){
    case 0: {
     imp$5fgen_49 = arg_0.a3;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
   }
   let imp$5fgen_50;
   switch(imp$5fgen_49.h){
    case 0: {
     imp$5fgen_50 = imp$5fgen_49.a1;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
   }
   return GameLogic_case__case$20block$20in$20case$20block$20in$20case$20block$20in$20bounceBall_1149(arg_0, Prelude_EqOrd_$3c$5fOrd$5f$5fInt(imp$5fgen_50, (0n % __esPrim_int_bound_63)));
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_case__case$20block$20in$20bounceBall_1092(arg_0, arg_1){//src/GameLogic.idr:110:8--121:7
 switch(arg_1){
  case 0n: {
   return GameLogic_changeYDirection(arg_0);
   break; }
  case 1n: {
   let imp$5fgen_51;
   switch(arg_0.h){
    case 0: {
     imp$5fgen_51 = arg_0.a3;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
   }
   let imp$5fgen_52;
   switch(imp$5fgen_51.h){
    case 0: {
     imp$5fgen_52 = imp$5fgen_51.a1;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
   }
   let imp$5fgen_53;
   switch(arg_0.h){
    case 0: {
     imp$5fgen_53 = arg_0.a1;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
   }
   return GameLogic_case__case$20block$20in$20case$20block$20in$20bounceBall_1105(arg_0, Prelude_EqOrd_$3e$5fOrd$5f$5fInt(imp$5fgen_52, imp$5fgen_53));
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_case__bounceBall_1077(arg_0, arg_1){//src/GameLogic.idr:109:8--121:7
 switch(arg_1){
  case 0n: {
   return GameLogic_changeYDirection(arg_0);
   break; }
  case 1n: {
   let imp$5fgen_54;
   switch(arg_0.h){
    case 0: {
     imp$5fgen_54 = arg_0.a3;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
   }
   let imp$5fgen_55;
   switch(imp$5fgen_54.h){
    case 0: {
     imp$5fgen_55 = imp$5fgen_54.a2;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
   }
   return GameLogic_case__case$20block$20in$20bounceBall_1092(arg_0, Prelude_EqOrd_$3c$5fOrd$5f$5fInt(imp$5fgen_55, (0n % __esPrim_int_bound_63)));
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_case__case$20block$20in$20computerMovement$2cpy$27_981(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10, arg_11, arg_12){//src/GameLogic.idr:96:16--97:18
 switch(arg_12){
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

function GameLogic_case__computerMovement$2cpy$27_914(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10, arg_11, arg_12){//src/GameLogic.idr:95:16--99:21
 switch(arg_12){
  case 0n: {
   return ((arg_1 + 6n) % __esPrim_int_bound_63);
   break; }
  case 1n: {
   return GameLogic_case__case$20block$20in$20computerMovement$2cpy$27_981(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10, arg_11, Prelude_EqOrd_$3e$5fOrd$5f$5fInt(GameLogic_n__2226_894_cp(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10, arg_11), ((arg_7 + Prelude_Num_div$5fIntegral$5f$5fInt(arg_0, 3n)) % __esPrim_int_bound_63)));
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function GameLogic_n__2226_895_py$27(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10, arg_11){//src/GameLogic.idr:94:5--95:8
 const imp$5fgen_56 = ({h:0, a1: arg_8, a2: arg_7});
 return GameLogic_case__computerMovement$2cpy$27_914(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, imp$5fgen_56, arg_10, arg_11, Prelude_EqOrd_$3c$5fOrd$5f$5fInt(GameLogic_n__2226_894_cp(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, imp$5fgen_56, arg_10, arg_11), Prelude_Num_$2d$5fNeg$5f$5fInt(arg_7, Prelude_Num_div$5fIntegral$5f$5fInt(arg_0, 3n))));
}

function GameLogic_n__2226_894_cp(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5, arg_6, arg_7, arg_8, arg_9, arg_10, arg_11){//src/GameLogic.idr:92:5--93:7
 return ((arg_1 + Prelude_Num_div$5fIntegral$5f$5fInt(arg_0, 2n)) % __esPrim_int_bound_63);
}

function GameLogic_setPaddle1y(arg_0, arg_1){//src/GameLogic.idr:128:1--130:12
 switch(arg_1.h){
  case 0: {
   let imp$5fgen_57;
   switch(arg_1.a5.h){
    case 0: {
     imp$5fgen_57 = ({h:0, a1: arg_1.a1, a2: arg_1.a2, a3: arg_1.a3, a4: arg_1.a4, a5: ({h:0, a1: Prelude_Num_$2d$5fNeg$5f$5fInt(arg_0, Prelude_Num_div$5fIntegral$5f$5fInt(arg_1.a5.a2, 2n)), a2: arg_1.a5.a2}), a6: arg_1.a6, a7: arg_1.a7, a8: arg_1.a8, a9: arg_1.a9});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:33:15--33:21');
   }
   return imp$5fgen_57;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:129:22--129:27');
 }
}

function GameLogic_rollBall(arg_0){//src/GameLogic.idr:76:1--77:9
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_58;
   switch(arg_0.a3.h){
    case 0: {
     let imp$5fgen_59;
     switch(arg_0.a4.h){
      case 0: {
       imp$5fgen_59 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: ({h:0, a1: ((arg_0.a3.a1 + arg_0.a4.a1) % __esPrim_int_bound_63), a2: ((arg_0.a3.a2 + arg_0.a4.a2) % __esPrim_int_bound_63)}), a4: ({h:0, a1: arg_0.a4.a1, a2: arg_0.a4.a2}), a5: arg_0.a5, a6: arg_0.a6, a7: arg_0.a7, a8: arg_0.a8, a9: arg_0.a9});
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:32:15--32:23');
     }
     imp$5fgen_58 = imp$5fgen_59;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:31:15--31:19');
   }
   return imp$5fgen_58;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:76:12--76:17');
 }
}

function GameLogic_restartGame(arg_0){//src/GameLogic.idr:138:1--140:12
 let imp$5fgen_60;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_60 = arg_0.a9;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 return GameLogic_case__restartGame_1222(arg_0, imp$5fgen_60);
}

function GameLogic_moveBall(arg_0){//src/GameLogic.idr:121:1--124:9
 let imp$5fgen_61;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_61 = arg_0.a9;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 return GameLogic_case__moveBall_1188(arg_0, imp$5fgen_61);
}

function GameLogic_initBall(ext_0){//src/GameLogic.idr:39:1--41:9
 const imp$5fgen_65 = Canvas_width(ext_0);
 const imp$5fgen_64 = Canvas_height(ext_0);
 const imp$5fgen_63 = Canvas_width(ext_0);
 const imp$5fgen_62 = Canvas_height(ext_0);
 return ({h:0, a1: imp$5fgen_65, a2: imp$5fgen_64, a3: ({h:0, a1: Prelude_Num_div$5fIntegral$5f$5fInt(imp$5fgen_63, 2n), a2: Prelude_Num_div$5fIntegral$5f$5fInt(imp$5fgen_62, 2n)}), a4: ({h:0, a1: 5n, a2: 5n}), a5: ({h:0, a1: (250n % __esPrim_int_bound_63), a2: (100n % __esPrim_int_bound_63)}), a6: ({h:0, a1: (250n % __esPrim_int_bound_63), a2: (100n % __esPrim_int_bound_63)}), a7: 0n, a8: 0n, a9: 1n});
}

function GameLogic_drawNet(arg_0){//src/GameLogic.idr:158:1--159:8
 let imp$5fgen_69;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_69 = arg_0.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 return Prelude_Interfaces_traverse$5f(undefined, undefined, undefined, undefined, ({h:0, a1: ({h:0, a1: (acc) => {return (elem) => {return (func) => {return (init) => {return (input) => {return Prelude_Types_foldr$5fFoldable$5f$5fList(undefined, undefined, func, init, input);};};};};}, a2: (elem) => {return (acc) => {return (func) => {return (init) => {return (input) => {return Prelude_Types_foldl$5fFoldable$5f$5fList(undefined, undefined, func, init, input);};};};};}}), a2: ({h:0, a1: (b) => {return (a) => {return (func) => {return (arg_149) => {return (eta_0) => {return Prelude_IO_map$5fFunctor$5f$5fIO(undefined, undefined, func, arg_149, eta_0);};};};};}, a2: (a) => {return (arg_482) => {return (eta_0) => {return arg_482;};};}, a3: (b) => {return (a) => {return (arg_483) => {return (arg_485) => {return (eta_0) => {const imp$5fgen_67 = arg_483(eta_0);
const imp$5fgen_66 = arg_485(eta_0);
return imp$5fgen_67(imp$5fgen_66);};};};};}})}), (i) => {return (eta_0) => {let imp$5fgen_68;
switch(arg_0.h){
 case 0: {
  imp$5fgen_68 = arg_0.a1;
  break; }
 default:
  throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
}
return GameLogic_colorRect(Prelude_Num_$2d$5fNeg$5f$5fInt(Prelude_Num_div$5fIntegral$5f$5fInt(imp$5fgen_68, 2n), 1n), ((i * (40n % __esPrim_int_bound_63)) % __esPrim_int_bound_63), 2n, 20n, 'white', eta_0);};})(Prelude_Types_rangeFromTo$5fRange$5f$5f$24a(undefined, ({h:0, a1: ({h:0, a1: ({h:0, a1: (arg_2) => {return (arg_3) => {return ((arg_2 + arg_3) % __esPrim_int_bound_63);};}, a2: (arg_4) => {return (arg_5) => {return ((arg_4 * arg_5) % __esPrim_int_bound_63);};}, a3: (arg_6) => {return (arg_6 % __esPrim_int_bound_63);}}), a2: (arg_183) => {return (arg_184) => {return Prelude_Num_div$5fIntegral$5f$5fInt(arg_183, arg_184);};}, a3: (arg_185) => {return (arg_186) => {return Prelude_Num_mod$5fIntegral$5f$5fInt(arg_185, arg_186);};}}), a2: ({h:0, a1: ({h:0, a1: ({h:0, a1: (arg_2) => {return (arg_3) => {return Prelude_EqOrd_$3d$3d$5fEq$5f$5fInt(arg_2, arg_3);};}, a2: (arg_4) => {return (arg_5) => {return Prelude_EqOrd_$2f$3d$5fEq$5f$5fInt(arg_4, arg_5);};}}), a2: (arg_369) => {return (arg_370) => {return Prelude_EqOrd_compare$5fOrd$5f$5fInt(arg_369, arg_370);};}, a3: (arg_371) => {return (arg_372) => {return Prelude_EqOrd_$3c$5fOrd$5f$5fInt(arg_371, arg_372);};}, a4: (arg_373) => {return (arg_374) => {return Prelude_EqOrd_$3e$5fOrd$5f$5fInt(arg_373, arg_374);};}, a5: (arg_375) => {return (arg_376) => {return Prelude_EqOrd_$3c$3d$5fOrd$5f$5fInt(arg_375, arg_376);};}, a6: (arg_377) => {return (arg_378) => {return Prelude_EqOrd_$3e$3d$5fOrd$5f$5fInt(arg_377, arg_378);};}, a7: (arg_379) => {return (arg_380) => {return Prelude_EqOrd_max$5fOrd$5f$5fInt(arg_379, arg_380);};}, a8: (arg_381) => {return (arg_382) => {return Prelude_EqOrd_min$5fOrd$5f$5fInt(arg_381, arg_382);};}}), a2: ({h:0, a1: ({h:0, a1: (arg_2) => {return (arg_3) => {return ((arg_2 + arg_3) % __esPrim_int_bound_63);};}, a2: (arg_4) => {return (arg_5) => {return ((arg_4 * arg_5) % __esPrim_int_bound_63);};}, a3: (arg_6) => {return (arg_6 % __esPrim_int_bound_63);}}), a2: (arg_56) => {return Prelude_Num_negate$5fNeg$5f$5fInt(arg_56);}, a3: (arg_57) => {return (arg_58) => {return Prelude_Num_$2d$5fNeg$5f$5fInt(arg_57, arg_58);};}})})}), 0n, Prelude_Num_div$5fIntegral$5f$5fInt(imp$5fgen_69, 40n)));
}

function GameLogic_drawBall(arg_0, ext_0){//src/GameLogic.idr:163:1--165:9
 let imp$5fgen_70;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_70 = arg_0.a1;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_71;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_71 = arg_0.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 const imp$5fgen_73 = GameLogic_colorRect(0n, 0n, imp$5fgen_70, imp$5fgen_71, 'black', ext_0);
 let imp$5fgen_72;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_72 = arg_0.a9;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 return GameLogic_case__drawBall_1353(arg_0, imp$5fgen_73, imp$5fgen_72)(ext_0);
}

function GameLogic_computerMovement(arg_0){//src/GameLogic.idr:88:1--89:17
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_74;
   switch(arg_0.a3.h){
    case 0: {
     let imp$5fgen_75;
     switch(arg_0.a6.h){
      case 0: {
       imp$5fgen_75 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: arg_0.a3, a4: arg_0.a4, a5: arg_0.a5, a6: ({h:0, a1: GameLogic_n__2226_895_py$27(arg_0.a6.a2, arg_0.a6.a1, arg_0.a9, arg_0.a8, arg_0.a7, arg_0.a5, arg_0.a4, arg_0.a3.a2, arg_0.a3.a1, arg_0.a3, arg_0.a2, arg_0.a1), a2: arg_0.a6.a2}), a7: arg_0.a7, a8: arg_0.a8, a9: arg_0.a9});
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:34:15--34:21');
     }
     imp$5fgen_74 = imp$5fgen_75;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:31:15--31:19');
   }
   return imp$5fgen_74;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:88:20--88:25');
 }
}

function GameLogic_colorRect(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0){//src/GameLogic.idr:145:1--146:10
 Canvas_fillStyle(arg_4, ext_0);
 return Canvas_fillRect(arg_0, arg_1, arg_2, arg_3, ext_0);
}

function GameLogic_colorCircle(arg_0, arg_1, arg_2, arg_3, ext_0){//src/GameLogic.idr:150:1--151:12
 Canvas_fillStyle(arg_3, ext_0);
 Canvas_beginPath(ext_0);
 Canvas_arc(arg_0, arg_1, arg_2, 0.0, 6.283185307179586, ext_0);
 return Canvas_fill(ext_0);
}

function GameLogic_changeYDirection(arg_0){//src/GameLogic.idr:71:1--73:17
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_76;
   switch(arg_0.a4.h){
    case 0: {
     imp$5fgen_76 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: arg_0.a3, a4: ({h:0, a1: arg_0.a4.a1, a2: Prelude_Num_negate$5fNeg$5f$5fInt(arg_0.a4.a2)}), a5: arg_0.a5, a6: arg_0.a6, a7: arg_0.a7, a8: arg_0.a8, a9: arg_0.a9});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:32:15--32:23');
   }
   return imp$5fgen_76;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:71:20--71:25');
 }
}

function GameLogic_changeXDirection(arg_0){//src/GameLogic.idr:66:1--68:17
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_77;
   switch(arg_0.a4.h){
    case 0: {
     imp$5fgen_77 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: arg_0.a3, a4: ({h:0, a1: Prelude_Num_negate$5fNeg$5f$5fInt(arg_0.a4.a1), a2: arg_0.a4.a2}), a5: arg_0.a5, a6: arg_0.a6, a7: arg_0.a7, a8: arg_0.a8, a9: arg_0.a9});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:32:15--32:23');
   }
   return imp$5fgen_77;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:66:20--66:25');
 }
}

function GameLogic_changeBallVelPaddle2(arg_0){//src/GameLogic.idr:103:1--104:21
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_78;
   switch(arg_0.a3.h){
    case 0: {
     let imp$5fgen_79;
     switch(arg_0.a4.h){
      case 0: {
       let imp$5fgen_80;
       switch(arg_0.a6.h){
        case 0: {
         imp$5fgen_80 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: ({h:0, a1: arg_0.a3.a1, a2: arg_0.a3.a2}), a4: ({h:0, a1: arg_0.a4.a1, a2: Prelude_Num_div$5fIntegral$5f$5fInt(Prelude_Num_$2d$5fNeg$5f$5fInt(arg_0.a3.a2, ((arg_0.a6.a1 + Prelude_Num_div$5fIntegral$5f$5fInt(arg_0.a6.a2, 2n)) % __esPrim_int_bound_63)), 3n)}), a5: arg_0.a5, a6: ({h:0, a1: arg_0.a6.a1, a2: arg_0.a6.a2}), a7: arg_0.a7, a8: arg_0.a8, a9: arg_0.a9});
         break; }
        default:
         throw new Error('unhandled con case on src/GameLogic.idr:34:15--34:21');
       }
       imp$5fgen_79 = imp$5fgen_80;
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:32:15--32:23');
     }
     imp$5fgen_78 = imp$5fgen_79;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:31:15--31:19');
   }
   return imp$5fgen_78;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:103:24--103:29');
 }
}

function GameLogic_changeBallVelPaddle1(arg_0){//src/GameLogic.idr:99:1--100:21
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_81;
   switch(arg_0.a3.h){
    case 0: {
     let imp$5fgen_82;
     switch(arg_0.a4.h){
      case 0: {
       let imp$5fgen_83;
       switch(arg_0.a5.h){
        case 0: {
         imp$5fgen_83 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: ({h:0, a1: arg_0.a3.a1, a2: arg_0.a3.a2}), a4: ({h:0, a1: arg_0.a4.a1, a2: Prelude_Num_div$5fIntegral$5f$5fInt(Prelude_Num_$2d$5fNeg$5f$5fInt(arg_0.a3.a2, ((arg_0.a5.a1 + Prelude_Num_div$5fIntegral$5f$5fInt(arg_0.a5.a2, 2n)) % __esPrim_int_bound_63)), 3n)}), a5: ({h:0, a1: arg_0.a5.a1, a2: arg_0.a5.a2}), a6: arg_0.a6, a7: arg_0.a7, a8: arg_0.a8, a9: arg_0.a9});
         break; }
        default:
         throw new Error('unhandled con case on src/GameLogic.idr:33:15--33:21');
       }
       imp$5fgen_82 = imp$5fgen_83;
       break; }
      default:
       throw new Error('unhandled con case on src/GameLogic.idr:32:15--32:23');
     }
     imp$5fgen_81 = imp$5fgen_82;
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:31:15--31:19');
   }
   return imp$5fgen_81;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:99:24--99:29');
 }
}

function GameLogic_bounceBall(arg_0){//src/GameLogic.idr:107:1--108:11
 let imp$5fgen_84;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_84 = arg_0.a3;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_85;
 switch(imp$5fgen_84.h){
  case 0: {
   imp$5fgen_85 = imp$5fgen_84.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
 }
 let imp$5fgen_86;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_86 = arg_0.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 return GameLogic_case__bounceBall_1077(arg_0, Prelude_EqOrd_$3e$5fOrd$5f$5fInt(imp$5fgen_85, imp$5fgen_86));
}

function GameLogic_ballReset(arg_0){//src/GameLogic.idr:52:1--53:10
 switch(arg_0.h){
  case 0: {
   let imp$5fgen_87;
   switch(arg_0.a4.h){
    case 0: {
     const imp$5fgen_88 = Prelude_Basics_$7c$7c(Prelude_EqOrd_$3e$3d$5fOrd$5f$5fInt(arg_0.a7, GameLogic_WINNING$5fSCORE()), (()=>Prelude_EqOrd_$3e$3d$5fOrd$5f$5fInt(arg_0.a8, GameLogic_WINNING$5fSCORE())));
     imp$5fgen_87 = ({h:0, a1: arg_0.a1, a2: arg_0.a2, a3: ({h:0, a1: Prelude_Num_div$5fIntegral$5f$5fInt(arg_0.a1, 2n), a2: Prelude_Num_div$5fIntegral$5f$5fInt(arg_0.a2, 2n)}), a4: ({h:0, a1: Prelude_Num_negate$5fNeg$5f$5fInt(arg_0.a4.a1), a2: 3n}), a5: arg_0.a5, a6: arg_0.a6, a7: arg_0.a7, a8: arg_0.a8, a9: imp$5fgen_88});
     break; }
    default:
     throw new Error('unhandled con case on src/GameLogic.idr:32:15--32:23');
   }
   return imp$5fgen_87;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:52:13--52:18');
 }
}

function GameLogic_ballInPaddle2(arg_0){//src/GameLogic.idr:84:1--85:14
 let imp$5fgen_89;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_89 = arg_0.a6;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_90;
 switch(imp$5fgen_89.h){
  case 0: {
   imp$5fgen_90 = imp$5fgen_89.a1;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
 }
 let imp$5fgen_91;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_91 = arg_0.a3;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_92;
 switch(imp$5fgen_91.h){
  case 0: {
   imp$5fgen_92 = imp$5fgen_91.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
 }
 let imp$5fgen_93;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_93 = arg_0.a3;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_94;
 switch(imp$5fgen_93.h){
  case 0: {
   imp$5fgen_94 = imp$5fgen_93.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
 }
 let imp$5fgen_95;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_95 = arg_0.a6;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_96;
 switch(imp$5fgen_95.h){
  case 0: {
   imp$5fgen_96 = imp$5fgen_95.a1;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
 }
 let imp$5fgen_97;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_97 = arg_0.a6;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_98;
 switch(imp$5fgen_97.h){
  case 0: {
   imp$5fgen_98 = imp$5fgen_97.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
 }
 return Prelude_Basics_$26$26(Prelude_EqOrd_$3c$5fOrd$5f$5fInt(imp$5fgen_90, imp$5fgen_92), (()=>Prelude_EqOrd_$3c$5fOrd$5f$5fInt(imp$5fgen_94, ((imp$5fgen_96 + imp$5fgen_98) % __esPrim_int_bound_63))));
}

function GameLogic_ballInPaddle1(arg_0){//src/GameLogic.idr:80:1--81:14
 let imp$5fgen_99;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_99 = arg_0.a5;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_100;
 switch(imp$5fgen_99.h){
  case 0: {
   imp$5fgen_100 = imp$5fgen_99.a1;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
 }
 let imp$5fgen_101;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_101 = arg_0.a3;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_102;
 switch(imp$5fgen_101.h){
  case 0: {
   imp$5fgen_102 = imp$5fgen_101.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
 }
 let imp$5fgen_103;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_103 = arg_0.a3;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_104;
 switch(imp$5fgen_103.h){
  case 0: {
   imp$5fgen_104 = imp$5fgen_103.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:11:1--16:7');
 }
 let imp$5fgen_105;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_105 = arg_0.a5;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_106;
 switch(imp$5fgen_105.h){
  case 0: {
   imp$5fgen_106 = imp$5fgen_105.a1;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
 }
 let imp$5fgen_107;
 switch(arg_0.h){
  case 0: {
   imp$5fgen_107 = arg_0.a5;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:26:1--39:7');
 }
 let imp$5fgen_108;
 switch(imp$5fgen_107.h){
  case 0: {
   imp$5fgen_108 = imp$5fgen_107.a2;
   break; }
  default:
   throw new Error('unhandled con case on src/GameLogic.idr:21:1--26:7');
 }
 return Prelude_Basics_$26$26(Prelude_EqOrd_$3c$5fOrd$5f$5fInt(imp$5fgen_100, imp$5fgen_102), (()=>Prelude_EqOrd_$3c$5fOrd$5f$5fInt(imp$5fgen_104, ((imp$5fgen_106 + imp$5fgen_108) % __esPrim_int_bound_63))));
}

function GameLogic_WINNING$5fSCORE(){//src/GameLogic.idr:8:1--9:14
 return 5n;
}

function GameLogic_PADDLE$5fTHICKNESS(){//src/GameLogic.idr:5:1--6:17
 return 10n;
}

function Canvas_width(ext_0){//src/Canvas.idr:48:1--50:6
 return Canvas_prim$5f$5fwidth(ext_0);
}

function Canvas_top(arg_0, ext_0){//src/Canvas.idr:112:1--114:4
 return Canvas_prim$5f$5ftop(arg_0, ext_0);
}

function Canvas_scrollTop(arg_0, ext_0){//src/Canvas.idr:136:1--138:10
 return Canvas_prim$5f$5fscrollTop(arg_0, ext_0);
}

function Canvas_scrollLeft(arg_0, ext_0){//src/Canvas.idr:129:1--131:11
 return Canvas_prim$5f$5fscrollLeft(arg_0, ext_0);
}

const Canvas_prim$5f$5fwidth = ((()=>{return BigInt(canvas.width);}))


const Canvas_prim$5f$5ftop = (((d)=>{return BigInt(d.top);}))


const Canvas_prim$5f$5fscrollTop = (((e)=>{return BigInt(e.scrollTop);}))


const Canvas_prim$5f$5fscrollLeft = (((e)=>{return BigInt(e.scrollLeft);}))


const Canvas_prim$5f$5fleft = (((d)=>{return BigInt(d.left);}))


const Canvas_prim$5f$5fheight = ((()=>{return BigInt(canvas.height);}))


const Canvas_prim$5f$5fgetBoundingClientRect = ((()=>{return canvas.getBoundingClientRect();}))


const Canvas_prim$5f$5ffillText = (((t,x,y)=>{canvasContext.fillText(t,Number(x),Number(y));}))


const Canvas_prim$5f$5ffillStyle = (((s)=>canvasContext.fillStyle=s))


const Canvas_prim$5f$5ffillRect = ((x,y,w,h)=>canvasContext.fillRect(Number(x),Number(y),Number(w),Number(h)))


const Canvas_prim$5f$5ffill = (()=>canvasContext.fill())


const Canvas_prim$5f$5fdocumentElement = ((()=>{return document.documentElement;}))


const Canvas_prim$5f$5fcurrentEvent = (((e)=>{return events[e];}))


const Canvas_prim$5f$5fclientY = (((e)=>{return BigInt(e.clientY);}))


const Canvas_prim$5f$5fclientX = (((e)=>{return BigInt(e.clientX);}))


const Canvas_prim$5f$5fbeginPath = (()=>canvasContext.beginPath())


const Canvas_prim$5f$5farc = ((x,y,r,s,e,b)=>canvasContext.arc(Number(x),Number(y),Number(r),Number(s),Number(e),true))


const Canvas_prim$5f$5faddEventListener = (((e,l)=>{canvas.addEventListener(e,function(evt){events[e]=evt;l();events[e]=undefined;});}))


function Canvas_left(arg_0, ext_0){//src/Canvas.idr:105:1--107:5
 return Canvas_prim$5f$5fleft(arg_0, ext_0);
}

function Canvas_height(ext_0){//src/Canvas.idr:55:1--57:7
 return Canvas_prim$5f$5fheight(ext_0);
}

function Canvas_getBoundingClientRect(ext_0){//src/Canvas.idr:98:1--100:22
 return Canvas_prim$5f$5fgetBoundingClientRect(ext_0);
}

function Canvas_fillText(arg_0, arg_1, arg_2, ext_0){//src/Canvas.idr:13:1--15:9
 return Canvas_prim$5f$5ffillText(arg_0, arg_1, arg_2, ext_0);
}

function Canvas_fillStyle(arg_0, ext_0){//src/Canvas.idr:6:1--8:10
 return Canvas_prim$5f$5ffillStyle(arg_0, ext_0);
}

function Canvas_fillRect(arg_0, arg_1, arg_2, arg_3, ext_0){//src/Canvas.idr:20:1--22:9
 return Canvas_prim$5f$5ffillRect(arg_0, arg_1, arg_2, arg_3, ext_0);
}

function Canvas_fill(ext_0){//src/Canvas.idr:41:1--43:5
 return Canvas_prim$5f$5ffill(ext_0);
}

function Canvas_documentElement(ext_0){//src/Canvas.idr:122:1--124:16
 return Canvas_prim$5f$5fdocumentElement(ext_0);
}

function Canvas_currentEvent(arg_0, ext_0){//src/Canvas.idr:67:1--69:13
 return Canvas_prim$5f$5fcurrentEvent(arg_0, ext_0);
}

function Canvas_clientY(arg_0, ext_0){//src/Canvas.idr:88:1--90:8
 return Canvas_prim$5f$5fclientY(arg_0, ext_0);
}

function Canvas_clientX(arg_0, ext_0){//src/Canvas.idr:81:1--83:8
 return Canvas_prim$5f$5fclientX(arg_0, ext_0);
}

function Canvas_beginPath(ext_0){//src/Canvas.idr:34:1--36:10
 return Canvas_prim$5f$5fbeginPath(ext_0);
}

function Canvas_arc(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0){//src/Canvas.idr:27:1--29:4
 return Canvas_prim$5f$5farc(arg_0, arg_1, arg_2, arg_3, arg_4, ext_0);
}

function Canvas_addEventListener(arg_0, arg_1, ext_0){//src/Canvas.idr:74:1--76:17
 return Canvas_prim$5f$5faddEventListener(arg_0, arg_1, ext_0);
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

function Prelude_Types_case__case$20block$20in$20rangeFromTo_5262(arg_0, arg_1, arg_2, arg_3, arg_4){//Prelude/Types.idr:938:17--940:28
 switch(arg_4){
  case 0n: {
   return Prelude_Types_takeUntil(undefined, (arg_5) => {switch(Builtin_fst(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).h){
 case 0: {
  return Builtin_fst(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).a5(arg_5)(arg_2);
  break; }
 default:
  throw new Error('unhandled con case on Prelude/EqOrd.idr:97:3--97:26');
}}, Prelude_Types_countFrom(undefined, arg_3, (x) => {switch(Builtin_snd(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).h){
 case 0: {
  let imp$5fgen_109;
  switch(Builtin_snd(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).h){
   case 0: {
    imp$5fgen_109 = Builtin_snd(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).a1;
    break; }
   default:
    throw new Error('unhandled con case on Prelude/Num.idr:26:1--33:76');
  }
  let imp$5fgen_110;
  switch(imp$5fgen_109.h){
   case 0: {
    imp$5fgen_110 = imp$5fgen_109.a3(1n);
    break; }
   default:
    throw new Error('unhandled con case on Prelude/Num.idr:22:3--22:30');
  }
  return Builtin_snd(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).a3(x)(imp$5fgen_110);
  break; }
 default:
  throw new Error('unhandled con case on Prelude/Num.idr:31:3--31:23');
}}));
   break; }
  case 1n: {
   return ({h:1, a1: arg_3, a2: ({h:0})});
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function Prelude_Types_case__rangeFromTo_5209(arg_0, arg_1, arg_2, arg_3, arg_4){//Prelude/Types.idr:936:9--941:18
 switch(arg_4){
  case 0n: {
   return Prelude_Types_takeUntil(undefined, (arg_5) => {switch(Builtin_fst(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).h){
 case 0: {
  return Builtin_fst(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).a6(arg_5)(arg_3);
  break; }
 default:
  throw new Error('unhandled con case on Prelude/EqOrd.idr:100:3--100:26');
}}, Prelude_Types_countFrom(undefined, arg_2, (arg_5) => {let imp$5fgen_111;
switch(Builtin_snd(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).h){
 case 0: {
  imp$5fgen_111 = Builtin_snd(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).a1;
  break; }
 default:
  throw new Error('unhandled con case on Prelude/Num.idr:26:1--33:76');
}
switch(imp$5fgen_111.h){
 case 0: {
  let imp$5fgen_112;
  switch(Builtin_snd(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).h){
   case 0: {
    imp$5fgen_112 = Builtin_snd(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).a1;
    break; }
   default:
    throw new Error('unhandled con case on Prelude/Num.idr:26:1--33:76');
  }
  let imp$5fgen_113;
  switch(imp$5fgen_112.h){
   case 0: {
    imp$5fgen_113 = imp$5fgen_112.a3(1n);
    break; }
   default:
    throw new Error('unhandled con case on Prelude/Num.idr:22:3--22:30');
  }
  return imp$5fgen_111.a1(arg_5)(imp$5fgen_113);
  break; }
 default:
  throw new Error('unhandled con case on Prelude/Num.idr:19:3--19:23');
}}));
   break; }
  case 1n: {
   let imp$5fgen_114;
   switch(Builtin_fst(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).h){
    case 0: {
     imp$5fgen_114 = Builtin_fst(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).a4(arg_2)(arg_3);
     break; }
    default:
     throw new Error('unhandled con case on Prelude/EqOrd.idr:94:3--94:25');
   }
   return Prelude_Types_case__case$20block$20in$20rangeFromTo_5262(undefined, arg_1, arg_3, arg_2, imp$5fgen_114);
   break; }
  default:
   throw new Error('unhandled const case on :1:1--1:1');
 }
}

function Prelude_Types_case__takeUntil_4755(arg_0, arg_1, arg_2, arg_3, arg_4){//Prelude/Types.idr:890:7--892:34
 switch(arg_4){
  case 0n: {
   return ({h:1, a1: arg_1, a2: ({h:0})});
   break; }
  case 1n: {
   return ({h:1, a1: arg_1, a2: Prelude_Types_takeUntil(undefined, arg_3, arg_2())});
   break; }
  default:
   throw new Error('unhandled const case on Prelude/Types.idr:888:19--888:23');
 }
}

function Prelude_Types_rangeFromTo$5fRange$5f$5f$24a(arg_0, arg_1, arg_2, arg_3){//Prelude/Types.idr:933:1--956:1
 let imp$5fgen_115;
 switch(Builtin_fst(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).h){
  case 0: {
   imp$5fgen_115 = Builtin_fst(undefined, undefined, Builtin_snd(undefined, undefined, arg_1)).a4(arg_3)(arg_2);
   break; }
  default:
   throw new Error('unhandled con case on Prelude/EqOrd.idr:94:3--94:25');
 }
 return Prelude_Types_case__rangeFromTo_5209(undefined, arg_1, arg_2, arg_3, imp$5fgen_115);
}

function Prelude_Types_foldr$5fFoldable$5f$5fList(arg_0, arg_1, arg_2, arg_3, arg_4){//Prelude/Types.idr:323:1--331:7
 switch(arg_4.h){
  case 0: {
   return arg_3;
   break; }
  case 1: {
   return arg_2(arg_4.a1)(Prelude_Types_foldr$5fFoldable$5f$5fList(undefined, undefined, arg_2, arg_3, arg_4.a2));
   break; }
  default:
   throw new Error('unhandled con case on Prelude/Interfaces.idr:210:67--210:73');
 }
}

function Prelude_Types_foldl$5fFoldable$5f$5fList(arg_0, arg_1, arg_2, arg_3, arg_4){//Prelude/Types.idr:323:1--331:7
 function tailRecOptimStep_0(tailRecOptimArgs_0){//:1:1--1:1
  switch(tailRecOptimArgs_0.a5.h){
   case 0: {
    return ({h:1, a1: tailRecOptimArgs_0.a4});
    break; }
   case 1: {
    return ({h:0, a1: undefined, a2: undefined, a3: tailRecOptimArgs_0.a3, a4: tailRecOptimArgs_0.a3(tailRecOptimArgs_0.a4)(tailRecOptimArgs_0.a5.a1), a5: tailRecOptimArgs_0.a5.a2});
    break; }
   default:
    throw new Error('unhandled con case on Prelude/Interfaces.idr:217:67--217:73');
  }
 }

 let tailRecOptimArgs_0 = ({h:0, a1: arg_0, a2: arg_1, a3: arg_2, a4: arg_3, a5: arg_4});
 while(true){
  switch(tailRecOptimArgs_0.h){
   case 0: {
    tailRecOptimArgs_0 = tailRecOptimStep_0(tailRecOptimArgs_0);
    break; }
   default:
    return tailRecOptimArgs_0.a1;
  }
 }
}

function Prelude_Types_compare$5fOrd$5f$5fNat(arg_0, arg_1){//Prelude/Types.idr:70:1--77:7
 switch(arg_0){
  case 0n: {
   let imp$5fgen_116;
   switch(arg_1){
    case 0n: {
     imp$5fgen_116 = 1n;
     break; }
    default:
     imp$5fgen_116 = 0n;
   }
   return imp$5fgen_116;
   break; }
  default:
   const imp$5fgen_119 = (arg_0 - 1n);
   let imp$5fgen_117;
   switch(arg_1){
    case 0n: {
     imp$5fgen_117 = 2n;
     break; }
    default:
     const imp$5fgen_118 = (arg_1 - 1n);
     imp$5fgen_117 = Prelude_Types_compare$5fOrd$5f$5fNat(imp$5fgen_119, imp$5fgen_118);
   }
   return imp$5fgen_117;
 }
}

function Prelude_Types_takeUntil(arg_0, arg_1, arg_2){//Prelude/Types.idr:887:1--889:10
 switch(arg_2.h){
  case 0: {
   return Prelude_Types_case__takeUntil_4755(undefined, arg_2.a1, arg_2.a2, arg_1, arg_1(arg_2.a1));
   break; }
  default:
   throw new Error('unhandled con case on Prelude/Types.idr:888:28--888:36');
 }
}

function Prelude_Types_countFrom(arg_0, arg_1, arg_2){//Prelude/Types.idr:881:1--883:10
 return ({h:0, a1: arg_1, a2: (()=>Prelude_Types_countFrom(undefined, arg_2(arg_1), arg_2))});
}

function Prelude_Types_Strings_$2b$2b(arg_0, arg_1){//Prelude/Types.idr:393:3--395:4
 return (arg_0 + arg_1);
}

function Prelude_Num_case__mod_459(arg_0, arg_1, arg_2){//Prelude/Num.idr:117:9--122:8
 switch(arg_2){
  case 1n: {
   return ((arg_1 % arg_0) % __esPrim_int_bound_63);
   break; }
  default:
   return Builtin_idris$5fcrash(undefined, 'Unhandled input for Prelude.Num.case block in mod at Prelude/Num.idr:116:3--122:8');
 }
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

function Prelude_Num_mod$5fIntegral$5f$5fInt(arg_0, arg_1){//Prelude/Num.idr:111:1--122:8
 return Prelude_Num_case__mod_459(arg_1, arg_0, Prelude_EqOrd_$3d$3d$5fEq$5f$5fInt(arg_1, (0n % __esPrim_int_bound_63)));
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

function Prelude_EqOrd_case__case$20block$20in$20compare_1187(arg_0, arg_1, arg_2){//Prelude/EqOrd.idr:130:39--130:64
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

function Prelude_EqOrd_case__compare_1170(arg_0, arg_1, arg_2){//Prelude/EqOrd.idr:130:17--132:4
 switch(arg_2){
  case 0n: {
   return 0n;
   break; }
  case 1n: {
   return Prelude_EqOrd_case__case$20block$20in$20compare_1187(arg_0, arg_1, Prelude_EqOrd_$3d$3d$5fEq$5f$5fInt(arg_1, arg_0));
   break; }
  default:
   throw new Error('unhandled const case on Prelude/EqOrd.idr:91:21--91:25');
 }
}

function Prelude_EqOrd_case__max_1153(arg_0, arg_1, arg_2){//Prelude/EqOrd.idr:128:1--137:7
 switch(arg_2){
  case 0n: {
   return arg_1;
   break; }
  case 1n: {
   return arg_0;
   break; }
  default:
   throw new Error('unhandled const case on Prelude/EqOrd.idr:94:21--94:25');
 }
}

function Prelude_EqOrd_case__min_1139(arg_0, arg_1, arg_2){//Prelude/EqOrd.idr:128:1--137:7
 switch(arg_2){
  case 0n: {
   return arg_1;
   break; }
  case 1n: {
   return arg_0;
   break; }
  default:
   throw new Error('unhandled const case on Prelude/EqOrd.idr:91:21--91:25');
 }
}

function Prelude_EqOrd_min$5fOrd$5f$5fInt(arg_0, arg_1){//Prelude/EqOrd.idr:128:1--137:7
 return Prelude_EqOrd_case__min_1139(arg_1, arg_0, Prelude_EqOrd_$3c$5fOrd$5f$5fInt(arg_0, arg_1));
}

function Prelude_EqOrd_max$5fOrd$5f$5fInt(arg_0, arg_1){//Prelude/EqOrd.idr:128:1--137:7
 return Prelude_EqOrd_case__max_1153(arg_1, arg_0, Prelude_EqOrd_$3e$5fOrd$5f$5fInt(arg_0, arg_1));
}

function Prelude_EqOrd_compare$5fOrd$5f$5fInteger(arg_0, arg_1){//Prelude/EqOrd.idr:137:1--146:7
 return Prelude_EqOrd_case__compare_1284(arg_1, arg_0, Prelude_EqOrd_$3c$5fOrd$5f$5fInteger(arg_0, arg_1));
}

function Prelude_EqOrd_compare$5fOrd$5f$5fInt(arg_0, arg_1){//Prelude/EqOrd.idr:128:1--137:7
 return Prelude_EqOrd_case__compare_1170(arg_1, arg_0, Prelude_EqOrd_$3c$5fOrd$5f$5fInt(arg_0, arg_1));
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

function Prelude_EqOrd_$3e$3d$5fOrd$5f$5fInt(arg_0, arg_1){//Prelude/EqOrd.idr:128:1--137:7
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
   let imp$5fgen_120;
   switch(arg_1){
    case 0n: {
     imp$5fgen_120 = 0n;
     break; }
    default:
     imp$5fgen_120 = 1n;
   }
   return imp$5fgen_120;
   break; }
  case 1n: {
   let imp$5fgen_121;
   switch(arg_1){
    case 1n: {
     imp$5fgen_121 = 0n;
     break; }
    default:
     imp$5fgen_121 = 1n;
   }
   return imp$5fgen_121;
   break; }
  case 2n: {
   let imp$5fgen_122;
   switch(arg_1){
    case 2n: {
     imp$5fgen_122 = 0n;
     break; }
    default:
     imp$5fgen_122 = 1n;
   }
   return imp$5fgen_122;
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

function Prelude_EqOrd_$3c$3d$5fOrd$5f$5fInt(arg_0, arg_1){//Prelude/EqOrd.idr:128:1--137:7
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

function Prelude_EqOrd_$2f$3d$5fEq$5f$5fInt(arg_0, arg_1){//Prelude/EqOrd.idr:36:1--40:7
 return Prelude_Basics_not(Prelude_EqOrd_$3d$3d$5fEq$5f$5fInt(arg_0, arg_1));
}

function Prelude_Interfaces_traverse$5f(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5){//Prelude/Interfaces.idr:285:1--289:10
 switch(Builtin_fst(undefined, undefined, arg_4).h){
  case 0: {
   return (arg_6) => {let imp$5fgen_123;
switch(Builtin_snd(undefined, undefined, arg_4).h){
 case 0: {
  imp$5fgen_123 = Builtin_snd(undefined, undefined, arg_4).a2(undefined)(({h:0}));
  break; }
 default:
  throw new Error('unhandled con case on Prelude/Interfaces.idr:145:3--145:18');
}
return Builtin_fst(undefined, undefined, arg_4).a1(undefined)(undefined)((eta_0) => {return (eta_1) => {return Prelude_Interfaces_$2a$3e(undefined, undefined, undefined, Builtin_snd(undefined, undefined, arg_4), arg_5(eta_0), eta_1);};})(imp$5fgen_123)(arg_6);};
   break; }
  default:
   throw new Error('unhandled con case on Prelude/Interfaces.idr:210:3--210:81');
 }
}

function Prelude_Interfaces_$2a$3e(arg_0, arg_1, arg_2, arg_3, arg_4, arg_5){//Prelude/Interfaces.idr:152:1--154:2
 switch(arg_3.h){
  case 0: {
   let imp$5fgen_124;
   switch(arg_3.h){
    case 0: {
     imp$5fgen_124 = arg_3.a1(undefined)(undefined)((eta_0) => {return (eta_1) => {return eta_1;};})(arg_4);
     break; }
    default:
     throw new Error('unhandled con case on Prelude/Interfaces.idr:143:1--148:7');
   }
   return arg_3.a3(undefined)(undefined)(imp$5fgen_124)(arg_5);
   break; }
  default:
   throw new Error('unhandled con case on Prelude/Interfaces.idr:146:3--146:35');
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

function Prelude_Show_show$5fShow$5f$5fInt(arg_0){//Prelude/Show.idr:102:1--106:7
 return Prelude_Show_showPrec$5fShow$5f$5fInt(({h:0}), arg_0);
}

function Prelude_Show_showPrec$5fShow$5f$5fInt(ext_0, ext_1){//Prelude/Show.idr:102:1--106:7
 return Prelude_Show_primNumShow(undefined, (eta_0) => {return (''+eta_0);}, ext_0, ext_1);
}

function Prelude_Show_compare$5fOrd$5f$5fPrec(arg_0, arg_1){//Prelude/Show.idr:36:1--41:58
 switch(arg_0.h){
  case 4: {
   let imp$5fgen_125;
   switch(arg_1.h){
    case 4: {
     imp$5fgen_125 = Prelude_Types_compare$5fOrd$5f$5fNat(arg_0.a1, arg_1.a1);
     break; }
    default:
     imp$5fgen_125 = Prelude_EqOrd_compare$5fOrd$5f$5fInteger(Prelude_Show_precCon(arg_0), Prelude_Show_precCon(arg_1));
   }
   return imp$5fgen_125;
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

function Prelude_Show_primNumShow(arg_0, arg_1, arg_2, arg_3){//Prelude/Show.idr:99:1--100:12
 const imp$5fgen_126 = arg_1(arg_3);
 return Prelude_Show_showParens(Prelude_Basics_$26$26(Prelude_Show_$3e$3d$5fOrd$5f$5fPrec(arg_2, ({h:5})), (()=>Prelude_Show_firstCharIs((arg_4) => {return Prelude_EqOrd_$3d$3d$5fEq$5f$5fChar(arg_4, '-');}, imp$5fgen_126))), imp$5fgen_126);
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
 const imp$5fgen_127 = arg_3(ext_0);
 return arg_2(imp$5fgen_127);
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