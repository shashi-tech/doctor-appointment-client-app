import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';
import { DoctorDetails } from '../model/doctor-details.model';
import { AppointmentDetails } from '../model/appointment-details.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  doctorId;
  appointmentId;
  errorMsg;
  doctorDetails: DoctorDetails;
  user: User;
  appointment = {
    appointmentDate: '',
    appointmentStartTime: '',
    appointmentEndTime: '',
    status: '',
    price: null,
    doctor: {
      id: null,
      name: '',
      age: null,
      qualification: '',
      specialization: '',
      experience: null
    },
    user: {
      id: null,
      name: '',
      email: '',
      phone: '',
    }
  };

  constructor(private router: Router, private route: ActivatedRoute, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.appointmentService.findDoctorById(this.doctorId).subscribe(
      data => {
        this.doctorDetails = data;
      }
    );
  }

  onBookAppointment(formData: NgForm) {
    if (formData.invalid) {
      return;
    }
    console.log(formData);
    this.appointment.appointmentDate = formData.value.appointmentDate;
    this.appointment.appointmentStartTime = formData.value.appointmentTime+':00';
    this.appointment.appointmentEndTime = '00:00:00';
    this.appointment.status = 'Booked';
    this.appointment.price = 90;
    this.appointment.user.id = null;
    this.appointment.user.name = formData.value.name;
    this.appointment.user.email = formData.value.email;
    this.appointment.user.phone = formData.value.phone;
    this.appointment.doctor = this.doctorDetails;

    this.appointmentService.createAppointment(this.appointment).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['appointment/success', data.id])
      },
      error => {
        this.errorMsg = 'Please select available appointment slot!';
      }
    );

  }

}
