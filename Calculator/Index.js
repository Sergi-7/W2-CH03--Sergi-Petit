

function calculator(x, y) {
  let resultSum = x + y;
  let resultRest = x - y;
  let resultMult = x * y;
  let resultDiv = x / y;
  if (arguments.length === 1 && typeof x == 'number') {
    console.log(`La raíz cuadrada de ${x} es: ${Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : Math.sqrt(x).toFixed(3)}.`);
  } else if (typeof x !== 'number' || typeof y !== 'number') {
    console.log('Deberias introducir solo numeros.');
  } else {
console.log(`El resultado de la suma es : ${Number.isInteger(resultSum) ? resultSum : resultSum.toFixed(3)}.`);
console.log(`El resultado de la resta es : ${Number.isInteger(resultRest) ? resultRest : resultRest.toFixed(3)}.`);
console.log(`El resultado de la multiplicación es : ${Number.isInteger(resultMult) ? resultMult : resultMult.toFixed(3)}.`);
console.log(`El resultado de la división es : ${Number.isInteger(resultDiv) ? resultDiv : resultDiv.toFixed(3)}.`);
  };
}

calculator(5, 5);




