document.addEventListener("DOMContentLoaded", () => {
    // Verifica se estamos na página do jogo checando se os elementos existem
    const inputElement = document.getElementById("countryInput");
    const submitBtn = document.getElementById("submitBtn");
    const scoreElement = document.getElementById("score");
    const answersList = document.getElementById("answersList");
    const victoryMessage = document.getElementById("victoryMessage");

    if (inputElement && submitBtn) {
        // Base de dados para o jogo "Fronteiras do Brasil"
        // Colocamos tudo em minúsculo e sem acentos para facilitar a validação
        const corretas = [
            "argentina", "bolivia", "colombia", "guiana francesa", 
            "guiana", "paraguai", "peru", "suriname", "uruguai", "venezuela"
        ];
        
        let acertos = [];

        // Função para remover acentos e facilitar a verificação
        function formatarTexto(texto) {
            return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        }

        function verificarResposta() {
            const tentativaBruta = inputElement.value;
            const tentativaFormatada = formatarTexto(tentativaBruta);

            if (tentativaFormatada === "") return;

            // Checa se a resposta está na lista e se já não foi adivinhada
            if (corretas.includes(tentativaFormatada) && !acertos.includes(tentativaFormatada)) {
                acertos.push(tentativaFormatada);
                
                // Atualiza pontuação
                scoreElement.innerText = acertos.length;

                // Adiciona na lista visual
                const li = document.createElement("li");
                // Capitaliza a primeira letra para ficar bonito na tela
                li.innerText = tentativaBruta.charAt(0).toUpperCase() + tentativaBruta.slice(1);
                answersList.appendChild(li);

                // Limpa o input
                inputElement.value = "";

                // Verifica condição de vitória
                if (acertos.length === corretas.length) {
                    victoryMessage.style.display = "block";
                    inputElement.disabled = true;
                    submitBtn.disabled = true;
                }
            } else {
                // Se errar ou repetir, limpa o campo e dá um feedback visual rápido
                inputElement.value = "";
                inputElement.style.backgroundColor = "#FFCCCC";
                setTimeout(() => {
                    inputElement.style.backgroundColor = "#FFF";
                }, 300);
            }
            
            inputElement.focus();
        }

        // Permite clicar no botão ou apertar "Enter"
        submitBtn.addEventListener("click", verificarResposta);
        inputElement.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                verificarResposta();
            }
        });
    }
});