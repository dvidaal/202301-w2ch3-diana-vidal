const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const userCheck = () => {
  const userName = prompt("Cuál es tu nombre de usuario?");
  if (!userName) {
    alert("Debes introducir un nombre de usuario.");
    userCheck();
  } else {
    alert(
      "Bienvenidx, " +
        userName +
        "! " +
        " A continuación te vamos a mostrar toda la información de nuestros vuelos. Los vuelos con escalas se mostrarán en pantalla con un punto rojo"
    );
  }
};

userCheck();

const generalInfo = () => {
  flights.forEach(function (vuelo) {
    if (vuelo.scale === true) {
      console.log(
        "El vuelo con origen: " +
          vuelo.from +
          " y destino: " +
          vuelo.to +
          " tiene un coste de " +
          vuelo.cost +
          " y no realiza ninguna escala."
      );
    } else {
      console.log(
        "El vuelo con origen: " +
          vuelo.from +
          " y destino: " +
          vuelo.to +
          " tiene un coste de " +
          vuelo.cost +
          " y tiene escala. 🔴 "
      );
    }
  });
};
generalInfo();

let totalPrice = null;
flights.forEach(function (vuelo) {
  totalPrice = vuelo.cost + totalPrice;
});
console.log("El precio medio de los vuelos es de " + totalPrice / 10 + " €");

const totalScales = () => {
  const sumaScales = flights.filter((vuelo) => vuelo.scale === true);
  console.log("Hay un total de " + sumaScales.length + " vuelos con escala.");
};
totalScales();

const lastFiveFlights = () => {
  for (let i = 5; i < 10; i++) {
    console.log(
      "Estos son los útimos 5 vuelos con destino a: " + flights[i].to
    );
  }
};
lastFiveFlights();
