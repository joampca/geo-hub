// Função para carregar o Menu Lateral em todas as páginas
function loadSidebar() {
    const menuHTML = `
        <div class="menu-header">MENU PRINCIPAL</div>
        <ul>
            <li><a href="index.html"><span class="menu-icon">🌎</span>Início</a></li>
            <li><a href="fronteiras.html"><span class="menu-icon">🗺️</span>Fronteiras</a></li>
            <li><a href="continentes.html"><span class="menu-icon">🌍</span>Continentes</a></li>
            <li><a href="capitais.html"><span class="menu-icon">📌</span>Capitais</a></li>
            <li><a href="bandeiras.html"><span class="menu-icon">🚩</span>Bandeiras</a></li>
            <li><a href="caca-palavras.html"><span class="menu-icon">🔍</span>Caça-Palavras</a></li>
            <li><a href="mapa.html"><span class="menu-icon">📍</span>Onde Fica?</a></li>
            <li><a href="charadas.html"><span class="menu-icon">❓</span>Charadas</a></li>
            <li><a href="forca.html"><span class="menu-icon">💀</span>Forca</a></li>
            <li><a href="embaralhadas.html"><span class="menu-icon">🌪️</span>Embaralhadas</a></li>
            <li><a href="erros.html"><span class="menu-icon">❌</span>Jogo dos Erros</a></li>
        </ul>
    `;
    
    const sidebar = document.querySelector('.side-menu');
    if (sidebar) {
        sidebar.innerHTML = menuHTML;
    }
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', loadSidebar);