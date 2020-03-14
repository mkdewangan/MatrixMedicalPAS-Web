import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private appointmentUrl = '/api/appointment'; 

  private patientsUrl = '/api/appointments/patients'

  currSelDoctor:Doctor;

  constructor(private http: HttpClient) { }
 
  

  confCode:string;

  createAppointment(appointment:Appointment): Observable<Object>{

    console.log("In Service appointment " + JSON.stringify(appointment));

    return this.http.post(`${this.appointmentUrl}`, appointment);

  }


  getAppointmentByConfCode(confCode: string): Observable<Object> {
   
    return this.http.get(`${this.appointmentUrl}`, {
      params: new HttpParams().set('confCode', confCode)
       } );  
  }


  getPatientsByDoctor(doctorId: string): Observable<Object> {

    return this.http.get(`${this.patientsUrl}`, {
      params: new HttpParams().set('doctorId', doctorId)
       } );  

  }



}