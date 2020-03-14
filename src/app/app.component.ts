import { Component, Inject } from '@angular/core';
import { JwtService } from './jwt.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pas-web';

  //appId:string = "mmweb";
  //pwd:string="password";
   

  constructor(@Inject(SESSION_STORAGE) private sessStorage: WebStorageService, 
  private jwtService: JwtService) { }

  ngOnInit() {

    this.getToken();

  }

 

  getToken(): void {
    this.jwtService.getToken()
      .subscribe(data => {
        let res:any = data as any;

        this.sessStorage.set("token", res.token);
        console.log("received token " + res.token);
       
      }
      );
  }  



}
