
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'signup',
    loadComponent: () =>
      import('./authorization/signup/signup.component').then(m => m.SignupComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./authorization/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./feature/home/home.component').then(m => m.HomeComponent),
  },
  {
  path: 'medicines',
  loadComponent: () =>
    import('./feature/medicines/medicines.component').then(m => m.MedicinesComponent),
},
 {
  path: 'lab-tests',
  loadComponent: () =>
    import('./feature/lab-tests/lab-tests.component').then(m => m.LabTestsComponent),
},
 {
  path: 'consult-doctors',
  loadComponent: () =>
    import('./feature/consult-doctors/consult-doctors.component').then(m => m.ConsultDoctorsComponent),
},
 {
  path: 'cancer-care',
  loadComponent: () =>
    import('./feature/cancer-care/cancer-care.component').then(m => m.CancerCareComponent),
},
 {
  path: 'ayurveda',
  loadComponent: () =>
    import('./feature/ayurveda/ayurveda.component').then(m => m.AyurvedaComponent),
},
{
  path: 'partnerships',
  loadComponent: () =>
    import('./feature/partnerships/partnerships.component').then(m => m.PartnershipsComponent),
},
{
  path: 'care-plan',
  loadComponent: () =>
    import('./feature/care-plan/care-plan.component').then(m => m.CarePlanComponent),
},



//   {
//     path: '**',
//     redirectTo: 'home',
//   },
];



