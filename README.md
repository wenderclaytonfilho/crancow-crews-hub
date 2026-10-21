# Crancow Crews Recomp Hub

Site Next.js para publicar na Vercel, sem login e sem banco de dados.

## Estrutura (não mova os arquivos)
- `app/page.tsx`: interface
- `app/layout.tsx` e `app/style.css`: estrutura e estilos
- `lib/data.ts`: lista de jogos, autores, datas e links
- `public/crancow-crews.jpg`: imagem da crew
- `public/capas/`: capas locais opcionais

## Rodar
```bash
npm install
npm run build
npm run dev
```

## Vercel
Envie o **conteúdo desta pasta** para a raiz do repositório GitHub, mantendo `app/`, `lib/`, `public/` e `package.json` no mesmo nível. Importe o repositório na Vercel com framework Next.js e Root Directory `./`. Não mova `page.tsx` para a raiz: ele deve ficar em `app/page.tsx`.

## Editar
Abra `lib/data.ts` para editar as publicações. `room_url` é o campo do link da ROM/arquivos; `github_url` é o projeto. Para uma capa própria, coloque a imagem em `public/capas/nome.jpg` e use `cover_url:'/capas/nome.jpg'`. Se `cover_url` estiver vazio, o site tentará buscar uma imagem na Wikipedia e, se não conseguir, mostrará uma capa genérica.

**Nota:** links externos são fornecidos pelos membros da comunidade e não foram validados. Verifique licenças e direitos de distribuição.
