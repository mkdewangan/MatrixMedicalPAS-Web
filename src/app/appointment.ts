import { Patient } from './patient';

export class Appointment {
    userId:string;
    //patientId:number;
    patient:Patient;
    doctorId: number;
    appointmentDatetime : Date;
    confCode:string;
  }