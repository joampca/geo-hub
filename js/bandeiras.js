// Banco de Dados ONU + Territórios
const flagDatabase = [
  { code: "af", names: ["afeganistao"] },
  { code: "za", names: ["africa do sul"] },
  { code: "al", names: ["albania"] },
  { code: "de", names: ["alemanha"] },
  { code: "ad", names: ["andorra"] },
  { code: "ao", names: ["angola"] },
  { code: "ag", names: ["antigua e barbuda", "antigua"] },
  { code: "sa", names: ["arabia saudita"] },
  { code: "dz", names: ["argelia"] },
  { code: "ar", names: ["argentina"] },
  { code: "am", names: ["armenia"] },
  { code: "au", names: ["australia"] },
  { code: "at", names: ["austria"] },
  { code: "az", names: ["azerbaijao"] },
  { code: "bs", names: ["bahamas"] },
  { code: "bd", names: ["bangladesh"] },
  { code: "bb", names: ["barbados"] },
  { code: "bh", names: ["bahrein"] },
  { code: "be", names: ["belgica"] },
  { code: "bz", names: ["belize"] },
  { code: "bj", names: ["benin"] },
  { code: "by", names: ["bielorrussia"] },
  { code: "bo", names: ["bolivia"] },
  { code: "ba", names: ["bosnia", "bosnia e herzegovina"] },
  { code: "bw", names: ["botsuana"] },
  { code: "br", names: ["brasil"] },
  { code: "bn", names: ["brunei"] },
  { code: "bg", names: ["bulgaria"] },
  { code: "bf", names: ["burkina faso"] },
  { code: "bi", names: ["burundi"] },
  { code: "bt", names: ["butao"] },
  { code: "cv", names: ["cabo verde"] },
  { code: "cm", names: ["camaroes"] },
  { code: "kh", names: ["camboja"] },
  { code: "ca", names: ["canada"] },
  { code: "qa", names: ["catar", "qatar"] },
  { code: "kz", names: ["cazaquistao"] },
  { code: "td", names: ["chade"] },
  { code: "cl", names: ["chile"] },
  { code: "cn", names: ["china"] },
  { code: "cy", names: ["chipre"] },
  { code: "co", names: ["colombia"] },
  { code: "km", names: ["comores"] },
  { code: "cg", names: ["congo", "republica do congo"] },
  { code: "cd", names: ["republica democratica do congo", "rd congo"] },
  { code: "kp", names: ["coreia do norte"] },
  { code: "kr", names: ["coreia do sul"] },
  { code: "ci", names: ["costa do marfim"] },
  { code: "cr", names: ["costa rica"] },
  { code: "hr", names: ["croacia"] },
  { code: "cu", names: ["cuba"] },
  { code: "dk", names: ["dinamarca"] },
  { code: "dj", names: ["djibuti"] },
  { code: "dm", names: ["dominica"] },
  { code: "eg", names: ["egito"] },
  { code: "sv", names: ["el salvador"] },
  { code: "ae", names: ["emirados arabes unidos", "emirados arabes"] },
  { code: "ec", names: ["equador"] },
  { code: "er", names: ["eritreia"] },
  { code: "sk", names: ["eslovaquia"] },
  { code: "si", names: ["eslovenia"] },
  { code: "es", names: ["espanha"] },
  { code: "sz", names: ["essuatini", "suazilandia"] },
  { code: "us", names: ["estados unidos", "eua"] },
  { code: "ee", names: ["estonia"] },
  { code: "et", names: ["etiopia"] },
  { code: "fj", names: ["fiji"] },
  { code: "ph", names: ["filipinas"] },
  { code: "fi", names: ["finlandia"] },
  { code: "fr", names: ["franca"] },
  { code: "ga", names: ["gabao"] },
  { code: "gm", names: ["gambia"] },
  { code: "gh", names: ["gana"] },
  { code: "ge", names: ["georgia"] },
  { code: "gd", names: ["granada"] },
  { code: "gr", names: ["grecia"] },
  { code: "gt", names: ["guatemala"] },
  { code: "gy", names: ["guiana"] },
  { code: "gn", names: ["guine"] },
  { code: "gw", names: ["guine-bissau", "guine bissau"] },
  { code: "gq", names: ["guine equatorial"] },
  { code: "ht", names: ["haiti"] },
  { code: "nl", names: ["holanda", "paises baixos"] },
  { code: "hn", names: ["honduras"] },
  { code: "hu", names: ["hungria"] },
  { code: "ye", names: ["iemen"] },
  { code: "mh", names: ["ilhas marshall"] },
  { code: "sb", names: ["ilhas salomao"] },
  { code: "in", names: ["india"] },
  { code: "id", names: ["indonesia"] },
  { code: "ir", names: ["ira"] },
  { code: "iq", names: ["iraque"] },
  { code: "ie", names: ["irlanda"] },
  { code: "is", names: ["islandia"] },
  { code: "il", names: ["israel"] },
  { code: "it", names: ["italia"] },
  { code: "jm", names: ["jamaica"] },
  { code: "jp", names: ["japao"] },
  { code: "jo", names: ["jordania"] },
  { code: "ki", names: ["kiribati"] },
  { code: "kw", names: ["kuwait"] },
  { code: "la", names: ["laos"] },
  { code: "ls", names: ["lesoto"] },
  { code: "lv", names: ["letonia"] },
  { code: "lb", names: ["libano"] },
  { code: "lr", names: ["liberia"] },
  { code: "ly", names: ["libia"] },
  { code: "li", names: ["liechtenstein"] },
  { code: "lt", names: ["lituania"] },
  { code: "lu", names: ["luxemburgo"] },
  { code: "mk", names: ["macedonia do norte", "macedonia"] },
  { code: "mg", names: ["madagascar"] },
  { code: "my", names: ["malasia"] },
  { code: "mw", names: ["malaui"] },
  { code: "mv", names: ["maldivas"] },
  { code: "ml", names: ["mali"] },
  { code: "mt", names: ["malta"] },
  { code: "ma", names: ["marrocos"] },
  { code: "mu", names: ["mauricio"] },
  { code: "mr", names: ["mauritania"] },
  { code: "mx", names: ["mexico"] },
  { code: "mm", names: ["mianmar", "myanmar"] },
  { code: "fm", names: ["micronesia"] },
  { code: "mz", names: ["mocambique"] },
  { code: "md", names: ["moldavia"] },
  { code: "mc", names: ["monaco"] },
  { code: "mn", names: ["mongolia"] },
  { code: "me", names: ["montenegro"] },
  { code: "na", names: ["namibia"] },
  { code: "nr", names: ["nauru"] },
  { code: "np", names: ["nepal"] },
  { code: "ni", names: ["nicaragua"] },
  { code: "ne", names: ["niger"] },
  { code: "ng", names: ["nigeria"] },
  { code: "no", names: ["noruega"] },
  { code: "nz", names: ["nova zelandia"] },
  { code: "om", names: ["oma"] },
  { code: "pw", names: ["palau"] },
  { code: "pa", names: ["panama"] },
  { code: "pg", names: ["papua nova guine"] },
  { code: "pk", names: ["paquistao"] },
  { code: "py", names: ["paraguai"] },
  { code: "pe", names: ["peru"] },
  { code: "pl", names: ["polonia"] },
  { code: "pt", names: ["portugal"] },
  { code: "ke", names: ["quenia"] },
  { code: "kg", names: ["quirguistao"] },
  { code: "gb", names: ["reino unido", "inglaterra"] },
  {
    code: "cf",
    names: ["republica centro-africana", "republica centro africana"],
  },
  { code: "do", names: ["republica dominicana"] },
  { code: "cz", names: ["republica tcheca", "tchequia"] },
  { code: "ro", names: ["romenia"] },
  { code: "rw", names: ["ruanda"] },
  { code: "ru", names: ["russia"] },
  { code: "ws", names: ["samoa"] },
  { code: "sm", names: ["san marino"] },
  { code: "lc", names: ["santa lucia"] },
  { code: "kn", names: ["sao cristovao e neves"] },
  { code: "st", names: ["sao tome e principe"] },
  { code: "vc", names: ["sao vicente e granadinas"] },
  { code: "sc", names: ["seychelles"] },
  { code: "sn", names: ["senegal"] },
  { code: "sl", names: ["serra leoa"] },
  { code: "rs", names: ["servia"] },
  { code: "sg", names: ["cingapura", "singapura"] },
  { code: "sy", names: ["siria"] },
  { code: "so", names: ["somalia"] },
  { code: "lk", names: ["sri lanka"] },
  { code: "sd", names: ["sudao"] },
  { code: "ss", names: ["sudao do sul"] },
  { code: "se", names: ["suecia"] },
  { code: "ch", names: ["suica"] },
  { code: "sr", names: ["suriname"] },
  { code: "tj", names: ["tadjiquistao"] },
  { code: "th", names: ["tailandia"] },
  { code: "tw", names: ["taiwan"] },
  { code: "tz", names: ["tanzania"] },
  { code: "tl", names: ["timor-leste", "timor leste"] },
  { code: "tg", names: ["togo"] },
  { code: "to", names: ["tonga"] },
  { code: "tt", names: ["trinidad e tobago"] },
  { code: "tn", names: ["tunisia"] },
  { code: "tm", names: ["turcomenistao"] },
  { code: "tr", names: ["turquia"] },
  { code: "tv", names: ["tuvalu"] },
  { code: "ua", names: ["ucrania"] },
  { code: "ug", names: ["uganda"] },
  { code: "uy", names: ["uruguai"] },
  { code: "uz", names: ["uzbequistao"] },
  { code: "vu", names: ["vanuatu"] },
  { code: "va", names: ["vaticano"] },
  { code: "ve", names: ["venezuela"] },
  { code: "vn", names: ["vietna"] },
  { code: "zm", names: ["zambia"] },
  { code: "zw", names: ["zimbabue"] },
  // Algumas Ilhas e Territórios
  { code: "pr", names: ["porto rico"] },
  { code: "gl", names: ["groenlandia"] },
  { code: "aw", names: ["aruba"] },
  { code: "cw", names: ["curacao"] },
  { code: "pf", names: ["polinesia francesa"] },
  // Estados com reconhecimento limitado ou observadores
  { code: "ps", names: ["palestina"] },
  { code: "xk", names: ["kosovo"] },

  // Regiões Administrativas Especiais (China)
  { code: "hk", names: ["hong kong"] },
  { code: "mo", names: ["macau"] },

  // Países Constituintes e Territórios (Reino da Dinamarca e Países Baixos)
  { code: "fo", names: ["ilhas faroe", "faroe"] },

  // Territórios Franceses (Ultramarinos)
  { code: "nc", names: ["nova caledonia"] },
  { code: "gf", names: ["guiana francesa"] },
  { code: "mq", names: ["martinica"] },
  { code: "gp", names: ["guadalupe"] },

  // Outros / Antártida / Ilhas Autônomas
  { code: "aq", names: ["antartida", "antartica"] },
  { code: "ax", names: ["ilhas aland", "aland"] }, // Autônomo da Finlândia
  { code: "sj", names: ["svalbard", "svalbard e jan mayen"] },
];

const startBtn = document.getElementById("startBtn");
const playArea = document.getElementById("playArea");
const flagImage = document.getElementById("flagImage");
const userInput = document.getElementById("userInput");
const skipBtn = document.getElementById("skipBtn");
const giveUpBtn = document.getElementById("giveUpBtn"); // Novo botão de desistir
const scoreDisplay = document.getElementById("scoreDisplay");
const timerDisplay = document.getElementById("timer");
const feedbackDisplay = document.getElementById("feedback");
const gameOverMsg = document.getElementById("gameOverMsg");
const finalScore = document.getElementById("finalScore");

let availableFlags = [];
let currentFlag = null;
let score = 0;
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

function endGame(forced = false) {
  clearInterval(timerInterval);
  userInput.disabled = true;
  skipBtn.disabled = true;
  giveUpBtn.style.display = "none";

  if (forced) {
    userInput.placeholder = "JOGO ENCERRADO!";
  } else {
    userInput.placeholder = "TEMPO ESGOTADO!";
  }

  //flagImage.style.display = "none";
  feedbackDisplay.innerText = "";

  finalScore.innerText = score;
  gameOverMsg.style.display = "block";
}

function nextFlag() {
  if (availableFlags.length === 0) {
    // Prevenção: caso o usuário seja um gênio e zere as 200 bandeiras em 2 minutos!
    availableFlags = [...flagDatabase].sort(() => Math.random() - 0.5);
  }

  currentFlag = availableFlags.pop();
  flagImage.src = `https://flagcdn.com/${currentFlag.code}.svg`;
  userInput.value = "";
  userInput.focus();
}

startBtn.addEventListener("click", () => {
  // Cria uma cópia do banco de dados e embaralha logo no início (aleatoriedade garantida)
  availableFlags = [...flagDatabase].sort(() => Math.random() - 0.5);
  score = 0;
  scoreDisplay.innerText = "0";

  startBtn.style.display = "none";
  playArea.style.display = "block";
  giveUpBtn.style.display = "inline-block";

  nextFlag();

  timeRemaining = 120; // 2 minutos
  updateTimer();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimer();
    if (timeRemaining <= 0) endGame(false);
  }, 1000);
});

userInput.addEventListener("keyup", (e) => {
  const typedVal = normalizeText(userInput.value);

  if (currentFlag.names.includes(typedVal)) {
    // ACERTO: Ação quase instantânea!
    score++;
    scoreDisplay.innerText = score;
    feedbackDisplay.innerText = ""; // Limpa qualquer mensagem de erro

    // Pisca verde rapidamente
    userInput.style.backgroundColor = "#90EE90";
    setTimeout(() => (userInput.style.backgroundColor = "#FFF"), 150);

    // Vai pra próxima imediatamente
    nextFlag();
  } else if (e.key === "Enter") {
    // Errou e deu Enter
    userInput.style.backgroundColor = "#FFCCCC";
    setTimeout(() => (userInput.style.backgroundColor = "#FFF"), 200);
  }
});

skipBtn.addEventListener("click", () => {
  const correctAnswer = currentFlag.names[0].toUpperCase();
  feedbackDisplay.innerText = `❌ Era: ${correctAnswer}`;
  feedbackDisplay.className = "feedback-message feedback-wrong";

  setTimeout(() => {
    feedbackDisplay.innerText = "";
    nextFlag();
  }, 800); // Dei um tempinho a mais (800ms) pro usuário conseguir ler melhor antes de sumir
});

// Listener do botão desistir
giveUpBtn.addEventListener("click", () => {
  endGame(true);
});
