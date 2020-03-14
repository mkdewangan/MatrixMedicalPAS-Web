import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientlistComponent } from './patientlist/patientlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  //{ path: 'doctorlist/:id', component: DoctorListComponent },
  { path: 'doctorlist', component: DoctorListComponent },
  { path: 'patientlist', component: PatientlistComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
