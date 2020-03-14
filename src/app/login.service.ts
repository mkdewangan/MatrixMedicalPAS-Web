import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   
  userId:string;
  

  //private baseUrl = 'http://localhost:8080/users'; 

  //private baseUrl = '/proxy/users';

  private loginUrl = '/api/login';

  private userUrl = '/api/users'

  private patientUrl = '/api/patient'; 

  private doctorUrl = '/api/doctor'; 

  constructor(private http: HttpClient) { }

  login(user:User){


    console.log("In Service login " + JSON.stringify(user));

    return this.http.post(`${this.loginUrl}`, user);
    
  }

  getUser(id: string): Observable<Object> {
    this.userId = id;
    return this.http.get(`${this.userUrl}/${id}`);
  }

  getPatientByUserId(userId: string): Observable<Object> {
    this.userId = userId;
    return this.http.get(`${this.patientUrl}`, {
      params: new HttpParams().set('userId', userId)
       } );  
  }

  getDoctorByUserId(userId: string): Observable<Object> {
    this.userId = userId;
    return this.http.get(`${this.doctorUrl}`, {
      params: new HttpParams().set('userId', userId)
       } );  
  }


}


//

