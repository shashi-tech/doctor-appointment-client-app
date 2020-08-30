export class DoctorDetails {
    id: number;
    name: string;
    age: number;
    qualification: string;
    specialization: string;
    experience: number;

    constructor(id: number, name: string, age: number, qualification: string, specialization: string, experience: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.qualification = qualification;
        this.specialization = specialization;
        this.experience = experience;
    }
}