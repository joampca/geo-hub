// Banco de Dados com Múltiplas Grafias Aceitas para facilitar o jogo
const database = {
  "América do Sul": [
    { country: "Argentina", capitals: ["buenos aires"] },
    { country: "Bolívia", capitals: ["sucre", "la paz"] },
    { country: "Brasil", capitals: ["brasilia"] },
    { country: "Chile", capitals: ["santiago"] },
    { country: "Colômbia", capitals: ["bogota"] },
    { country: "Equador", capitals: ["quito"] },
    { country: "Guiana", capitals: ["georgetown"] },
    { country: "Paraguai", capitals: ["assuncao"] },
    { country: "Peru", capitals: ["lima"] },
    { country: "Suriname", capitals: ["paramaribo"] },
    { country: "Uruguai", capitals: ["montevideu", "montevideo"] },
    { country: "Venezuela", capitals: ["caracas"] },
  ],
  "América do Norte": [
    { country: "Canadá", capitals: ["ottawa"] },
    {
      country: "Estados Unidos",
      capitals: ["washington", "washington dc", "washington d.c."],
    },
    { country: "México", capitals: ["cidade do mexico", "mexico"] },
  ],
  Oceania: [
    { country: "Austrália", capitals: ["camberra", "canberra"] },
    { country: "Fiji", capitals: ["suva"] },
    { country: "Nova Zelândia", capitals: ["wellington"] },
    {
      country: "Papua Nova Guiné",
      capitals: ["port moresby", "porto moresby"],
    },
    { country: "Samoa", capitals: ["apia"] },
    { country: "Tonga", capitals: ["nuku'alofa", "nukualofa"] },
    { country: "Vanuatu", capitals: ["port vila", "porto vila"] },
    { country: "Ilhas Salomão", capitals: ["honiara"] },
    { country: "Kiribati", capitals: ["tarawa"] },
    { country: "Micronésia", capitals: ["palikir"] },
    { country: "Palau", capitals: ["ngerulmud"] },
    { country: "Tuvalu", capitals: ["funafuti"] },
    { country: "Ilhas Marshall", capitals: ["majuro"] },
    { country: "Nauru", capitals: ["yaren", "yarem"] },
    { country: "Ilhas Cook", capitals: ["avarua"] },
    { country: "Niue", capitals: ["alofi"] },
    { country: "Polinésia Francesa", capitals: ["papeete"] },
    { country: "Nova Caledônia", capitals: ["nouméa", "noumea"] },
    { country: "Guam", capitals: ["hagatña", "hagatna"] },
    { country: "Samoa Americana", capitals: ["pago pago"] },
  ],
  Europa: [
    { country: "Alemanha", capitals: ["berlim"] },
    { country: "Espanha", capitals: ["madri", "madrid"] },
    { country: "França", capitals: ["paris"] },
    { country: "Itália", capitals: ["roma"] },
    { country: "Portugal", capitals: ["lisboa"] },
    { country: "Reino Unido", capitals: ["londres"] },
    { country: "Rússia", capitals: ["moscou"] },
    { country: "Holanda", capitals: ["amsterda", "amsterdam"] },
    { country: "Bélgica", capitals: ["bruxelas"] },
    { country: "Suíça", capitals: ["berna"] },
    { country: "Áustria", capitals: ["viena"] },
    { country: "Suécia", capitals: ["estocolmo"] },
    { country: "Noruega", capitals: ["oslo"] },
    { country: "Grécia", capitals: ["atenas"] },
    { country: "Irlanda", capitals: ["dublin"] },
    { country: "Islândia", capitals: ["reiquiavique"] },
    { country: "Dinamarca", capitals: ["copenhague", "copenhaga"] },
    { country: "Finlândia", capitals: ["helsinque", "helsinki"] },
    { country: "Polônia", capitals: ["varsóvia", "varsovia"] },
    { country: "República Tcheca", capitals: ["praga"] },
    { country: "Hungria", capitals: ["budapeste"] },
    { country: "Ucrânia", capitals: ["kiev", "kyiv"] },
    { country: "Turquia", capitals: ["ancara", "ankara"] },
    { country: "Romênia", capitals: ["bucareste"] },
    { country: "Bulgária", capitals: ["sófia", "sofia"] },
    { country: "Sérvia", capitals: ["belgrado"] },
    { country: "Albânia", capitals: ["tirana"] },
    { country: "Croácia", capitals: ["zagreb"] },
    { country: "Luxemburgo", capitals: ["luxemburgo"] },
    { country: "Andorra", capitals: ["andorra-a-velha"] },
    { country: "Belarus", capitals: ["minsk"] },
    { country: "Bósnia e Herzegovina", capitals: ["sarajevo"] },
    { country: "Eslováquia", capitals: ["bratislava"] },
    { country: "Eslovênia", capitals: ["liubliana", "ljubljana"] },
    { country: "Estônia", capitals: ["tallinn", "talim"] },
    { country: "Letônia", capitals: ["riga"] },
    { country: "Lituânia", capitals: ["vilnius"] },
    { country: "Macedônia do Norte", capitals: ["skopje"] },
    { country: "Malta", capitals: ["valletta", "valeta"] },
    { country: "Moldávia", capitals: ["chisinau"] },
    { country: "Montenegro", capitals: ["podgorica"] },
    { country: "San Marino", capitals: ["san marino"] },
    { country: "Vaticano", capitals: ["vaticano", "cidade do vaticano"] },
    { country: "Mônaco", capitals: ["mônaco", "monaco"] },
    { country: "Liechtenstein", capitals: ["vaduz"] },
    { country: "Kosovo", capitals: ["pristina"] },
  ],
  Ásia: [
    { country: "China", capitals: ["pequim", "beijing"] },
    { country: "Japão", capitals: ["toquio"] },
    { country: "Coreia do Sul", capitals: ["seul"] },
    { country: "Índia", capitals: ["nova delhi", "nova delhi"] },
    { country: "Indonésia", capitals: ["jacarta"] },
    { country: "Tailândia", capitals: ["banguecoque", "bangkok"] },
    { country: "Vietnã", capitals: ["hanoi"] },
    { country: "Filipinas", capitals: ["manila"] },
    { country: "Arábia Saudita", capitals: ["riade"] },
    { country: "Irã", capitals: ["teera"] },
    { country: "Iraque", capitals: ["bagda"] },
    { country: "Israel", capitals: ["jerusalem"] },
    { country: "Turquia", capitals: ["ancara"] },
    { country: "Coreia do Norte", capitals: ["pyongyang"] },
    { country: "Paquistão", capitals: ["islamabad"] },
    {
      country: "Emirados Árabes Unidos",
      capitals: ["abu dhabi", "abu dabi"],
    },
    { country: "Catar", capitals: ["doha"] },
    { country: "Singapura", capitals: ["singapura", "singapore"] },
    { country: "Malásia", capitals: ["kuala lumpur"] },
    { country: "Cazaquistão", capitals: ["astana"] },
    { country: "Líbano", capitals: ["beirute"] },
    { country: "Mongólia", capitals: ["ulan bator", "ulaanbaatar"] },
    { country: "Camboja", capitals: ["phnom penh", "pnom penh"] },
    { country: "Nepal", capitals: ["katmandu", "kathmandu"] },
    { country: "Jordânia", capitals: ["amã", "amman"] },
    { country: "Armênia", capitals: ["yerevan", "erevan"] },
    { country: "Bangladesh", capitals: ["daca", "dhaka"] },
    { country: "Afeganistão", capitals: ["cabul", "kabul"] },
    { country: "Azerbaijão", capitals: ["baku"] },
    { country: "Bahrein", capitals: ["manama"] },
    { country: "Brunei", capitals: ["bandar seri begawan"] },
    { country: "Butão", capitals: ["thimphu", "timfu"] },
    { country: "Chipre", capitals: ["nicósia", "nicosia"] },
    { country: "Geórgia", capitals: ["tbilisi"] },
    { country: "Iêmen", capitals: ["saná", "sanaa"] },
    { country: "Kuwait", capitals: ["cidade do kuwait", "kuwait city"] },
    { country: "Laos", capitals: ["vientiane"] },
    { country: "Maldivas", capitals: ["malé", "male"] },
    { country: "Mianmar", capitals: ["naypyidaw", "nepiedó"] },
    { country: "Omã", capitals: ["mascate", "muscat"] },
    {
      country: "Palestina",
      capitals: ["jerusalém oriental", "ramallah"],
    },
    { country: "Quirguistão", capitals: ["bishkek", "bisqueque"] },
    { country: "Síria", capitals: ["damasco"] },
    {
      country: "Sri Lanka",
      capitals: ["sri jayawardenepura kotte", "colombo"],
    },
    { country: "Tadjiquistão", capitals: ["dushanbe", "duchambe"] },
    { country: "Taiwan", capitals: ["taipé", "taipei"] },
    { country: "Timor-Leste", capitals: ["díli", "dili"] },
    { country: "Turcomenistão", capitals: ["ashgabat", "asgabate"] },
    { country: "Uzbequistão", capitals: ["tashkent", "tasquente"] },
  ],
  África: [
    {
      country: "África do Sul",
      capitals: ["pretória", "pretoria", "cidade do cabo", "bloemfontein"],
    },
    { country: "Angola", capitals: ["luanda"] },
    { country: "Argélia", capitals: ["argel"] },
    { country: "Benim", capitals: ["porto novo", "porto-novo"] },
    { country: "Botsuana", capitals: ["gaborone"] },
    { country: "Burkina Faso", capitals: ["ouagadougou", "uagadugu"] },
    { country: "Burundi", capitals: ["gitega", "bujumbura"] },
    { country: "Cabo Verde", capitals: ["praia"] },
    { country: "Camarões", capitals: ["iaundé", "yaoundé"] },
    { country: "Chade", capitals: ["n'djamena", "ndjamena"] },
    { country: "Comores", capitals: ["moroni"] },
    { country: "Congo", capitals: ["brazzaville", "brazaville"] },
    {
      country: "Costa do Marfim",
      capitals: ["yamoussoukro", "iamussucre", "abidjan"],
    },
    { country: "Djibuti", capitals: ["djibuti", "djibouti"] },
    { country: "Egito", capitals: ["cairo"] },
    { country: "Eritreia", capitals: ["asmara"] },
    { country: "Essuatíni", capitals: ["mbabane", "lobamba"] },
    { country: "Etiópia", capitals: ["adis abeba", "addis ababa"] },
    { country: "Gabão", capitals: ["libreville"] },
    { country: "Gâmbia", capitals: ["banjul"] },
    { country: "Gana", capitals: ["acra", "accra"] },
    { country: "Guiné", capitals: ["conacri", "conakry"] },
    { country: "Guiné-Bissau", capitals: ["bissau"] },
    { country: "Guiné Equatorial", capitals: ["malabo"] },
    { country: "Lesoto", capitals: ["maseru"] },
    { country: "Libéria", capitals: ["monróvia", "monrovia"] },
    { country: "Líbia", capitals: ["trípoli", "tripoli"] },
    { country: "Madagascar", capitals: ["anananarivo"] },
    { country: "Malawi", capitals: ["lilongue", "lilongwe"] },
    { country: "Mali", capitals: ["bamako"] },
    { country: "Marrocos", capitals: ["rabat"] },
    { country: "Maurícia", capitals: ["port louis", "porto luís"] },
    { country: "Mauritânia", capitals: ["nouakchott", "nuakchott"] },
    { country: "Moçambique", capitals: ["maputo"] },
    { country: "Namíbia", capitals: ["windhoek"] },
    { country: "Níger", capitals: ["niamey"] },
    { country: "Nigéria", capitals: ["abuja"] },
    { country: "Quênia", capitals: ["nairóbi", "nairobi"] },
    { country: "República Centro-Africana", capitals: ["bangui"] },
    {
      country: "República Democrática do Congo",
      capitals: ["kinshasa", "quinxassa"],
    },
    { country: "Ruanda", capitals: ["kigali"] },
    {
      country: "São Tomé e Príncipe",
      capitals: ["são tomé", "sao tome"],
    },
    { country: "Senegal", capitals: ["dakar", "dacair"] },
    { country: "Seicheles", capitals: ["victoria", "vitória"] },
    { country: "Serra Leoa", capitals: ["freetown"] },
    { country: "Somália", capitals: ["mogadíscio", "mogadishu"] },
    { country: "Sudão", capitals: ["cartum", "khartoum"] },
    { country: "Sudão do Sul", capitals: ["juba"] },
    { country: "Tanzânia", capitals: ["dodoma", "dar es salaam"] },
    { country: "Togo", capitals: ["lomé", "lome"] },
    { country: "Tunísia", capitals: ["túnis", "tunis"] },
    { country: "Uganda", capitals: ["campala", "kampala"] },
    { country: "Zâmbia", capitals: ["lusaka", "lusaca"] },
    { country: "Zimbábue", capitals: ["harare"] },
  ],
};

// Configuração de tempo por região (em segundos)
const regionTimes = {
  "América do Sul": 120, // 2 minutos
  "América do Norte": 60, // 1 minuto
  Oceania: 300, // 5 minutos
  Europa: 480, // 8 minutos
  Ásia: 600, // 10 minutos
  África: 600, // 10 minutos
};

const startBtn = document.getElementById("startBtn");
const playArea = document.getElementById("playArea");
const regionNameDisplay = document.getElementById("regionName");
const answersGrid = document.getElementById("answersGrid");
const scoreDisplay = document.getElementById("scoreDisplay");
const totalDisplay = document.getElementById("totalDisplay");
const victoryMsg = document.getElementById("victoryMsg");
const gameOverMsg = document.getElementById("gameOverMsg");
const timerDisplay = document.getElementById("timer");

let currentRegionList = [];
let score = 0;
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
  const allInputs = document.querySelectorAll(".capital-input");
  allInputs.forEach((input) => (input.disabled = true));

  if (won) {
    victoryMsg.style.display = "block";
  } else {
    gameOverMsg.style.display = "block";
    // Mostra as respostas corretas nas que faltaram
    allInputs.forEach((input, index) => {
      if (!input.classList.contains("correct-input")) {
        input.value = currentRegionList[index].capitals[0]; // Mostra a 1ª opção de resposta
        input.parentElement.classList.add("missed");
      }
    });
  }
}

startBtn.addEventListener("click", () => {
  const regionsList = Object.keys(database);
  const randomRegion =
    regionsList[Math.floor(Math.random() * regionsList.length)];

  // Embaralha os países dentro da região
  currentRegionList = database[randomRegion].sort(() => Math.random() - 0.5);

  regionNameDisplay.innerText = randomRegion;
  totalDisplay.innerText = currentRegionList.length;
  startBtn.style.display = "none";
  playArea.style.display = "block";

  answersGrid.innerHTML = "";
  score = 0;
  scoreDisplay.innerText = "0";

  currentRegionList.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "country-card";
    card.id = "card-" + index;

    card.innerHTML = `
                    <div class="country-name">${item.country}</div>
                    <input type="text" class="capital-input" id="input-${index}" data-index="${index}" placeholder="Capital?" autocomplete="off">
                `;
    answersGrid.appendChild(card);
  });

  // Foca no primeiro input
  document.getElementById("input-0").focus();

  // --- AQUI ESTÁ A CORREÇÃO ---
  timeRemaining = regionTimes[randomRegion] || 300;

  updateTimer();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimer();
    if (timeRemaining <= 0) endGame(false);
  }, 1000);
});

// Delegação de eventos para os inputs da grade
answersGrid.addEventListener("keyup", (e) => {
  if (e.target.classList.contains("capital-input")) {
    const inputElement = e.target;
    const index = inputElement.getAttribute("data-index");
    const typedVal = normalizeText(inputElement.value);

    // Pega o array de respostas aceitas (já normalizadas)
    const validAnswers = currentRegionList[index].capitals.map((c) =>
      normalizeText(c)
    );

    if (validAnswers.includes(typedVal)) {
      // Acertou!
      inputElement.value = currentRegionList[index].capitals[0]; // Formata bonitinho
      inputElement.disabled = true;
      inputElement.classList.add("correct-input");
      inputElement.parentElement.classList.add("correct");

      score++;
      scoreDisplay.innerText = score;

      // Mágica de UX: Pula para o próximo input vazio
      const nextInput = document.querySelector(".capital-input:not(:disabled)");
      if (nextInput) {
        nextInput.focus();
      } else if (score === currentRegionList.length) {
        endGame(true);
      }
    }
  }
});
