import { Routes } from '@angular/router';

const placeholder = () => import('./features/placeholder/placeholder').then((m) => m.Placeholder);

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/layout/layout').then((m) => m.Layout),
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: 'Inicio | LegalHub',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
      },
      {
        path: 'temas',
        title: 'Temas | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Temas', icon: 'menu_book' },
      },
      {
        path: 'quiz/general',
        title: 'Quiz general | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Quiz general', icon: 'checklist' },
      },
      {
        path: 'quiz',
        title: 'Quiz | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Quiz', icon: 'quiz' },
      },
      {
        path: 'progreso',
        title: 'Progreso | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Progreso', icon: 'monitoring' },
      },
      {
        path: 'recursos',
        title: 'Recursos | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Recursos', icon: 'library_books' },
      },
      {
        path: 'notificaciones',
        title: 'Notificaciones | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Notificaciones', icon: 'notifications' },
      },
      {
        path: 'configuracion',
        title: 'Configuración | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Configuración', icon: 'settings' },
      },
      {
        path: 'login',
        title: 'Iniciar sesión | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Iniciar sesión', icon: 'login' },
      },
      {
        path: 'constitucional',
        title: 'Derecho Constitucional | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Derecho Constitucional', icon: 'balance' },
      },
      {
        path: 'civil',
        title: 'Derecho Civil | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Derecho Civil', icon: 'description' },
      },
      {
        path: 'penal',
        title: 'Derecho Penal | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Derecho Penal', icon: 'gavel' },
      },
      {
        path: 'laboral',
        title: 'Derecho Laboral | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Derecho Laboral', icon: 'work' },
      },
      {
        path: 'mercantil',
        title: 'Derecho Mercantil | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Derecho Mercantil', icon: 'business' },
      },
      {
        path: 'administrativo',
        title: 'Derecho Administrativo | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Derecho Administrativo', icon: 'account_balance' },
      },
      {
        path: 'procesal',
        title: 'Derecho Procesal | LegalHub',
        loadComponent: placeholder,
        data: { title: 'Derecho Procesal', icon: 'folder' },
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
