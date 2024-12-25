const carta = document.querySelector(".carta");
const boton = document.querySelector("button");

function obtenerCartaAleatoria() {
  const palos = ["♥", "♠", "♣", "♦"];
  const rangos = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  const rangoAleatorio = rangos[Math.floor(Math.random() * rangos.length)];

  // Asignar el número al centro de la carta
  const numeroCentro = document.querySelector(".numero-centro");
  numeroCentro.textContent = rangoAleatorio;

  // Asignar la pinta a las esquinas y cambiar el color
  document.querySelectorAll(".pinta-esquina").forEach((element) => {
    element.textContent = paloAleatorio;
    const color =
      paloAleatorio === "♥" || paloAleatorio === "♦" ? "red" : "black";
    element.style.color = color;
    numeroCentro.style.color = color; // Cambiar el color del número en el centro
  });
}

boton.addEventListener("click", obtenerCartaAleatoria);

// Inicializar con una carta aleatoria al cargar la página
document.addEventListener("DOMContentLoaded", obtenerCartaAleatoria);
