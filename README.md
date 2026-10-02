# Portfolio V2

Site vitrine portfolio — Astro + Tailwind CSS v4, bilingue FR/EN, déployé sur GitHub Pages.

## Stack

- **Astro** (SSG)
- **Tailwind CSS v4** (config via CSS `@theme` dans `src/styles/global.css`)
- **lucide-astro** (icônes)
- **Decap CMS + DecapBridge** (ajout de contenu via connexion)

## Structure

```
src/
├── components/   # Navbar, Hero, ProjectGrid, ProjectCard, Footer
├── content/      # Collection "projects" (un fichier .md par projet)
├── i18n/         # Traductions FR/EN
├── layouts/      # Layout.astro
├── pages/        # index (fr), en, 404
└── styles/       # global.css (tokens DA)
public/
└── admin/        # Decap CMS (index.html + config.yml)
```

## Commandes

| Commande          | Action                              |
| :---------------- | :---------------------------------- |
| `npm install`     | Installe les dépendances            |
| `npm run dev`     | Serveur de dev local                |
| `npm run build`   | Build de production vers `./dist/`   |
| `npm run preview` | Prévisualise le build               |

## Ajouter un projet

Via le CMS : `https://julien-d234.github.io/PORTFOLIO_V2/admin/` (connexion DecapBridge).
Ou manuellement : créer un fichier `.md` dans `src/content/projects/` avec le frontmatter attendu (voir `src/content.config.ts`).

## Déploiement

Push sur `main` → workflow GitHub Actions → GitHub Pages.
