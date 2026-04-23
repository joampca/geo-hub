# 🌎 GEO GAMES

> **O seu portal nostálgico de desafios geográficos!**

O **Geo Games** é um portal web interativo com estética retrô (anos 90), desenvolvido para testar e expandir os conhecimentos geográficos dos usuários de uma forma divertida, rápida e educativa. 

O projeto foi construído com foco em extrema performance, alta segurança e compatibilidade total com dispositivos móveis e desktops.

---

## 🎮 Minigames Disponíveis

O portal conta com uma variedade de desafios que abrangem todos os níveis de conhecimento:

* **🚩 Bandeiras:** Adivinhe o país através da sua bandeira em um desafio contra o relógio.
* **🗺️ Fronteiras:** Liste todos os vizinhos terrestres de um país sorteado.
* **🌍 Continentes:** Acerte a qual continente pertence o país exibido.
* **📍 Capitais:** Relacione corretamente a capital ao seu respectivo país.
* **❌ Jogo dos Erros:** Identifique qual das duas bandeiras apresentadas tem um detalhe falso (baseado em CSS puro).
* **☠️ Forca:** O clássico jogo de adivinhar a palavra, focado em nomes de países.
* **🌪️ Embaralhadas:** Desembaralhe as letras para descobrir a nação oculta.
* **🔍 Caça-Palavras e 🔠 Cruzadas:** Desafios clássicos de jornais trazidos para o navegador.
* **❓ Charadas:** Testes de lógica e curiosidades geográficas.

---

## 🛠️ Tecnologias Utilizadas

O Geo Games foi construído seguindo o conceito de **Site Estático (Serverless)**, garantindo carregamento instantâneo e máxima segurança:

* **HTML5:** Semântica e estruturação robusta de todas as páginas.
* **CSS3:** Design responsivo (Mobile-First) e estética *Web 1.0/90s* (uso de letreiros em `<marquee>`, bordas `outset/inset`, paleta de cores primárias de alto contraste).
* **Vanilla JavaScript (ES6+):** Lógica dos jogos, cronômetros, pontuações e manipulação do DOM sem a necessidade de frameworks (Zero dependências externas como React ou jQuery).

---

## ⚙️ Funcionalidades e Estrutura Técnica

* **AdTech Ready (Monetização Pronta):** Estrutura CSS inteligente preparada para Google AdSense. Os espaços de anúncios (`.ad-placeholder`) identificam o dispositivo do usuário, exibindo banners de *300x600 / 300x250* em desktops e transicionando perfeitamente para *336x280* em dispositivos móveis.
* **Formulário Assíncrono (AJAX):** A página de contato utiliza a API do *FormSubmit* acionada via JavaScript Fetch API, permitindo o envio de e-mails para o webmaster sem a necessidade de recarregar a página (com feedback visual instantâneo).
* **Bancos de Dados Locais:** Todos os dados (países, continentes, capitais) são armazenados em arrays/objetos locais de alta velocidade, eliminando a latência de requisições a APIs externas durante as partidas cronometradas.

---

## 🚀 Como executar o projeto localmente

Como o projeto é 100% Client-Side (estático), a execução é extremamente simples:

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/geo-games.git](https://github.com/SEU-USUARIO/geo-games.git)