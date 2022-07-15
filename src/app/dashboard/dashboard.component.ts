import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user='';
  
  public keycloak = AuthService.KeycloakInstance;
  public userObject :any;
  public tokens:any;
  public refreshTokens:any;
  // constructor(public keycloak:KeycloakService) { }
  
  async ngOnInit(): Promise<void> {
    console.log(this.keycloak);
    // this.userObject=await this.keycloak.loadUserProfile();
    this.tokens=await this.keycloak.token();
    this.refreshTokens=this.keycloak.refreshToken;
  }

  logout()
  {
    console.log("logout");
    
    this.keycloak.logout();
  }
  async update()
  {
    await this.keycloak.updateToken(-1).then(async()=>{
      this.tokens=await this.keycloak.token();
    })
    this.refreshTokens=this.keycloak.refreshToken;
  }

}