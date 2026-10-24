# quicklist: Lista de compras

Site responsivo de lista de compras onde o usuário adiciona, marca e remove itens.
Desafio da formação Full-Stack da Rocketseat.

- **Design:** [Figma](https://www.figma.com/design/7ynKkYZzqey7apyUZ0e8p9/Lista-de-compras--Community-)
- **Stack:** HTML, CSS e JavaScript puro (sem frameworks)

## Como rodar

Não há build. Abra o `index.html` no navegador ou, melhor, use um servidor local
(ex.: extensão **Live Server** do VS Code) para ter recarregamento automático.

## Estrutura

```
├── index.html
├── assets/
│   ├── logo.svg
│   └── icons/          # ícones do Figma (Huge Icons); os da tela estão inline no HTML
├── styles/
│   ├── tokens.css      # cores, tipografia, espaçamentos e raios do Style Guide
│   ├── reset.css       # normalização entre navegadores
│   ├── global.css      # estilos globais, layout e espaçamento entre blocos
│   └── components.css  # input, botão, checkbox, item da lista, alerta
└── scripts/
    └── main.js
```

## Convenções

- **Tokens primeiro:** nenhuma cor, fonte ou espaçamento solto no CSS; use as variáveis de `tokens.css`.
- **Mobile-first:** estilo base para telas pequenas e `@media (min-width: 768px)` para desktop.
- **Commits** no padrão [Conventional Commits](https://www.conventionalcommits.org/pt-br/): `feat:`, `fix:`, `style:`, `docs:`, `chore:`.
