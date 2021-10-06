let bingoCard;
    
let cardNumbers = numGenerator(1, 75);

let users = [];
let sortedArray = sortArray(users);
let turnCount = 1;
let username = getUsername();

let numbers = numGenerator(1, 75);


let lineCount = 0;

function bingo() {
    pointsSystem();
    cardGenerator();
    printCard();
    newRound();
}

function pointsSystem() {
    alert('La puntuacion final se calcula en base al numero de rondas que has necesitado para terminar el juego, cuanto mas rondas, menos puntos. Suerte !')
}

// guardar nombre usuario
function getUsername() {
    let username = prompt('Introduzca su nombre de usuario :');
    alert('Bienvenido ' + username + ' !' );
    return username;
}

// sacar numero bingo
function getRandomNumber(min, max) {
    
    let randomNum = Math.round(Math.random() * (max - min) + min);
    let newNum = numbers[randomNum];
    for (i=0; i < numbers.length; i++) {
        if ( newNum === numbers[i]) {
            numbers.splice(randomNum, 1);
            
            return newNum;
        } else if (numbers.length === 0) {
            alert('El juego ha acabado !');
        }   
    }
}

// nueva ronda 
function newRound() {
    let randomNumber = getRandomNumber(0, numbers.length - 1);
    alert('Numero : ' + randomNumber);
    for (i = 0; i < bingoCard.length; i++) {
        if (bingoCard[i].number === randomNumber ) {
            bingoCard[i].matched = true;
            break;
        }    
    }
    if (checkLine() === true ) {
        alert('Linea !');
        printCard();
        askNewRound();
    } else if (bingoCard.every(checkBingo)) {
        alert('Bingo !');
        printCard();
        finishGame();
    } else {
    printCard();
    askNewRound();
    
    }
}

// preguntar nueva ronda
function askNewRound() {
    let ask = confirm('Pasar al siguiente turno ?');
    
        if (ask && numbers.length !== 0 ) {
            turnCount = turnCount + 1;
            newRound();
        } else if (ask && numbers.length === 0) {
            printCard();
        }
    
}

// comprobar bingo
function checkBingo(number, index, array) {
    return number.matched === true;
}

// funcion comprobar linea
function checkLine() {

    let line1 = bingoCard.slice(0, 5);
    let line2 = bingoCard.slice(5, 10);
    let line3 = bingoCard.slice(10, 15);

    if (line1.every(checkBingo) && lineCount === 0) {
        lineCount++
        return true;
        } else if (line2.every(checkBingo) && lineCount === 0) {
        lineCount++;
        return true;
        } else if (line3.every(checkBingo) && lineCount === 0) {
        lineCount++;
        return true;
        } else {
            return false;
        }  
}

// finalizar juego
function finishGame() {
    alert('Se acabo el juego !');
    console.log('Ha terminado la partida en ' + turnCount + ' rondas !');
    rankPlayers();
   let newGame = prompt('Quiere volver a jugar ? si / no');
   if (newGame === 'si') {
       cardNumbers = numGenerator(1, 75);
       numbers = numGenerator(1, 75);
       turnCount = 1;
       lineCount = 0;
       username = getUsername();
       bingo();
   } else {
       alert('Hasta otra !');
   }
}

// imprimir carton
function printCard() {
    console.log('Carton :')
    for (i=0; i < 5; i++) {
        if (bingoCard[i].matched === true) {
            console.log(`Numero ${bingoCard[i].number} : X`)
        } else {
            console.log(`Numero ${bingoCard[i].number} : O`)
        }
    }
    console.log('\n');
    for (i=5; i < 10; i++) {
        if (bingoCard[i].matched === true) {
            console.log(`Numero ${bingoCard[i].number} : X`)
        } else {
            console.log(`Numero ${bingoCard[i].number} : O`)
        }
    }
    console.log('\n');
    for (i=10; i < 15; i++) {
        if (bingoCard[i].matched === true) {
            console.log(`Numero ${bingoCard[i].number} : X`)
        } else {
            console.log(`Numero ${bingoCard[i].number} : O`)
        }
    }
    console.log('\n');
}

// crear carton 
function cardGenerator() {
    alert('Este es su carton !');
    let newCard = [
                    //linea 1
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    //linea 2
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    // linea 3
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false},
                    {number: generateRandomNumber() , matched: false}
                 ];
   
    bingoCard = newCard;
    printCard();

    let nextCarton = prompt('Quiere un carton nuevo ? si / no');
    if ( nextCarton === 'si') {
        cardNumbers.splice(0, cardNumbers.length);
        cardNumbers = numGenerator(1, 75);
        cardGenerator();
    }   else {
        alert('Empieza el juego !');
        return;
    }
}

// crear array numeros
function numGenerator(start, end) { 
let myArray = [];

for (i=start; i<= end; i++) {
    myArray.push(i);
        }
return myArray
}

// generar numero aleatorio
function generateRandomNumber() {
    let randomIndex = Math.round(Math.random() * ((cardNumbers.length -1) - 0) + 0);
    let randomNumber = cardNumbers[randomIndex];
    cardNumbers.splice(randomIndex, 1);
    return randomNumber;
}


function rankPlayers() {
    rank(username);
    sortArray(users);
    showRankings();
}

// ordenar array usuarios
function sortArray(array) {
array.sort(function (a, b) {return b.points - a.points});
array.forEach(function(element) { element.rankPos = users.indexOf(element) + 1;});
return array;
}

// guardar usuario y puntuacion
function rank(username) {
    let rankUser = {
        name: username,
        turns: turnCount,
        points: pointConversor(),
        }
    users.push(rankUser);
}

// mostrar ranking de usuarios
function showRankings() {
    for (i = 0; i < users.length; i++) {
        console.log(`El usuario ${sortedArray[i].name} ha terminado la partida en ${sortedArray[i].turns} turnos y ocupa la posicion ${sortedArray[i].rankPos} con ${sortedArray[i].points} puntos !`)
    }
}

// convertir turnos a puntuacion
function pointConversor() {
    let points = turnCount;    
    let score = Math.round(75 / points * 100);
    return score;
           
}

bingo();