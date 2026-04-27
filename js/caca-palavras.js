// BANCO DE DADOS (Máximo 12 letras por palavra, sem espaços)
const geoWords = [
  // América do Sul e Central
  "BRASIL",
  "AMAZONAS",
  "ARGENTINA",
  "URUGUAI",
  "PARAGUAI",
  "CHILE",
  "ANDES",
  "PERU",
  "COLOMBIA",
  "VENEZUELA",
  "EQUADOR",
  "BOLIVIA",
  "GUIANA",
  "SURINAME",
  "PATAGONIA",
  "ATACAMA",
  "BOGOTA",
  "CARACAS",
  "LIMA",
  "SANTIAGO",
  "PAMPAS",
  "CERRADO",
  "MANAUS",
  "RECIFE",
  "PANAMA",
  "HONDURAS",
  "NICARAGUA",
  "GUATEMALA",
  "JAMAICA",
  "BAHAMAS",
  "HAITI",

  // América do Norte
  "CANADA",
  "MEXICO",
  "CUBA",
  "HAWAI",
  "APALACHES",
  "CARIBE",
  "HAVANA",
  "OTTAWA",
  "WASHINGTON",
  "FLORIDA",
  "TEXAS",
  "ALASCA",
  "ONTARIO",
  "QUEBEC",
  "COLORADO",
  "NEVADA",

  // Europa Ocidental e Nórdica
  "EUROPA",
  "ALPES",
  "FRANCA",
  "ALEMANHA",
  "ESPANHA",
  "PORTUGAL",
  "ITALIA",
  "SUIÇA",
  "AUSTRIA",
  "BELGICA",
  "HOLANDA",
  "VATICANO",
  "SUECIA",
  "NORUEGA",
  "FINLANDIA",
  "ISLANDIA",
  "DINAMARCA",
  "SENA",
  "TAMISA",
  "DANUBIO",
  "PARIS",
  "LONDRES",
  "ROMA",
  "BERLIM",
  "MADRI",
  "LISBOA",
  "VIENA",
  "MUNIQUE",
  "NAPOLES",
  "VENEZA",

  // Europa Oriental e Balcãs
  "RUSSIA",
  "VOLGA",
  "URAL",
  "CAUCASO",
  "MOSCOU",
  "POLONIA",
  "UCRANIA",
  "CROACIA",
  "SERVIA",
  "BULGARIA",
  "ROMENIA",
  "HUNGRIA",
  "GRECIA",
  "ATENAS",
  "PRAGA",
  "VARSOVIA",

  // Ásia e Oriente Médio
  "ASIA",
  "JAPAO",
  "CHINA",
  "INDIA",
  "INDONESIA",
  "VIETNA",
  "TAILANDIA",
  "HIMALAIA",
  "TIBETE",
  "EVEREST",
  "GOBI",
  "TIGRE",
  "EUFRATES",
  "GANGES",
  "TOQUIO",
  "PEQUIM",
  "SEUL",
  "TAIWAN",
  "FILIPINAS",
  "MALASIA",
  "SINGAPURA",
  "NEPAL",
  "BUTAO",
  "IRAQUE",
  "ISRAEL",
  "JORDANIA",
  "LIBANO",
  "IEMEN",
  "SIRIA",

  // África
  "AFRICA",
  "EGITO",
  "MARROCOS",
  "NIGERIA",
  "QUENIA",
  "ZIMBABUE",
  "ANGOLA",
  "SENEGAL",
  "MADAGASCAR",
  "NILO",
  "SAARA",
  "KALAHARI",
  "SOMALIA",
  "SUDAO",
  "CHADE",
  "NIGER",
  "MALI",
  "TUNISIA",
  "LIBIA",
  "ARGELIA",
  "GANA",
  "TOGO",
  "BENIN",
  "CAMAROES",
  "CONGO",
  "UGANDA",
  "RUANDA",
  "BURUNDI",
  "ZAMBIA",
  "NAMIBIA",
  "BOTSUANA",
  "LESOTO",

  // Oceania e Extremos
  "OCEANIA",
  "AUSTRALIA",
  "SYDNEY",
  "FIJI",
  "SAMOA",
  "TONGA",
  "NOVAZELANDIA",
  "TASMANIA",
  "ANTARTIDA",
  "GROENLANDIA",
  "ICEBERG",
  "TUNDRA",

  // Corpos d'água (Oceanos, Mares e Golfos)
  "ATLANTICO",
  "PACIFICO",
  "INDICO",
  "ARTICO",
  "MEDITERRANEO",
  "BALTICO",
  "CARIBE",
  "VERMELHO",
  "NEGRO",
  "CASPIO",
];

const gridSize = 12; // Tamanho da grade 12x12
let gridData = [];
let wordsToFind = [];
let wordsFound = 0;
let firstClickCell = null;

let timeElapsed = 0; // Cronômetro progressivo
let timerInterval;

const startBtn = document.getElementById("startBtn");
const playArea = document.getElementById("playArea");
const gridContainer = document.getElementById("gridContainer");
const wordListDiv = document.getElementById("wordList");
const victoryMsg = document.getElementById("victoryMsg");
const timerDisplay = document.getElementById("timer");
const finalTimeDisplay = document.getElementById("finalTime");
const wordsCountDisplay = document.getElementById("wordsCountDisplay");

function updateTimer() {
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed % 60;
  timerDisplay.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

// FUNÇÃO PRINCIPAL: Gera a grade randomicamente
function generateGame() {
  // Esconde botão inicial e mensagem de vitória, mostra área do jogo
  startBtn.style.display = "none";
  playArea.style.display = "block";
  victoryMsg.style.display = "none";

  // Zera o Relógio Progressivo
  clearInterval(timerInterval);
  timeElapsed = 0;
  updateTimer();
  timerInterval = setInterval(() => {
    timeElapsed++;
    updateTimer();
  }, 1000);

  // Sorteia 6 palavras aleatórias
  let shuffledWords = [...geoWords].sort(() => Math.random() - 0.5);
  wordsToFind = shuffledWords.slice(0, 6);
  wordsFound = 0;
  wordsCountDisplay.innerText = wordsFound;
  firstClickCell = null;

  // Cria a grade vazia
  gridData = Array(gridSize)
    .fill(null)
    .map(() => Array(gridSize).fill(""));

  // Tenta colocar cada palavra na grade
  wordsToFind.forEach((word) => {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 200) {
      // Direções: 0=Horizontal(Dir), 1=Horizontal(Esq), 2=Vertical(Baixo), 3=Vertical(Cima), 4=Diagonal(Baixo-Dir), 5=Diagonal(Cima-Esq)
      const dir = Math.floor(Math.random() * 6);
      let row = Math.floor(Math.random() * gridSize);
      let col = Math.floor(Math.random() * gridSize);
      let rStep = 0,
        cStep = 0;

      if (dir === 0) cStep = 1;
      else if (dir === 1) cStep = -1;
      else if (dir === 2) rStep = 1;
      else if (dir === 3) rStep = -1;
      else if (dir === 4) {
        rStep = 1;
        cStep = 1;
      } else {
        rStep = -1;
        cStep = -1;
      }

      // Checa se cabe na grade
      let canPlace = true;
      if (
        row + rStep * word.length < -1 ||
        row + rStep * word.length > gridSize
      )
        canPlace = false;
      if (
        col + cStep * word.length < -1 ||
        col + cStep * word.length > gridSize
      )
        canPlace = false;

      // Checa se as letras conflitam com palavras já colocadas
      if (canPlace) {
        for (let i = 0; i < word.length; i++) {
          let currR = row + i * rStep;
          let currC = col + i * cStep;
          if (
            currR < 0 ||
            currR >= gridSize ||
            currC < 0 ||
            currC >= gridSize ||
            (gridData[currR][currC] !== "" &&
              gridData[currR][currC] !== word[i])
          ) {
            canPlace = false;
            break;
          }
        }
      }

      // Coloca a palavra
      if (canPlace) {
        for (let i = 0; i < word.length; i++) {
          gridData[row + i * rStep][col + i * cStep] = word[i];
        }
        placed = true;
      }
      attempts++;
    }
  });

  // Preenche os espaços vazios com letras aleatórias
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      if (gridData[r][c] === "") {
        gridData[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
      }
    }
  }

  // Renderiza a grade no HTML
  gridContainer.innerHTML = "";
  for (let r = 0; r < gridSize; r++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "grid-row";
    for (let c = 0; c < gridSize; c++) {
      let cellDiv = document.createElement("div");
      cellDiv.className = "grid-cell";
      cellDiv.innerText = gridData[r][c];
      cellDiv.dataset.r = r;
      cellDiv.dataset.c = c;

      cellDiv.addEventListener("click", () => handleCellClick(cellDiv));
      rowDiv.appendChild(cellDiv);
    }
    gridContainer.appendChild(rowDiv);
  }

  // Renderiza a lista de palavras
  wordListDiv.innerHTML = "";
  wordsToFind.forEach((word) => {
    let div = document.createElement("div");
    div.className = "word-item";
    div.id = "word-" + word;
    div.innerText = word;
    wordListDiv.appendChild(div);
  });
}

// LÓGICA DE INTERAÇÃO
function handleCellClick(cell) {
  if (cell.classList.contains("found")) return;

  if (!firstClickCell) {
    // Primeiro clique
    firstClickCell = cell;
    cell.classList.add("selected");
  } else {
    // Segundo clique
    let r1 = parseInt(firstClickCell.dataset.r);
    let c1 = parseInt(firstClickCell.dataset.c);
    let r2 = parseInt(cell.dataset.r);
    let c2 = parseInt(cell.dataset.c);

    let rDiff = Math.abs(r1 - r2);
    let cDiff = Math.abs(c1 - c2);

    if (r1 === r2 || c1 === c2 || rDiff === cDiff) {
      let wordFormed = "";
      let cellsInLine = [];

      let steps = Math.max(rDiff, cDiff);
      let rStep = r1 === r2 ? 0 : r2 > r1 ? 1 : -1;
      let cStep = c1 === c2 ? 0 : c2 > c1 ? 1 : -1;

      for (let i = 0; i <= steps; i++) {
        let currentR = r1 + i * rStep;
        let currentC = c1 + i * cStep;
        let currentCell = document.querySelector(
          `.grid-cell[data-r='${currentR}'][data-c='${currentC}']`
        );
        wordFormed += currentCell.innerText;
        cellsInLine.push(currentCell);
      }

      let wordReversed = wordFormed.split("").reverse().join("");
      let matchedWord = null;
      if (wordsToFind.includes(wordFormed)) matchedWord = wordFormed;
      else if (wordsToFind.includes(wordReversed)) matchedWord = wordReversed;

      if (
        matchedWord &&
        !document
          .getElementById("word-" + matchedWord)
          .classList.contains("found-word")
      ) {
        cellsInLine.forEach((c) => {
          c.classList.remove("selected");
          c.classList.add("found");
        });
        document
          .getElementById("word-" + matchedWord)
          .classList.add("found-word");

        wordsFound++;
        wordsCountDisplay.innerText = wordsFound;

        if (wordsFound === wordsToFind.length) {
          clearInterval(timerInterval);
          finalTimeDisplay.innerText = timerDisplay.innerText;
          victoryMsg.style.display = "block";
        }
      } else {
        firstClickCell.classList.remove("selected");
      }
    } else {
      firstClickCell.classList.remove("selected");
    }

    firstClickCell = null;
  }
}

// Inicia o jogo ao clicar no botão inicial
startBtn.addEventListener("click", generateGame);
