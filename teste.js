const math = require('mathjs')

function f(x) {
    // a*x**5 + b*x**4 + c*x**3 + d*x**2 + e*x + f = f(x)
    let a = 2; //parseFloat(document.getElementById('a').value)
    let b = 4; //parseFloat(document.getElementById('b').value)
    let c = -3; //parseFloat(document.getElementById('c').value)
    let d = -1; //parseFloat(document.getElementById('d').value)
    let e = 5; //parseFloat(document.getElementById('e').value)
    let f = 1; //parseFloat(document.getElementById('f').value)
    // retorna [operação , string]
    return a*x**5 + b*x**4 + c*x**3 + d*x**2 + e*x + f
}

function df(x) {
    let a = 2; //parseFloat(document.getElementById('a').value)
    let b = 4; //parseFloat(document.getElementById('b').value)
    let c = -3; //parseFloat(document.getElementById('c').value)
    let d = -1; //parseFloat(document.getElementById('d').value)
    let e = 5; //parseFloat(document.getElementById('e').value)
    // retorna [operação , string]
    return (5*a)*x**4 + (4*b)*x**3 + (3*c)*x**2 + (2*d)*x + e
}

console.log(f(2), df(2))