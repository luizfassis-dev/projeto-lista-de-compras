# Checklist do JavaScript

Cada tarefa = **um commit**. Faça na ordem: cada uma usa a anterior.
Antes de começar, rode o projeto com o **Live Server** (módulos não funcionam via `file://`).

Arquitetura: itens fixos removidos; script agora com type="module"v

```
main.js  →  ouve os eventos e guarda o estado (`items`)
list.js  →  regra de negócio, funções puras, SEM DOM
ui.js    →  desenha a tela a partir dos dados
```

---

## [ ] 1. Renderizar a lista (`ui.js`)

- [ ] `createItemElement(item)`: clonar o `<template>` e preencher nome, checkbox, `data-id` e `aria-label`
- [ ] `renderList(items)`: esvaziar a `<ul>` e adicionar um elemento por item

**Pronto quando:** os 4 itens de exemplo aparecem na tela.
**Conceitos:** `querySelector`, `<template>` e `cloneNode`, `textContent`, `dataset`, `forEach`/`for...of`.
**Por que `textContent` e não `innerHTML`?** Se alguém digitar `<img src=x onerror=alert(1)>`, o `innerHTML` executa isso como código (XSS). O `textContent` mostra como texto.
**Commit:** `feat(js): renderiza a lista a partir do estado`

## [ ] 2. Validar o nome (`list.js`)

- [ ] `normalizeName(name)`: remover espaços das pontas
- [ ] `isValidName(name, items)`: recusar nome vazio
- [ ] Desafio: recusar nome repetido, ignorando maiúsculas/minúsculas

**Pronto quando:** no console, `isValidName("   ", [])` dá `false`.
**Conceitos:** `trim()`, `toLowerCase()`, `some()`.
**Commit:** `feat(js): valida o nome do item`

## [ ] 3. Adicionar item (`list.js` + `ui.js` + `main.js`)

- [ ] `createItem(name)`: gerar um id único (dica: `crypto.randomUUID()`)
- [ ] `addItem(items, name)`: devolver uma **nova** lista, sem `push`
- [ ] `resetInput()`: limpar o campo e devolver o foco
- [ ] Listener de `submit` no `main.js`

**Pronto quando:** você digita, aperta Enter ou clica no botão, e o item aparece no fim da lista; espaços em branco não criam item.
**Conceitos:** `event.preventDefault()`, spread `[...items, novo]`, imutabilidade.
**Commit:** `feat(js): adiciona itens à lista`

## [ ] 4. Marcar e desmarcar (`list.js` + `main.js`)

- [ ] `toggleItem(items, id)`: nova lista com o `checked` do item invertido
- [ ] Listener de `change` na `<ul>`

**Pronto quando:** você marca um item, adiciona outro, e o primeiro continua marcado (prova de que o estado é a fonte de verdade).
**Conceitos:** `map()`, spread de objeto `{ ...item, checked: !item.checked }`, delegação de eventos, `closest()`.
**Commit:** `feat(js): marca e desmarca itens`

## [ ] 5. Remover item (`list.js` + `main.js`)

- [ ] `removeItem(items, id)`: nova lista sem o item
- [ ] Listener de `click` na `<ul>`, ignorando cliques fora da lixeira

**Pronto quando:** a lixeira remove só o item certo, inclusive itens recém-adicionados.
**Conceitos:** `filter()`, `closest()`, retorno antecipado (`if (!button) return`).
**Commit:** `feat(js): remove itens da lista`

## [ ] 6. Aviso de remoção (`ui.js` + `main.js`)

- [ ] `showAlert()` e `hideAlert()`: usar o atributo `hidden` (`element.hidden = true/false`)
- [ ] Mostrar ao remover e fechar no "×"
- [ ] Desafio: esconder sozinho depois de 3 segundos e reiniciar o tempo se outro item for removido

**Conceitos:** propriedade `hidden`, `setTimeout` e `clearTimeout`.
**Commit:** `feat(js): exibe aviso ao remover item`

---

## Bônus

- [ ] **Persistência:** salvar `items` no `localStorage` e carregar ao abrir a página (`JSON.stringify`/`JSON.parse`). Crie um `storage.js`: um módulo para outra responsabilidade.
- [ ] **Testes:** testar o `list.js` com o test runner nativo do Node (`node --test`). Ele roda sem navegador porque o arquivo não usa DOM.
- [ ] **Próxima fase, back-end:** criar uma API REST em Node para a lista e trocar o array em memória por `fetch`.

## Regras que o code review vai cobrar

1. `list.js` não toca em `document`.
2. Nenhuma função do `list.js` altera o array recebido.
3. Todo evento segue o fluxo: **evento → `list.js` → atualiza `items` → `renderList(items)`**.
4. Nada de `innerHTML` com texto digitado pelo usuário.
