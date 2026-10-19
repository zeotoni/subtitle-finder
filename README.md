# subtitle-finder

PWA para buscar e baixar legendas de filmes e séries, por título ou pelo arquivo de vídeo. Feito com Angular.

> 🚧 Em desenvolvimento: por enquanto só o front-end, rodando localmente com dados fictícios.

## Tecnologias

- Angular, TypeScript e SCSS
- ESLint e Prettier
- Husky e lint-staged
- pnpm

## Como rodar

Pré-requisitos: Node.js (LTS) e pnpm.

```bash
# na raiz (instala o Husky)
pnpm install

# no app Angular
cd web
pnpm install
pnpm start
```

O app abre em `http://localhost:4200`.

## Estrutura

```
subtitle-finder/
├── .husky/   # hooks do git
└── web/      # app Angular
```

## Roadmap

- [ ] Layout base da tela
- [ ] Serviço de legendas com dados fictícios
- [ ] Busca por título ou arquivo
- [ ] Lista de resultados
- [ ] Download da legenda
- [ ] Configurações
- [ ] PWA
- [ ] Backend e API real