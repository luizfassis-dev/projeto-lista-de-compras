/*
 * Ponto de entrada: guarda o estado e liga os eventos às funções.
 *
 * Fluxo de toda ação:
 *   evento → função do list.js gera a nova lista → atualiza `items` → renderList(items)
 */
import { normalizeName, isValidName, addItem, removeItem, toggleItem, createItem } from "./list.js";
import { elements, renderList, resetInput, showAlert, hideAlert } from "./ui.js";

// Estado da aplicação: a única fonte de verdade. A tela é só um reflexo dele.
// Os ids fixos abaixo existem só para os dados de exemplo do Figma.
let items = [
  { id: "1", name: "Pão de forma", checked: false },
  { id: "2", name: "Café preto", checked: false },
  { id: "3", name: "Suco de laranja", checked: false },
  { id: "4", name: "Bolacha", checked: false },
];

// Adicionar item (tarefa 3)
elements.form.addEventListener("submit", (event) => {
  event.preventDefault()
  let name = elements.input.value

  name = normalizeName(name)
  if(isValidName(name,items)){
    items = addItem(items,name)
    renderList(items)
    resetInput()
  }
});

// Marcar e remover usam UM listener só, na <ul> (delegação de eventos):
// funciona até para itens criados depois que a página carregou.

// Marcar / desmarcar (tarefa 4)
elements.list.addEventListener("change", (event) => {
  // TODO: descobrir o id do item (event.target.closest(".item").dataset.id)
  // TODO: items = toggleItem(...), renderList(items)

  const elementCheckedId = event.target.closest(".item").dataset.id
  items = toggleItem(items,elementCheckedId)
  renderList(items)
});

// Remover (tarefa 5)
elements.list.addEventListener("click", (event) => {
  // TODO: ignorar cliques que não foram no botão de remover (closest(".icon-button"))
  // TODO: items = removeItem(...), renderList(items), showAlert() (tarefa 6)
  const button = event.target.closest(".icon-button")
  if( !button ){
    return
  }
  
  const elementRemovedId = event.target.closest(".item").dataset.id
  items = removeItem(items, elementRemovedId)
  renderList(items)
  
});

// Fechar o aviso (tarefa 6)
elements.alertClose.addEventListener("click", () => {
  // TODO: hideAlert()
});

// Primeira renderização
renderList(items);

