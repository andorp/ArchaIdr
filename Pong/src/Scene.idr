module Scene

public export
data Scene : Type where
  Empty      : (w : Int) -> (h : Int) -> Scene
  Player1Won : (w : Int) -> (h : Int) -> Scene
  Player2Won : (w : Int) -> (h : Int) -> Scene
  InGame : (w : Int)
        -> (h : Int)
        -> (paddle1 : (Int,Int))
        -> (paddle2 : (Int,Int))
        -> (ball : (Int,Int))
        -> (score1 : Int)
        -> (score2 : Int)
        -> Scene
