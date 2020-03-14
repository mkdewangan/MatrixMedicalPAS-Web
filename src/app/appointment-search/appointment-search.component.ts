import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment-search',
  templateUrl: './appointment-search.component.html',
  styleUrls: ['./appointment-search.component.css']
})
export class AppointmentSearchComponent implements OnInit {

  confCode:string;

  appointment:Appointment;

  constructor(private appointmentService:AppointmentService) { }

  ngOnInit() {
  }

  
  getAppointment(confCode: string) {
    this.appointmentService.getAppointmentByConfCode(confCode)
      .subscribe(
        data => {
          console.log(data);

          this.appointment = data as Appointment;

          
        }
      );
  } 


  searchAppointment(){

    this.getAppointment(this.confCode);
  }

}
