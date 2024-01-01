const openModalRecebimentos = document.querySelector('.recebimentos');
const closeModalRecebimentos = document.querySelector('.fechar-recebimentos');
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