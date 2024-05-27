const math = require('mathjs')



function f(x) {
    return x**3 - 9*x + 3
}

function df(x) {
    return 3*x**2 - 9
}


const x = math.range(5.0, 20.0 , 0.1).toArray();
console.log(x)


var x0 = 1.5; var eps1 = 0.1; var eps2  = eps1; var maxiter = 20;
var lista = []
var iter = 0

while (math.abs(f(x0))>eps1 && iter<=maxiter) {
    console.log(`[${x0}]`)

}
