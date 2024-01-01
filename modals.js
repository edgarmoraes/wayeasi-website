const openModalRecebimentos = document.querySelector('.recebimentos');
const openModalPagamentos = document.querySelector('.pagamentos');
const closeModalRecebimentos = document.querySelector('.modal-fechar-recebimentos');
const closeModalPagamentos = document.querySelector('.modal-fechar-pagamentos');
const modalRecebimentos = document.querySelector('.modal-recebimentos');
const modalPagamentos = document.querySelector('.modal-pagamentos');

    // Recebimentos
openModalRecebimentos.addEventListener('click', () => {
    modalAberto = modalRecebimentos; // Atualiza a variável para indicar que o modal de recebimentos está aberto
    modalRecebimentos.showModal(); // Abre o modal
    document.body.style.overflow = 'hidden'; // Esconde a barra de rolagem
});

closeModalRecebimentos.addEventListener('click', () => {
    closeRecebimentos(); // Fecha o modal
    document.querySelector(".modal-form-recebimentos").reset(); // Limpa os campos do formulário
});

modalRecebimentos.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeRecebimentos(); // Fecha o modal com ESC
        document.querySelector(".modal-form-recebimentos").reset(); // Limpa os campos do formulário
    }
});

function closeRecebimentos() {
    modalRecebimentos.close();
    document.body.style.overflow = ''; // Faz a barra de rolagem reaparecer
}

    // Pagamentos
openModalPagamentos.addEventListener('click', () => {
    modalAberto = modalPagamentos; // Atualiza a variável para indicar que o modal de pagamentos está aberto
    modalPagamentos.showModal(); // Abre o modal
    document.body.style.overflow = 'hidden'; // Esconde a barra de rolagem
});

closeModalPagamentos.addEventListener('click', () => {
    closePagamentos(); // Fecha o modal
    document.querySelector(".modal-form-pagamentos").reset(); // Limpa os campos do formulário
});

modalPagamentos.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePagamentos(); // Fecha o modal com ESC
        document.querySelector(".modal-form-pagamentos").reset(); // Limpa os campos do formulário
    }
});

function closePagamentos() {
    modalPagamentos.close();
    document.body.style.overflow = ''; // Faz a barra de rolagem reaparecer
}

function formatarCampoValor(input) {
    var valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Verifica se o resultado é NaN
    valor = isNaN(parseFloat(valor)) ? "0,00" : (parseFloat(valor) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    input.value = valor;
  }

// Adiciona um evento de teclado para detectar 'Shift + D'
document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'D') {
        event.preventDefault(); // Evita a inserção da tecla no campo
        preencherDataEFocus();
    }
    });

function preencherDataEFocus() {
    var dataCampo1 = document.getElementById("data1");
    var dataCampo2 = document.getElementById("data2");

    // Obter a data atual
    var dataAtual = new Date();
    var dia = ('0' + dataAtual.getDate()).slice(-2);
    var mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
    var ano = dataAtual.getFullYear();

    // Formatando como "yyyy-mm-dd" para ser aceito pelo campo de data
    var dataFormatada = ano + '-' + mes + '-' + dia;

    // Preenche os campos de data apenas no modal que está aberto
    if (modalAberto === modalRecebimentos) {
        dataCampo1.value = dataFormatada;
    } else if (modalAberto === modalPagamentos) {
        dataCampo2.value = dataFormatada;
    }

    // Move o foco para o campo de descrição
    document.getElementById('descricao1').focus();
    document.getElementById('descricao2').focus();
}