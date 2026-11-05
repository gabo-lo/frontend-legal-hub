import { LegalArea } from './legal-area.model';

export const HOME_CARDS: readonly LegalArea[] = [
  {
    id: 'constitucional',
    title: 'Derecho Constitucional',
    icon: 'balance',
    subtitle: '10 preguntas por tema',
    route: '/constitucional',
  },
  {
    id: 'civil',
    title: 'Derecho Civil',
    icon: 'description',
    subtitle: '10 preguntas por tema',
    route: '/civil',
  },
  {
    id: 'penal',
    title: 'Derecho Penal',
    icon: 'gavel',
    subtitle: '10 preguntas por tema',
    route: '/penal',
  },
  {
    id: 'general',
    title: '50 preguntas por lista',
    icon: 'checklist',
    subtitle: 'Quiz general — de todos los temas',
    route: '/quiz/general',
    featured: true,
    badge: 'DESTACADO',
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    icon: 'work',
    subtitle: '10 preguntas por tema',
    route: '/laboral',
  },
  {
    id: 'mercantil',
    title: 'Derecho Mercantil',
    icon: 'business',
    subtitle: '10 preguntas por tema',
    route: '/mercantil',
  },
  {
    id: 'administrativo',
    title: 'Derecho Administrativo',
    icon: 'account_balance',
    subtitle: '10 preguntas por tema',
    route: '/administrativo',
  },
  {
    id: 'procesal',
    title: 'Derecho Procesal',
    icon: 'folder',
    subtitle: '10 preguntas por tema',
    route: '/procesal',
  },
];
