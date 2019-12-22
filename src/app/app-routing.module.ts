import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: '/home',
  },
  { 
    path: 'home', 
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
    data: {
      breadcrumb: 'INICIO'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
