/*
 * Camada de tela: tudo que lê ou altera o DOM fica aqui.
 *
 * REGRAS DESTE ARQUIVO:
 * - Não decide regra de negócio (ex.: se um nome é válido). Só mostra.
 * - Recebe os dados prontos e desenha a tela a partir deles.
 */

// Elementos buscados uma única vez, quando o módulo carrega
export const elements = {
  form: document.querySelector("#add-item-form"),
  input: document.querySelector("#item-input"),
  list: document.querySelector("#item-list"),
  template: document.querySelector("#item-template"),
  alert: document.querySelector("#alert"),
  alertClose: document.querySelector(".alert-close"),
};

/**
 * Cria o <li> de um item a partir do <template> do HTML.
 * Deve:
 * - clonar o template (elements.template.content.cloneNode(true))
 * - colocar o nome em .item-name (use textContent, nunca innerHTML)
 * - marcar o .checkbox se item.checked for true
 * - guardar o id no <li> (dataset.id), para saber depois qual item foi clicado
 * - trocar o aria-label do botão para "Remover <nome>"
 * @param {{id: string, name: string, checked: boolean}} item
 * @returns {DocumentFragment}
 */
function createItemElement(item) {

  const pattern = elements.template.content.cloneNode(true)
  
  const name = pattern.querySelector(".item-name")
  name.textContent = item.name 

  return pattern

}

/**
 * Redesenha a lista inteira a partir do array.
 * Dica: esvazie a <ul> e adicione um elemento por item.
 * @param {Array<{id: string, name: string, checked: boolean}>} items
 */
export function renderList(items) {

  elements.list.splice(0,elements.list.length)
  items.forEach((item, index) => {
    const listElement = createItemElement(item)
    elements.list.append(listElement)
    
  })
  
  
}

/** Limpa o campo e devolve o foco para ele, pronto para o próximo item. */
export function resetInput() {
  // TODO (tarefa 3)
}

/** Mostra o aviso "O item foi removido da lista". */
export function showAlert() {
  // TODO (tarefa 6)
}

/** Esconde o aviso. */
export function hideAlert() {
  // TODO (tarefa 6)
}
