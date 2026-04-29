// DICIONÁRIO DE TRADUÇÃO: Filtra estritamente os 50 maiores países do GeoJSON para serem jogáveis.
const top50Countries = {
  Russia: "RÚSSIA",
  Canada: "CANADÁ",
  "United States of America": "ESTADOS UNIDOS",
  China: "CHINA",
  Brazil: "BRASIL",
  Australia: "AUSTRÁLIA",
  India: "ÍNDIA",
  Argentina: "ARGENTINA",
  Kazakhstan: "CAZAQUISTÃO",
  Algeria: "ARGÉLIA",
  "Democratic Republic of the Congo": "REP. DEM. DO CONGO",
  Greenland: "GROENLÂNDIA",
  "Saudi Arabia": "ARÁBIA SAUDITA",
  Mexico: "MÉXICO",
  Indonesia: "INDONÉSIA",
  Sudan: "SUDÃO",
  Libya: "LÍBIA",
  Iran: "IRÃ",
  Mongolia: "MONGÓLIA",
  Peru: "PERU",
  Chad: "CHADE",
  Niger: "NÍGER",
  Angola: "ANGOLA",
  Mali: "MALI",
  "South Africa": "ÁFRICA DO SUL",
  Colombia: "COLÔMBIA",
  Ethiopia: "ETIÓPIA",
  Bolivia: "BOLÍVIA",
  Mauritania: "MAURITÂNIA",
  Egypt: "EGITO",
  Tanzania: "TANZÂNIA",
  Nigeria: "NIGÉRIA",
  Venezuela: "VENEZUELA",
  Pakistan: "PAQUISTÃO",
  Namibia: "NAMÍBIA",
  Mozambique: "MOÇAMBIQUE",
  Turkey: "TURQUIA",
  Chile: "CHILE",
  Zambia: "ZÂMBIA",
  Myanmar: "MIANMAR",
  Afghanistan: "AFEGANISTÃO",
  France: "FRANÇA",
  Somalia: "SOMÁLIA",
  Ukraine: "UCRÂNIA",
  Madagascar: "MADAGASCAR",
  Botswana: "BOTSUANA",
  Kenya: "QUÊNIA",
  Spain: "ESPANHA",
  Thailand: "TAILÂNDIA",
  Sweden: "SUÉCIA",
};

let score = 0;
let skipCount = 0;
let timeLeft = 120; // 2 minutos para achar no mapa
let timerInterval;
let isWaitingForClick = false;
let isSpinning = false;

let availableTargets = [];
let currentTargetEnglish = null;

// Variáveis do DOM
const targetDisplay = document.getElementById("targetDisplay");
const spinBtn = document.getElementById("spinBtn");
const skipBtn = document.getElementById("skipBtn");
const giveUpBtn = document.getElementById("giveUpBtn"); // Novo botão padronizado
const scoreDisplay = document.getElementById("scoreDisplay");
const skipDisplay = document.getElementById("skipDisplay");
const timerDisplay = document.getElementById("timer"); // Atualizado para ID do novo painel
const customAlert = document.getElementById("customAlert");
const svgContainer = d3.select("#mapContainer");

// Configuração do Mapa D3
const width = 800;
const height = 450;
const svg = svgContainer
  .append("svg")
  .attr("viewBox", `0 0 ${width} ${height}`)
  .attr("preserveAspectRatio", "xMidYMid meet");

const projection = d3
  .geoMercator()
  .scale(120)
  .translate([width / 2, height / 1.5]);
const pathGenerator = d3.geoPath().projection(projection);

// 1. CARREGAR OS DADOS GEOGRÁFICOS DO SATÉLITE
d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
  .then(function (world) {
    document.getElementById("loadingText").style.display = "none";
    document.getElementById("controlsArea").style.display = "block";

    const countries = topojson.feature(world, world.objects.countries).features;

    svg
      .selectAll("path")
      .data(countries)
      .enter()
      .append("path")
      .attr("d", pathGenerator)
      .attr("class", function (d) {
        return top50Countries[d.properties.name]
          ? "country-path playable-hover"
          : "country-path country-unplayable";
      })
      .attr("id", function (d) {
        return "country-" + d.properties.name.replace(/\s+/g, "");
      })
      .on("click", handleMapClick);
  })
  .catch(function (error) {
    document.getElementById("loadingText").innerText =
      "ERRO AO CONECTAR COM O SATÉLITE. VERIFIQUE SUA INTERNET.";
  });

// 2. LÓGICA DO JOGO
window.startGame = function () {
  document.getElementById("controlsArea").style.display = "none";
  document.getElementById("playArea").style.display = "block";
  giveUpBtn.style.display = "inline-block";

  score = 0;
  skipCount = 0;
  scoreDisplay.innerText = score;
  if (skipDisplay) skipDisplay.innerText = skipCount;

  // Popula e garante a aleatoriedade (embora a roleta já seja aleatória)
  availableTargets = Object.keys(top50Countries);

  startTimer();
  spinTarget();
};

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.innerText = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 120;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      handleTimeOut(false);
    }
  }, 1000);
}

function handleTimeOut(userGaveUp = false) {
  clearInterval(timerInterval);
  isWaitingForClick = false;
  spinBtn.disabled = true;
  skipBtn.disabled = true;
  giveUpBtn.style.display = "none";

  // Se o usuário desistiu ou o tempo acabou, pinta o alvo atual e todos os restantes de vermelho
  if (currentTargetEnglish) {
    availableTargets.push(currentTargetEnglish); // Devolve o atual pra lista pra ser pintado
  }

  availableTargets.forEach((countryKey) => {
    const id = "#country-" + countryKey.replace(/\s+/g, "");
    d3.select(id).classed("found-wrong", true).classed("playable-hover", false);
  });

  const reason = userGaveUp ? "🏳️ VOCÊ DESISTIU!" : "⏰ TEMPO ESGOTADO!";

  showResult(
    `${reason}<br>O radar finalizou a varredura.<br><strong>Pontuação: ${score} | Pulos: ${skipCount}</strong><br>Os países que faltaram estão em vermelho no mapa.`,
    false,
    true
  );
}

// Botão de Desistir
giveUpBtn.addEventListener("click", () => {
  handleTimeOut(true);
});

function resetMapColors() {
  d3.selectAll(".country-path")
    .classed("wrong-click", false)
    .classed("reveal-country", false);
  customAlert.style.display = "none";
}

function spinTarget() {
  if (isSpinning || availableTargets.length === 0) return;

  isSpinning = true;
  spinBtn.disabled = true;
  skipBtn.disabled = true;
  isWaitingForClick = false;
  resetMapColors();

  let ticks = 0;
  const maxTicks = 15;

  const spinInterval = setInterval(() => {
    let randomKey =
      availableTargets[Math.floor(Math.random() * availableTargets.length)];
    targetDisplay.innerText = top50Countries[randomKey];
    ticks++;

    if (ticks >= maxTicks) {
      clearInterval(spinInterval);

      const targetIndex = Math.floor(Math.random() * availableTargets.length);
      currentTargetEnglish = availableTargets.splice(targetIndex, 1)[0];

      targetDisplay.innerText = `>>> ${top50Countries[currentTargetEnglish]} <<<`;

      isSpinning = false;
      isWaitingForClick = true;
      skipBtn.disabled = false;
    }
  }, 80);
}

spinBtn.onclick = spinTarget;

skipBtn.onclick = () => {
  if (isSpinning || !isWaitingForClick) return;

  const skippedId = "#country-" + currentTargetEnglish.replace(/\s+/g, "");

  d3.select(skippedId)
    .classed("found-wrong", true)
    .classed("playable-hover", false);

  skipCount++;
  if (skipDisplay) skipDisplay.innerText = skipCount;

  customAlert.style.display = "none";
  spinTarget();
};

// 3. O CLIQUE NO MAPA VETORIAL
function handleMapClick(event, d) {
  if (!isWaitingForClick || !top50Countries[d.properties.name]) return;

  isWaitingForClick = false;
  skipBtn.disabled = true;
  spinBtn.disabled = false;
  resetMapColors();

  const clickedEnglishName = d.properties.name;
  const clickedId = "#country-" + clickedEnglishName.replace(/\s+/g, "");
  const correctId = "#country-" + currentTargetEnglish.replace(/\s+/g, "");

  if (clickedEnglishName === currentTargetEnglish) {
    score += 50;
    scoreDisplay.innerText = score;

    d3.select(correctId)
      .classed("found-correct", true)
      .classed("playable-hover", false);

    showResult(`🎯 TIRO CERTEIRO! (+50 Pts)`, true);
  } else {
    d3.select(clickedId).classed("wrong-click", true);

    d3.select(correctId)
      .classed("found-wrong", true)
      .classed("reveal-country", true)
      .classed("playable-hover", false);

    showResult(
      `❌ RADAR FALHOU! Você clicou em <strong>${top50Countries[clickedEnglishName]}</strong>.<br>O alvo correto está piscando no mapa.`,
      false
    );
  }

  // Checa Vitória Máxima
  if (availableTargets.length === 0) {
    clearInterval(timerInterval);
    spinBtn.disabled = true;
    giveUpBtn.style.display = "none";
    setTimeout(() => {
      showResult(
        `🏆 VARREDURA COMPLETA!<br>Pontuação Final: ${score} | Pulos: ${skipCount}`,
        true,
        true
      );
    }, 2000);
  }
}

function showResult(msg, isSuccess, isEndGame = false) {
  customAlert.innerHTML = msg;
  customAlert.className =
    "custom-alert " + (isSuccess ? "alert-success" : "alert-error");
  customAlert.style.display = "block";

  if (isEndGame) {
    customAlert.innerHTML += `<br><button onclick="window.location.reload()" class="btn-action" style="margin-top:15px; font-size: 18px;">🔄 JOGAR NOVAMENTE</button>`;
  }
}
