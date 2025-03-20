const funcx = console.log

// Função IIFE (Immediately Invoked Function Expression / função anônima, imediata)
funcx(

  (function calc(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
  })(321, 123, "*")

  /* let resultado = calc(1, 2, "+");
console.log(resultado); */

);

    let calculo = (n1, n2, operador) => {
        return eval(`${n1} ${operador} ${n2}`);
    }