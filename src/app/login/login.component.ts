import { Component, OnInit, Inject } from "@angular/core";
import { User } from "../user";
import { LoginService } from "../login.service";
import { Router } from "@angular/router";
import { SESSION_STORAGE, WebStorageService } from "angular-webstorage-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user = new User();
  userDB: any;
  patient: any;
  doctor: any;

  loginErr: string;

  constructor(
    @Inject(SESSION_STORAGE) private sessStorage: WebStorageService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  /*
  login() {
    this.getUser(this.user.userid);
  }*/

  

  login() {
    this.loginService.login(this.user).subscribe(
      data => {
        console.log(data);

        if (data == null) {
              this.loginErr = "Invalid Login";
        } else {
              this.userDB = data;
              this.sessStorage.set("userId", this.userDB.userId);

              if (this.userDB.role == "patient") {
                //this.router.navigate(['/doctorlist', this.userDB])
                //this.sessStorage.set("patientId" ,  this.userDB.userId);
                this.getPatient(this.userDB.userId);
                this.router.navigate(["/", "doctorlist"]);
              } else {
                //this.sessStorage.set("doctorId" ,  this.userDB.userId);
                this.getDoctor(this.userDB.userId);
                this.router.navigate(["/", "patientlist"]);
          }
        }
      },
      error => console.log(error)
    );
  }

  getUser(id: string) {
    this.loginService.getUser(id).subscribe(
      data => {
        console.log(data);

        if (data == null) {
          this.loginErr = "Invalid Login";
        } else {
          this.userDB = data;
          this.sessStorage.set("userId", this.userDB.userId);

          if (this.userDB.role == "patient") {
            //this.router.navigate(['/doctorlist', this.userDB])
            //this.sessStorage.set("patientId" ,  this.userDB.userId);
            this.getPatient(id);
            this.router.navigate(["/", "doctorlist"]);
          } else {
            //this.sessStorage.set("doctorId" ,  this.userDB.userId);
            this.getDoctor(id);
            this.router.navigate(["/", "patientlist"]);
          }
        }
      },
      error => console.log(error)
    );
  }

  getPatient(userId: string) {
    this.loginService.getPatientByUserId(userId).subscribe(data => {
      console.log(data);

      this.patient = data;
      this.sessStorage.set("patientId", this.patient.patientId);
    });
  }

  getDoctor(userId: string) {
    this.loginService.getDoctorByUserId(userId).subscribe(data => {
      console.log(data);

      this.doctor = data;
      this.sessStorage.set("doctorId", this.doctor.doctorId);
    });
  }
}
