const math = require('mathjs')

function f(x) {
    return x**3 - 9*x + 3
}

function df(x) {
    return 3*x**2 - 9
}

var x0 = 1.5; var eps1 = 0.0001; var eps2  = eps1; var maxiter = 100; var xk = 0; var lista = []; var iter = 0;

while ( math.abs(f(x0)) > eps1 && iter <= maxiter) {
    
    xk = x0 - f(x0)/df(x0);

    lista.push(xk)
    
    if(math.abs(f(x0)) < eps1 || math.abs(xk - x0) < eps2){
        break;
    }else{
        x0 = xk
    };
    
    iter = iter + 1;
}

console.log(lista, iter)
