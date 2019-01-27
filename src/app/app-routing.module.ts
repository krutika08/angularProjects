import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginPageUsingBootstrapComponent } from './login-page-using-bootstrap/login-page-using-bootstrap.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'submitLogin', component : DashboardComponent},
  {path : '**', component : PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
