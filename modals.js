const openModalRecebimentos = document.querySelector('.recebimentos');
const closeModalRecebimentos = document.querySelector('.fechar-recebimentos');
const modalRecebimentos = document.querySelector('.modal-recebimentos');

openModalRecebimentos.addEventListener('click', () => {
    modalRecebimentos.showModal();
    document.body.style.overflow = 'hidden';
});

closeModalRecebimentos.addEventListener('click', () => {
    closeModal();
});

modalRecebimentos.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

function closeModal() {
    modalRecebimentos.close();
    document.body.style.overflow = '';
}
