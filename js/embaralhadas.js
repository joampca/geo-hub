// BANCO DE DADOS GIGANTE - 100 Palavras
const database = [
  { w: "AMAPA", h: "Estado brasileiro cortado pela Linha do Equador" },
  {
    w: "MACAPA",
    h: "A única capital brasileira cortada pela Linha do Equador",
  },
  {
    w: "PARANA",
    h: "Estado brasileiro famoso pelas cataratas e pelas araucárias",
  },
  {
    w: "COLOMBO",
    h: "Fica na Grande Curitiba, mas também é a capital do Sri Lanka!",
  },
  { w: "AMAZONAS", h: "O maior estado do Brasil em território" },
  { w: "TOCANTINS", h: "O estado mais novo da federação brasileira" },
  { w: "BAHIA", h: "Estado onde os portugueses chegaram ao Brasil em 1500" },
  { w: "SERGIPE", h: "O menor estado do Brasil em extensão territorial" },
  { w: "RORAIMA", h: "Estado brasileiro que faz fronteira com a Venezuela" },
  { w: "MANAUS", h: "Capital brasileira localizada no coração da floresta" },
  {
    w: "CUIABA",
    h: "Capital brasileira conhecida como o centro geodésico da América do Sul",
  },
  {
    w: "RECIFE",
    h: "Capital nordestina famosa por seus rios, pontes e o frevo",
  },
  { w: "RUSSIA", h: "O país com a maior extensão territorial do planeta" },
  { w: "JAPAO", h: "Nação asiática conhecida por sua forte cultura milenar" },
  {
    w: "NORUEGA",
    h: "País nórdico famoso pelos fiordes gelados e auroras boreais",
  },
  { w: "EQUADOR", h: "País andino vizinho à Colômbia e Peru" },
  { w: "ISLANDIA", h: "Terra do fogo e do gelo no Atlântico Norte" },
  { w: "EGITO", h: "Casa do grande Rio Nilo e antigas pirâmides" },
  { w: "CHINA", h: "País com a maior muralha já construída" },
  { w: "ITALIA", h: "País com formato de bota chutando uma ilha" },
  { w: "VATICANO", h: "O menor país do mundo, localizado dentro de Roma" },
  {
    w: "MADAGASCAR",
    h: "Ilha africana famosa por sua biodiversidade e lêmures",
  },
  { w: "CANADA", h: "O segundo maior país do mundo, vizinho dos EUA" },
  {
    w: "MEXICO",
    h: "País norte-americano famoso por sua culinária e ruínas maias",
  },
  { w: "CHILE", h: "País mais longo e estreito do mundo" },
  { w: "PERU", h: "Berço da antiga civilização Inca" },
  { w: "ARGENTINA", h: "Maior país de língua espanhola na América do Sul" },
  {
    w: "URUGUAI",
    h: "Pequeno vizinho ao sul do Brasil, cuja capital é Montevidéu",
  },
  {
    w: "VENEZUELA",
    h: "País sul-americano com as maiores reservas de petróleo do mundo",
  },
  { w: "ANGOLA", h: "País africano de língua portuguesa rico em diamantes" },
  {
    w: "MOCAMBIQUE",
    h: "País na costa leste da África que também fala português",
  },
  { w: "MARROCOS", h: "País no norte da África muito próximo à Espanha" },
  { w: "SENEGAL", h: "País africano cuja capital é Dakar" },
  {
    w: "QUENIA",
    h: "País africano mundialmente famoso pelos safáris de savana",
  },
  { w: "SOMALIA", h: "País localizado no 'Chifre da África'" },
  { w: "INDIA", h: "Segundo país mais populoso do mundo, berço do Hinduísmo" },
  { w: "PAQUISTAO", h: "Vizinho e rival histórico da Índia" },
  {
    w: "MONGOLIA",
    h: "País asiático famoso por suas vastas estepes e Genghis Khan",
  },
  { w: "VIETNA", h: "País do Sudeste Asiático famoso pela Baía de Ha Long" },
  {
    w: "TAILANDIA",
    h: "Nação asiática antigamente conhecida como Reino de Sião",
  },
  { w: "FILIPINAS", h: "Arquipélago asiático com mais de 7 mil ilhas" },
  { w: "INDONESIA", h: "Maior país arquipélago do mundo" },
  {
    w: "AUSTRALIA",
    h: "País-continente famoso pelos cangurus e pela Ópera de Sydney",
  },
  { w: "FRANCA", h: "País europeu que abriga a Torre Eiffel" },
  {
    w: "ESPANHA",
    h: "País europeu que divide a Península Ibérica com Portugal",
  },
  {
    w: "PORTUGAL",
    h: "País europeu localizado no extremo ocidente da Península Ibérica",
  },
  {
    w: "ALEMANHA",
    h: "País central da Europa, sua capital já foi dividida por um muro",
  },
  { w: "SUECIA", h: "Maior país da Península Escandinava" },
  {
    w: "SUICA",
    h: "País dos Alpes famoso pela neutralidade, bancos e chocolates",
  },
  { w: "AUSTRIA", h: "País europeu terra natal de Mozart" },
  { w: "CROACIA", h: "País europeu famoso pelo belo litoral no Mar Adriático" },
  { w: "SERVIA", h: "País dos Bálcãs cuja capital é Belgrado" },
  { w: "GRECIA", h: "Berço da democracia e da civilização ocidental" },
  {
    w: "TURQUIA",
    h: "País transcontinental, dividindo-se entre Europa e Ásia",
  },
  { w: "CANBERRA", h: "A verdadeira capital da Austrália" },
  { w: "ESTOCOLMO", h: "A capital da Suécia" },
  { w: "OSLO", h: "A capital da Noruega" },
  { w: "SANTIAGO", h: "A capital do Chile" },
  { w: "BOGOTA", h: "A capital da Colômbia" },
  { w: "BERLIM", h: "A capital da Alemanha, outrora dividida por um muro" },
  { w: "LONDRES", h: "Capital cortada pelo Rio Tâmisa" },
  { w: "PARIS", h: "Conhecida mundialmente como a 'Cidade Luz'" },
  { w: "MADRI", h: "A capital e maior cidade da Espanha" },
  { w: "LISBOA", h: "A capital de Portugal" },
  { w: "ROMA", h: "A 'Cidade Eterna', capital da Itália" },
  { w: "ATENAS", h: "Capital dominada pela antiga Acrópole" },
  { w: "MOSCOU", h: "Capital onde fica a famosa Praça Vermelha" },
  { w: "PEQUIM", h: "Capital da China (também conhecida como Beijing)" },
  { w: "TOQUIO", h: "A maior e mais populosa região metropolitana do mundo" },
  { w: "SEUL", h: "A tecnológica capital da Coreia do Sul" },
  { w: "CABUL", h: "A capital do Afeganistão" },
  { w: "TEERA", h: "A capital do Irã" },
  { w: "CAIRO", h: "A maior cidade do mundo árabe, capital do Egito" },
  { w: "LUANDA", h: "A capital de Angola" },
  {
    w: "PRETORIA",
    h: "Uma das três capitais da África do Sul (A administrativa)",
  },
  { w: "LIMA", h: "A capital e principal centro gastronômico do Peru" },
  { w: "CARACAS", h: "A capital da Venezuela" },
  { w: "QUITO", h: "A alta capital do Equador" },
  { w: "OTTAWA", h: "A capital do Canadá" },
  { w: "WASHINGTON", h: "A capital dos Estados Unidos (D.C.)" },
  { w: "HAVANA", h: "A vibrante e histórica capital de Cuba" },
  {
    w: "PANTANAL",
    h: "Maior planície inundável do planeta, localizada no Brasil",
  },
  {
    w: "GROENLANDIA",
    h: "A maior ilha do mundo, quase inteiramente coberta por gelo",
  },
  { w: "SAARA", h: "O maior deserto quente do mundo, no norte da África" },
  { w: "ANTARTIDA", h: "Continente congelado no extremo sul" },
  {
    w: "TIBETE",
    h: "Região asiática autônoma conhecida como o 'Teto do Mundo'",
  },
  { w: "HIMALAIA", h: "A cordilheira mais alta do mundo" },
  { w: "ANDES", h: "A maior cordilheira de montanhas da América do Sul" },
  {
    w: "CERRADO",
    h: "A savana brasileira, segunda maior formação vegetal do país",
  },
  { w: "CAATINGA", h: "Bioma exclusivamente brasileiro, de clima semiárido" },
  { w: "PAMPAS", h: "Campos do sul do Brasil, Uruguai e Argentina" },
  { w: "NILO", h: "Rio africano vital para o desenvolvimento do Antigo Egito" },
  { w: "GANGES", h: "O rio sagrado da Índia" },
  {
    w: "TIGRE",
    h: "Rio que, junto com o Eufrates, formou a antiga Mesopotâmia",
  },
  { w: "VOLGA", h: "O rio mais longo da Europa, localizado na Rússia" },
  { w: "TAMISA", h: "Famoso rio que cruza a cidade de Londres" },
  {
    w: "DANUBIO",
    h: "Rio europeu que cruza diversas capitais, como Viena e Budapeste",
  },
  { w: "SENA", h: "O romântico rio que banha Paris" },
  { w: "PACIFICO", h: "O maior e mais profundo oceano do planeta" },
  { w: "ATLANTICO", h: "Oceano que separa as Américas da Europa e da África" },
  { w: "INDICO", h: "Oceano localizado entre a África, a Ásia e a Austrália" },
  { w: "ARTICO", h: "Oceano gelado localizado no extremo norte da Terra" },
  { w: "ATACAMA", h: "O deserto mais seco e árido do mundo, no Chile" },
  {
    w: "KALAHARI",
    h: "Grande deserto no sul da África, lar de muitos suricatos",
  },
  { w: "GOBI", h: "Vasto deserto rochoso dividido entre a China e a Mongólia" },
  { w: "BAIKAL", h: "O lago mais profundo e antigo do mundo, na Sibéria" },
  { w: "EVEREST", h: "O pico mais alto da Terra" },
];

// Variáveis de Controle
let availableWords = [...database];
let originalWord = "";
let scrambledWord = "";
let currentIndex = 1;
const maxRounds = 10;
let totalScore = 0;
let currentRoundPoints = 100;

let globalTime = 180; // 3 minutos
let globalTimerInterval;
let wordTime = 40; // 40 seg por palavra
let wordTimerInterval;

const levelDisplay = document.getElementById("level");
const scoreDisplay = document.getElementById("score");
const prizeDisplay = document.getElementById("prizePoints");
const globalTimerDisplay = document.getElementById("globalTimerDisplay");
const wordTimerDisplay = document.getElementById("wordTimerDisplay");
const hintText = document.getElementById("hintText");
const scrambleBoard = document.getElementById("scrambleBoard");
const inputArea = document.getElementById("inputArea");
const userInput = document.getElementById("userInput");
const customAlert = document.getElementById("customAlert");
const shuffleBtn = document.getElementById("shuffleBtn");

function normalizeString(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .trim();
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function scramble(word) {
  let arr = word.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let res = arr.join("");
  return res === word ? scramble(word) : res;
}

function renderBlocks(wordStr, animate = false) {
  scrambleBoard.innerHTML = "";
  for (let char of wordStr) {
    const block = document.createElement("div");
    block.className = "letter-block";
    block.innerText = char;
    if (animate) block.classList.add("spin");
    scrambleBoard.appendChild(block);
  }
}

function initGame() {
  availableWords = [...database];
  totalScore = 0;
  currentIndex = 1;
  scoreDisplay.innerText = totalScore;

  globalTime = 180;
  globalTimerDisplay.innerText = formatTime(globalTime);
  clearInterval(globalTimerInterval);
  globalTimerInterval = setInterval(() => {
    globalTime--;
    globalTimerDisplay.innerText = formatTime(globalTime);
    if (globalTime <= 0) endGame("⏰ O TEMPO TOTAL ACABOU!");
  }, 1000);

  loadNext();
}

function loadNext() {
  if (currentIndex > maxRounds || availableWords.length === 0) {
    endGame("🏆 MISSÃO CUMPRIDA! Você completou as 10 rodadas.");
    return;
  }

  customAlert.style.display = "none";
  inputArea.style.display = "block";
  userInput.value = "";
  setTimeout(() => {
    userInput.focus();
  }, 100);

  currentRoundPoints = 100;
  prizeDisplay.innerText = currentRoundPoints;
  shuffleBtn.disabled = false;
  shuffleBtn.innerText = "🌪️ TORNADO (-20 pts)";

  wordTime = 40;
  wordTimerDisplay.innerText = wordTime;
  clearInterval(wordTimerInterval);
  wordTimerInterval = setInterval(() => {
    wordTime--;
    wordTimerDisplay.innerText = wordTime;
    if (wordTime <= 0) timeUpForWord();
  }, 1000);

  const rIndex = Math.floor(Math.random() * availableWords.length);
  const currentItem = availableWords.splice(rIndex, 1)[0];
  originalWord = currentItem.w;
  scrambledWord = scramble(originalWord);

  levelDisplay.innerText = currentIndex;
  hintText.innerText = "Dica: " + currentItem.h;
  renderBlocks(scrambledWord);
}

function shuffleWord() {
  if (currentRoundPoints > 20) {
    currentRoundPoints -= 20;
    prizeDisplay.innerText = currentRoundPoints;
    scrambledWord = scramble(originalWord);
    renderBlocks(scrambledWord, true);
    if (currentRoundPoints === 20) {
      shuffleBtn.disabled = true;
      shuffleBtn.innerText = "🌪️ LIMITE ATINGIDO";
    }
  }
}

window.skipWord = function () {
  clearInterval(wordTimerInterval);
  showResultRevealing(`⏭️ <strong>VOCÊ PULOU!</strong>`, "alert-error");
};

function timeUpForWord() {
  clearInterval(wordTimerInterval);
  showResultRevealing(`⏰ <strong>TEMPO ESGOTADO!</strong>`, "alert-error");
}

function showResultRevealing(title, className) {
  inputArea.style.display = "none";
  customAlert.innerHTML = `${title}<br><br>A resposta correta era:<br><span class="answer-highlight">${originalWord}</span>`;
  customAlert.className = "custom-alert " + className;
  customAlert.style.display = "block";
  customAlert.innerHTML += `<br><button onclick="loadNextWrapper()" class="btn-action" style="margin-top:20px;">PRÓXIMA PALAVRA ▶</button>`;
}

window.loadNextWrapper = function () {
  currentIndex++;
  loadNext();
};

function checkAnswer() {
  const val = normalizeString(userInput.value);
  if (val === "") return;

  if (val === originalWord) {
    clearInterval(wordTimerInterval);
    totalScore += currentRoundPoints;
    scoreDisplay.innerText = totalScore;
    renderBlocks(originalWord);
    scrambleBoard.querySelectorAll(".letter-block").forEach((b) => {
      b.style.background = "linear-gradient(180deg, #008000, #006400)";
      b.style.color = "#FFF";
    });
    inputArea.style.display = "none";
    customAlert.innerHTML = `🎉 CORRETO! VOCÊ GANHOU +${currentRoundPoints} PONTOS!`;
    customAlert.className = "custom-alert alert-success";
    customAlert.style.display = "block";
    customAlert.innerHTML += `<br><button onclick="loadNextWrapper()" class="btn-action" style="margin-top:15px;">PRÓXIMA PALAVRA ▶</button>`;
  } else {
    customAlert.innerHTML = "❌ TENTE NOVAMENTE!";
    customAlert.className = "custom-alert alert-error";
    customAlert.style.display = "block";
    setTimeout(() => {
      if (inputArea.style.display !== "none")
        customAlert.style.display = "none";
    }, 2000);
  }
}

function endGame(titleMsg) {
  clearInterval(globalTimerInterval);
  clearInterval(wordTimerInterval);
  inputArea.style.display = "none";
  scrambleBoard.innerHTML = "";
  hintText.style.display = "none";
  customAlert.innerHTML = `<strong>${titleMsg}</strong><br><br>Pontuação Final: <strong>${totalScore}</strong> pts!<br><br><button onclick="window.location.reload()" class="btn-action" style="margin-top:20px;">JOGAR NOVAMENTE 🔄</button>`;
  customAlert.className = "custom-alert alert-success";
  customAlert.style.display = "block";
}

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkAnswer();
});
window.onload = initGame;
