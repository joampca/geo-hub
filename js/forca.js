// BANCO DE DADOS DA FORCA - Palavras Únicas (Sem espaços/hifens e sem acentos)
const database = [
  // --- BRASIL E AMÉRICAS ---
  { w: "AMAPA", h: "Estado brasileiro cortado pela Linha do Equador" },
  { w: "MACAPA", h: "Capital brasileira banhada pelo Rio Amazonas" },
  { w: "PANTANAL", h: "Maior planície alagada do mundo, localizada no Brasil" },
  { w: "AMAZONAS", h: "O pulmão verde da Terra e o rio mais volumoso" },
  { w: "PARANA", h: "Estado brasileiro localizado na Região Sul" },
  {
    w: "CERRADO",
    h: "Bioma brasileiro conhecido como a savana mais rica do mundo",
  },
  { w: "ATACAMA", h: "O deserto mais seco do mundo, localizado no Chile" },
  { w: "ANDES", h: "A maior cordilheira continental do planeta" },
  {
    w: "PATAGONIA",
    h: "Região de clima frio no extremo sul da América do Sul",
  },
  { w: "ALASCA", h: "Maior estado dos EUA, famoso por suas geleiras" },
  { w: "HAVAI", h: "Arquipélago vulcânico no Pacífico, estado dos EUA" },
  { w: "YUCATAN", h: "Península no México famosa pelas ruínas maias" },
  { w: "JAMAICA", h: "Ilha caribenha famosa pelo reggae e por Bob Marley" },

  // --- EUROPA E RÚSSIA ---
  { w: "RUSSIA", h: "Maior país do mundo em extensão territorial" },
  { w: "MOSCOU", h: "Capital mundialmente famosa pela Praça Vermelha" },
  { w: "SIBERIA", h: "Vasta e gelada região asiática do território russo" },
  { w: "BAIKAL", h: "O lago de água doce mais antigo e profundo do mundo" },
  { w: "ISLANDIA", h: "Terra do gelo e dos vulcões no Atlântico Norte" },
  {
    w: "NORUEGA",
    h: "País europeu famoso por seus fiordes profundos e auroras boreais",
  },
  { w: "VATICANO", h: "O menor estado independente do mundo" },
  { w: "LONDRES", h: "Capital europeia cortada pelo Rio Tâmisa" },
  { w: "ALPES", h: "Cadeia de montanhas mais famosa da Europa" },
  {
    w: "CAUCASO",
    h: "Cordilheira que divide a Europa da Ásia, entre o Mar Negro e o Cáspio",
  },
  { w: "GRECIA", h: "Berço da civilização ocidental e dos Jogos Olímpicos" },
  {
    w: "FIORDE",
    h: "Vales rochosos invadidos pelo mar, muito comuns na Escandinávia",
  },

  // --- ÁSIA E OCEANIA ---
  { w: "CANBERRA", h: "A verdadeira capital da Austrália" },
  { w: "TIBETE", h: "Região autônoma conhecida como 'O Teto do Mundo'" },
  { w: "HIMALAIA", h: "Cordilheira colossal que abriga o Monte Everest" },
  {
    w: "JAPAO",
    h: "País arquipélago conhecido como a 'Terra do Sol Nascente'",
  },
  { w: "GOBI", h: "Vasto deserto rochoso na China e na Mongólia" },
  { w: "MALDIVAS", h: "Arquipélago paradisíaco e ameaçado no Oceano Índico" },
  {
    w: "TAIWAN",
    h: "Ilha asiática famosa por sua alta tecnologia em microchips",
  },
  { w: "BALI", h: "Ilha extremamente turística e cultural da Indonésia" },
  { w: "SINGAPURA", h: "Pequena e riquíssima cidade-estado insular asiática" },
  {
    w: "MEKONG",
    h: "Um dos rios mais longos e importantes do Sudeste Asiático",
  },

  // --- ÁFRICA E ORIENTE MÉDIO ---
  {
    w: "MADAGASCAR",
    h: "Grande ilha biodiversa localizada na costa leste da África",
  },
  { w: "SAARA", h: "O maior deserto quente do mundo" },
  { w: "NILO", h: "Famoso rio africano que foi vital para os faraós do Egito" },
  { w: "KALAHARI", h: "Grande deserto no sul da África, lar dos suricatos" },
  { w: "RUANDA", h: "País africano conhecido como a 'Terra das Mil Colinas'" },
  { w: "SENEGAL", h: "País na costa oeste africana, sua capital é Dakar" },
  {
    w: "ETIOPIA",
    h: "País africano que orgulha-se de nunca ter sido colonizado",
  },
  { w: "ZAMBEZE", h: "Rio africano onde ficam as Cataratas de Vitória" },
  { w: "PETRA", h: "Antiga cidade esculpida em rocha rosa, na Jordânia" },

  // --- FENÔMENOS, BIOMAS E EXTREMOS ---
  {
    w: "TSUNAMI",
    h: "Onda gigante geralmente causada por um terremoto submarino",
  },
  {
    w: "VULCAO",
    h: "Montanha ou ruptura na crosta terrestre que expele magma",
  },
  {
    w: "TUNDRA",
    h: "Bioma muito frio, sem árvores, característico do Círculo Polar Ártico",
  },
  {
    w: "SAVANA",
    h: "Bioma de planície com árvores esparsas, famoso pelos safáris africos",
  },
  {
    w: "ICEBERG",
    h: "Gigantesco bloco de gelo que se desprende de uma geleira e flutua no oceano",
  },
  {
    w: "GEISER",
    h: "Nascente termal que entra em erupção, lançando jatos de água quente",
  },
  { w: "EQUADOR", h: "Linha imaginária que divide o planeta no meio" },
  { w: "GREENWICH", h: "O meridiano principal que divide o leste do oeste" },
  {
    w: "OASIS",
    h: "Uma área isolada de vegetação em um deserto, geralmente em torno de uma nascente",
  },
];

// Os 7 estágios do desenho ASCII (0 erros até 6 erros)
const asciiStages = [
  `  +---+
  |   |
      |
      |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
      |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
  `  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
  `  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

let chosenWord = "";
let guessedLetters = [];
let mistakes = 0;
const maxMistakes = 6;
let score = 0;
let gameOver = false;

const startBtn = document.getElementById("startBtn");
const playArea = document.getElementById("playArea");
const wordDisplay = document.getElementById("wordDisplay");
const asciiArt = document.getElementById("asciiArt");
const mistakesDisplay = document.getElementById("mistakes");
const scoreDisplay = document.getElementById("score");
const keyboardArea = document.getElementById("keyboardArea");
const customAlert = document.getElementById("customAlert");
const hintDisplay = document.getElementById("hintDisplay");
const giveUpBtn = document.getElementById("giveUpBtn"); // Referência do botão desistir

// Cria o teclado virtual (A a Z)
function generateKeyboard() {
  keyboardArea.innerHTML = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < alphabet.length; i++) {
    let btn = document.createElement("button");
    btn.className = "key-btn";
    btn.innerText = alphabet[i];
    btn.id = "key-" + alphabet[i];
    btn.onclick = () => handleGuess(alphabet[i]);
    keyboardArea.appendChild(btn);
  }
}

// Remove acentos para facilitar a validação
function normalizeString(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

function initGame() {
  // Sorteia uma palavra
  const randomObj = database[Math.floor(Math.random() * database.length)];
  chosenWord = normalizeString(randomObj.w);
  hintDisplay.innerText = "DICA: " + randomObj.h;

  guessedLetters = [];
  mistakes = 0;
  gameOver = false;

  mistakesDisplay.innerText = mistakes;
  asciiArt.innerText = asciiStages[0];
  customAlert.style.display = "none";
  keyboardArea.style.display = "flex";

  if (giveUpBtn) giveUpBtn.style.display = "block";

  generateKeyboard();
  updateWordDisplay();
}

function updateWordDisplay() {
  let displayStr = "";
  let won = true;

  for (let i = 0; i < chosenWord.length; i++) {
    let char = chosenWord[i];
    if (char === " " || char === "-") {
      displayStr += char + " ";
    } else if (guessedLetters.includes(char)) {
      displayStr += char + " ";
    } else {
      displayStr += "_ ";
      won = false;
    }
  }

  wordDisplay.innerText = displayStr.trim();

  if (won && !gameOver) {
    gameOver = true;
    score += 100;
    scoreDisplay.innerText = score;
    showResult(`🎉 VOCÊ ESCAPOU DA FORCA! (+100 Pts)`, true);
  }
}

function handleGuess(letter) {
  if (gameOver) return;
  if (guessedLetters.includes(letter)) return;

  guessedLetters.push(letter);
  let btn = document.getElementById("key-" + letter);

  if (chosenWord.includes(letter)) {
    // Acertou a letra
    btn.classList.add("correct");
    updateWordDisplay();
  } else {
    // Errou a letra
    btn.classList.add("wrong");
    mistakes++;
    mistakesDisplay.innerText = mistakes;
    asciiArt.innerText = asciiStages[mistakes];

    if (mistakes >= maxMistakes) {
      gameOver = true;
      // Mostra a palavra inteira ao perder
      wordDisplay.innerText = chosenWord.split("").join(" ");
      wordDisplay.style.color = "#CC0000"; // Fica vermelho pra destacar o erro
      showResult(`💀 ENFORCADO! A palavra era: ${chosenWord}`, false);
    }
  }
}

// NOVA FUNÇÃO: Desistir do jogo
window.giveUpGame = function () {
  if (gameOver) return;

  gameOver = true;
  mistakes = maxMistakes; // Força os erros pro máximo
  mistakesDisplay.innerText = mistakes;
  asciiArt.innerText = asciiStages[maxMistakes]; // Desenha a forca completa

  wordDisplay.innerText = chosenWord.split("").join(" ");
  wordDisplay.style.color = "#CC0000"; // Destaca a palavra em vermelho

  showResult(`🏳️ VOCÊ DESISTIU! A palavra era: ${chosenWord}`, false);
};

function showResult(msg, isWin) {
  keyboardArea.style.display = "none"; // Esconde o teclado para forçar o clique no botão de continuar
  if (giveUpBtn) giveUpBtn.style.display = "none"; // Esconde botão de desistir

  customAlert.innerHTML = msg;
  customAlert.className =
    "custom-alert " + (isWin ? "alert-success" : "alert-error");
  customAlert.style.display = "block";

  // Botão de jogar novamente
  customAlert.innerHTML += `<br><button onclick="initGameWrapper()" class="btn-action" style="margin-top:20px; font-size: 18px; padding: 10px 20px;">JOGAR PRÓXIMA ▶</button>`;
}

window.initGameWrapper = function () {
  wordDisplay.style.color = "#000"; // Reseta a cor caso tenha perdido a anterior
  initGame();
};

// Permite digitar pelo teclado físico do PC
document.addEventListener("keydown", (e) => {
  if (gameOver || playArea.style.display === "none") return;
  let key = e.key.toUpperCase();
  if (/^[A-Z]$/.test(key)) {
    handleGuess(key);
  }
});

startBtn.onclick = () => {
  startBtn.style.display = "none";
  playArea.style.display = "block";
  initGame();
};
