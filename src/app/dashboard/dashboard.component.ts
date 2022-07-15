import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user='';
  
  public userObject :any;
  public tokens:any;
  public refreshTokens:any;
  constructor(public keycloak:KeycloakService) { }

  async ngOnInit(): Promise<void> {
    this.userObject=await this.keycloak.loadUserProfile();
    this.tokens=await this.keycloak.getToken();
    this.refreshTokens=this.keycloak.getKeycloakInstance().refreshToken;
  }

  logout()
  {
    console.log("logout");
 
    this.keycloak.logout('http://localhost:4200/');
  }
  async update()
  {
    await this.keycloak.updateToken(-1).then(async()=>{
      this.tokens=await this.keycloak.getToken();
    })
    this.refreshTokens=this.keycloak.getKeycloakInstance().refreshToken;
  }

}