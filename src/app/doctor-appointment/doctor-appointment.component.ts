import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DoctorDetails } from '../model/doctor-details.model';
import { Router } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit {
  doctorDetails: DoctorDetails;

  constructor(private http: HttpClient, private router: Router, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.doctorDetails = {
      id: null,
      name: '',
      age: null,
      qualification: '',
      specialization: '',
      experience: null
    }
    this.appointmentService.findDoctorById('1').subscribe(
      data => {
        this.doctorDetails = data;
      }
    )
  }

  onSelectAppointment(doctorDetails: DoctorDetails) {
    this.appointmentService.onSelectAppointment(doctorDetails);
    this.router.navigate(['appointment/book', doctorDetails.id]);
  }

}
