import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatInputModule} from '@angular/material/input';
import { ErrorDisplayComponent } from './error-display/error-display.component';
// import { LoginPageUsingBootstrapComponent } from './login-page-using-bootstrap/login-page-using-bootstrap.component';
import { OnlyAlphabets } from './directives/custom.directive';
import { ChangeTextDirective } from './directives/change-text.directive';
import { OnlyDigitsDirective } from './directives/only-digits.directive';
import { MattDialogExampleComponent } from './matt-dialog-example/matt-dialog-example.component';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { CustomSecondModule } from './custom-second/custom-second.module';
import { CustomModule } from './custom/custom/custom.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    ErrorDisplayComponent,
    // LoginPageUsingBootstrapComponent,    
    OnlyAlphabets,
    ChangeTextDirective,
    OnlyDigitsDirective,
    MattDialogExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    NgxSpinnerModule,
    MatInputModule,
    MatDialogModule,
    CustomModule,
    CustomSecondModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents: [MattDialogExampleComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
