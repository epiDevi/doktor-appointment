import { Link } from "react-router-dom";
import DoctorDetails from "./DoctorDetails";
const DoctorItem = ({ doctor, role }) => {
  //console.log("from doctoritem", role);

  return (
    <>
      <Link
        to={"/doctordetailspage"}
        state={{ profile: doctor, role: role }}
        className="flex flex-col cursor-pointer "
      >
        <div className="avatar my-3  flex justify-center">
          <div className="w-12 rounded-full">
            <img src={doctor.image} alt={doctor.firstname} />
          </div>
        </div>

        <label className="text-darkblue mx-auto" htmlFor="firstname">
          Dr. {doctor.firstname} {doctor.lastname}
        </label>

        <label className="text-gray-600 mx-auto mt-3 text-Steelblue" htmlFor="">
          {doctor.specialty}
        </label>
      </Link>
    </>
  );
};

export default DoctorItem;
