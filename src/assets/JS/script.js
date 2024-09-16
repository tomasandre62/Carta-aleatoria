const carta = document.querySelector('.carta');
const boton = document.querySelector('button');

function obtenerCartaAleatoria() {
    const palos = ['♥', '♠', '♣', '♦'];
    const rangos = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const rangoAleatorio = rangos[Math.floor(Math.random() * rangos.length)];

    carta.textContent = rangoAleatorio + paloAleatorio;

   
    if (paloAleatorio === '♥' || paloAleatorio === '♦') {
      carta.classList.add('hearts');
  } else {
      carta.classList.remove('hearts');
  }
}

obtenerCartaAleatoria();