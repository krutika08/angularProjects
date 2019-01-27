import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;

  constructor(private loginService : LoginService) {
    this.loginService.login.subscribe(response => {
      if(response != null && response != undefined){
        this.user = response;
        console.log("dash user val",this.user)
      }
     
    })
   }

  

  ngOnInit() {
    this.loginService.currentMessage.subscribe(data => {
      this.user = data;
    })
   
  }

}
