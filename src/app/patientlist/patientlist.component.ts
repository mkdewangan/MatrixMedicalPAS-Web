import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {


  doctorId: string;
  patients: Patient[] = [];

  constructor(private appointmentService: AppointmentService) {

    console.log("PatientlistComponent constructor");

  }


  ngOnInit() {
    this.doctorId = sessionStorage.getItem("doctorId");

    console.log("PatientlistComponent doctorId " + this.doctorId);

    this.getPatients();

  }

  getPatients(): void {
    this.appointmentService.getPatientsByDoctor(this.doctorId)
      .subscribe(data => {

        console.log("Patients " + data);
        this.patients = data as Patient[];

      });

  }




}
