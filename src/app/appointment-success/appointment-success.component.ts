import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-success',
  templateUrl: './appointment-success.component.html',
  styleUrls: ['./appointment-success.component.css']
})
export class AppointmentSuccessComponent implements OnInit {
  appointmentId;
  appointmentInfo = {
    name: '',
    email: '',
    phone: '',
    doctorName: '',
    appointmentDate: '',
    appointmentTime: ''
  }
  constructor(private route: ActivatedRoute, private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentId = this.route.snapshot.params['appointmentId'];
    this.appointmentService.findAppointmentById(this.appointmentId).subscribe(
      data => {
        this.appointmentInfo.name = data.name;
        this.appointmentInfo.email = data.email;
        this.appointmentInfo.phone = data.phone;
        this.appointmentInfo.doctorName = data.doctorName;
        this.appointmentInfo.appointmentDate = data.appointmentDate;
        this.appointmentInfo.appointmentTime = data.appointmentStartTime;
      }
    );
  }

}
