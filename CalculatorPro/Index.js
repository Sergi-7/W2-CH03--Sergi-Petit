let numbers = [];

function calculatorPro() {

    getInputNumbers();
    numbersOperations();
    moreOperations();
    
};

function getInputNumbers() {
    
    let number = '';
        do {
        number = prompt('Introduzca un numero');
        if( isNaN(parseInt(number)) === true && number !== null) {
            console.log('Deberias introducir solo numeros !');
            break;
        } else if ( number === null) {
            break;
        } else {
        numbers.push(parseInt(number));
            }
        } while ( number !== null );
};

function numbersOperations() {
        if (numbers.length > 0) {
        let resultSume = numbers[0];
        let resultRest = numbers[0];
        let resultMult = numbers[0];
        let resultDiv = numbers[0];
        
        if (numbers.length === 1 && typeof numbers[0] == 'number') {
        console.log(`La raíz cuadrada de ${numbers[0]} es: ${Number.isInteger(Math.sqrt(numbers[0])) ? Math.sqrt(numbers[0]) : Math.sqrt(numbers[0]).toFixed(3)}.`);
        } else {
            for (i = 1; i < numbers.length; i++) {
            resultSume = resultSume + numbers[i];
            resultRest = resultRest - numbers[i];
            resultMult = resultMult * numbers[i];
            resultDiv = resultDiv / numbers[i];
            }
            console.log(`El resultado de la suma es : ${Number.isInteger(resultSume) ? resultSume : resultSume.toFixed(3)}.`);
            console.log(`El resultado de la resta es : ${Number.isInteger(resultRest) ? resultRest : resultRest.toFixed(3)}.`);
            console.log(`El resultado de la multiplicación es : ${Number.isInteger(resultMult) ? resultMult : resultMult.toFixed(3)}.`);
            console.log(`El resultado de la división es : ${Number.isInteger(resultDiv) ? resultDiv : resultDiv.toFixed(3)}.`);
        }
    
    }
};

function moreOperations() {
    let moreOps = prompt('Quiere realizar mas operaciones ? si / no')
        if (moreOps === 'si') {
            resetArray(numbers);
            calculatorPro();
            
        } else {
            console.log('Hasta otra !');
        }

};

function resetArray(arr) {
    arr.splice(0, arr.length);
}
calculatorPro();