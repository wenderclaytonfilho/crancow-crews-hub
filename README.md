# Crancow Crews — Game Portal

Portal gamer em Next.js 15, com identidade visual nova, assets criados exclusivamente para o projeto, catálogo filtrável, destaques e links para os repositórios.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para testar produção, execute `npm run build` e `npm run start`.

## Publicação

Suba esta pasta para o GitHub e importe o repositório na Vercel (framework Next.js). Nenhum banco de dados nem variável de ambiente é necessário.

## Editar os jogos

Edite `lib/data.ts`. As capas estão em `public/capas/` e a identidade visual nova em `public/assets/` (banner e nove faixas ilustradas). Atualize `cover_url` com caminhos locais como `/capas/capa.webp`.

Os botões de links externos apontam para o conteúdo já existente na versão original. Cada projeto é responsabilidade de seus respectivos autores; confira direitos de uso e licenças.

## Design

Paleta escura azul-marinho e violeta; imagens próprias geradas para a identidade do portal. Componentes adaptados para celular, tablet e desktop.
