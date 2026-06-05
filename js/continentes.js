const database = {
  "América do Sul": [
    "Argentina",
    "Bolívia",
    "Brasil",
    "Chile",
    "Colômbia",
    "Equador",
    "Guiana",
    "Paraguai",
    "Peru",
    "Suriname",
    "Uruguai",
    "Venezuela",
  ],
  "América do Norte": ["Canadá", "Estados Unidos", "México"],
  "América Central e Caribe": [
    "Antígua e Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Costa Rica",
    "Cuba",
    "Dominica",
    "El Salvador",
    "Granada",
    "Guatemala",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Nicarágua",
    "Panamá",
    "República Dominicana",
    "Trinidad e Tobago",
    "Santa Lúcia",
    "São Cristóvão e Neves",
    "São Vicente e Granadinas",
  ],
  Europa: [
    "Albânia",
    "Alemanha",
    "Andorra",
    "Áustria",
    "Bélgica",
    "Bielorrússia",
    "Bósnia e Herzegovina",
    "Bulgária",
    "Chipre",
    "Croácia",
    "Dinamarca",
    "Eslováquia",
    "Eslovênia",
    "Espanha",
    "Estônia",
    "Finlândia",
    "França",
    "Grécia",
    "Hungria",
    "Irlanda",
    "Islândia",
    "Itália",
    "Letônia",
    "Liechtenstein",
    "Lituânia",
    "Luxemburgo",
    "Macedônia do Norte",
    "Malta",
    "Moldávia",
    "Mônaco",
    "Montenegro",
    "Noruega",
    "Países Baixos",
    "Polônia",
    "Portugal",
    "Reino Unido",
    "República Tcheca",
    "Romênia",
    "Rússia",
    "San Marino",
    "Sérvia",
    "Suécia",
    "Suíça",
    "Ucrânia",
    "Vaticano",
  ],
  Ásia: [
    "Afeganistão",
    "Arábia Saudita",
    "Armênia",
    "Azerbaijão",
    "Bahrein",
    "Bangladesh",
    "Brunei",
    "Butão",
    "Camboja",
    "Catar",
    "Cazaquistão",
    "China",
    "Cingapura",
    "Coreia do Norte",
    "Coreia do Sul",
    "Emirados Árabes Unidos",
    "Filipinas",
    "Geórgia",
    "Iêmen",
    "Índia",
    "Indonésia",
    "Irã",
    "Iraque",
    "Israel",
    "Japão",
    "Jordânia",
    "Kuwait",
    "Laos",
    "Líbano",
    "Malásia",
    "Maldivas",
    "Mianmar",
    "Mongólia",
    "Nepal",
    "Omã",
    "Paquistão",
    "Quirguistão",
    "Síria",
    "Sri Lanka",
    "Tadjiquistão",
    "Tailândia",
    "Timor-Leste",
    "Turcomenistão",
    "Turquia",
    "Uzbequistão",
    "Vietnã",
  ],
  África: [
    "África do Sul",
    "Angola",
    "Argélia",
    "Benin",
    "Botsuana",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Camarões",
    "Chade",
    "Comores",
    "Costa do Marfim",
    "Djibuti",
    "Egito",
    "Eritreia",
    "Essuatíni",
    "Etiópia",
    "Gabão",
    "Gâmbia",
    "Gana",
    "Guiné",
    "Guiné-Bissau",
    "Guiné Equatorial",
    "Lesoto",
    "Libéria",
    "Líbia",
    "Madagascar",
    "Malaui",
    "Mali",
    "Marrocos",
    "Maurício",
    "Mauritânia",
    "Moçambique",
    "Namíbia",
    "Níger",
    "Nigéria",
    "Quênia",
    "República Centro-Africana",
    "República Democrática do Congo",
    "República do Congo",
    "Ruanda",
    "São Tomé e Príncipe",
    "Senegal",
    "Seychelles",
    "Serra Leoa",
    "Somália",
    "Sudão",
    "Sudão do Sul",
    "Tanzânia",
    "Togo",
    "Tunísia",
    "Uganda",
    "Zâmbia",
    "Zimbábue",
  ],
  Oceania: [
    "Austrália",
    "Fiji",
    "Ilhas Marshall",
    "Ilhas Salomão",
    "Kiribati",
    "Micronésia",
    "Nauru",
    "Nova Zelândia",
    "Palau",
    "Papua Nova Guiné",
    "Samoa",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
  ],
};

const startBtn = document.getElementById("startBtn");
const giveUpBtn = document.getElementById("giveUpBtn");
const playArea = document.getElementById("playArea");
const continentNameDisplay = document.getElementById("continentName");
const userInput = document.getElementById("userInput");
const answersGrid = document.getElementById("answersGrid");
const scoreDisplay = document.getElementById("scoreDisplay");
const totalDisplay = document.getElementById("totalDisplay");
const victoryMsg = document.getElementById("victoryMsg");
const gameOverMsg = document.getElementById("gameOverMsg");
const timerDisplay = document.getElementById("timer");

let currentContinent = "";
let currentCountries = [];
let guessedCountries = [];
let timeRemaining = 300;
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
  giveUpBtn.style.display = "none";

  if (won) {
    userInput.placeholder = "PARABÉNS!";
    victoryMsg.style.display = "block";
  } else {
    userInput.placeholder = "FIM DE JOGO!";
    gameOverMsg.style.display = "block";
    currentCountries.forEach((country, index) => {
      if (!guessedCountries.includes(country)) {
        const targetSlot = document.getElementById("slot-" + index);
        targetSlot.innerText = country;
        targetSlot.classList.add("missed");
      }
    });
  }
}

giveUpBtn.addEventListener("click", () => {
  endGame(false);
});

function initializeBoard() {
  if (!document.getElementById("actionContainer")) {
    const container = document.createElement("div");
    container.id = "actionContainer";
    container.style.display = "flex";
    container.style.gap = "10px";
    container.style.marginBottom = "20px";
    container.style.alignItems = "stretch";

    userInput.parentNode.insertBefore(container, userInput);

    container.appendChild(userInput);
    container.appendChild(startBtn);
    container.appendChild(giveUpBtn);

    userInput.style.margin = "0";
    userInput.style.flex = "1";

    startBtn.style.margin = "0";
    startBtn.style.width = "auto";
    startBtn.style.padding = "15px 30px";

    giveUpBtn.style.margin = "0";
    giveUpBtn.style.width = "auto";
    giveUpBtn.style.padding = "15px 30px";
  }

  const continentList = Object.keys(database);

  currentContinent =
    continentList[Math.floor(Math.random() * continentList.length)];

  currentCountries = database[currentContinent].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );

  continentNameDisplay.innerText = currentContinent;
  totalDisplay.innerText = currentCountries.length;

  answersGrid.innerHTML = "";
  guessedCountries = [];
  scoreDisplay.innerText = "0";

  currentCountries.forEach((_, index) => {
    const slot = document.createElement("div");
    slot.className = "answer-slot";
    slot.innerText = "???";
    slot.id = "slot-" + index;
    answersGrid.appendChild(slot);
  });

  playArea.style.display = "block";
  startBtn.style.display = "block";
  giveUpBtn.style.display = "none";

  userInput.disabled = true;
  userInput.placeholder = "Clique em COMEÇAR ao lado ➡️";

  timeRemaining = 300;
  updateTimer();
}

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  giveUpBtn.style.display = "block";

  userInput.disabled = false;
  userInput.placeholder = "Digite o nome do país...";
  userInput.focus();

  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimer();
    if (timeRemaining <= 0) endGame(false);
  }, 1000);
});

userInput.addEventListener("keyup", (e) => {
  const inputVal = normalizeText(userInput.value);
  const matchIndex = currentCountries.findIndex(
    (country) => normalizeText(country) === inputVal,
  );

  if (
    matchIndex !== -1 &&
    !guessedCountries.includes(currentCountries[matchIndex])
  ) {
    const actualName = currentCountries[matchIndex];
    guessedCountries.push(actualName);

    const targetSlot = document.getElementById("slot-" + matchIndex);
    targetSlot.innerText = actualName;
    targetSlot.classList.add("correct");

    scoreDisplay.innerText = guessedCountries.length;
    userInput.value = "";
    userInput.style.backgroundColor = "#90EE90";
    setTimeout(() => (userInput.style.backgroundColor = "#FFF"), 200);

    if (guessedCountries.length === currentCountries.length) endGame(true);
  } else if (e.key === "Enter") {
    userInput.style.backgroundColor = "#FFCCCC";
    setTimeout(() => (userInput.style.backgroundColor = "#FFF"), 200);
    userInput.value = "";
  }
});

window.onload = initializeBoard;
