import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import {MatDialog} from '@angular/material';
import { MattDialogExampleComponent } from '../matt-dialog-example/matt-dialog-example.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string;
  password : string;

  constructor(private router : Router, private loginService : LoginService, 
              private toastr : ToastrService, private spinner: NgxSpinnerService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
    }, 5000);
  }

  login() : void{

    //this.loginService.changeMessage(this.username)

    //console.log(this.username);
    //this.loginService.login.next(this.username);
    //this.router.navigate(['submitLogin']);
      const dialogRef = this.dialog.open(MattDialogExampleComponent, {
        width: '500px',
      //  data: {name: this.name, animal: this.animal}
      });
  
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('The dialog was closed');
      //   this.animal = result;
      // });
  }

  error(){
    this.toastr.error('Verification failed !!');
  }

  success(){
    this.toastr.success('Successfully verified !!');
  }

  warning(){
    this.toastr.warning('Unauthorized access !!');
  }

}
