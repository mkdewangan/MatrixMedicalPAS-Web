import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private doctorUrl = '/api/doctors'; 

  
  constructor(private http: HttpClient) { }

  getDoctors(): Observable<Object>  {
    return this.http.get(`${this.doctorUrl}`);
   
    
  }
 
  


}
