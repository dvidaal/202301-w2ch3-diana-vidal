const a = Number(prompt("Introduce un primer número"));
const b = Number(prompt("Introduce un segundo número"));
export function mySuma(a, b) {
  return a + b;
}

function myResta(a, b) {
  return a - b;
}

function myDiv(a, b) {
  return a / b;
}

function myMult(a, b) {
  return a * b;
}

if (isNaN(a) || isNaN(b)) {
  alert("Debes introducir números para obtener un buen resultado");
} else if (a > 0 && b === 0) {
  console.log(
    "Has introducido un solo número. Aquí tienes su raíz cuadrada " +
      Math.sqrt(a)
  );
} else if (a === 0 && b > 0) {
  console.log(
    "Has introducido un solo número. Aquí tienes su raíz cuadrada " +
      Math.sqrt(b)
  );
} else {
  const resultados = [
    `El resultado de la suma es: ${mySuma(a, b).toFixed(
      3
    )}, El resultado de la resta es: ${myResta(a, b).toFixed(
      3
    )}, El resultado de la división es: ${myDiv(a, b).toFixed(
      3
    )}, El resultado de la multiplicación es: ${myMult(a, b).toFixed(3)}`,
  ];

  console.log(resultados);
}
