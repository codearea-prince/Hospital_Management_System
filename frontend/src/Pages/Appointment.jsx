// import Hero from "../components/Hero";
// import AppointmentForm from "../components/AppointmentForm";

// const Appointment = () => {
//   return (
//     <>
//       <Hero
//         title={"Schedule Your Appointment | ZeeCare Medical Institute"}
//         imageUrl={"/signin.png"}
//       />
//       <AppointmentForm/>
//     </>
//   )
// };

// export default Appointment;

import AppointmentForm from "../components/AppointmentForm";
const Appointment = ({ imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>Schedule Your Appointment | ZeeCare Medical Institute</h1>
          <p>
            Our system simplifies the appointment scheduling process with an
            intuitive interface accessible via web and mobile platforms.
            Patients can easily browse through available time slots, select
            preferred dates, and book appointments with their healthcare
            providers hassle-free.
          </p>
          <p>
            Say goodbye to long waiting times and uncertainty. ZeeCare provides
            real-time updates on the availability of doctors and specialists,
            ensuring that patients can book appointments at their convenience
            without the frustration of unavailability.
          </p>
        </div>
        <div className="banner">
          <img src="signin.png" alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
      <AppointmentForm />
    </>
  );
};

export default Appointment;
