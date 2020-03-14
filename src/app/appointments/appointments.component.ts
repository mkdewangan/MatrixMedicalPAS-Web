import { Component, OnInit, Inject } from "@angular/core";
import { SESSION_STORAGE, WebStorageService } from "angular-webstorage-service";
import { Doctor } from "../doctor";
import { Appointment } from "../appointment";
import { AppointmentService } from "../appointment.service";
import { Patient } from "../patient";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.css"]
})
export class AppointmentsComponent implements OnInit {
  doctor: Doctor;

  appointmentDateTime: Date;

  confCode: string;

  constructor(
    @Inject(SESSION_STORAGE) private sessStorage: WebStorageService,
    private appointmentService: AppointmentService
  ) {
    //this.doctor = this.sessStorage.get("currSelDoctor");
    //console.log(JSON.stringify(this.doctor));
  }

  ngOnInit() {
    console.log("---Inside ngOnInit---");
  }
  ngDoCheck() {
    //this.confCode=null;
    console.log("---Inside ngDoCheck---");
    this.doctor = this.appointmentService.currSelDoctor;
    this.confCode = this.appointmentService.confCode;
    //this.doctor = this.sessStorage.get("currSelDoctor");
    //console.log(JSON.stringify(this.doctor));
  }
  ngAfterContentInit() {
    console.log("---Inside ngAfterContentInit---");
  }
  ngAfterContentChecked() {
    console.log("---Inside ngAfterContentChecked---");
  }
  ngAfterViewInit() {
    console.log("---Inside ngAfterViewInit---");
  }
  ngAfterViewChecked() {
    console.log("---Inside ngAfterViewChecked---");
  }
  ngOnDestroy() {
    console.log("---Inside ngOnDestroy---");
  }

  createAppointment(doctor: Doctor) {
    //console.log(JSON.stringify(doctor));
    console.log("this.createAppointment " + this.appointmentDateTime);
    //console.log("this.createAppointment 1" + appointmentDateTime1);

    let appointment = new Appointment();

    let patient = new Patient();

    appointment.userId = this.sessStorage.get("userId");

    console.log("createAppointment sessStorage patientId " + this.sessStorage.get("patientId"))

    patient.patientId = this.sessStorage.get("patientId");
    appointment.patient = patient;

    appointment.doctorId = this.doctor.doctorId;
    appointment.appointmentDatetime = this.appointmentDateTime;

    if (this.appointmentDateTime == null) {
      alert("please select appointment date time");
      return;
    }

    console.log("Before sending " + JSON.stringify(appointment));

    this.appointmentService.createAppointment(appointment).subscribe(
      data => {
        console.log("from db " + data);
        var appointment: Appointment = data as Appointment;
        //this.confCode = appointment.confCode;
        this.appointmentService.confCode = appointment.confCode;
        //console.log("confCode " + this.confCode);
      },
      error => console.log(error)
    );
  }
}
