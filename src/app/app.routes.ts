import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'active-account',
    loadComponent: () => import('./pages/active-account/active-account.page').then( m => m.ActiveAccountPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/forgot-password/forgot-password.page').then( m => m.ForgotPasswordPage)
  },
  {
    path: 'request-service',
    loadComponent: () => import('./pages/request-service/request-service.page').then( m => m.RequestServicePage)
  },
  {
    path: 'companies',
    loadComponent: () => import('./component/companies/companies.page').then( m => m.CompaniesPage)
  }
];
