import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from '../doctor';
import { LoginService } from '../login.service';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[] = [];
  userId: string;

  constructor(@Inject(SESSION_STORAGE) private sessStorage: WebStorageService, 
  private doctorService: DoctorService, private appointmentService:AppointmentService) { }


  ngOnInit() {
    //const userid = this.route.snapshot.paramMap.get('userId');
    //console.log("DoctorListComponent " + userid);

    //console.log("DoctorListComponent userId from LoginService " + this.loginService.userId);
    //this.userId = this.loginService.userId;

    this.userId = this.sessStorage.get("userId");

    this.getDoctors();
  }

  getDoctors(): void {
    this.doctorService.getDoctors()
      .subscribe(data => {
        this.doctors = data as Doctor[];
       
      }
      );
  }

  setAppointment(doctor: Doctor) {

    console.log(JSON.stringify(doctor));
    //this.sessStorage.set("currSelDoctor", doctor);
    this.appointmentService.currSelDoctor = doctor;
    this.appointmentService.confCode = null;

  }

}




