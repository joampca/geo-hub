// --- CONFIGURAÇÕES DO CICLO DIÁRIO ---
// Data de lançamento do jogo (Dia 1 do ciclo).
const DATA_LANCAMENTO = new Date("2026-04-30T00:00:00-03:00");

// O banco de dados agora inicia vazio e será preenchido pelo arquivo JSON
let dbPaises = [];

let paisDoDia = null;
let numeroDoDesafioAtual = 1;
let tentativas = 0;
const maxTentativas = 5;
let canvas, ctx, originalImageData;
let revealedColors = [];
let isGameOver = false;

// --- SISTEMA DE ANTI-BURLA (FINGERPRINTING) ---
function generateFingerprint() {
  const canvasAuth = document.createElement("canvas");
  const gl = canvasAuth.getContext("webgl");
  const renderer = gl ? gl.getParameter(gl.RENDERER) : "unknown";
  const screenData = `${window.screen.width}x${window.screen.height}_${navigator.language}`;
  return btoa(renderer + screenData).substring(0, 15);
}

function checkDailyLock() {
  const today = new Date().toISOString().split("T")[0];
  const hashId = generateFingerprint();
  const lockKey = `geoGames_${hashId}_${today}`;

  if (localStorage.getItem(lockKey)) {
    isGameOver = true;
    tentativas =
      parseInt(localStorage.getItem(`${lockKey}_tries`)) || maxTentativas;
    const result = localStorage.getItem(`${lockKey}_result`);
    document.getElementById("inputArea").style.display = "none";
    document.getElementById("endGamePanel").style.display = "block";

    document.getElementById("triesLeft").innerText = maxTentativas - tentativas;
    const endGameMsg = document.getElementById("endGameMsg");
    if (result === "WIN") {
      endGameMsg.innerHTML = `<span style="color:#008000;">VOCÊ JÁ VENCEU HOJE!</span><br>Volte amanhã para um novo desafio.`;
    } else {
      endGameMsg.innerHTML = `<span style="color:#ff0000;">TENTATIVAS ESGOTADAS!</span><br>Volte amanhã para um novo desafio.`;
    }
    return true;
  }
  return false;
}

function lockDailyGame(venceu) {
  const today = new Date().toISOString().split("T")[0];
  const hashId = generateFingerprint();
  const lockKey = `geoGames_${hashId}_${today}`;

  localStorage.setItem(lockKey, "locked");
  localStorage.setItem(`${lockKey}_result`, venceu ? "WIN" : "LOSE");
  localStorage.setItem(`${lockKey}_tries`, tentativas);
}

// --- ALGORITMO DE ROTATIVIDADE E CICLOS INFINITOS ---
function mulberry32(a) {
  return function () {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function getDailyCountry() {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const inicio = new Date(DATA_LANCAMENTO);
  inicio.setHours(0, 0, 0, 0);

  // Calcula dias totais e define o número visual do desafio (#001, #002...)
  const diasPassados = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));
  numeroDoDesafioAtual = Math.max(1, diasPassados + 1);

  // Injeta o número no HTML
  const numFormatado = String(numeroDoDesafioAtual).padStart(3, "0");
  const spanDesafio = document.getElementById("desafioNum");
  if (spanDesafio) spanDesafio.innerText = numFormatado;

  const totalPaises = dbPaises.length;

  // Identifica o Ciclo (0 = primeira rodada, 1 = segunda rodada...)
  const cicloAtual = Math.floor(Math.max(0, diasPassados) / totalPaises);
  const diaDoCiclo = Math.max(0, diasPassados) % totalPaises;

  let indices = Array.from({ length: totalPaises }, (_, i) => i);

  // A Semente soma com o ciclo atual, criando uma roleta totalmente nova quando a anterior acaba
  const rng = mulberry32(2026 + cicloAtual);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return dbPaises[indices[diaDoCiclo]];
}

// --- CLASSIFICADOR DE CORES AVANÇADO ---
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 360, s, l];
}

function classifyColor(r, g, b) {
  const hsl = rgbToHsl(r, g, b);
  const h = hsl[0],
    s = hsl[1],
    l = hsl[2];

  if (l < 0.15) return "black";
  if (l > 0.88) return "white";
  if (s < 0.15) return "grey";

  let baseColor = "unknown";
  if (h < 15 || h >= 345) baseColor = "red";
  else if (h >= 15 && h < 45) baseColor = "orange";
  else if (h >= 45 && h < 70) baseColor = "yellow";
  else if (h >= 70 && h < 160) baseColor = "green";
  else if (h >= 160 && h < 260) baseColor = "blue";
  else if (h >= 260 && h < 345) baseColor = "purple";

  if (
    baseColor !== "unknown" &&
    baseColor !== "yellow" &&
    baseColor !== "orange"
  ) {
    if (l < 0.35) return "dark " + baseColor;
    if (l > 0.65) return "light " + baseColor;
  }
  return baseColor;
}

// --- RENDERIZAÇÃO DA MÁSCARA NO CANVAS ---
function updateCanvasMask() {
  if (!originalImageData) return;
  const imgData = ctx.createImageData(originalImageData);

  for (let i = 0; i < originalImageData.data.length; i += 4) {
    const r = originalImageData.data[i];
    const g = originalImageData.data[i + 1];
    const b = originalImageData.data[i + 2];
    const a = originalImageData.data[i + 3];

    const colorName = classifyColor(r, g, b);

    if (revealedColors.includes(colorName) || isGameOver) {
      imgData.data[i] = r;
      imgData.data[i + 1] = g;
      imgData.data[i + 2] = b;
      imgData.data[i + 3] = a;
    } else {
      imgData.data[i] = 160;
      imgData.data[i + 1] = 160;
      imgData.data[i + 2] = 160;
      imgData.data[i + 3] = a;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

// --- INICIALIZAÇÃO DO JOGO (Agora com Fetch do JSON) ---
function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .trim();
}

window.onload = async function () {
  canvas = document.getElementById("flagCanvas");
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  // Puxa os dados do JSON externo antes de iniciar o jogo
  try {
    const response = await fetch("js/paises.json");
    dbPaises = await response.json();
  } catch (error) {
    showAlert(
      "⚠️ Erro ao carregar o banco de dados. Verifique o arquivo paises.json.",
      "alert-error"
    );
    return;
  }

  paisDoDia = getDailyCountry();

  if (checkDailyLock()) {
    carregarBandeira(true);
    return;
  }

  carregarBandeira(false);

  const inputElement = document.getElementById("countryInput");
  inputElement.addEventListener("keypress", function (e) {
    if (e.key === "Enter") window.makeGuess();
  });
};

function carregarBandeira(showAll) {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = `https://flagcdn.com/w640/${paisDoDia.code}.png`;

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    try {
      originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      if (showAll) isGameOver = true;
      updateCanvasMask();
    } catch (e) {
      showAlert(
        "⚠️ Rode via servidor (Live Server) para a detecção de pixels funcionar.",
        "alert-error"
      );
    }
  };
}

// --- LÓGICA DO PALPITE ---
window.makeGuess = function () {
  if (isGameOver) return;

  const inputElement = document.getElementById("countryInput");
  if (!inputElement) return;

  const palpiteNome = normalize(inputElement.value);
  inputElement.value = "";

  if (palpiteNome === "") return;

  const palpiteObj = dbPaises.find((p) => p.nome === palpiteNome);

  if (!palpiteObj) {
    showAlert("❌ País não encontrado no banco de dados!", "alert-error");
    return;
  }

  tentativas++;
  document.getElementById("triesLeft").innerText = maxTentativas - tentativas;

  palpiteObj.colors.forEach((cor) => {
    if (!revealedColors.includes(cor)) revealedColors.push(cor);
  });

  let coresAcertadasNestaTentativa = 0;
  palpiteObj.colors.forEach((corDoPalpite) => {
    if (paisDoDia.colors.includes(corDoPalpite)) {
      coresAcertadasNestaTentativa++;
    }
  });

  const percentage = Math.round(
    (coresAcertadasNestaTentativa / paisDoDia.colors.length) * 100
  );

  if (palpiteObj.nome === paisDoDia.nome) {
    adicionarNaLista(palpiteObj, 100, true);
    isGameOver = true;
    updateCanvasMask();
    finalizarJogo(true);
  } else {
    adicionarNaLista(palpiteObj, percentage, false);
    updateCanvasMask();

    if (tentativas >= maxTentativas) {
      isGameOver = true;
      updateCanvasMask();
      finalizarJogo(false);
    }
  }
};

function adicionarNaLista(pais, porcentagem, isCorreto) {
  const guessesList = document.getElementById("guessesList");
  const item = document.createElement("div");
  item.className = `guess-item ${isCorreto ? "correct" : "wrong"}`;

  if (isCorreto) {
    item.innerHTML = `<span>${pais.nome}</span> <div class="guess-data"><span>100% 🎯</span></div>`;
  } else {
    item.innerHTML = `<span>${pais.nome}</span> <div class="guess-data"><span>${porcentagem}%</span></div>`;
  }
  guessesList.appendChild(item);
}

function finalizarJogo(venceu) {
  document.getElementById("inputArea").style.display = "none";
  document.getElementById("endGamePanel").style.display = "block";

  const endGameMsg = document.getElementById("endGameMsg");
  if (venceu) {
    endGameMsg.innerHTML = `<span style="color:#008000;">VITÓRIA!</span><br>Você descobriu a bandeira do dia!`;
  } else {
    endGameMsg.innerHTML = `<span style="color:#ff0000;">GAME OVER!</span><br>A bandeira de hoje era: ${paisDoDia.nome}`;
  }

  lockDailyGame(venceu);
}

function showAlert(msg, className) {
  const customAlert = document.getElementById("customAlert");
  if (!customAlert) return;
  customAlert.innerText = msg;
  customAlert.className = "custom-alert " + className;
  customAlert.style.display = "block";
  setTimeout(() => {
    customAlert.style.display = "none";
  }, 3500);
}

// --- BOTÃO DE COMPARTILHAR ATUALIZADO ---
window.shareResult = function () {
  const venceu =
    tentativas <= maxTentativas &&
    document.querySelector(".guess-item.correct");
  let emojiGrid = "";
  for (let i = 1; i <= maxTentativas; i++) {
    if (i < tentativas) emojiGrid += "🟥";
    else if (i === tentativas && venceu) emojiGrid += "🟩";
    else emojiGrid += "⬜";
  }

  const numFormatado = String(numeroDoDesafioAtual).padStart(3, "0");
  const textoShare = `🌍 GeoGames Diário #${numFormatado}\n${emojiGrid}\nJogue em: geogames.com.br`;

  navigator.clipboard
    .writeText(textoShare)
    .then(() => {
      showAlert("Copiado! Compartilhe seu resultado!", "alert-success");
    })
    .catch((err) => {
      showAlert("Erro ao copiar.", "alert-error");
    });
};
