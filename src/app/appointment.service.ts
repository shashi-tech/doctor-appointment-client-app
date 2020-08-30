import { Injectable, Output, EventEmitter } from '@angular/core';
import { DoctorDetails } from './model/doctor-details.model';
import { HttpClient } from '@angular/common/http';
import { AppointmentDetails } from './model/appointment-details.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  @Output() selectAppointmentEmitter = new EventEmitter<DoctorDetails>();

  constructor(private http: HttpClient) { }

  onSelectAppointment(doctorDetails: DoctorDetails) {
    this.selectAppointmentEmitter.emit(doctorDetails);
  }

  findDoctorById(doctorId: string) {
    return this.http.get<DoctorDetails>(`http://localhost:8080/doctor-appointments/doctors/${doctorId}`);
  }

  createAppointment(appointmentDetails: AppointmentDetails) {
    return this.http.post<any>(`http://localhost:8080/doctor-appointments/appointments`, appointmentDetails);
  }

  findAppointmentById(appointmentId: string) {
    return this.http.get<any>(`http://localhost:8080/doctor-appointments/appointments/${appointmentId}`);
  }
}
