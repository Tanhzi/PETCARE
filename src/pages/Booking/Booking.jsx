import React, { useState } from 'react';
import './Booking.css';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

function Booking() {
  const [doctorId, setDoctorId] = useState(''); // Có thể nhập ID bác sĩ theo ý muốn
  const [patientName, setPatientName] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      'http://localhost:8080/book_appointment.php',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          doctor_id: doctorId,
          patient_name: patientName,
          patient_email: patientEmail,
          appointment_date: appointmentDate,
          appointment_time: appointmentTime,
        }),
      }
    );

    const result = await response.json();
    if (result.error) {
      alert(result.error);
    } else if (result.success) {
      alert(result.success);
    }
  };

  return (
    <div className='container'>
        <Navbar/>
        <div className="container-fluid bg-light pt-5 pb-4">
            <div className="container py-5">
            <div className="d-flex flex-column text-center mb-5">
                <h4 className="text-secondary mb-3">Pricing Plan</h4>
                <h1 className="display-4 m-0">
                Choose the <span className="text-primary">Best Price</span>
                </h1>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-4">
                <div className="card border-0">
                    <div className="card-header position-relative border-0 p-0 mb-4">
                    <img className="card-img-top" src="img/price-1.jpg" alt="" />
                    <div
                        className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100"
                        style={{
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        background: "rgba(0, 0, 0, .5)"
                        }}
                    >
                        <h3 className="text-primary mb-3">Basic</h3>
                        <h1 className="display-4 text-white mb-0">
                        <small
                            className="align-top"
                            style={{ fontSize: 22, lineHeight: 45 }}
                        >
                            $
                        </small>
                        49
                        <small
                            className="align-bottom"
                            style={{ fontSize: 16, lineHeight: 40 }}
                        >
                            / Mo
                        </small>
                        </h1>
                    </div>
                    </div>
                    <div className="card-body text-center p-0">
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item p-2">
                        <i className="fa fa-check text-secondary mr-2" />
                        Feeding
                        </li>
                        <li className="list-group-item p-2">
                        <i className="fa fa-check text-secondary mr-2" />
                        Boarding
                        </li>
                        <li className="list-group-item p-2">
                        <i className="fa fa-times text-danger mr-2" />
                        Spa &amp; Grooming
                        </li>
                        <li className="list-group-item p-2">
                        <i className="fa fa-times text-danger mr-2" />
                        Veterinary Medicine
                        </li>
                    </ul>
                    </div>
                    <div className="card-footer border-0 p-0">
                    <a
                        href=""
                        className="btn btn-primary btn-block p-3"
                        style={{ borderRadius: 0 }}
                    >
                        Signup Now
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 mb-4">
                <div className="card border-0">
                    <div className="card-header position-relative border-0 p-0 mb-4">
                    <img className="card-img-top" src="img/price-2.jpg" alt="" />
                    <div
                        className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100"
                        style={{
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        background: "rgba(0, 0, 0, .5)"
                        }}
                    >
                        <h3 className="text-secondary mb-3">Standard</h3>
                        <h1 className="display-4 text-white mb-0">
                        <small
                            className="align-top"
                            style={{ fontSize: 22, lineHeight: 45 }}
                        >
                            $
                        </small>
                        99
                        <small
                            className="align-bottom"
                            style={{ fontSize: 16, lineHeight: 40 }}
                        >
                            / Mo
                        </small>
                        </h1>
                    </div>
                    </div>
                    <div className="card-body text-center p-0">
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item p-2">
                        <i className="fa fa-check text-secondary mr-2" />
                        Feeding
                        </li>
                        <li className="list-group-item p-2">
                        <i className="fa fa-check text-secondary mr-2" />
                        Boarding
                        </li>
                        <li className="list-group-item p-2">
                        <i className="fa fa-check text-secondary mr-2" />
                        Spa &amp; Grooming
                        </li>
                        <li className="list-group-item p-2">
                        <i className="fa fa-times text-danger mr-2" />
                        Veterinary Medicine
                        </li>
                    </ul>
                    </div>
                    <div className="card-footer border-0 p-0">
                    <a
                        href=""
                        className="btn btn-secondary btn-block p-3"
                        style={{ borderRadius: 0 }}
                    >
                        Signup Now
                    </a>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 mb-4">
                <div className="card border-0">
                    <div className="card-header position-relative border-0 p-0 mb-4">
                    <img className="card-img-top" src="img/price-3.jpg" alt="" />
                    <div
                        className="position-absolute d-flex flex-column align-items-center justify-content-center w-100 h-100"
                        style={{
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        background: "rgba(0, 0, 0, .5)"
                        }}
                    >
                        <h3 className="text-primary mb-3">Premium</h3>
                        <h1 className="display-4 text-white mb-0">
                        <small
                            className="align-top"
                            style={{ fontSize: 22, lineHeight: 45 }}
                        >
                            $
                        </small>
                        149
                        <small
                            className="align-bottom"
                            style={{ fontSize: 16, lineHeight: 40 }}
                        >
                            / Mo
                        </small>
                        </h1>
                    </div>
                    </div>
                    <div className="card-body text-center p-0">
                    <ul className="list-group list-group-flush mb-4">
                        <li className="list-group-item p-2">
                        <i className="fa fa-check text-secondary mr-2" />
                        Feeding
                        </li>
                        <li className="list-group-item p-2">
                        <i className="fa fa-check text-secondary mr-2" />
                        Boarding
                        </li>
                        <li className="list-group-item p-2">
                        <i className="fa fa-check text-secondary mr-2" />
                        Spa &amp; Grooming
                        </li>
                        <li className="list-group-item p-2">
                        <i className="fa fa-check text-secondary mr-2" />
                        Veterinary Medicine
                        </li>
                    </ul>
                    </div>
                    <div className="card-footer border-0 p-0">
                    <a
                        href=""
                        className="btn btn-primary btn-block p-3"
                        style={{ borderRadius: 0 }}
                    >
                        Signup Now
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Pricing Plan End */}
        {/* Booking Start */}
        <div className="container-fluid">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="bgg2 py-5 px-4 px-sm-5">
                    <div className="appointment-form">
                        <h2>Đặt Lịch Khám</h2>
                            <form onSubmit={handleSubmit}>
                            <label htmlFor="doctor_id">ID Bác Sĩ:</label>
                            <input type="text" id="doctor_id" name="doctor_id" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required />
                            <label htmlFor="patient_name">Tên Bệnh Nhân:</label>
                            <input type="text" id="patient_name" name="patient_name" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
                            <label htmlFor="patient_email">Email:</label>
                            <input type="email" id="patient_email" name="patient_email" value={patientEmail} onChange={(e) => setPatientEmail(e.target.value)} required />
                            <label htmlFor="appointment_date">Ngày Hẹn:</label>
                            <input type="date" id="appointment_date" name="appointment_date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required />
                            <label htmlFor="appointment_time">Giờ Hẹn:</label>
                            <input type="time" id="appointment_time" name="appointment_time" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required />
                            <br />
                            <input type="submit" value="Đặt Lịch" />
                            </form>
                        </div>
                    </div>
                <div className="col-lg-6 py-5 py-lg-0 px-3 px-lg-5">
                    <h4 className="text-secondary mb-3">Going for a vacation?</h4>
                <h1 className="display-4 mb-4">
                    Book For <span className="text-primary">Your Pet</span>
                </h1>
                <p>
                    Labore vero lorem eos sed aliquy ipsum aliquy sed. Vero dolore
                    dolore takima ipsum lorem rebum
                </p>
                <div className="row py-2">
                    <div className="col-sm-6">
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-2">
                        <h1 className="flaticon-house font-weight-normal text-secondary m-0 mr-3" />
                        <h5 className="text-truncate m-0">Pet Boarding</h5>
                        </div>
                        <p>
                        Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-2">
                        <h1 className="flaticon-food font-weight-normal text-secondary m-0 mr-3" />
                        <h5 className="text-truncate m-0">Pet Feeding</h5>
                        </div>
                        <p>
                        Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-2">
                        <h1 className="flaticon-grooming font-weight-normal text-secondary m-0 mr-3" />
                        <h5 className="text-truncate m-0">Pet Grooming</h5>
                        </div>
                        <p className="m-0">
                        Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                        </p>
                    </div>
                    </div>
                    <div className="col-sm-6">
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center mb-2">
                        <h1 className="flaticon-toy font-weight-normal text-secondary m-0 mr-3" />
                        <h5 className="text-truncate m-0">Pet Tranning</h5>
                        </div>
                        <p className="m-0">
                        Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Booking Start */}
        <Footer/>

    </div>
        


    </div>
  );
}

export default Booking;
