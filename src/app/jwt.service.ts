import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  private authUrl = 'http://localhost:8080/authenticate'; 

  

  constructor(private http: HttpClient) { }

  
  getToken(): Observable<Object>{

    //return this.http.post(`${this.authUrl}`, {appId, pwd});

    return this.http.post(`${this.authUrl}`, {
      "username":"mmweb",
      "password":"password"
        
 });

  }



}
