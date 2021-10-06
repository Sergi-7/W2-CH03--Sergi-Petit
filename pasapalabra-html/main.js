const questions = [
  {
    letter: "a",
    answer: ["abducir", "america", "afluente"],
    status: 0,
    question: [
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      "CON LA A. Steve Rogers era el capitan",
      "CON LA A. Río que desemboca en otro río",
    ],
  },
  {
    letter: "b",
    answer: ["bingo", "biografia", "bale"],
    status: 0,
    question: [
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
      "CON LA B. Contar la vida de una persona por escrito",
      "CON LA B. Apellido de un jugador galés del Real Madrid",
    ],
  },
  {
    letter: "c",
    answer: ["churumbel", "cono", "corazon"],
    status: 0,
    question: [
      "CON LA C. Niño, crío, bebé",
      "CON LA C. Material que se utiliza en los entrenamientos para delimitar espacios",
      "CON LA C. Órgano musculoso y hueco que bombea la sangre para que llegue a todo el organismo",
    ],
  },
  {
    letter: "d",
    answer: ["diarrea", "diferencia", "diccionario"],
    status: 0,
    question: [
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
      "CON LA D. El resultado de restar un numero de otro",
      "CON LA D. Libro en el que aparece el significado de las palabras por orden alfabético",
    ],
  },
  {
    letter: "e",
    answer: ["ectoplasma", "elefante", "euro"],
    status: 0,
    question: [
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
      "CON LA E. Es un animal con unas grandes orejas",
      "CON LA E. Moneda única europea",
    ],
  },
  {
    letter: "f",
    answer: ["facil", "fosiles", "feudos"],
    status: 0,
    question: [
      "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
      "CON LA F. Restos de seres vivos que vivieron hace millones de años",
      "CON LA F. Grandes territorios organizados cerca de un castillo",
    ],
  },
  {
    letter: "g",
    answer: ["galaxia", "galaxia", "greenwich"],
    status: 0,
    question: [
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      "CON LA G. Guardianes de la",
      "Nombre del Meridiano cero",
    ],
  },
  {
    letter: "h",
    answer: ["harakiri", "hipocentro", "homo"],
    status: 0,
    question: [
      "CON LA H. Suicidio ritual japonés por desentrañamiento",
      "CON LA H. Nombre del punto concreto del interior de la Tierra dónde se produce un terremoto",
      "CON LA H. El sapiens lo era",
    ],
  },
  {
    letter: "i",
    answer: ["iglesia", "iron man", "islam"],
    status: 0,
    question: [
      "CON LA I. Templo cristiano",
      "CON LA I. Superheroe famoso al que interpreta Robert Downey Jr.",
      "CON LA I. Religión de los árabes",
    ],
  },
  {
    letter: "j",
    answer: ["jabali", "jupiter", "jordan"],
    status: 0,
    question: [
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
      "CON LA J. Planeta alejado del sol y formado por gases",
      "CON LA J. Apellido del mejor jugador de baloncesto de la Historia",
    ],
  },
  {
    letter: "k",
    answer: ["kamikaze", "koala", "kilovatio"],
    status: 0,
    question: [
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
      "CON LA K. Animal mamífero que vive en Australia",
      "CON LA K. Medida de potencia de la energía eléctrica",
    ],
  },
  {
    letter: "l",
    answer: ["licantropo", "lobezno", "latin"],
    status: 0,
    question: [
      "CON LA L. Hombre lobo",
      "CON LA L. Superheroe famoso interpretado por Hugh Jackman",
      "CON LA L. Lengua utilizada en el imperio romano",
    ],
  },
  {
    letter: "m",
    answer: ["misantropo", "marvel", "matrix"],
    status: 0,
    question: [
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
      "CON LA M. Uno de los mejores universos cinematograficos actuales",
      "CON LA M. Realidad virtual creada por maquinas para esclavizar a la humanidad",
    ],
  },
  {
    letter: "n",
    answer: ["necedad", "neo", "nomadas"],
    status: 0,
    question: [
      "CON LA N. Demostración de poca inteligencia",
      "CON LA N. El elegido, personaje interpretado por Keanu Reeves",
      "CON LA N. Personas que no tienen una residencia fija",
    ],
  },
  {
    letter: "ñ",
    answer: ["señal", "ñu", "caña"],
    status: 0,
    question: [
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      "CON LA Ñ. Animal mamífero propio de África",
      "CONTIENE LA Ñ. Artilugio que se utiliza para la pesca deportiva",
    ],
  },
  {
    letter: "o",
    answer: ["orco", "olimpiadas", "oro"],
    status: 0,
    question: [
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
      "CON LA O. Competición deportiva que se celebra cada cuatro años",
      "CON LA O. Medalla que se entrega al primer clasificado en cualquier competición deportiva ",
    ],
  },
  {
    letter: "p",
    answer: ["protoss", "petanca", "powerlifting"],
    status: 0,
    question: [
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
      "CON LA P. Juego que consiste en acercar las bolas al boliche",
      "CON LA P. Deporte de fuerza que consiste en tres eventos: Press Banca, Sentadilla y Peso Muerto",
    ],
  },
  {
    letter: "q",
    answer: ["queso", "question", "enclenque"],
    status: 0,
    question: [
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
      "CON LA Q. Pregunta en inglés",
      "CONTIENE LA Q. Dícese de la persona débil, enfermiza, muy flaca",
    ],
  },
  {
    letter: "r",
    answer: ["raton", "ragnar", "ragnarok"],
    status: 0,
    question: [
      "CON LA R. Roedor",
      "CON LA R. Rey legendario de Noruega, Suecia y Dinamarca que reinó en el siglo VIII",
      "CON LA R. Fin del mundo en la mitologia nordica",
    ],
  },
  {
    letter: "s",
    answer: ["stackoverflow", "strange", "stollen"],
    status: 0,
    question: [
      "CON LA S. Comunidad salvadora de todo desarrollador informático",
      "CON LA S. Apellido del doctor que se convierte en hechizero del Universo Cinematografico de Marvel",
      "CON LA S. Pan dulce aleman servido como postre en Navidad",
    ],
  },
  {
    letter: "t",
    answer: ["terminator", "thor", "thanos"],
    status: 0,
    question: [
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      "CON LA T. En la mitologia nordica, el dios del trueno",
      "CON LA T. Villano que elimina a medio universo chasqueando los dedos",
    ],
  },
  {
    letter: "u",
    answer: ["unamuno", "urano", "ultron"],
    status: 0,
    question: [
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      "CON LA U. Planeta alejado del sol",
      "CON LA U. Villano de la segunda pelicula de los Vengadores",
    ],
  },
  {
    letter: "v",
    answer: ["vikingos", "valhalla", "vision"],
    status: 0,
    question: [
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      "CON LA V. Gran salon al que todo vikingo queria llegar una vez muerto",
      "CON LA V. Superheroe creado con una de las gemas del infinito",
    ],
  },
  {
    letter: "w",
    answer: ["wick", "wanda", "watson"],
    status: 0,
    question: [
      "CONTIENE LA W. Apellido del asesino conocido como Baba yaga o hombre del saco",
      "CON LA W. Nombre de la superheroina conocida como la bruja escarlata",
      "CON LA W. Apellido del compañero de Sherlock Holmes",
    ],
  },
  {
    letter: "x",
    answer: ["botox", "x-men", "exiliado"],
    status: 0,
    question: [
      "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
      "CON LA X. Grupo de mutantes creados en el universo de Marvel",
      "CONTIENE LA X. Persona que abandona su pais por motivos políticos",
    ],
  },
  {
    letter: "y",
    answer: ["peyote", "yo", "kayak"],
    status: 0,
    question: [
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos",
      "CON LA Y. Pronombre personal, 1ª persona del singular",
      "CONTIENE LA Y. Embarcación que se utiliza en aguas bravas",
    ],
  },
  {
    letter: "z",
    answer: ["zen", "zidane", "zebra"],
    status: 0,
    question: [
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      "CON LA Z. Jugador francés campeón del Mundial de Francia de 1998",
      "CON LA Z. Animal con rayas blancas y negras",
    ],
  },
];

const questionsList = document
  .getElementById("circle")
  .querySelectorAll(".letter");
const start = document.getElementById("start");
const pasapalabra = document.getElementById("pasapalabra");
const showQuestion = document.getElementById("question");
const submitBtn = document.getElementById("submit");
const resultWindow = document.getElementById("result");
const respuesta = document.getElementById("respuesta");
const enviarBtn = document.getElementById("enviar");
const ranking = document.getElementById("ranking");
const timer = document.getElementById("timer");

start.addEventListener("click", startGame);
pasapalabra.addEventListener("click", pasapalabraLog);
submitBtn.addEventListener("click", submit);
respuesta.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    submit();
  }
});
enviarBtn.addEventListener("click", getUsername);

let randomQuestions = questions.map(getAnswerAndQuestion);
let currentIndex = 0;
let countTrue = 0;
let countFalse = 0;

let count;
let counter;

let username;

const users = [];
let sortedUsers;

function getUsername() {
  const getUsername = document.getElementById("usuario").value;
  username = getUsername;
  showQuestion.innerText = `Bienvenido ${username} ! Haz click en "Empezar el juego!" para comenzar !`;
}

// crear nuevo array con pregunta y respuesta escogida
function getAnswerAndQuestion(item) {
  const i = Math.floor(Math.random() * 3);
  const newQuestion = {
    letter: item.letter,
    answer: item.answer[i],
    status: item.status,
    question: item.question[i],
  };
  return newQuestion;
}

function startGame() {
  randomQuestions = questions.map(getAnswerAndQuestion);
  currentIndex = 0;
  countTrue = 0;
  countFalse = 0;
  questionsList.forEach(
    (question) =>
      (question.style.background =
        "linear-gradient(to right, #1d0555, #487e99)")
  );
  showQuestion.innerText = randomQuestions[currentIndex].question;
  start.style.display = "none";
  ranking.style.display = "none";
  count = 200;
  counter = setInterval(countDown, 1000);
}

function nextTurn() {
  if (currentIndex === randomQuestions.length - 1) {
    /* if (randomQuestions.some(function check(question) { return question.status === 0}) === true) {
      currentIndex=0 } */
    if (randomQuestions.some((question) => question.status === 0) === true) {
      currentIndex = 0;
      showQuestion.innerText = randomQuestions[currentIndex].question;
    }
  } else if (randomQuestions[currentIndex].status === 0) {
    // currentIndex++;
    // showQuestion.innerText = randomQuestions[currentIndex].question;
    const nextQuestion = randomQuestions.findIndex(
      (question, index) => index > currentIndex && question.status === 0
    );
    currentIndex = nextQuestion;
    showQuestion.innerText = randomQuestions[currentIndex].question;
    console.log(randomQuestions);
  }

  if (randomQuestions.some((question) => question.status === 0) === false) {
    clearInterval(counter);
    document.getElementById("timer").innerHTML = 0;
    start.innerText = "Volver a jugar !";
    start.style.display = "inline-block";
    showQuestion.innerText = `Se acabo el juego ! Has terminado la partida con ${countTrue} aciertos y ${countFalse} errores !`;
    rankPlayers();
  }

  /* if (randomQuestions[currentIndex].status === 0 ) {
  //currentIndex++;
  //showQuestion.innerText = randomQuestions[currentIndex].question;
  let nextQuestion = randomQuestions.findIndex((question, index) => index > currentIndex && question.status === 0);
  currentIndex = nextQuestion;
  showQuestion.innerText = randomQuestions[currentIndex].question;
  console.log(randomQuestions);
  } */

  if (randomQuestions[currentIndex].status !== 0) {
    const nextQuestion = randomQuestions.findIndex(
      (question, index) => index >= currentIndex && question.status === 0
    );
    currentIndex = nextQuestion;
    showQuestion.innerText = randomQuestions[currentIndex].question;
  }
  console.log(currentIndex);
}

function pasapalabraLog() {
  if (currentIndex === randomQuestions.length - 1) {
    if (
      randomQuestions.some((question) => question.status === 0) === true &&
      randomQuestions[0].status === 0
    ) {
      currentIndex = 0;
      showQuestion.innerText = randomQuestions[currentIndex].question;
    } else if (
      randomQuestions.some((question) => question.status === 0) === true
    ) {
      currentIndex = 0;
      const nextQuestion = randomQuestions.findIndex(
        (question, index) => index > currentIndex && question.status === 0
      );
      currentIndex = nextQuestion;
      showQuestion.innerText = randomQuestions[currentIndex].question;
      console.log(currentIndex);
    }
  } else {
    const nextQuestion = randomQuestions.findIndex(
      (question, index) => index > currentIndex && question.status === 0
    );
    currentIndex = nextQuestion;
    showQuestion.innerText = randomQuestions[currentIndex].question;
    console.log(currentIndex);
  }
}

function submit() {
  getInputValue();
  respuesta.value = "";
  nextTurn();
}

function getInputValue() {
  const answer = document.getElementById("respuesta").value;
  checkAnswer(answer);
}

function checkAnswer(answer) {
  if (answer.toLowerCase() === randomQuestions[currentIndex].answer) {
    resultWindow.innerText = "Correcto !";
    questionsList[currentIndex].style.background =
      "linear-gradient(to right, #053509, #129c0d)";
    randomQuestions[currentIndex].status = 1;
    countTrue++;
  } else {
    resultWindow.innerText = `Incorrecto, la respuesta correcta era : ${randomQuestions[currentIndex].answer}`;
    questionsList[currentIndex].style.background =
      "linear-gradient(to right, #5e0909, #ff0000)";
    randomQuestions[currentIndex].status = 2;
    countFalse++;
  }
}

function rankPlayers() {
  rank(username);
  sortedUsers = sortArray(users);
  showRankings();
  start.style.display = "inline-block";
  start.innerText = "Volver a jugar";
  document.getElementById("usuario").innerText = "";
}

function rank(username) {
  const rankUser = {
    name: username,
    correctAns: countTrue,
    failedAns: countFalse,
  };
  users.push(rankUser);
}

function sortArray(array) {
  array.sort((a, b) => b.correctAns - a.correctAns);
  array.forEach((element) => {
    element.rankPos = users.indexOf(element) + 1;
  });
  return array;
}

function showRankings() {
  ranking.style.display = "inline-block";
  ranking.innerText = "RANKING :" + "\n";
  for (i = 0; i < sortedUsers.length; i++) {
    ranking.innerText =
      `${ranking.innerText}${sortedUsers[i].rankPos} posicion - ${sortedUsers[i].name} : ${sortedUsers[i].correctAns} aciertos ${sortedUsers[i].failedAns} fallos.` +
      `\n`;
  }
}

function countDown() {
  count -= 1;
  if (count <= 0) {
    document.getElementById("timer").innerHTML = 0;
    clearInterval(counter);
    start.innerText = "Volver a jugar !";
    start.style.display = "inline-block";
    showQuestion.innerText = `Se acabo el juego ! Has terminado la partida con ${countTrue} aciertos y ${countFalse} errores !`;
    rankPlayers();
    return;
  }
  document.getElementById("timer").innerHTML = count;
}
