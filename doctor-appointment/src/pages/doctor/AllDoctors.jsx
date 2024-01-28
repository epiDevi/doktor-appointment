import { useEffect, useState } from "react";
import DoctorItem from "../../components/doctor/DoctorItem";
import { useLocation } from "react-router-dom";

const AllDoctors = () => {
  const [allDoctors, setAlldoctors] = useState([]);
  const location = useLocation();
  const role = location.state.role;
  //console.log("role from allDoctors", role);
  useEffect(() => {
    async function getAllDoctors() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/alldoctors"
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Doctor from getAlldoctor", data);
        setAlldoctors(data);
      }
    }
    getAllDoctors();
  }, []);
  return (
    <>
      <header>
        <div className="flex justify-between mb-3">
          <p>←</p>
          <h2>Doctors</h2>
        </div>
        <div>
          <input
            className="p-3 rounded-xl border-2 w-full "
            type="text"
            name="search"
            id=""
            placeholder="🔎 search fpr doctors"
          />
        </div>
      </header>
      <section className="grid grid-cols-2 mt-6">
        {allDoctors ? (
          allDoctors.map((item, key) => {
            console.log("Doctor data:", item);
            return <DoctorItem doctor={item} role={role} key={key} />;
          })
        ) : (
          <p>no doctor available</p>
        )}
      </section>
    </>
  );
};
export default AllDoctors;
