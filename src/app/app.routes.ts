import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./feature/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'nurse-selection',
        loadComponent: () =>
          import('./feature/nurse-selection/nurse-selection.component').then(m => m.NurseSelectionComponent),
      },
      {
        path: 'booking-confirmation',
        loadComponent: () =>
          import('./feature/booking-confirmation/booking-confirmation.component').then(m => m.BookingConfirmationComponent),
      },
      {
        path: 'nurse-details',
        loadComponent: () =>
          import('./feature/nurse-details/nurse-details.component').then(m => m.NurseDetailsComponent),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('./authorization/authorization.module').then(m => m.AuthorizationModule)
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./authorization/authorization.module').then(m => m.AuthorizationModule)
      }
    ]
  }
];