import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  
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

