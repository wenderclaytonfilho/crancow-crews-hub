# Crancow Crews Recomp Hub

Site Next.js sem login e sem banco de dados. Pronto para importar no GitHub e publicar na Vercel.

## Editar jogos
Abra `lib/data.ts`. Cada entrada tem:
- `title`: nome
- `platform`: plataforma
- `author`: quem enviou
- `created_at`: data YYYY-MM-DD
- `github_url`: projeto/recomp
- `room_url`: ROOM / arquivos do jogo
- `cover_url`: capa (ex.: `/capas/tenkaichi3.jpg`)

## Capas
O site tenta buscar automaticamente capas na Wikipedia quando `cover_url` está vazio. Como é uma fonte externa, a imagem pode falhar ou não ser a arte correta. **Para garantir uma capa**, salve a imagem em `public/capas/` e coloque seu caminho em `cover_url`. As capas podem ser `.jpg`, `.png` ou `.webp`.

## Publicar
1. Envie os arquivos para um repositório GitHub (com `package.json` na raiz).
2. Importe em vercel.com/new com Framework Next.js.
3. Deploy. Não requer variáveis de ambiente.

Os links de ROOM foram transcritos das capturas fornecidas, sem validação de disponibilidade ou de direitos de distribuição. A publicação deve respeitar os direitos autorais aplicáveis.
