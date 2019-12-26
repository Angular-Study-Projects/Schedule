import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';


const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: '/',
  },
  { 
    path: '', 
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
    data: {
      breadcrumb: 'INICIO'
    }
  },
  {
    path: "**" , component: WelcomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
