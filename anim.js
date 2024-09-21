// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "A veces los dias, parecen eternos", time: 20 },
  { text: "Cuando las pequeñas cosas, que pasaron desapercibidas", time: 25 },
  { text: "Ya no estan", time: 30 },
  { text: "Un buenas noches o un ¿Comó estás?", time: 35 },
  { text: "No creí que puedieran hacer que los dias fueran mejores", time: 40 },
  { text: "En verdad se hacen extrañar", time: 45 },
  { text: "Este es mi primer código que realizo", time: 50 },
  { text: "y queria que sea para ti", time: 55 },
  { text: "Aunque las flores no las diseñe, porqué no soy deseñador xD", time: 60 },
  { text: "Pero, el texto, las animaciones y los colores si las programe", time: 65 },
  { text: "GRACIAS POR RECIBIR EL PRESENTE ODALIS😊", time: 70 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);