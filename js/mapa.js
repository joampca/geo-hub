// DICIONÁRIO DE TRADUÇÃO: Filtra estritamente os 50 maiores países do GeoJSON para serem jogáveis.
// O nome em inglês deve bater exatamente com o arquivo topográfico global.
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
let timeLeft = 120;
let timerInterval;
let isWaitingForClick = false;
let isSpinning = false;

let availableTargets = []; // Array com os países que ainda não foram sorteados
let currentTargetEnglish = null; // O alvo atual (chave)

// Variáveis do DOM
const targetDisplay = document.getElementById("targetDisplay");
const spinBtn = document.getElementById("spinBtn");
const skipBtn = document.getElementById("skipBtn");
const scoreDisplay = document.getElementById("scoreDisplay");
const skipDisplay = document.getElementById("skipDisplay");
const timerDisplay = document.getElementById("timerDisplay");
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

// 1. CARREGAR OS DADOS GEOGRÁFICOS DO SATÉLITE (GeoJSON)
d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
  .then(function (world) {
    document.getElementById("loadingText").style.display = "none";
    document.getElementById("controlsArea").style.display = "block";

    const countries = topojson.feature(world, world.objects.countries).features;

    // Desenhar os polígonos no SVG
    svg
      .selectAll("path")
      .data(countries)
      .enter()
      .append("path")
      .attr("d", pathGenerator)
      .attr("class", function (d) {
        // Se o país estiver na nossa lista Top 50, ele é jogável.
        return top50Countries[d.properties.name]
          ? "country-path playable-hover"
          : "country-path country-unplayable";
      })
      .attr("id", function (d) {
        return "country-" + d.properties.name.replace(/\s+/g, ""); // Cria um ID limpo para selecionar depois
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

  score = 0;
  skipCount = 0;
  scoreDisplay.innerText = score;
  skipDisplay.innerText = skipCount;

  // Popula a lista de alvos com os nomes em inglês
  availableTargets = Object.keys(top50Countries);

  startTimer();
  spinTarget();
};

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 120;
  timerDisplay.innerText = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
  isWaitingForClick = false;
  spinBtn.disabled = true;
  skipBtn.disabled = true;
  showResult(
    `⏰ TEMPO ESGOTADO! FIM DE JOGO!<br>Você fez ${score} pontos e usou ${skipCount} pulos.`,
    false,
    true
  );
}

function resetMapColors() {
  // Limpa APENAS as cores temporárias (o clique errado e a animação de piscar).
  // As classes 'found-correct' e 'found-wrong' ficam no mapa para sempre!
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
    targetDisplay.innerText = top50Countries[randomKey]; // Mostra em Português
    ticks++;

    if (ticks >= maxTicks) {
      clearInterval(spinInterval);

      // Define o alvo real e remove do array
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

  // 1. Identifica o ID do país que o usuário resolveu pular
  // Usamos a mesma lógica de limpeza de ID (remover espaços) que usamos na criação do mapa
  const skippedId = "#country-" + currentTargetEnglish.replace(/\s+/g, "");

  // 2. O D3 entra em ação: Seleciona o país e marca de vermelho
  // Adicionamos 'found-wrong' para a cor e removemos 'playable-hover' para desativar o mouse
  d3.select(skippedId)
    .classed("found-wrong", true)
    .classed("playable-hover", false);

  // 3. Atualiza os contadores
  skipCount++;
  skipDisplay.innerText = skipCount;

  // 4. Limpa alertas e gira a roleta para o próximo alvo
  customAlert.style.display = "none";
  spinTarget();
};

// 3. O CLIQUE NO MAPA VETORIAL
function handleMapClick(event, d) {
  // Se não for hora de clicar ou não for país do Top 50, ignora.
  if (!isWaitingForClick || !top50Countries[d.properties.name]) return;

  isWaitingForClick = false;
  skipBtn.disabled = true;
  spinBtn.disabled = false;
  resetMapColors();

  const clickedEnglishName = d.properties.name;
  const clickedId = "#country-" + clickedEnglishName.replace(/\s+/g, "");
  const correctId = "#country-" + currentTargetEnglish.replace(/\s+/g, "");

  if (clickedEnglishName === currentTargetEnglish) {
    // REGRA 1: ACERTOU (Destaca de verde permanente e tira o hover)
    score += 50;
    scoreDisplay.innerText = score;

    d3.select(correctId)
      .classed("found-correct", true)
      .classed("playable-hover", false);

    showResult(`🎯 TIRO CERTEIRO! (+50 Pts)`, true);
  } else {
    // REGRA 3: ERROU
    // Marca temporariamente onde ele clicou errado de laranja
    d3.select(clickedId).classed("wrong-click", true);

    // Marca o alvo real de vermelho permanente, tira o hover e faz piscar
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
    setTimeout(() => {
      showResult(
        `🏆 FIM DE JOGO! O radar finalizou a varredura.<br>Pontuação Final: ${score} | Pulos: ${skipCount}`,
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
