import { DoctorDetails } from '../model/doctor-details.model';
import { User } from './user.model';

export class AppointmentDetails {
    appointmentDate: string;
    appointmentStartTime: string;
    appointmentEndTime: string;
    status: string;
    price: number;
    doctor: DoctorDetails;
    user: User;

    constructor(appointmentDate: string, appointmentStartTime: string, appointmentEndTime: string, status: string, price: number, doctor: DoctorDetails, user: User) {
        this.appointmentDate = appointmentDate;
        this.appointmentStartTime = appointmentStartTime;
        this.appointmentEndTime = appointmentEndTime;
        this.status = status;
        this.price = price;
        this.doctor = doctor;
        this.user = user;
    }
}