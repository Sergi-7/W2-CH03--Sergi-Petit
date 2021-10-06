let flights = [
  { id: 00, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 01, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 02, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 03, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 04, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 05, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 06, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 07, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 08, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 09, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function skylabAirlines() {
  getUsername();
  flightsList();
  getAveragePrice();
  getScaleFlights();
  getLastFiveFlights();
  adminOrUser();
}

function getUsername() {
  let username = prompt("Introduzca su nombre de usuario");
  if (typeof username === "string") {
    console.log(`Bienvenido a Skylab Airlines ${username} ! `);
  } else if (username === null) {
    console.log("Introduzca un nombre de usuario valido.");
    getUsername();
  }
}

function flightsList() {
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      console.log(
        `El vuelo ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala.`
      );
    } else {
      console.log(
        `El vuelo ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza escala.`
      );
    }
  }
  console.log("\n");
}

function getAveragePrice() {
  let totalPrice = 0;
  for (let i = 0; i < flights.length; i++) {
    totalPrice = totalPrice + flights[i].cost;
  }
  console.log(
    `El precio medio de los vuelos es de ${Math.round(
      totalPrice / flights.length
    )} euros.`
  );
}

function getScaleFlights() {
  let scaleFlights = [];
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      scaleFlights.push(flights[i]);
    }
  }
  console.log(
    `Hay un total de ${scaleFlights.length} vuelos que realizan escala.`
  );
}

function getLastFiveFlights() {
  for (let i = flights.length - 5; i < flights.length; i++) {
    console.log(`El vuelo numero ${i} tiene destino ${flights[i].to}.`);
  }
}

function adminOrUser() {
  let adminOrUser = prompt(
    "Eres administrador o usuario ? Escriba: admin / user"
  );
  if (adminOrUser === "admin") {
    askAddFlights();
    deleteFlights();
  } else if (adminOrUser === "user") {
    priceSearcher();
    buyFlight();
  }
}
function askAddFlights() {
  let addFlight = prompt("Desea añadir algun vuelo ? si / no");
  if (addFlight === "si") {
    addFlights();
    flightsList();
  } else if (addFlight === "no") {
    alert("De acuerdo !");
  }
}

function addFlights() {
  let newFlight = {
    id: flights.length,
    to: prompt("Introduzca el destino del vuelo :"),
    from: prompt("Introduzca el origen del vuelo :"),
    cost: parseInt(prompt("Introduzca el precio del vuelo :")),
    scale: prompt("Indique si el vuelo realiza escala o no : si/no"),
  };
  if (isNaN(newFlight.cost) === true) {
    alert("Debe introducir solo numeros como precio del vuelo !");
    newFlight.cost = parseInt(prompt("Introduzca el precio del vuelo :"));
  }

  if (newFlight.scale === "si") {
    newFlight.scale = true;
  } else if (newFlight.scale === "no") {
    newFlight.scale = false;
  }
  flights.push(newFlight);

  let moreFlights = prompt("Desea añadir algun vuelo más ? si / no");
  if (moreFlights === "si" && flights.length <= 15) {
    addFlights();
  } else if (moreFlights === "si" && flights.length >= 15) {
    alert("No puede introducir mas de 15 vuelos");
  } else if (moreFlights === "no") {
    alert("De acuerdo !");
  }
}

function deleteFlights() {
  let ask = "";
  do {
    let ask = prompt("Desea eliminar algun vuelo ? si / no");
    if (ask === "si") {
      removeFlight();
    } else {
      alert("De acuerdo !");
      break;
    }
  } while (ask === "si" || ask !== null);
}

function removeFlight() {
  let idFlight = Math.round(
    parseInt(prompt("Introduzca el ID del vuelo que desea eliminar :"))
  );
  for (i = 0; i < flights.length; i++) {
    if (flights[i].id === idFlight) {
      let index = flights.indexOf(flights[i]);
      flights.splice(index, 1);
    }
  }

  flightsList();
}

function priceSearcher() {
  let costs = [];
  for (i = 0; i < flights.length; i++) {
    costs.push(flights[i].cost);
  }

  let userOrder = prompt(
    "Desea buscar vuelos por encima de un precio, por debajo, o iguales a un precio en concreto ? Mas caros / Mas Baratos / Igual a"
  ).toLowerCase();

  if (userOrder === "mas caros") {
    let expensive = parseInt(prompt("Introduzca el precio que desea buscar :"));
    getMoreExpensiveThan(expensive);
  } else if (userOrder === "mas baratos") {
    let cheap = parseInt(prompt("Introduzca el precio que desea buscar :"));
    getCheaperThan(cheap);
  } else if (userOrder === "igual a") {
    let price = parseInt(prompt("Introduzca el precio que desea buscar :"));
    let targetedPrice = getTargetPrice(price, costs);
    for (i = 0; i < flights.length; i++) {
      if (flights[i].cost === targetedPrice) {
        console.log(
          `El vuelo con un precio mas cercano a ${price} es el ID ${flights[i].id} con origen ${flights[i].from} y destino ${flights[i].to} y tiene un precio de ${flights[i].cost} €`
        );
      }
    }
  }
}

function getTargetPrice(price, array) {
  let currentNumber = array[0];
  let diff = Math.abs(price - currentNumber);

  for (i = 0; i < array.length; i++) {
    let newDiff = Math.abs(price - array[i]);
    if (newDiff < diff) {
      diff = newDiff;
      currentNumber = array[i];
    }
  }
  return currentNumber;
}

function getMoreExpensiveThan(num) {
  for (i = 0; i < flights.length; i++) {
    if (flights[i].cost >= num) {
      console.log(
        `El vuelo con id ${flights[i].id} con origen ${
          flights[i].from
        } y destino ${flights[i].to} tiene un precio de ${flights[i].cost} y ${
          flights[i].scale ? "si" : "no"
        } realiza escala. `
      );
    }
  }
}

function getCheaperThan(num) {
  for (i = 0; i < flights.length; i++) {
    if (flights[i].cost <= num) {
      console.log(
        `El vuelo con id ${flights[i].id} con origen ${
          flights[i].from
        } y destino ${flights[i].to} tiene un precio de ${flights[i].cost} y ${
          flights[i].scale ? "si" : "no"
        } realiza escala. `
      );
    }
  }
}

function buyFlight() {
  let buy = prompt(
    "Si quiere comprar el vuelo introduzca su ID, en caso contrario haga click en cancelar :"
  );
  let index;
  for (i = 0; i < flights.length; i++) {
    if (flights[i].id === parseInt(buy)) {
      index = flights.indexOf(flights[i]);
    }
  }
  if (buy !== null) {
    console.log(
      `Ha elegido el vuelo ID ${flights[index].id} con origen ${flights[index].from} y destino ${flights[index].to} y un precio de ${flights[index].cost} €. Gracias por su compra !`
    );
  } else {
    console.log("Muchas gracias y hasta pronto !");
  }
}

skylabAirlines();
