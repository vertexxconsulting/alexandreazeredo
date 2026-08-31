# Alexandre Azeredo — Landing Page

Landing page em React, Vite e Tailwind para Alexandre Azeredo, Mentor Executivo e CIO Advisor.

## Deploy na Vercel

O repositório já está configurado para deploy estático na Vercel. Ao importar o repositório, mantenha a raiz do projeto como diretório de trabalho e use as configurações detectadas em `vercel.json`:

| Configuração | Valor |
| --- | --- |
| Framework | Vite |
| Instalação | `pnpm install --frozen-lockfile` |
| Build | `pnpm exec vite build` |
| Diretório publicado | `dist/public` |

As rotas `/termos-de-uso` e `/politica-de-privacidade` usam fallback de SPA já configurado no `vercel.json`. Não há variáveis de ambiente necessárias para imagens ou para o funcionamento da página.

## Assets

As fotos e logos usadas pela página estão versionadas localmente em `client/public/images/`. Os favicons estão em `client/public/`. Isso elimina a dependência de links do armazenamento Manus e mantém os assets acessíveis após o deploy na Vercel.

## Desenvolvimento local

```bash
pnpm install
pnpm dev
```

## Validação

```bash
pnpm check
pnpm exec vite build
```
