import { useLocation } from "react-router-dom";
import DoctorDetails from "../../components/doctor/DoctorDetails";
import { Link } from "react-router-dom";

const DoctorDetailsPage = () => {
  let profile = {};
  let role = "";
  const location = useLocation();
  console.log("location", location);
  if (location && location.state && location.state.profile) {
    profile = location.state.profile;
    role = location.state.role;
    console.log("blablabla" + role);
  }
  return (
    <section>
      <h1>DoctorDetailsPage</h1>
      <DoctorDetails profile={profile} />
      {role === "patient" && (
        <Link to="/booking" state={{ doctor: profile }} className="button">
          Book Appointment
        </Link>
      )}
    </section>
  );
};

export default DoctorDetailsPage;
