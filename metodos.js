const math = require('mathjs')

function ResolverPolinomio() {

// pega os dados da interface e organiza em operações polinomiais
function f(x=1) {
    // a*x**5 + b*x**4 + c*x**3 + d*x**2 + e*x + f = f(x)
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let d = parseFloat(document.getElementById('d').value)
    let e = parseFloat(document.getElementById('e').value)
    let f = parseFloat(document.getElementById('f').value)
    return a*x**5 + b*x**4 + c*x**3 + d*x**2 + e*x + f
}

function df(x=1) {
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let d = parseFloat(document.getElementById('d').value)
    let e = parseFloat(document.getElementById('e').value)
    return (5*a)*x**4 + (4*b)*x**3 + (3*c)*x**2 + (2*d)*x + e
}


/*var x0 = 1.5; var eps1 = 0.0001; var eps2  = eps1; var maxiter = 100; var xk = 0; var lista = []; var iter = 0;

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

console.log(lista, iter)*/

var p = document.getElementById("dados");
    p.innerText = p.innerText +  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis hic fugit est officiis aliquam neque natus consequuntur deserunt minima assumenda perferendis eveniet dolorum, quasi numquam laboriosam ullam deleniti. Aperiam?\n";
}