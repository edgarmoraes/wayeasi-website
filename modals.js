const openModalRecebimentos = document.querySelector('.recebimentos');
const closeModalRecebimentos = document.querySelector('.modal-fechar');
const modalRecebimentos = document.querySelector('.modal-recebimentos');

openModalRecebimentos.addEventListener('click', () => {
    modalRecebimentos.showModal(); // Abre o modal
    document.body.style.overflow = 'hidden'; // Esconde a barra de rolagem
});

closeModalRecebimentos.addEventListener('click', () => {
    closeModal(); // Fecha o modal
    document.querySelector(".modal-form").reset(); // Limpa os campos do formulário
});

modalRecebimentos.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal(); // Fecha o modal com ESC
        document.querySelector(".modal-form").reset(); // Limpa os campos do formulário
    }
});

function closeModal() {
    modalRecebimentos.close();
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
    var dataCampo = document.getElementById("data");

    // Obter a data atual
    var dataAtual = new Date();
    var dia = ('0' + dataAtual.getDate()).slice(-2);
    var mes = ('0' + (dataAtual.getMonth() + 1)).slice(-2);
    var ano = dataAtual.getFullYear();

    // Formatando como "yyyy-mm-dd" para ser aceito pelo campo de data
    var dataFormatada = ano + '-' + mes + '-' + dia;
    
    dataCampo.value = dataFormatada;

    // Move o foco para o campo de descrição
    document.querySelector(".modal-descricao").focus();
    }