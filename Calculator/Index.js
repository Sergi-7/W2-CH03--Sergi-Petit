module.exports = calculator;

function calculator(x, y) {
  const resultSum = x + y;
  const resultRest = x - y;
  const resultMult = x * y;
  const resultDiv = x / y;
  if (arguments.length === 1 && typeof x === "number") {
    console.log(
      `La raíz cuadrada de ${x} es: ${
        Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : Math.sqrt(x).toFixed(3)
      }.`
    );
  } else if (typeof x !== "number" || typeof y !== "number") {
    console.log("Deberias introducir solo numeros.");
  } else {
    console.log(
      `El resultado de la suma es : ${
        Number.isInteger(resultSum) ? resultSum : resultSum.toFixed(3)
      }.`
    );
    console.log(
      `El resultado de la resta es : ${
        Number.isInteger(resultRest) ? resultRest : resultRest.toFixed(3)
      }.`
    );
    console.log(
      `El resultado de la multiplicación es : ${
        Number.isInteger(resultMult) ? resultMult : resultMult.toFixed(3)
      }.`
    );
    console.log(
      `El resultado de la división es : ${
        Number.isInteger(resultDiv) ? resultDiv : resultDiv.toFixed(3)
      }.`
    );
  }
  return resultSum;
}

calculator(5, 5);
