export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr';

export const ui = {
  fr: {
    'nav.status': 'disponible',
    'nav.projects': 'projets',
    'nav.contact': 'contact',
    'hero.prompt': 'julien@dev:~$',
    'hero.command': 'whoami',
    'hero.name': 'Julien Druelle',
    'hero.role': 'Développeur informatique',
    'hero.tagline':
      'Je conçois des applications web performantes, sobres et soignées.',
    'hero.cta': 'Voir les projets',
    'projects.title': 'Projets',
    'projects.subtitle': 'Une sélection de mes travaux de développement.',
    'projects.empty': 'Aucun projet pour le moment. Revenez bientôt !',
    'projects.view': 'Voir',
    'footer.rights': 'tous droits réservés',
    'footer.built': 'Conçu avec Astro & Tailwind',
  },
  en: {
    'nav.status': 'available',
    'nav.projects': 'projects',
    'nav.contact': 'contact',
    'hero.prompt': 'julien@dev:~$',
    'hero.command': 'whoami',
    'hero.name': 'Julien Druelle',
    'hero.role': 'Software developer',
    'hero.tagline':
      'I build fast, clean and polished web applications.',
    'hero.cta': 'View projects',
    'projects.title': 'Projects',
    'projects.subtitle': 'A selection of my development work.',
    'projects.empty': 'No projects yet. Check back soon!',
    'projects.view': 'View',
    'footer.rights': 'all rights reserved',
    'footer.built': 'Built with Astro & Tailwind',
  },
} as const;

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
