import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientlistComponent } from './patientlist/patientlist.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentSearchComponent } from './appointment-search/appointment-search.component';
import { AuthInterceptor } from './AuthInterceptor';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorListComponent,
    PatientlistComponent,
    AppointmentsComponent,
    AppointmentSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    StorageServiceModule,
    AppRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
