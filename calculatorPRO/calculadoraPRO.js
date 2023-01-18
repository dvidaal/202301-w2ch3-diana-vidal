let resultadosObtenidos = [];
let numerosIntroducidos = [];

function iniciamosCalculadoraPRO() {
  const introducirNum = () => {
    const datosObtenidos = [];
    let datos;
    do {
      datos = Number(
        prompt("Introduce un número para empezar a usar la CalculadoraPRO.")
      );
      if (isNaN(datos)) {
        alert("Debes introducir números NO letras");
        return introducirNum();
      }

      if (datosObtenidos.length < 1 && datos === 0) {
        alert("Introduce mínimo un número para poder usar la CalculadoraPRO.");
        return introducirNum();
      }

      if (datos !== 0) {
        datosObtenidos.push(datos);
      }
    } while (datos !== 0);

    return datosObtenidos;
  };

  numerosIntroducidos = introducirNum();

  const operacionesCalculadora = () => {
    const operaciones = [];
    if (numerosIntroducidos.length > 1) {
      const suma = numerosIntroducidos
        .reduce((valorInicial, segundoValor) => valorInicial + segundoValor)
        .toFixed(3);
      const resta = numerosIntroducidos
        .reduce((valorInicial, segundoValor) => valorInicial - segundoValor)
        .toFixed(3);
      const multiplicacion = numerosIntroducidos
        .reduce((valorInicial, segundoValor) => valorInicial * segundoValor)
        .toFixed(3);
      const division = numerosIntroducidos
        .reduce((valorInicial, segundoValor) => valorInicial / segundoValor)
        .toFixed(3);

      operaciones.push(
        "La suma es: " +
          suma +
          " La resta es: " +
          resta +
          " La multiplicación es: " +
          multiplicacion +
          " La división es: " +
          division
      );
      return operaciones;
    }

    const raiz = Math.sqrt(numerosIntroducidos[0]);
    operaciones.push(raiz.toFixed(3));
    return operaciones;
  };

  resultadosObtenidos = operacionesCalculadora();

  const mostramosResultadosOperaciones = () => {
    if ((numerosIntroducidos.length = 2)) {
      alert("Los resultados son: " + resultadosObtenidos);
    }
  };

  mostramosResultadosOperaciones();

  const repetimosProceso = () => {
    if (confirm("Quieres volver hacer calculos?")) {
      return iniciamosCalculadoraPRO();
    }

    alert("Gracias por usar nuestra calculadora PRO.");
  };

  repetimosProceso();
}

iniciamosCalculadoraPRO();
