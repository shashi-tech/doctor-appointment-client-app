import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AppointmentSuccessComponent } from './appointment-success/appointment-success.component';
import { AppointmentSlotComponent } from './appointment-slot/appointment-slot.component';

const routes: Routes = [
  { path: '', component: DoctorAppointmentComponent},
  { path: 'appointment/slot', component: AppointmentSlotComponent },
  { path: 'appointment/book/:doctorId', component: BookAppointmentComponent},
  { path: 'appointment/success/:appointmentId', component: AppointmentSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
