// Modais
function abrirModal(openBtn, modal, formSelector, tagInputId, tagsHiddenInputId, tagContainerId) {
    openBtn.addEventListener('click', () => {
      modalAberto = modal;
      modal.showModal();
      document.body.style.overflow = 'hidden';
    });
  }

  function fecharModal(closeBtn, modal, formSelector, tagInputId, tagsHiddenInputId, tagContainerId) {
    closeBtn.addEventListener('click', () => {
      fechar(modal, formSelector, tagInputId, tagsHiddenInputId, tagContainerId);
    });

    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        fechar(modal, formSelector, tagInputId, tagsHiddenInputId, tagContainerId);
      }
    });

    modal.addEventListener('close', () => {
      fechar(modal, formSelector, tagInputId, tagsHiddenInputId, tagContainerId);
    });
  }

  function fechar(modal, formSelector, tagInputId, tagsHiddenInputId, tagContainerId) {
    modal.close();
    document.body.style.overflow = '';
    document.querySelector(formSelector).reset();

    const tagContainer = document.getElementById(tagContainerId);
    while (tagContainer.firstChild) {
      tagContainer.removeChild(tagContainer.firstChild);
    }

    const tagInput = document.getElementById(tagInputId);
    const tagsHiddenInput = document.getElementById(tagsHiddenInputId);

    tagInput.value = '';
    tagsHiddenInput.value = '';
  }

  // Elementos do DOM
  const openModalBancos = document.querySelector('.adicionar-bancos');

  const closeModalBancos = document.querySelector('.modal-fechar-bancos');

  const modalBancos = document.querySelector('.modal-bancos');

  // Event Listeners
  abrirModal(openModalBancos, modalBancos);
  fecharModal(closeModalBancos, modalBancos);

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

document.addEventListener('DOMContentLoaded', function () {
  var linhasBancos = document.querySelectorAll('.row-bancos');

  linhasBancos.forEach(function (linha) {
      linha.addEventListener('dblclick', function () {
          // Abra o modal aqui
          var modalBancos = document.querySelector('.modal-bancos');
          modalBancos.showModal();

          // Preencha os campos do modal com os dados da linha clicada
          var banco = linha.querySelector('.banco-row').textContent;
          var agencia = linha.querySelector('.ag-row').textContent;
          var conta = linha.querySelector('.conta-row').textContent;

          document.getElementById('descricao-bancos').value = banco;
          document.getElementById('agencia-banco').value = agencia;
          document.getElementsByName('conta')[0].value = conta;
      });
  });

  // Fechar o modal ao clicar no botão "Cancelar"
  var btnFechar = document.querySelector('.modal-fechar-bancos');
  btnFechar.addEventListener('click', function () {
      var modalBancos = document.querySelector('.modal-bancos');
      modalBancos.close();
  });
});
