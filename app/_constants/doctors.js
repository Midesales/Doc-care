import DoctorTwo from "../_images/doctor-02.png";
import DoctorThree from "../_images/doctor-03.png";
import DoctorFour from "../_images/doctor-04.png";
import DoctorFive from "../_images/doctor-05.png";

/**
 * @type {Array.<{
 *   id: number,
 *   name: string,
 *   title: string,
 *   rating: number,
 *   image: any,
 *   patientCount: number,
 *   experience: number
 * }>}
 */
export const doctors = [{
  id: 1,
  name: "Dr. Wilbert",
  title: "Surgeon",
  image: DoctorTwo,
  rating: 4,
  patientCount: 120,
  experience: 5
}, {
  id: 2,
  name: "Dr. Henry",
  title: "Neurologist",
  image: DoctorThree,
  rating: 5,
  patientCount: 250,
  experience: 10,
}, {
  id: 3,
  name: "Dr. Smith",
  title: "Dentist",
  image: DoctorFour,
  rating: 3,
  patientCount: 100,
  experience: 4
}, {
  id: 4,
  name: "Dr. Wilfred",
  title: "Gynaecologist",
  image: DoctorFive,
  rating: 5,
  patientCount: 140,
  experience: 5,
}, {
  id: 5,
  name: "Dr. William",
  title: "Surgeon",
  image: DoctorTwo,
  rating: 4,
  patientCount: 110,
  experience: 6,
}, {
  id: 6,
  name: "Dr. John Doe",
  title: "Cardiologist",
  image: DoctorTwo,
  rating: 3,
  patientCount: 180,
  experience: 7,
}];
