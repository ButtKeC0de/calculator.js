console.log("Calculadora Online:");

const disp = document.getElementById("resultado");

function inserir(num) {
    if (disp.textContent === "0") {
        disp.textContent = num;
    } else {
        disp.textContent += num;
    }
}

function limpar() {
    disp.textContent = "0";
}

function apagar() {
    let atual = disp.textContent;
    disp.textContent = atual.substring(0, atual.length - 1);

    if (disp.textContent === "") {
        disp.textContent = "0";
    }
}

function calcular() {
    let resultado = disp.textContent;

    if (resultado) {
        try {
            disp.textContent = eval(resultado);
        } catch (e) {
            disp.textContent = "Erro";
            setTimeout(limpar, 1500);
        }
    }
}