// MEGA BANCO DE DADOS: Bandeiras Feitas em Código CSS
const flagDB = [
  {
    country: "BRASIL",
    trueHtml: `<div style="background:#009c3b; width:100%; height:100%; position:relative;"><div style="width: 80%; height: 80%; background: #ffdf00; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); position: absolute; top: 10%; left: 10%; display:flex; align-items:center; justify-content:center;"><div style="width:50%; height:50%; background:#002776; border-radius:50%;"></div></div></div>`,
    fakeHtml: `<div style="background:#009c3b; width:100%; height:100%; position:relative;"><div style="width: 80%; height: 80%; background: #FF8C00; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); position: absolute; top: 10%; left: 10%; display:flex; align-items:center; justify-content:center;"><div style="width:50%; height:50%; background:#002776; border-radius:50%;"></div></div></div>`,
    errorMsg: "O losango do Brasil é amarelo, e não laranja!",
  },
  {
    country: "JAPÃO",
    trueHtml: `<div style="background: #FFF; width:100%; height:100%; position:relative;"><div style="width:50%; padding-bottom:50%; background:#BC002D; border-radius:50%; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);"></div></div>`,
    fakeHtml: `<div style="background: #FFF; width:100%; height:100%; position:relative;"><div style="width:50%; padding-bottom:50%; background:#BC002D; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%); position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);"></div></div>`,
    errorMsg: "O Japão tem um círculo perfeito (o Sol), não uma estrela!",
  },
  {
    country: "FRANÇA",
    trueHtml: `<div style="background: linear-gradient(90deg, #002395 33.3%, #ffffff 33.3%, #ffffff 66.6%, #ed2939 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #002395 33.3%, #ffffff 33.3%, #ffffff 66.6%, #ed2939 66.6%); width:100%; height:100%;"></div>`,
    errorMsg: "As listras da França são verticais, não horizontais!",
  },
  {
    country: "ALEMANHA",
    trueHtml: `<div style="background: linear-gradient(180deg, #000000 33.3%, #FF0000 33.3%, #FF0000 66.6%, #FFCC00 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #000000 33.3%, #FFCC00 33.3%, #FFCC00 66.6%, #FF0000 66.6%); width:100%; height:100%;"></div>`,
    errorMsg: "A ordem das cores da Alemanha é Preto, Vermelho e Amarelo!",
  },
  {
    country: "ITÁLIA",
    trueHtml: `<div style="background: linear-gradient(90deg, #009246 33.3%, #ffffff 33.3%, #ffffff 66.6%, #CE2B37 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(90deg, #009246 33.3%, #ffffff 33.3%, #ffffff 66.6%, #0000FF 66.6%); width:100%; height:100%;"></div>`,
    errorMsg: "A bandeira da Itália tem a cor vermelha na direita, não azul!",
  },
  {
    country: "COLÔMBIA",
    trueHtml: `<div style="background: linear-gradient(180deg, #FCD116 50%, #003893 50%, #003893 75%, #CE1126 75%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #FCD116 33.3%, #003893 33.3%, #003893 66.6%, #CE1126 66.6%); width:100%; height:100%;"></div>`,
    errorMsg:
      "O amarelo na bandeira da Colômbia ocupa exatamente metade (50%) da bandeira!",
  },
  {
    country: "ARGENTINA",
    trueHtml: `<div style="background: linear-gradient(180deg, #74ACDF 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #74ACDF 66.6%); width:100%; height:100%; position:relative;"><div style="width:25%; padding-bottom:25%; background:#F6B40E; border-radius:50%; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); box-shadow: 0 0 10px #F6B40E;"></div></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #74ACDF 33.3%, #FFFFFF 33.3%, #FFFFFF 66.6%, #74ACDF 66.6%); width:100%; height:100%;"></div>`,
    errorMsg: "Faltou o famoso Sol de Maio no centro da faixa branca!",
  },
  {
    country: "SUÍÇA",
    trueHtml: `<div style="background: #FF0000; width:100%; height:100%; position:relative;"><div style="width:15%; height:50%; background:#FFF; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);"></div><div style="width:50%; height:15%; background:#FFF; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);"></div></div>`,
    fakeHtml: `<div style="background: #FF0000; width:100%; height:100%; position:relative;"><div style="width:15%; height:50%; background:#FFFF00; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);"></div><div style="width:50%; height:15%; background:#FFFF00; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%);"></div></div>`,
    errorMsg: "A cruz da Suíça é perfeitamente branca, não amarela!",
  },
  {
    country: "POLÔNIA",
    trueHtml: `<div style="background: linear-gradient(180deg, #FFF 50%, #DC143C 50%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #DC143C 50%, #FFF 50%); width:100%; height:100%;"></div>`,
    errorMsg: "A Polônia tem o Branco em cima e o Vermelho embaixo!",
  },
  {
    country: "IRLANDA",
    trueHtml: `<div style="background: linear-gradient(90deg, #169B62 33.3%, #FFF 33.3%, #FFF 66.6%, #FF883E 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(90deg, #FF883E 33.3%, #FFF 33.3%, #FFF 66.6%, #169B62 66.6%); width:100%; height:100%;"></div>`,
    errorMsg: "O verde da Irlanda fica na esquerda!",
  },
  {
    country: "HOLANDA",
    trueHtml: `<div style="background: linear-gradient(180deg, #AE1C28 33.3%, #FFF 33.3%, #FFF 66.6%, #21468B 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #21468B 33.3%, #FFF 33.3%, #FFF 66.6%, #AE1C28 66.6%); width:100%; height:100%;"></div>`,
    errorMsg: "O vermelho fica no topo da Holanda!",
  },
  {
    country: "RÚSSIA",
    trueHtml: `<div style="background: linear-gradient(180deg, #FFF 33.3%, #0039A6 33.3%, #0039A6 66.6%, #D52B1E 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #FFF 33.3%, #D52B1E 33.3%, #D52B1E 66.6%, #0039A6 66.6%); width:100%; height:100%;"></div>`,
    errorMsg: "A Rússia é Branco, Azul e Vermelho!",
  },
  {
    country: "ÁUSTRIA",
    trueHtml: `<div style="background: linear-gradient(180deg, #ED2939 33.3%, #FFF 33.3%, #FFF 66.6%, #ED2939 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #ED2939 33.3%, #FFFF00 33.3%, #FFFF00 66.6%, #ED2939 66.6%); width:100%; height:100%;"></div>`,
    errorMsg:
      "A faixa central da Áustria é branca, a amarela pertence à Espanha!",
  },
  {
    country: "NIGÉRIA",
    trueHtml: `<div style="background: linear-gradient(90deg, #008751 33.3%, #FFF 33.3%, #FFF 66.6%, #008751 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(90deg, #008751 33.3%, #FFFF00 33.3%, #FFFF00 66.6%, #008751 66.6%); width:100%; height:100%;"></div>`,
    errorMsg: "A Nigéria é Verde, Branco e Verde!",
  },
  {
    country: "SUÉCIA",
    trueHtml: `<div style="background: #006AA7; width:100%; height:100%; position:relative;"><div style="position:absolute; background:#FECC02; width:20%; height:100%; left:30%;"></div><div style="position:absolute; background:#FECC02; width:100%; height:20%; top:40%;"></div></div>`,
    fakeHtml: `<div style="background: #FECC02; width:100%; height:100%; position:relative;"><div style="position:absolute; background:#006AA7; width:20%; height:100%; left:30%;"></div><div style="position:absolute; background:#006AA7; width:100%; height:20%; top:40%;"></div></div>`,
    errorMsg: "As cores estavam invertidas! O fundo é azul e a cruz é amarela.",
  },
  {
    country: "FINLÂNDIA",
    trueHtml: `<div style="background: #FFF; width:100%; height:100%; position:relative;"><div style="position:absolute; background:#002F6C; width:20%; height:100%; left:30%;"></div><div style="position:absolute; background:#002F6C; width:100%; height:20%; top:40%;"></div></div>`,
    fakeHtml: `<div style="background: #FFF; width:100%; height:100%; position:relative;"><div style="position:absolute; background:#000000; width:20%; height:100%; left:30%;"></div><div style="position:absolute; background:#000000; width:100%; height:20%; top:40%;"></div></div>`,
    errorMsg: "A cruz da Finlândia é Azul, não preta!",
  },
  {
    country: "DINAMARCA",
    trueHtml: `<div style="background: #C60C30; width:100%; height:100%; position:relative;"><div style="position:absolute; background:#FFF; width:15%; height:100%; left:30%;"></div><div style="position:absolute; background:#FFF; width:100%; height:15%; top:42.5%;"></div></div>`,
    fakeHtml: `<div style="background: #C60C30; width:100%; height:100%; position:relative;"><div style="position:absolute; background:#FFFF00; width:15%; height:100%; left:30%;"></div><div style="position:absolute; background:#FFFF00; width:100%; height:15%; top:42.5%;"></div></div>`,
    errorMsg: "A cruz da Dinamarca é Branca, não amarela!",
  },
  {
    country: "BÉLGICA",
    trueHtml: `<div style="background: linear-gradient(90deg, #000 33.3%, #FDDA24 33.3%, #FDDA24 66.6%, #EF3340 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #000 33.3%, #FDDA24 33.3%, #FDDA24 66.6%, #EF3340 66.6%); width:100%; height:100%;"></div>`,
    errorMsg:
      "A Bélgica tem listras verticais. Horizontais assim parece a Alemanha errada!",
  },
  {
    country: "UCRÂNIA",
    trueHtml: `<div style="background: linear-gradient(180deg, #0057B7 50%, #FFDD00 50%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #FFDD00 50%, #0057B7 50%); width:100%; height:100%;"></div>`,
    errorMsg: "O azul (céu) fica em cima do amarelo (campos de trigo)!",
  },
  {
    country: "PERU",
    trueHtml: `<div style="background: linear-gradient(90deg, #D91023 33.3%, #FFF 33.3%, #FFF 66.6%, #D91023 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #D91023 33.3%, #FFF 33.3%, #FFF 66.6%, #D91023 66.6%); width:100%; height:100%;"></div>`,
    errorMsg: "As listras do Peru são verticais, horizontais é a Áustria!",
  },
  {
    country: "SOMÁLIA",
    trueHtml: `<div style="background: #418FDE; width:100%; height:100%; position:relative; display:flex; justify-content:center; align-items:center;"><div style="color:#FFF; font-size:100px;">★</div></div>`,
    fakeHtml: `<div style="background: #418FDE; width:100%; height:100%; position:relative; display:flex; justify-content:center; align-items:center;"><div style="color:#FFCD00; font-size:100px;">★</div></div>`,
    errorMsg: "A estrela da Somália é branca, não amarela!",
  },
  {
    country: "VIETNÃ",
    trueHtml: `<div style="background: #DA251D; width:100%; height:100%; position:relative; display:flex; justify-content:center; align-items:center;"><div style="color:#FFCD00; font-size:120px;">★</div></div>`,
    fakeHtml: `<div style="background: #DA251D; width:100%; height:100%; position:relative; display:flex; justify-content:center; align-items:center;"><div style="color:#FFFFFF; font-size:120px;">★</div></div>`,
    errorMsg: "A estrela do Vietnã é amarela/dourada!",
  },
  {
    country: "BANGLADESH",
    trueHtml: `<div style="background: #006A4E; width:100%; height:100%; position:relative;"><div style="width:45%; padding-bottom:45%; background:#F42A41; border-radius:50%; position:absolute; top:50%; left:45%; transform:translate(-50%, -50%);"></div></div>`,
    fakeHtml: `<div style="background: #F42A41; width:100%; height:100%; position:relative;"><div style="width:45%; padding-bottom:45%; background:#006A4E; border-radius:50%; position:absolute; top:50%; left:45%; transform:translate(-50%, -50%);"></div></div>`,
    errorMsg:
      "As cores estão invertidas! O fundo é verde escuro e o disco é vermelho.",
  },
  {
    country: "PALAU",
    trueHtml: `<div style="background: #4AADD6; width:100%; height:100%; position:relative;"><div style="width:40%; padding-bottom:40%; background:#FFDE00; border-radius:50%; position:absolute; top:50%; left:40%; transform:translate(-50%, -50%);"></div></div>`,
    fakeHtml: `<div style="background: #4AADD6; width:100%; height:100%; position:relative;"><div style="width:40%; padding-bottom:40%; background:#FFFFFF; border-radius:50%; position:absolute; top:50%; left:40%; transform:translate(-50%, -50%);"></div></div>`,
    errorMsg: "A lua (círculo) de Palau é amarela, não branca!",
  },
  {
    country: "REP. TCHECA",
    trueHtml: `<div style="background: linear-gradient(180deg, #FFF 50%, #D7141A 50%); width:100%; height:100%; position:relative;"><div style="background: #11457E; width:50%; height:100%; clip-path: polygon(0 0, 100% 50%, 0 100%); position:absolute; left:0; top:0;"></div></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #D7141A 50%, #FFF 50%); width:100%; height:100%; position:relative;"><div style="background: #11457E; width:50%; height:100%; clip-path: polygon(0 0, 100% 50%, 0 100%); position:absolute; left:0; top:0;"></div></div>`,
    errorMsg: "O branco fica na parte superior e o vermelho na inferior!",
  },
  {
    country: "EMIRADOS ÁRABES",
    trueHtml: `<div style="background: linear-gradient(180deg, #00732F 33.3%, #FFF 33.3%, #FFF 66.6%, #000 66.6%); width:100%; height:100%; position:relative;"><div style="background: #FF0000; width:25%; height:100%; position:absolute; left:0; top:0;"></div></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #00732F 33.3%, #FFF 33.3%, #FFF 66.6%, #000 66.6%); width:100%; height:100%; position:relative;"><div style="background: #FF0000; width:25%; height:100%; position:absolute; right:0; top:0;"></div></div>`,
    errorMsg: "A faixa vertical vermelha fica do lado ESQUERDO (mastro)!",
  },
  {
    country: "BAHAMAS",
    trueHtml: `<div style="background: linear-gradient(180deg, #00778B 33.3%, #FFC72C 33.3%, #FFC72C 66.6%, #00778B 66.6%); width:100%; height:100%; position:relative;"><div style="background: #000; width:50%; height:100%; clip-path: polygon(0 0, 100% 50%, 0 100%); position:absolute; left:0; top:0;"></div></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #0000FF 33.3%, #FFC72C 33.3%, #FFC72C 66.6%, #0000FF 66.6%); width:100%; height:100%; position:relative;"><div style="background: #000; width:50%; height:100%; clip-path: polygon(0 0, 100% 50%, 0 100%); position:absolute; left:0; top:0;"></div></div>`,
    errorMsg: "O azul das Bahamas é azul-água (turquesa), não azul escuro!",
  },
  {
    country: "INGLATERRA",
    trueHtml: `<div style="background: #FFF; width:100%; height:100%; position:relative;"><div style="position:absolute; background:#CE1124; width:15%; height:100%; left:42.5%;"></div><div style="position:absolute; background:#CE1124; width:100%; height:15%; top:42.5%;"></div></div>`,
    fakeHtml: `<div style="background: #FFF; width:100%; height:100%; position:relative;"><div style="position:absolute; background:#0000FF; width:15%; height:100%; left:42.5%;"></div><div style="position:absolute; background:#0000FF; width:100%; height:15%; top:42.5%;"></div></div>`,
    errorMsg: "A Cruz de São Jorge é Vermelha!",
  },
  {
    country: "MÔNACO",
    trueHtml: `<div style="background: linear-gradient(180deg, #CE1126 50%, #FFF 50%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #FFF 50%, #CE1126 50%); width:100%; height:100%;"></div>`,
    errorMsg: "Mônaco tem o vermelho em cima (inverso da Polônia)!",
  },
  {
    country: "LITUÂNIA",
    trueHtml: `<div style="background: linear-gradient(180deg, #FDB913 33.3%, #006A44 33.3%, #006A44 66.6%, #C1272D 66.6%); width:100%; height:100%;"></div>`,
    fakeHtml: `<div style="background: linear-gradient(180deg, #C1272D 33.3%, #006A44 33.3%, #006A44 66.6%, #FDB913 66.6%); width:100%; height:100%;"></div>`,
    errorMsg:
      "A Lituânia é Amarelo, Verde e Vermelho (você viu a ordem invertida)!",
  },
];

let shuffledFlags = [];
let currentIndex = 0;
let score = 0;
let fakeSide = "";
let clickable = false;

let timeLeft = 120;
let timerInterval;

function initGameData() {
  shuffledFlags = [...flagDB].sort(() => Math.random() - 0.5);
  currentIndex = 0;
  score = 0;
  document.getElementById("scoreDisplay").innerText = score;
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 120;
  document.getElementById("timerDisplay").innerText = timeLeft;

  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timerDisplay").innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
  if (!clickable) return;
  clickable = false;

  score = 0;
  document.getElementById("scoreDisplay").innerText = score;
  const currentObj = shuffledFlags[currentIndex];

  document.getElementById(
    "flag" + (fakeSide === "left" ? "Left" : "Right")
  ).style.borderColor = "#FF0000";

  showResult(
    `💀 TEMPO ESGOTADO! GAME OVER! 💀<br>Sua pontuação zerou.<br><span style="font-size:18px;">O erro era: ${currentObj.errorMsg}</span>`,
    false,
    true
  );
}

function startGame() {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("playArea").style.display = "block";
  initGameData();
  loadLevel();
}

function loadLevel() {
  const currentObj = shuffledFlags[currentIndex];
  document.getElementById("countryName").innerText =
    "BANDEIRA: " + currentObj.country;
  document.getElementById("roundCounter").innerText =
    currentIndex + 1 + " / " + shuffledFlags.length;

  fakeSide = Math.random() > 0.5 ? "left" : "right";

  const flagLeft = document.getElementById("flagLeft");
  const flagRight = document.getElementById("flagRight");

  if (fakeSide === "left") {
    flagLeft.innerHTML = currentObj.fakeHtml;
    flagRight.innerHTML = currentObj.trueHtml;
  } else {
    flagLeft.innerHTML = currentObj.trueHtml;
    flagRight.innerHTML = currentObj.fakeHtml;
  }

  document.getElementById("customAlert").style.display = "none";
  clickable = true;

  flagLeft.style.borderColor = "#000";
  flagRight.style.borderColor = "#000";

  startTimer();
}

window.checkFlag = function (chosenSide) {
  if (!clickable) return;
  clickable = false;
  clearInterval(timerInterval);

  const currentObj = shuffledFlags[currentIndex];
  let isCorrect = chosenSide === fakeSide;
  let isGameOver = false;

  if (isCorrect) {
    score += 100;
    document.getElementById(
      "flag" + (chosenSide === "left" ? "Left" : "Right")
    ).style.borderColor = "#00FF00";
  } else {
    score -= 50;
    document.getElementById(
      "flag" + (fakeSide === "left" ? "Left" : "Right")
    ).style.borderColor = "#FF0000";

    if (score <= 0) {
      score = 0;
      isGameOver = true;
    }
  }

  document.getElementById("scoreDisplay").innerText = score;

  if (isGameOver) {
    showResult(
      `💀 GAME OVER! 💀<br>Sua pontuação zerou.<br><span style="font-size:18px;">O erro era: ${currentObj.errorMsg}</span>`,
      false,
      true
    );
    return;
  }

  if (currentIndex + 1 >= shuffledFlags.length) {
    score += 100;
    document.getElementById("scoreDisplay").innerText = score;
    showResult(
      `🏆 DETETIVE MÁXIMO! 🏆<br>Você analisou todas as bandeiras!<br>Bônus de +100 pts e a <strong>Estrela de Sherlock Holmes 🕵️‍♂️⭐</strong>!<br>Pontuação Final: ${score}`,
      true,
      true,
      true
    );
    return;
  }

  if (isCorrect) {
    showResult(
      `🎉 MANDOU BEM! VOCÊ ACHOU O ERRO (+100 Pts)<br><span style="font-size:18px;">${currentObj.errorMsg}</span>`,
      true,
      false
    );
  } else {
    showResult(
      `❌ ERROU! Você clicou na bandeira original (-50 Pts).<br><span style="font-size:18px;">${currentObj.errorMsg}</span>`,
      false,
      false
    );
  }
};

function showResult(msg, isSuccess, isEndGame, isVictory = false) {
  const alertBox = document.getElementById("customAlert");
  alertBox.innerHTML = msg;

  if (isVictory) {
    alertBox.className = "custom-alert alert-victory";
  } else {
    alertBox.className =
      "custom-alert " + (isSuccess ? "alert-success" : "alert-error");
  }

  alertBox.style.display = "block";

  if (isEndGame) {
    alertBox.innerHTML += `<br><button onclick="resetGame()" class="btn-action" style="margin-top:15px; font-size: 18px; padding: 10px 20px;">🔄 JOGAR NOVAMENTE</button>`;
  } else {
    alertBox.innerHTML += `<br><button onclick="loadNextWrapper()" class="btn-action" style="margin-top:15px; font-size: 18px; padding: 10px 20px;">PRÓXIMO DESAFIO ▶</button>`;
  }
}

window.loadNextWrapper = function () {
  currentIndex++;
  loadLevel();
};

window.resetGame = function () {
  initGameData();
  loadLevel();
};
window.startGame = startGame;
