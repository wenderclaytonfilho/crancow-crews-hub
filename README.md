# Crancow Crews — Recomp Hub

Site Next.js pronto para publicar na Vercel. **Sem login, painel administrativo ou banco de dados**.

## Editar publicações

Abra `lib/data.ts` e edite a lista `seed`. Cada entrada possui, nesta ordem:

`[nome do jogo, plataforma, nome de quem enviou, data AAAA-MM-DD, link do GitHub]`

Para adicionar outro jogo, copie uma linha e altere os valores. Para mudar a capa de um jogo, coloque o arquivo na pasta `public/capas/` e edite o campo `cover_url` do item (exemplo: `/capas/jogo.jpg`). A imagem da crew fica em `public/crancow-crews.jpg`.

## Publicar

1. Envie a pasta do projeto para um repositório GitHub.
2. Na Vercel, escolha **Add New → Project** e importe o repositório.
3. Framework: Next.js. Clique em Deploy. Não é necessário configurar variáveis de ambiente.
4. Para atualizar o catálogo, altere `lib/data.ts`, faça commit e push; a Vercel publicará automaticamente.

## Rodar localmente

```bash
npm install
npm run dev
```

Visite http://localhost:3000.

**Atenção:** verifique os repositórios externos antes de divulgar e compartilhe apenas arquivos que você tem permissão para distribuir.
