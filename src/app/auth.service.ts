import { Router, RouterModule } from '@angular/router';
// import { AuthService } from './auth.service';
import  Keycloak  from 'keycloak-js';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  KeycloakInstance:any; 
  constructor() {}
  login(){
    console.log(this.KeycloakInstance.authenticated)
    if(this.KeycloakInstance.authenticated)
    alert("already logged in ")
    else{
    this.KeycloakInstance.login();
    // this.router.navigate(['/dashboard']);
    // debugger
    // console.log(this.KeycloakInstance.loadUserProfile(),this.KeycloakInstance.refreshTokens)
    // debugger
  }
  }
   
}
