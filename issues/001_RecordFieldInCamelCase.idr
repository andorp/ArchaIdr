record Velocity where
  constructor MkVelocity
  DX : Int
  DY : Int

record State where
  constructor MkState
  Width     : Int
  Height    : Int
  Velocity  : Velocity

testRecordUpdate : State -> State
testRecordUpdate s = record { Velocity->DX = 1 } s
