import { TbDental } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { SiMicrogenetics } from "react-icons/si";
import { PiEarDuotone } from "react-icons/pi";

const Speciality = () => {
  return (
    <section className="mt-6">
      <h2 className="text-darkblue text-m">Specialty 😷</h2>
      <div className="carousel rounded-box mt-3">
        <div className="flex flex-col carousel-item w-6/12 cursor-pointer">
          <TbDental className="text-4xl mx-auto" />
          <p className="text-xl mx-auto">Dentistry</p>
        </div>
        <div className="flex flex-col carousel-item w-6/12 cursor-pointer">
          <FaUserDoctor className="text-4xl mx-auto" />
          <p className="text-xl mx-auto">family doctor</p>
        </div>
        <div className="flex flex-col carousel-item w-6/12 cursor-pointer">
          <SiMicrogenetics className="text-4xl mx-auto" />
          <p className="text-xl mx-auto">Genetic</p>
        </div>
        <div className="flex flex-col carousel-item w-6/12 cursor-pointer">
          <PiEarDuotone className="text-4xl mx-auto" />
          <p className="text-xl mx-auto">ENT</p>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
