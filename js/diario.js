// --- CONFIGURAÇÕES DO CICLO DIÁRIO ---
const DATA_LANCAMENTO = new Date("2026-04-30T00:00:00-03:00");

let dbPaises = [];
let paisDoDia = null;
let numeroDoDesafioAtual = 1;
let tentativas = 0;
const maxTentativas = 5;
let isGameOver = false;

// Níveis de desfoque (blur) em pixels de acordo com o número de erros
// Índice 0 = 0 erros (MUITO borrado), Índice 4 = 4 erros (quase nítido)
const niveisBlur = [30, 22, 15, 8, 3, 0];

// Variáveis para a nova mecânica de revelação em grid
let imgOriginal = new Image();
let gridIndices = [];

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

    document.getElementById("triesLeft").innerText = Math.max(
      0,
      maxTentativas - tentativas,
    );
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

  const diasPassados = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));
  numeroDoDesafioAtual = Math.max(1, diasPassados + 1);

  const numFormatado = String(numeroDoDesafioAtual).padStart(3, "0");
  const spanDesafio = document.getElementById("desafioNum");
  if (spanDesafio) spanDesafio.innerText = numFormatado;

  const totalPaises = dbPaises.length;
  const cicloAtual = Math.floor(Math.max(0, diasPassados) / totalPaises);
  const diaDoCiclo = Math.max(0, diasPassados) % totalPaises;

  let indices = Array.from({ length: totalPaises }, (_, i) => i);

  const rng = mulberry32(2026 + cicloAtual);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  // Prepara o grid diário (Garante que todo jogador revele os mesmos pedaços no mesmo dia)
  let rngGrid = mulberry32(1000 + diasPassados);
  gridIndices = [0, 1, 2, 3, 4, 5]; // 6 pedaços (3 colunas x 2 linhas)
  for (let i = gridIndices.length - 1; i > 0; i--) {
    const j = Math.floor(rngGrid() * (i + 1));
    [gridIndices[i], gridIndices[j]] = [gridIndices[j], gridIndices[i]];
  }

  return dbPaises[indices[diaDoCiclo]];
}

// --- CONTROLE VISUAL (BLUR E MÁSCARA CINZA) ---
function aplicarBlur() {
  const canvas = document.getElementById("flagCanvas");
  if (!canvas) return;

  if (isGameOver) {
    canvas.style.filter = "blur(0px)";
  } else {
    const blurLevel =
      niveisBlur[tentativas] !== undefined ? niveisBlur[tentativas] : 0;
    canvas.style.filter = `blur(${blurLevel}px)`;
  }
}

function desenharMascara() {
  const canvas = document.getElementById("flagCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const colunas = 3;
  const linhas = 2;
  const blockW = canvas.width / colunas;
  const blockH = canvas.height / linhas;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Desenha a bandeira inteira por baixo
  ctx.drawImage(imgOriginal, 0, 0, canvas.width, canvas.height);

  if (isGameOver) return;

  // Desenha quadrados cinzas nas partes que ainda não foram reveladas
  ctx.fillStyle = "#a0a0a0"; // Cor cinza
  for (let i = 0; i < 6; i++) {
    // Só desenha o bloco cinza se o índice dele for maior ou igual ao número de tentativas
    if (i >= tentativas) {
      const blockIndex = gridIndices[i];
      const col = blockIndex % colunas;
      const row = Math.floor(blockIndex / colunas);
      ctx.fillRect(col * blockW - 1, row * blockH - 1, blockW + 2, blockH + 2);
    }
  }
}

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .trim();
}

// --- INICIALIZAÇÃO DO JOGO ---
window.onload = async function () {
  try {
    const response = await fetch("js/paises.json");
    dbPaises = await response.json();
  } catch (error) {
    showAlert(
      "⚠️ Erro ao carregar o banco de dados. Verifique o arquivo paises.json.",
      "alert-error",
    );
    return;
  }

  paisDoDia = getDailyCountry();

  if (checkDailyLock()) {
    carregarBandeira();
    return;
  }

  carregarBandeira();

  const inputElement = document.getElementById("countryInput");
  inputElement.addEventListener("keypress", function (e) {
    if (e.key === "Enter") window.makeGuess();
  });
};

function carregarBandeira() {
  const canvas = document.getElementById("flagCanvas");
  imgOriginal.crossOrigin = "Anonymous";
  imgOriginal.src = `https://flagcdn.com/w640/${paisDoDia.code}.png`;

  imgOriginal.onload = () => {
    canvas.width = imgOriginal.width;
    canvas.height = imgOriginal.height;

    desenharMascara();
    aplicarBlur();
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

  const palpiteObj = dbPaises.find((p) => normalize(p.nome) === palpiteNome);

  if (!palpiteObj) {
    showAlert("❌ País não encontrado no banco de dados!", "alert-error");
    return;
  }

  tentativas++;
  document.getElementById("triesLeft").innerText = Math.max(
    0,
    maxTentativas - tentativas,
  );

  if (palpiteObj.nome === paisDoDia.nome) {
    adicionarNaLista(palpiteObj, true);
    isGameOver = true;
    desenharMascara();
    aplicarBlur();
    finalizarJogo(true);
  } else {
    adicionarNaLista(palpiteObj, false);

    // Atualiza a arte visual após o erro
    desenharMascara();
    aplicarBlur();

    if (tentativas >= maxTentativas) {
      isGameOver = true;
      desenharMascara();
      aplicarBlur();
      finalizarJogo(false);
    }
  }
};

function adicionarNaLista(pais, isCorreto) {
  const guessesList = document.getElementById("guessesList");
  const item = document.createElement("div");
  item.className = `guess-item ${isCorreto ? "correct" : "wrong"}`;

  if (isCorreto) {
    item.innerHTML = `<span>${pais.nome}</span> <div class="guess-data"><span>🎉 CORRETO!</span></div>`;
  } else {
    item.innerHTML = `<span>${pais.nome}</span> <div class="guess-data"><span>❌ INCORRETO</span></div>`;
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

window.shareResult = function () {
  const venceu =
    tentativas <= maxTentativas &&
    document.querySelector(".guess-item.correct");
  let emojiGrid = "";

  for (let i = 1; i <= maxTentativas; i++) {
    if (i < tentativas) emojiGrid += "🟥";
    else if (i === tentativas && venceu) emojiGrid += "🟩";
    else if (i === tentativas && !venceu) emojiGrid += "🟥";
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
