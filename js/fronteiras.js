const database = {
  Brasil: [
    "Argentina",
    "Bolívia",
    "Colômbia",
    "Guiana Francesa",
    "Guiana",
    "Paraguai",
    "Peru",
    "Suriname",
    "Uruguai",
    "Venezuela",
  ],
  Argentina: ["Bolívia", "Brasil", "Chile", "Paraguai", "Uruguai"],
  Espanha: ["Andorra", "França", "Portugal", "Marrocos", "Reino Unido"],
  Alemanha: [
    "Dinamarca",
    "Polônia",
    "República Tcheca",
    "Áustria",
    "Suíça",
    "França",
    "Luxemburgo",
    "Bélgica",
    "Países Baixos",
  ],
  França: [
    "Andorra",
    "Bélgica",
    "Alemanha",
    "Itália",
    "Luxemburgo",
    "Mônaco",
    "Espanha",
    "Suíça",
    "Brasil",
    "Suriname",
  ],
  China: [
    "Afeganistão",
    "Butão",
    "Índia",
    "Cazaquistão",
    "Coreia do Norte",
    "Quirguistão",
    "Laos",
    "Mongólia",
    "Mianmar",
    "Nepal",
    "Paquistão",
    "Rússia",
    "Tadjiquistão",
    "Vietnã",
  ],
  Rússia: [
    "Azerbaijão",
    "Bielorrússia",
    "China",
    "Estônia",
    "Finlândia",
    "Geórgia",
    "Cazaquistão",
    "Coreia do Norte",
    "Letônia",
    "Lituânia",
    "Mongólia",
    "Noruega",
    "Polônia",
    "Ucrânia",
  ],
  "Estados Unidos": ["Canadá", "México"],
  Canadá: ["Estados Unidos"],
  México: ["Belize", "Guatemala", "Estados Unidos"],
  Itália: ["Áustria", "França", "San Marino", "Eslovênia", "Suíça", "Vaticano"],
  Índia: ["Bangladesh", "Butão", "China", "Mianmar", "Nepal", "Paquistão"],
  "África do Sul": [
    "Botsuana",
    "Lesoto",
    "Moçambique",
    "Namíbia",
    "Essuatíni",
    "Zimbábue",
  ],
  Egito: ["Faixa de Gaza", "Israel", "Líbia", "Sudão"],
  Portugal: ["Espanha"],
  Colômbia: ["Brasil", "Equador", "Panamá", "Peru", "Venezuela"],
  Turquia: [
    "Armênia",
    "Azerbaijão",
    "Bulgária",
    "Geórgia",
    "Grécia",
    "Irã",
    "Iraque",
    "Síria",
  ],
  Irã: [
    "Afeganistão",
    "Armênia",
    "Azerbaijão",
    "Iraque",
    "Paquistão",
    "Turquia",
    "Turcomenistão",
  ],
  Chile: ["Argentina", "Bolívia", "Peru"],
  Uruguai: ["Argentina", "Brasil"],
  Paraguai: ["Argentina", "Bolívia", "Brasil"],
  Bolívia: ["Argentina", "Brasil", "Chile", "Paraguai", "Peru"],
  Peru: ["Bolívia", "Brasil", "Chile", "Colômbia", "Equador"],
  Suíça: ["Áustria", "França", "Alemanha", "Itália", "Liechtenstein"],
  Ucrânia: [
    "Bielorrússia",
    "Hungria",
    "Moldávia",
    "Polônia",
    "Romênia",
    "Rússia",
    "Eslováquia",
  ],
  Noruega: ["Finlândia", "Rússia", "Suécia"],
  Suécia: ["Finlândia", "Noruega"],
  Finlândia: ["Noruega", "Suécia", "Rússia"],
  Tailândia: ["Camboja", "Laos", "Malásia", "Mianmar"],
  Vietnã: ["Camboja", "China", "Laos"],
  "Arábia Saudita": [
    "Iraque",
    "Jordânia",
    "Kuwait",
    "Omã",
    "Catar",
    "Emirados Árabes Unidos",
    "Iêmen",
  ],
  Israel: [
    "Egito",
    "Faixa de Gaza",
    "Jordânia",
    "Líbano",
    "Síria",
    "Cisjordânia",
  ],
  Chade: [
    "Líbia",
    "Sudão",
    "República Centro-Africana",
    "Camarões",
    "Nigéria",
    "Níger",
  ],
  Congo: [
    "Gabão",
    "Camarões",
    "República Centro-Africana",
    "República Democrática do Congo",
    "Angola",
  ],
  Tunísia: ["Argélia", "Líbia"],
  "Burkina Faso": ["Mali", "Níger", "Benim", "Togo", "Gana", "Costa do Marfim"],
  Quênia: ["Etiópia", "Somália", "Tanzânia", "Uganda", "Sudão do Sul"],
  Somália: ["Djibuti", "Etiópia", "Quênia"],
  Angola: [
    "Namíbia",
    "República Democrática do Congo",
    "Zâmbia",
    "República do Congo",
  ],
  Togo: ["Gana", "Benim", "Burkina Faso"],
  "Serra Leoa": ["Guiné", "Libéria"],
  Albânia: ["Montenegro", "Kosovo", "Macedônia do Norte", "Grécia"],
  Armênia: ["Turquia", "Geórgia", "Azerbaijão", "Irã"],
  "El Salvador": ["Guatemala", "Honduras"],
  Ruanda: ["Uganda", "Tanzânia", "Burundi", "República Democrática do Congo"],
  Burundi: ["Ruanda", "Tanzânia", "República Democrática do Congo"],
  Sérvia: [
    "Hungria",
    "Romênia",
    "Bulgária",
    "Macedônia do Norte",
    "Kosovo",
    "Montenegro",
    "Bósnia e Herzegovina",
    "Croácia",
  ],
  Mongólia: ["China", "Rússia"],
  Grécia: ["Albânia", "Bulgária", "Turquia", "Macedônia do Norte"],
};

const startBtn = document.getElementById("startBtn");
const playArea = document.getElementById("playArea");
const countryNameDisplay = document.getElementById("countryName");
const userInput = document.getElementById("userInput");
const answersGrid = document.getElementById("answersGrid");
const scoreDisplay = document.getElementById("scoreDisplay");
const totalDisplay = document.getElementById("totalDisplay");
const victoryMsg = document.getElementById("victoryMsg");
const gameOverMsg = document.getElementById("gameOverMsg");
const timerDisplay = document.getElementById("timer");

let currentCountry = "";
let currentBorders = [];
let guessedCountries = [];
let timeRemaining = 120;
let timerInterval;

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function updateTimer() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  timerDisplay.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function endGame(won) {
  clearInterval(timerInterval);
  userInput.disabled = true;
  if (won) {
    userInput.placeholder = "PARABÉNS!";
    victoryMsg.style.display = "block";
  } else {
    userInput.placeholder = "TEMPO ESGOTADO!";
    gameOverMsg.style.display = "block";
    currentBorders.forEach((border, index) => {
      if (!guessedCountries.includes(border)) {
        const targetSlot = document.getElementById("slot-" + index);
        targetSlot.innerText = border;
        targetSlot.classList.add("missed");
      }
    });
  }
}

startBtn.addEventListener("click", () => {
  const countriesList = Object.keys(database);
  currentCountry =
    countriesList[Math.floor(Math.random() * countriesList.length)];
  currentBorders = database[currentCountry];

  countryNameDisplay.innerText = currentCountry;
  totalDisplay.innerText = currentBorders.length;
  startBtn.style.display = "none";
  playArea.style.display = "block";
  userInput.focus();

  answersGrid.innerHTML = "";
  guessedCountries = [];
  scoreDisplay.innerText = "0";

  currentBorders.forEach((_, index) => {
    const slot = document.createElement("div");
    slot.className = "answer-slot";
    slot.innerText = "???";
    slot.id = "slot-" + index;
    answersGrid.appendChild(slot);
  });

  timeRemaining = 120;
  updateTimer();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimer();
    if (timeRemaining <= 0) endGame(false);
  }, 1000);
});

userInput.addEventListener("keyup", (e) => {
  const inputVal = normalizeText(userInput.value);
  const matchIndex = currentBorders.findIndex(
    (border) => normalizeText(border) === inputVal
  );

  if (
    matchIndex !== -1 &&
    !guessedCountries.includes(currentBorders[matchIndex])
  ) {
    const actualName = currentBorders[matchIndex];
    guessedCountries.push(actualName);

    const targetSlot = document.getElementById("slot-" + matchIndex);
    targetSlot.innerText = actualName;
    targetSlot.classList.add("correct");

    scoreDisplay.innerText = guessedCountries.length;
    userInput.value = "";
    userInput.style.backgroundColor = "#90EE90";
    setTimeout(() => (userInput.style.backgroundColor = "#FFF"), 200);

    if (guessedCountries.length === currentBorders.length) endGame(true);
  } else if (e.key === "Enter") {
    userInput.style.backgroundColor = "#FFCCCC";
    setTimeout(() => (userInput.style.backgroundColor = "#FFF"), 200);
    userInput.value = "";
  }
});
