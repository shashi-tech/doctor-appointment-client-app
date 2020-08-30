import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AppointmentSuccessComponent } from './appointment-success/appointment-success.component';
import { AppointmentSlotComponent } from './appointment-slot/appointment-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DoctorAppointmentComponent,
    BookAppointmentComponent,
    AppointmentSuccessComponent,
    AppointmentSlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
