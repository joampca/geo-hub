// BANCO DE DADOS ÉPICO - 85 Charadas (Geografia, Geopolítica, História e Natureza)
const database = [
  {
    q: "Tenho cidades, mas não tenho casas. Tenho montanhas, mas não tenho árvores. Tenho água, mas não tenho peixes. O que eu sou?",
    a: ["MAPA", "MAPAS"],
    h: [
      "Mostro o mundo inteiro em um pedaço de papel.",
      "Geralmente tenho uma Rosa dos Ventos impressa.",
      "Piratas usavam para encontrar tesouros.",
    ],
  },
  {
    q: "Divido o mundo em duas metades, mas você não pode me tocar. Passo bem no meio de um estado brasileiro na região Norte.",
    a: ["EQUADOR", "LINHA DO EQUADOR"],
    h: [
      "Sou uma linha imaginária.",
      "Meu nome batiza um país andino vizinho à Colômbia.",
      "Corto exatamente a cidade de Macapá.",
    ],
  },
  {
    q: "Sou o meridiano mais famoso do mundo, dividindo a Terra nos hemisférios Ocidental e Oriental.",
    a: ["GREENWICH", "MERIDIANO DE GREENWICH"],
    h: [
      "Sirvo como referência para os fusos horários globais (GMT).",
      "Passo por um observatório famoso em Londres.",
      "Meu nome é o mesmo do distrito londrino onde fui definido.",
    ],
  },
  {
    q: "Sou a fronteira geológica mais profunda e inexplorada da Terra, um verdadeiro abismo negro no fundo do mar.",
    a: ["FOSSA DAS MARIANAS", "FOSSA DAS MARIANA"],
    h: [
      "Fico no Oceano Pacífico.",
      "Sou mais profunda do que a altura do Monte Everest.",
      "A pressão nas minhas águas esmagaria um submarino comum.",
    ],
  },
  {
    q: "Não sou um país nem um governo, mas um espetáculo visual magnético que ocorre nas regiões polares do norte.",
    a: ["AURORA BOREAL", "AURORA BOREALIS"],
    h: [
      "Sou causada pela interação dos ventos solares com o campo magnético da Terra.",
      "Pinto o céu de verde, rosa e roxo.",
      "Muitos turistas viajam para a Noruega ou Islândia só para me ver.",
    ],
  },
  {
    q: "Sou o lago mais profundo e antigo do mundo, contendo cerca de um quinto de toda a água doce não congelada da Terra.",
    a: ["LAGO BAIKAL", "BAIKAL"],
    h: [
      "Fico localizado na região da Sibéria.",
      "Estou no território da Rússia.",
      "No inverno, minha superfície congela e forma um gelo incrivelmente transparente.",
    ],
  },
  {
    q: "Sou um arquipélago no Ártico que abriga o 'Cofre Global de Sementes', guardando a biodiversidade agrícola do mundo para o caso de um apocalipse.",
    a: ["SVALBARD"],
    h: [
      "Pertenço à Noruega.",
      "Tenho mais ursos polares do que seres humanos.",
      "Por lei, ninguém pode nascer ou morrer no meu território.",
    ],
  },
  {
    q: "Sou a maior cachoeira da África. Os nativos me chamam de 'Mosi-oa-Tunya' (A Fumaça que Troveja).",
    a: ["CATARATAS DE VITORIA", "VICTORIA FALLS"],
    h: [
      "Fico no rio Zambeze.",
      "Faço fronteira entre a Zâmbia e o Zimbábue.",
      "Fui 'descoberta' pelo explorador escocês David Livingstone.",
    ],
  },
  {
    q: "Fui o centro de um dos impérios mais ricos da Idade Média, famoso pelo imperador Mansa Musa e pela mítica cidade de Timbuktu.",
    a: ["MALI", "IMPERIO DO MALI"],
    h: [
      "Fico na África Ocidental.",
      "No passado, controlei as rotas transaarianas de ouro e sal.",
      "Hoje, grande parte do meu território é coberta pelo Deserto do Saara.",
    ],
  },
  {
    q: "Sou uma nação no Chifre da África que orgulha-se de nunca ter sido formalmente colonizada por europeus. Acredita-se que eu guarde a Arca da Aliança.",
    a: ["ETIOPIA"],
    h: [
      "Derrotei os italianos na Batalha de Adwa em 1896.",
      "Sou considerada o berço do café no mundo.",
      "Minha capital é Adis Abeba.",
    ],
  },
  {
    q: "Tenho três capitais oficiais e uma história geopolítica marcada pela superação de um duro regime de segregação racial.",
    a: ["AFRICA DO SUL"],
    h: [
      "O regime que derrotei chamava-se Apartheid.",
      "Nelson Mandela foi meu presidente mais famoso.",
      "Fico no extremo sul do continente africano.",
    ],
  },
  {
    q: "Fui palco de uma tragédia terrível nos anos 90, mas hoje sou conhecida como a 'Singapura da África' e a 'Terra das Mil Colinas' pelo rápido avanço econômico.",
    a: ["RUANDA"],
    h: [
      "Fico na região dos Grandes Lagos Africanos.",
      "Minha capital é Kigali, considerada uma das cidades mais limpas da África.",
      "Abrigamos os raros gorilas-da-montanha.",
    ],
  },
  {
    q: "Sou um país da Ásia Central, famoso pelas cidades da antiga Rota da Seda, como Samarcanda. Além disso, sou duplamente encravado.",
    a: ["UZBEQUISTAO"],
    h: [
      "Para chegar ao mar saindo de mim, é preciso cruzar dois outros países.",
      "Fiz parte da antiga União Soviética.",
      "Minha capital é Tashkent.",
    ],
  },
  {
    q: "Geopoliticamente, sou conhecido como o 'Cemitério de Impérios', devido à minha geografia montanhosa acidentada e histórico de resistir a superpotências.",
    a: ["AFEGANISTAO"],
    h: [
      "Fico na Ásia Central/Sul.",
      "Britânicos, soviéticos e americanos tentaram me controlar sem sucesso a longo prazo.",
      "Minha capital é Cabul.",
    ],
  },
  {
    q: "Na Idade Média, sob a liderança de Genghis Khan, formei o maior império contíguo de terras da história da humanidade.",
    a: ["MONGOLIA", "IMPERIO MONGOL"],
    h: [
      "Fico 'espremido' entre a Rússia e a China.",
      "Sou famoso pelas vastas estepes e cultura nômade a cavalo.",
      "Minha capital é Ulan Bator.",
    ],
  },
  {
    q: "Sou uma região conhecida como o 'Teto do Mundo'. Hoje sou administrada pela China, o que gera intensos debates geopolíticos, e sou a sede espiritual do Dalai Lama.",
    a: ["TIBETE", "TIBET"],
    h: [
      "Fico no alto da Cordilheira do Himalaia.",
      "Minha capital tradicional é Lhasa.",
      "Fui um reino independente e teocrático no passado.",
    ],
  },
  {
    q: "Sou uma cidade-estado asiática altamente desenvolvida, que passou de uma ilha pobre a uma potência financeira global após ser expulsa da Malásia em 1965.",
    a: ["SINGAPURA", "CINGAPURA"],
    h: [
      "Tenho um dos portos mais movimentados do mundo.",
      "Minhas leis de limpeza são tão rígidas que mascar chiclete é proibido.",
      "Minha arquitetura mistura selva e prédios futuristas.",
    ],
  },
  {
    q: "Sou o país mais isolado do mundo moderno, governado por uma dinastia severa e um regime totalitário sob extremo sigilo.",
    a: ["COREIA DO NORTE"],
    h: [
      "Fico na Ásia Oriental.",
      "Faço fronteira ao sul com uma nação muito tecnológica (separada pelo paralelo 38).",
      "Minha capital é a cidade de Pyongyang.",
    ],
  },
  {
    q: "Fui o Império Romano do Oriente durante a Idade Média. Minha capital era o centro comercial do mundo e minhas muralhas caíram apenas com a invenção dos canhões.",
    a: ["IMPERIO BIZANTINO", "BIZANTINO"],
    h: [
      "Minha capital era Constantinopla (atual Istambul).",
      "A Basílica de Santa Sofia (Hagia Sophia) foi minha maior obra.",
      "Sobrevivi quase mil anos a mais que a metade ocidental de Roma.",
    ],
  },
  {
    q: "Fui uma complexa união geopolítica na Europa Central durante a Idade Média e Moderna. O filósofo Voltaire dizia que eu não era 'nem sagrado, nem romano, nem um império'.",
    a: [
      "SACRO IMPERIO ROMANO GERMANICO",
      "SACRO IMPERIO ROMANO",
      "SACRO IMPERIO",
    ],
    h: [
      "Fui governado por imperadores da Casa de Habsburgo por séculos.",
      "Meu território englobava principalmente o que hoje é a Alemanha e Áustria.",
      "Fui dissolvido por Napoleão Bonaparte em 1806.",
    ],
  },
  {
    q: "Dominei o Oriente Médio, o norte da África e o sudeste da Europa por séculos. Conhecido como o 'Homem doente da Europa' antes da minha queda na 1ª Guerra Mundial.",
    a: ["IMPERIO OTOMANO", "OTOMANO"],
    h: [
      "Fui fundado por tribos turcas.",
      "Derrubei Constantinopla em 1453.",
      "Sou o precursor do moderno Estado da Turquia.",
    ],
  },
  {
    q: "Sou um país nos Bálcãs que se desintegrou de forma violenta nos anos 90, dando origem a novas nações como Croácia, Sérvia e Bósnia.",
    a: ["IUGOSLAVIA"],
    h: [
      "Fui um país socialista, mas independente da URSS.",
      "Fui liderado por décadas pelo Marechal Josip Broz Tito.",
      "Minha capital era Belgrado.",
    ],
  },
  {
    q: "Fui a primeira nação da América Latina a declarar independência e a primeira república negra livre do mundo, após uma grande revolução de escravizados.",
    a: ["HAITI"],
    h: [
      "Divido a ilha de Hispaniola com a República Dominicana.",
      "Derrotei as tropas de Napoleão Bonaparte no início do século XIX.",
      "Minha capital é Porto Príncipe.",
    ],
  },
  {
    q: "Fui uma superpotência comunista que durou de 1922 a 1991, protagonizando a Guerra Fria e a Corrida Espacial.",
    a: ["UNIAO SOVIETICA", "URSS"],
    h: [
      "Enviei o primeiro satélite (Sputnik) e o primeiro homem ao espaço.",
      "Minha economia era planificada e o poder centrado em Moscou.",
      "Fui composta por 15 repúblicas, lideradas pela Rússia.",
    ],
  },
  {
    q: "Sou uma ilha caribenha que foi o epicentro de uma crise geopolítica quase apocalíptica em 1962, por conta de mísseis nucleares soviéticos escondidos em meu território.",
    a: ["CUBA"],
    h: [
      "Sofro um embargo econômico dos EUA há décadas.",
      "Fui governada por Fidel Castro.",
      "Minha capital é Havana.",
    ],
  },
  {
    q: "Sou o menor país do mundo, mas exerço enorme influência geopolítica global. Meu sistema de governo é uma monarquia teocrática eletiva.",
    a: ["VATICANO"],
    h: [
      "Sou a sede mundial da Igreja Católica.",
      "Fico localizado dentro de Roma.",
      "O Papa é o meu chefe de estado absoluto.",
    ],
  },
  {
    q: "Sou o país onde dizem que o sol nasce primeiro.",
    a: ["JAPAO"],
    h: [
      "Fico na Ásia e sou um arquipélago (conjunto de ilhas).",
      "A cultura dos samurais e animes nasceu aqui.",
      "Minha bandeira é branca com um grande círculo vermelho no meio.",
    ],
  },
  {
    q: "Fico no meio de dois oceanos, mas não sou uma ilha. Tenho um canal artificial gigante que corta meu corpo.",
    a: ["PANAMA"],
    h: [
      "Ligo a América do Norte à América do Sul.",
      "Meu famoso canal liga o Oceano Pacífico ao Oceano Atlântico.",
      "Minha capital tem exatamente o mesmo nome do país.",
    ],
  },
  {
    q: "Sou o maior país do mundo em território, mas a maior parte de mim é coberta de gelo e florestas de taiga.",
    a: ["RUSSIA"],
    h: [
      "Me espalho por dois continentes: Europa e Ásia.",
      "Fui o país sede e centro da antiga União Soviética.",
      "Minha capital é a cidade de Moscou.",
    ],
  },
  {
    q: "Tenho o formato exato de uma bota gigante que parece estar chutando uma ilha.",
    a: ["ITALIA"],
    h: [
      "Fico no sul da Europa, no Mar Mediterrâneo.",
      "Fui o centro do grande Império Romano.",
      "A ilha que eu 'chuto' se chama Sicília.",
    ],
  },
  {
    q: "Sou um país que também é considerado um continente inteiro. Tenho muitos desertos e animais que pulam.",
    a: ["AUSTRALIA"],
    h: [
      "Fico localizado na Oceania.",
      "A Ópera de Sydney é o meu principal cartão postal.",
      "Sou a terra natural dos cangurus e coalas.",
    ],
  },
  {
    q: "Sou o lugar mais frio, seco e ventoso da Terra. Não pertenço a nenhum país do mundo.",
    a: ["ANTARTIDA", "ANTARTICA"],
    h: [
      "Fico no extremo sul do planeta.",
      "Há um tratado internacional que proíbe testes militares e mineração em mim.",
      "Sou o lar natural dos pinguins-imperadores.",
    ],
  },
  {
    q: "Sou a maior ilha do mundo, mas meu nome é a maior propaganda enganosa, pois sou quase toda coberta de gelo.",
    a: ["GROENLANDIA"],
    h: [
      "Fico no Oceano Ártico, perto do Canadá.",
      "Pertenço ao Reino da Dinamarca.",
      "Meu nome em inglês significa literalmente 'Terra Verde' (Greenland).",
    ],
  },
  {
    q: "Sou uma cordilheira gigante que forma a espinha dorsal de toda a costa oeste de um continente.",
    a: ["ANDES", "CORDILHEIRA DOS ANDES"],
    h: [
      "Cruzo sete países da América do Sul.",
      "Sou a maior cadeia de montanhas continental do mundo.",
      "O pico do Aconcágua e a cidade inca de Machu Picchu ficam em mim.",
    ],
  },
  {
    q: "Sou o arquipélago vulcânico mais famoso do mundo, isolado no meio do Pacífico e pertenço a uma potência mundial.",
    a: ["HAVAI", "HAWAII"],
    h: [
      "Sou o 50º estado dos Estados Unidos da América.",
      "A base naval de Pearl Harbor, atacada na 2ª Guerra Mundial, fica aqui.",
      "Minha capital é a cidade de Honolulu.",
    ],
  },
  {
    q: "Sou um país longo e absurdamente estreito, espremido entre montanhas gigantes e um oceano.",
    a: ["CHILE"],
    h: [
      "Fico na costa oeste da América do Sul.",
      "O deserto mais seco do mundo (Atacama) fica na minha região norte.",
      "Minha capital é a cidade de Santiago.",
    ],
  },
  {
    q: "Sou o estado mais ao sul do Brasil, lar dos pampas e cenário de uma famosa revolução separatista no século XIX.",
    a: ["RIO GRANDE DO SUL", "RS"],
    h: [
      "Faço fronteira com o Uruguai e a Argentina.",
      "Minha capital é Porto Alegre.",
      "A cultura gaúcha e o chimarrão são minhas marcas registradas.",
    ],
  },
  {
    q: "Fico no extremo norte do Brasil, tenho uma fortaleza militar em formato de estrela e o Rio Amazonas beija minhas margens.",
    a: ["AMAPA"],
    h: [
      "Sou o estado brasileiro onde fica o Marco Zero da linha do equador.",
      "Faço fronteira com a Guiana Francesa.",
      "Minha capital é Macapá.",
    ],
  },
  {
    q: "Sou o menor estado do Brasil em área territorial, localizado na região Nordeste.",
    a: ["SERGIPE"],
    h: [
      "Fico espremido entre a Bahia e Alagoas.",
      "Minha capital foi uma das primeiras cidades planejadas do Brasil (Aracaju).",
      "O Rio São Francisco deságua na minha fronteira norte.",
    ],
  },
  {
    q: "Sou a maior floresta tropical do mundo, abrigando a maior biodiversidade do planeta e influenciando o clima global.",
    a: ["FLORESTA AMAZONICA", "AMAZONIA"],
    h: [
      "Me estendo por nove países da América do Sul.",
      "Ocupo grande parte do território norte do Brasil.",
      "Sou frequentemente chamada de 'pulmão do mundo'.",
    ],
  },
  {
    q: "Sou o arquipélago vulcânico brasileiro com algumas das praias mais bonitas do mundo e limite restrito de visitantes por questões ambientais.",
    a: ["FERNANDO DE NORONHA", "NORONHA"],
    h: [
      "Pertenço geopoliticamente ao estado de Pernambuco.",
      "Fui usado como presídio militar no passado.",
      "A Baía do Sancho, eleita várias vezes a melhor praia do mundo, fica em mim.",
    ],
  },
  {
    q: "Sou um famoso canal artificial no Egito. Quando um navio bloqueou minha passagem recentemente, o comércio global parou.",
    a: ["CANAL DE SUEZ", "SUEZ"],
    h: [
      "Conecto o Mar Mediterrâneo ao Mar Vermelho.",
      "Evito que os navios europeus tenham que dar a volta em toda a África para chegar à Ásia.",
      "Fui nacionalizado em 1956, gerando uma grande crise diplomática.",
    ],
  },
  {
    q: "Sou a maior represa hidrelétrica do mundo em geração de energia, superando Itaipu, com um lago que cobriu antigas vilas asiáticas.",
    a: ["TRES GARGANTAS", "REPRESA DE TRES GARGANTAS"],
    h: [
      "Fico localizada no Rio Yangtzé.",
      "Minha construção foi a maior obra de engenharia da China contemporânea.",
      "Foi tão massiva que afetou sutilmente a rotação da Terra.",
    ],
  },
  {
    q: "Sou uma região mística do oceano Atlântico onde dizem que dezenas de navios e aviões desapareceram sem explicação clara.",
    a: ["TRIANGULO DAS BERMUDAS", "TRIANGULO"],
    h: [
      "Meus vértices ligam o estado da Flórida, a ilha de Porto Rico e o arquipélago das Bermudas.",
      "Minha fama geopolítica cresceu muito na época da Guerra Fria com sumiços de frotas navais.",
      "A ciência explica os sumiços por anomalias climáticas e correntes marítimas intensas.",
    ],
  },
  {
    q: "Sou o maior país do mundo sem costa marítima (encravado).",
    a: ["CAZAQUISTAO"],
    h: [
      "Fico localizado na Ásia Central.",
      "Minhas estepes abrigam a base de lançamento espacial russa de Baikonur.",
      "Minha capital moderna chama-se Astana.",
    ],
  },
  {
    q: "Sou um país europeu que possui o formato de um escudo verde no mapa. Reconhecido por abrigar bancos ultrasseguros e manter rigorosa neutralidade.",
    a: ["SUICA"],
    h: [
      "Fico encravado no meio dos Alpes.",
      "Muitas organizações internacionais (ONU, Cruz Vermelha) têm sede no meu território.",
      "Não tenho um presidente único, mas um Conselho Federal.",
    ],
  },
  {
    q: "Sou um mar localizado entre a Europa e a Ásia Central, e diferentemente dos outros mares, sou totalmente fechado (um lago gigante).",
    a: ["MAR CASPIO", "CASPIO"],
    h: [
      "Faço fronteira com Rússia, Irã, Azerbaijão, Cazaquistão e Turcomenistão.",
      "Minhas águas são ricas no valioso esturjão (caviar).",
      "Meu subsolo possui reservas gigantescas de petróleo e gás natural.",
    ],
  },
  {
    q: "Sou a cidade que foi dividida por um muro durante a Guerra Fria, separando fisicamente o mundo capitalista do mundo comunista.",
    a: ["BERLIM"],
    h: [
      "Fico na Europa Central.",
      "O bloco oriental ergueu a barreira para impedir a fuga da população.",
      "O muro caiu simbolicamente em novembro de 1989.",
    ],
  },
  {
    q: "Sou o estreito marítimo que separa o continente europeu do continente africano, crucial para o controle militar do Mar Mediterrâneo.",
    a: ["ESTREITO DE GIBRALTAR", "GIBRALTAR"],
    h: [
      "Ligo o Oceano Atlântico ao Mar Mediterrâneo.",
      "De um lado fica a Espanha, do outro, o Marrocos.",
      "No meu ponto mais estreito, tenho apenas 14 km de distância.",
    ],
  },
  {
    q: "Sou o estreito que separa a Ásia (extremo leste da Rússia) da América do Norte (oeste do Alasca nos EUA).",
    a: ["ESTREITO DE BERING", "BERING"],
    h: [
      "Acredita-se que os primeiros humanos chegaram à América atravessando o meu gelo na Era Glacial.",
      "Ligo o Oceano Ártico ao Oceano Pacífico.",
      "A linha internacional de mudança de data passa exatamente no meio de mim.",
    ],
  },
];

// LÓGICA DO JOGO
let score = 0;
let level = 1;
const maxLevel = 10;
let currentRiddle = null;
let availableRiddles = [...database];
let hintsUsed = 0;
let currentRoundPoints = 100;

const riddleText = document.getElementById("riddleText");
const userInput = document.getElementById("userInput");
const hintBtn = document.getElementById("hintBtn");
const scoreDisplay = document.getElementById("score");
const levelDisplay = document.getElementById("level");
const prizeDisplay = document.getElementById("prizePoints");
const customAlert = document.getElementById("customAlert");
const inputArea = document.getElementById("inputArea");

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .trim();
}

function initGame() {
  score = 0;
  level = 1;
  scoreDisplay.innerText = score;
  availableRiddles = [...database];
  loadNext();
}

function loadNext() {
  if (level > maxLevel || availableRiddles.length === 0) {
    endGame();
    return;
  }

  customAlert.style.display = "none";
  inputArea.style.display = "block";
  hintBtn.style.display = "inline-block";
  hintBtn.disabled = false;

  userInput.value = "";
  userInput.disabled = false;
  setTimeout(() => {
    userInput.focus();
  }, 100);

  hintsUsed = 0;
  currentRoundPoints = 100;
  prizeDisplay.innerText = currentRoundPoints;

  for (let i = 1; i <= 3; i++) {
    const h = document.getElementById("hint" + i);
    h.style.display = "none";
    h.innerText = "";
  }

  const randomIndex = Math.floor(Math.random() * availableRiddles.length);
  currentRiddle = availableRiddles.splice(randomIndex, 1)[0];

  riddleText.innerText = currentRiddle.q;
  levelDisplay.innerText = level;
}

window.showHint = function () {
  if (hintsUsed >= 3) return;
  hintsUsed++;
  currentRoundPoints -= 20;
  prizeDisplay.innerText = currentRoundPoints;

  const hintElem = document.getElementById("hint" + hintsUsed);
  hintElem.innerText =
    "Dica " + hintsUsed + ": " + currentRiddle.h[hintsUsed - 1];
  hintElem.style.display = "block";

  if (hintsUsed === 3) hintBtn.disabled = true;
  userInput.focus();
};

window.checkAnswer = function () {
  const val = normalize(userInput.value);

  if (val === "") {
    showFeedback("⚠️ ESCREVA ALGUMA COISA!", false);
    return;
  }

  if (currentRiddle.a.some((ans) => normalize(ans) === val)) {
    score += currentRoundPoints;
    scoreDisplay.innerText = score;
    showFeedback(
      `🎉 CORRETO! VOCÊ GANHOU +${currentRoundPoints} PONTOS!`,
      true
    );
  } else {
    showFeedback("❌ RESPOSTA ERRADA! TENTE NOVAMENTE.", false);
    userInput.value = "";
    userInput.focus();
  }
};

window.skipRiddle = function () {
  const correctAnswer = currentRiddle.a[0];
  customAlert.innerHTML = `⏭️ <strong>VOCÊ PULOU!</strong><br><br>A resposta correta era:<br><span class="answer-highlight"><strong>${correctAnswer}</strong></span>`;
  customAlert.className = "custom-alert alert-error";
  customAlert.style.display = "block";

  inputArea.style.display = "none";
  hintBtn.style.display = "none";

  customAlert.innerHTML += `<br><button onclick="loadNextWrapper()" class="btn-action" style="margin-top:20px;">PRÓXIMA CHARADA ▶</button>`;
};

window.loadNextWrapper = function () {
  level++;
  loadNext();
};

function showFeedback(msg, isSuccess) {
  customAlert.innerHTML = msg;
  customAlert.className =
    "custom-alert " + (isSuccess ? "alert-success" : "alert-error");
  customAlert.style.display = "block";

  if (isSuccess) {
    inputArea.style.display = "none";
    hintBtn.style.display = "none";
    customAlert.innerHTML += `<br><button onclick="loadNextWrapper()" class="btn-action" style="margin-top:15px;">PRÓXIMA CHARADA ▶</button>`;
  } else {
    setTimeout(() => {
      if (
        customAlert.className.includes("alert-error") &&
        inputArea.style.display !== "none"
      ) {
        customAlert.style.display = "none";
      }
    }, 2500);
  }
}

function endGame() {
  inputArea.style.display = "none";
  hintBtn.style.display = "none";
  riddleText.innerText = "FIM DE JOGO!";
  document.querySelector(".hints-container").innerHTML = "";

  customAlert.innerHTML = `🏆 <strong>PARABÉNS!</strong> Você completou todas as ${maxLevel} rodadas.<br><br>Sua Pontuação Final: <strong>${score}</strong> pts!<br><br><button onclick="initGame()" class="btn-action" style="margin-top:15px;">JOGAR NOVAMENTE 🔄</button>`;
  customAlert.className = "custom-alert alert-success";
  customAlert.style.display = "block";
}

userInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkAnswer();
  }
});

window.onload = initGame;
