import { useLocation } from "react-router-dom";
import patient from "/image/patient.jpg";
import rating from "/image/rating.jpg";
import experience from "/image/exprience.jpg";
const DoctorDetails = ({ profile }) => {
  return (
    <>
      <section className="flex flex-col mb-10">
        <div className="avatar my-6 mx-auto">
          <div className="w-24 rounded-full">
            <img src={profile?.image} alt={profile.firstname} />
          </div>
        </div>
        <div className="flex mx-auto">
          <label className="text-darkblue" htmlFor="firstname">
            Dr. {profile?.firstname}
          </label>
          <label className="ml-2 text-darkblue" htmlFor="">
            {profile?.lastname}
          </label>
        </div>
        <label className="text-gray-600 mx-auto mt-3 text-Steelblue" htmlFor="">
          {profile?.specialty}
        </label>
        <section className="grid grid-cols-3 mt-6">
          <div className="flex flex-col ">
            <img className="mx-auto" src={patient} alt="Patients" />
            <label className="text-center mt-3 text-darkblue" htmlFor="">
              1000+
            </label>
            <label className="text-center mt-3 text-Steelblue" htmlFor="">
              Patients
            </label>
          </div>

          <div className="flex flex-col ">
            <img className="mx-auto" src={experience} alt="Patients" />
            <label className="text-center mt-3 text-darkblue" htmlFor="">
              {profile?.experience} Yrs
            </label>
            <label className="text-center mt-3 text-Steelblue" htmlFor="">
              Experience
            </label>
          </div>
          <div className="flex flex-col ">
            <img className="mx-auto" src={rating} alt="Patients" />
            <label className="text-center mt-3 text-darkblue" htmlFor="">
              {profile?.rating}
            </label>
            <label className="text-center mt-3 text-Steelblue" htmlFor="">
              Rating
            </label>
          </div>
        </section>
        <section id="about" className="mt-6">
          <h2 className="text-darkblue text-2xl">About Doctor</h2>
          <p className="text-Steelblue mt-3 w-full">{profile?.about}</p>
        </section>
        <section id="work" className="mt-6">
          <h2 className="text-darkblue text-2xl">Working time</h2>

          {profile?.workingTime.map((item, key) => (
            <div key={key} className="flex text-Steelblue mt-3">
              <h3>{item.day}: </h3>
              <p>
                {item.start} bis {item.end}
              </p>
            </div>
          ))}
        </section>
        <section id="about" className="mt-6">
          <h2 className="text-darkblue text-2xl">Communication</h2>
          <p className="text-Steelblue mt-3">Messaging</p>
          {/* weitere sache kommen in version 2 */}
        </section>
      </section>
    </>
  );
};

export default DoctorDetails;
