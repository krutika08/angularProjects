import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageUsingBootstrapComponent } from '../login-page-using-bootstrap/login-page-using-bootstrap.component';

@NgModule({
  declarations: [
    LoginPageUsingBootstrapComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    LoginPageUsingBootstrapComponent
  ]
})
export class SharedModule { }
