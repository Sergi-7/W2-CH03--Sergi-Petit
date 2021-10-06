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
        `El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escala.`
      );
    } else {
      console.log(
        `El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza escala.`
      );
    }
  }
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

skylabAirlines();
