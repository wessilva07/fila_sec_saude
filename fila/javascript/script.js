let filaDeChamados = [];
let numeroDeSenha = 1;

function adicionarChamado(chamado) {
    let senha = "Senha " + numeroDeSenha++;
    filaDeChamados.push({senha, chamado});
    exibirFila();
}

function atenderProximoChamado() {
    if (filaDeChamados.length > 0) {
        let proximoChamado = filaDeChamados.shift();
        console.log("Chamado atendido:", proximoChamado.senha, "-", proximoChamado.chamado);
        exibirFila();
    } else {
        console.log("Não há chamados na fila.");
    }
}

function exibirFila() {
    let filaElement = document.getElementById("fila");
    filaElement.innerHTML = "";
    if (filaDeChamados.length > 0) {
        filaDeChamados.forEach(chamado => {
            filaElement.innerHTML += `<div class="alert alert-info" role="alert">${chamado.senha} - ${chamado.chamado}</div>`;
        });
    } else {
        filaElement.innerHTML = "<div class='alert alert-warning' role='alert'>Não há chamados na fila.</div>";
    }
}
