//incopleto
testTruthy (true)
testTruthy (false) 
testTruthy (new Boolean(false))
testTruthy ("")
testTruthy ("Bom dia")
testTruthy (new string(""))
testTruthy (1)
testTruthy (-1)
testTruthy (NaN)
testTruthy (new Number(NaN))
var obj = {name: "Joao"}
testTruthy (obj)
testTruthy (obj.name)
testTruthy (obj.age)