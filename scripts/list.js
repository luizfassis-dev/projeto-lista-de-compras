/*
 * Regra de negócio da lista de compras.
 *
 * REGRAS DESTE ARQUIVO:
 * - Proibido usar `document`, `window` ou qualquer coisa do navegador.
 * - Funções puras: recebem dados e devolvem dados novos.
 *   Nunca alteram o array recebido (nada de push, splice ou item.checked = ...).
 *
 * Formato de um item:
 *   { id: string, name: string, checked: boolean }
 * 
 * Em resumo, organiza itens dentro de um compnente da lista
 */

/**
 * Limpa o nome digitado: remove espaços do início e do fim.
 * @param {string} name  ex.: "  Café preto  "
 * @returns {string}     ex.: "Café preto"
 */
export function normalizeName(name) {
  // TODO (tarefa 2)
  return name;
}

/**
 * Diz se um nome pode virar item da lista.
 * Inválido: vazio (depois de normalizar).
 * Desafio extra: recusar nome repetido (ex.: "café" e "Café").
 * @param {string} name
 * @param {Array<{id: string, name: string, checked: boolean}>} items  a lista atual
 * @returns {boolean}
 */
export function isValidName(name, items) {
  // TODO (tarefa 2)
  return true;
}

/**
 * Cria um item novo, ainda não marcado.
 * @param {string} name
 * @returns {{id: string, name: string, checked: boolean}}
 */
export function createItem(name) {
  // TODO (tarefa 3)
  return { id: "", name, checked: false };
}

/**
 * Devolve uma NOVA lista com o item adicionado no final.
 * @param {Array<{id: string, name: string, checked: boolean}>} items
 * @param {string} name
 * @returns {Array<{id: string, name: string, checked: boolean}>}
 */
export function addItem(items, name) {
  // TODO (tarefa 3)
  return items;
}

/**
 * Devolve uma NOVA lista sem o item que tem esse id.
 * @param {Array<{id: string, name: string, checked: boolean}>} items
 * @param {string} id
 * @returns {Array<{id: string, name: string, checked: boolean}>}
 */
export function removeItem(items, id) {
  // TODO (tarefa 5)
  return items;
}

/**
 * Devolve uma NOVA lista com o `checked` do item invertido.
 * @param {Array<{id: string, name: string, checked: boolean}>} items
 * @param {string} id
 * @returns {Array<{id: string, name: string, checked: boolean}>}
 */
export function toggleItem(items, id) {
  // TODO (tarefa 4)
  return items;
}
