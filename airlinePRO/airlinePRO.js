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

const ISDIairlinesPRO = () => {
  function endProcess() {
    let ending = prompt("Quieres abandonar todos los procesos? SI/NO");
    if (ending === null) {
      alert("Gracias por usar nuestros servicios");
    } else if (ending.toUpperCase() === "SI") {
      alert("Gracias por usar nuestros servicios");
    } else if (ending.toUpperCase() === "NO") {
      userAdminCheck();
    } else if (ending.toUpperCase() !== "SI" || ending.toUpperCase() !== "NO") {
      alert("Debes dar una de las dos respuestas.");
      endProcess();
    }
  }

  function userCheck() {
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
  }

  userCheck();

  function userAdminCheck() {
    const whatAreYou = prompt(
      "Ahora debes decirnos si eres 'user' o 'admin'. Escribe una de las dos cosas"
    );
    if (whatAreYou === null) {
      alert("Debes introducir una de las dos opciones.");
      userAdminCheck();
    } else {
      const role = whatAreYou.toUpperCase();
      while (role !== "ADMIN" || role !== "USER") {
        if (role === "ADMIN") {
          adminAction();
          break;
        } else if (role === "USER") {
          searchCostUser();
          break;
        } else {
          alert("Debes introducir una de las dos opciones.");
          userAdminCheck();
          break;
        }
      }
    }
  }
  userAdminCheck();

  function searchCostUser() {
    const introducePrecio = +prompt(
      "Introduce un precio para poder mostrar vuelos iguales a ese precio o más baratos."
    );
    if (!introducePrecio) {
      alert("Debes introducir algún valor númerico.");
      searchCostUser();
    }
    if (introducePrecio < 80) {
      alert("No hay ningún vuelo por debajo de ese precio.");
      searchCostUser();
    } else {
      let cheaperFlight = [];

      for (let i = 0; i < flights.length; i++) {
        if (flights[i].cost <= introducePrecio) {
          cheaperFlight.push(flights[i]);
        }
      }

      for (let j = 0; j < cheaperFlight.length; j++) {
        console.log(
          "El vuelo con origen: " +
            cheaperFlight[j].from +
            " y destino: " +
            cheaperFlight[j].to +
            " tiene un coste de " +
            cheaperFlight[j].cost +
            " y no realiza ninguna escala."
        );
      }

      let endUser = prompt(
        "Quieres introducir más precios para seguir viendo vuelos? SI/NO"
      );
      if (endUser === null) {
        endProcess();
      } else if (endUser.toUpperCase() === "SI") {
        searchCostUser();
      } else if (endUser.toUpperCase() === "NO") {
        alert("Gracias por usar nuestro servicio.");
      } else if (
        endUser.toUpperCase() !== "SI" ||
        endUser.toUpperCase() !== "NO"
      ) {
        alert("Introduce una de las dos opciones.");
        endProcess();
      }
    }
  }

  function adminAction() {
    let action = prompt("Qué quieres hacer 'create' o 'delete' un vuelo?)");
    action = action.toUpperCase();
    if (action && action !== "CREATE" && action !== "DELETE") {
      return adminAction();
    } else {
      if (!action) {
        return endProcess();
      }
      if (action === "CREATE") {
        return createAdmin();
      }
      if (action === "DELETE") {
        return deleteAdmin();
      }
    }
  }
  //adminAction();

  function generalInfo() {
    console.log(
      "*************TE MOSTRAMOS LOS VUELOS ACTUALES. TUS VUELOS CREADOS SE IRÁN AÑADIENDO A LA LISTA HASTA UN MÁXIMO DE 15 VUELOS ***************"
    );
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
  }

  function createAdmin() {
    if (flights.length >= 15) {
      alert("LIMTIE DE VUELOS CREADOS.");
      let exceedFlight = prompt(
        "Quieres eliminar vuelos para poder crear más? SI/NO"
      );
      exceedFlight = exceedFlight.toUpperCase();
      if (exceedFlight === "SI") {
        return deleteAdmin();
      }
      if (exceedFlight === "NO") {
        return endProcess();
      }
    } else {
      const newFlight = {};
      newFlight.id = flights.length + 1;
      newFlight.to = checkTo();
      newFlight.from = checkFrom();
      newFlight.cost = checkCostNumber();
      newFlight.scale = checkScaleFlight();
      flights.push(newFlight);
      generalInfo();
      alert(
        "Se ha creado tu vuelo con exito. Decide otra vez entre 'CREATE' o 'DELETE."
      );
      return adminAction();
    }

    while (flights.length < 15) {
      const moreFlights = prompt("Quieres seguir creando vuelos? SI/NO");
      moreFlights = moreFlights.toUpperCase();
      if (!moreFlights) {
        alert("Debes decidir una de las dos opciones");
        createAdmin();
      }
      if (moreFlights !== "SI") {
        endProcess();
      }
      if (moreFlights === "SI") {
        createAdmin();
      }
    }
  }

  function checkTo() {
    newFlight = prompt("Hacía dónde va el vuelo?");
    if (!newFlight || !isNaN(newFlight)) {
      alert("No puedes escribir números.");
      checkTo();
    } else {
      return newFlight;
    }
  }

  function checkFrom() {
    newFlight = prompt("De dónde despega el vuelo?");
    if (!newFlight || !isNaN(newFlight)) {
      alert("No puedes escribir números.");
      checkFrom();
    } else {
      return newFlight;
    }
  }

  function checkCostNumber() {
    newFlight = +prompt("Qué precio tiene el vuelo?");
    if (isNaN(newFlight)) {
      alert("Debes introducir números.");
      checkCostNumber();
    } else {
      return newFlight;
    }
  }

  function checkScaleFlight() {
    newFlight = prompt("Tiene escalas? 'true' o 'false'.");
    newFlight = newFlight.toUpperCase();
    if (newFlight === "TRUE") {
      return false;
    } else if (newFlight === "FALSE") {
      return true;
    } else {
      alert("Responde correctamente porfavor.");
      checkScaleFlight();
    }
  }
  function listWithID(item) {
    console.log("*****LISTADO DE VUELOS ACTUALIZADO****");
    item.forEach((flights) => {
      console.log(
        `${flights.id}. ${flights.to}. ${flights.from}. ${flights.scale}`
      );
    });
  }
  function deleteAdmin() {
    const deleteFlight = +prompt(
      "Introduce el ID del vuelo que desees eliminar."
    );

    const deleting = (searchingID) => searchingID.id === deleteFlight;

    if (flights.findIndex(deleting) === -1) {
      alert("Este vuelo ya ha sido eliminado anteriormente.");
      deleteAdmin();
    } else {
      flights.splice(flights.findIndex(deleting), 1);
      alert("El vuelo ha sido eliminado.");
      listWithID(flights);

      let keepdeleting = prompt("Quieres eliminar más vuelos? SI/NO");
      keepdeleting = keepdeleting.toUpperCase();
      if (keepdeleting === "SI") {
        deleteAdmin();
      } else {
        alert("Gracias por usar nuestros servicios");
      }
    }
  }
};

ISDIairlinesPRO();
