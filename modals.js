function abrirModal(openBtn, modal, formSelector) {
    openBtn.addEventListener('click', () => {
        modalAberto = modal;
        modal.showModal();
        document.body.style.overflow = 'hidden';
    });
}

function fecharModal(closeBtn, modal, formSelector) {
    closeBtn.addEventListener('click', () => {
        fechar(modal, formSelector);
    });

    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fechar(modal, formSelector);
        }
    });
}

function fechar(modal, formSelector) {
    modal.close();
    document.body.style.overflow = '';
    document.querySelector(formSelector).reset();
}

// Elementos do DOM
const openModalRecebimentos = document.querySelector('.recebimentos');
const openModalPagamentos = document.querySelector('.pagamentos');
const openModalTransferencias = document.querySelector('.transferencias');

const closeModalRecebimentos = document.querySelector('.modal-fechar-recebimentos');
const closeModalPagamentos = document.querySelector('.modal-fechar-pagamentos');
const closeModalTransferencias = document.querySelector('.modal-fechar-transferencias');

const modalRecebimentos = document.querySelector('.modal-recebimentos');
const modalPagamentos = document.querySelector('.modal-pagamentos');
const modalTransferencias = document.querySelector('.modal-transferencias');

// Event Listeners
abrirModal(openModalRecebimentos, modalRecebimentos, ".modal-form-recebimentos");
fecharModal(closeModalRecebimentos, modalRecebimentos, ".modal-form-recebimentos");

abrirModal(openModalPagamentos, modalPagamentos, ".modal-form-pagamentos");
fecharModal(closeModalPagamentos, modalPagamentos, ".modal-form-pagamentos");

abrirModal(openModalTransferencias, modalTransferencias, ".modal-form-transferencias");
fecharModal(closeModalTransferencias, modalTransferencias, ".modal-form-transferencias");


// Função para formatar o valor de um campo como moeda brasileira
function formatarCampoValor(input) {
    // Obtém apenas os dígitos do valor atual
    var valorNumerico = input.value.replace(/\D/g, '');

    // Converte o valor para número
    var valorDecimal = parseFloat(valorNumerico) / 100;

    // Formata o valor como moeda brasileira
    var valorFormatado = valorDecimal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Adiciona o "R$" ao valor formatado e atualiza o campo
    input.value = "R$ " + (isNaN(valorDecimal) ? "0,00" : valorFormatado.replace('R$', '').trim());
}

// Adiciona um evento de teclado para detectar 'Shift + D'
document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'D') {
        event.preventDefault(); // Evita a inserção da tecla no campo
        preencherDataEFocus();
    }
});

// Função para preencher os campos de data e mover o foco para o campo de descrição
function preencherDataEFocus() {
    var dataRecebimentos = document.getElementById("data-recebimentos");
    var dataPagamentos = document.getElementById("data-pagamentos");
    var dataTransferencias = document.getElementById("data-transferencias");

    // Obter a data atual
    var dataAtual = new Date();
    var dia = ('0' + dataAtual.getDate()).slice(-2);
    var mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
    var ano = dataAtual.getFullYear();

    // Formatando como "yyyy-mm-dd" para ser aceito pelo campo de data
    var dataFormatada = ano + '-' + mes + '-' + dia;

    // Preenche os campos de data apenas no modal que está aberto
    if (modalAberto === modalRecebimentos) {
        dataRecebimentos.value = dataFormatada;
        document.getElementById('descricao-recebimentos').focus();
    } else if (modalAberto === modalPagamentos) {
        dataPagamentos.value = dataFormatada;
        document.getElementById('descricao-pagamentos').focus();
    } else if (modalAberto === modalTransferencias) {
        dataTransferencias.value = dataFormatada;
        document.getElementById('valor-transferencias').focus();
    }
}
