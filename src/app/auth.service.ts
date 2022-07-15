import { Router, RouterModule } from '@angular/router';
// import { AuthService } from './auth.service';
import  Keycloak  from 'keycloak-js';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static KeycloakInstance:any; 
  
  constructor() {}
  
  static login(){
    console.log(AuthService.KeycloakInstance.authenticated)
    if(AuthService.KeycloakInstance.authenticated){
      alert("already logged in ")

      console.log(AuthService.KeycloakInstance.token());
  }
    else{
      debugger
      console.log(AuthService.KeycloakInstance);
      debugger

      AuthService.KeycloakInstance.login();
      // AuthService.KeycloakInstance.logout('http://localhost:4200/');

      
    // this.router.navigate(['/dashboard']);
    // debugger
    console.log(AuthService.KeycloakInstance.loadUserProfile(),AuthService.KeycloakInstance.refreshTokens)
    // debugger
  }
  }
   
}
