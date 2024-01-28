import corona from "/image/covid-19.jpg";
import arrow from "/image/back.png";
import Speciality from "../components/speciality";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/userContext";
const Home = () => {
  const { user } = useContext(UserContext);
  console.log("user from Home", user);
  return (
    <main className="mb-10">
      <img src={corona} alt="" />
      <section
        className="p-3 flex justify-between"
        style={{
          borderRadius: "20px",
          background: "rgba(107, 119, 154, 0.05)",
          height: "80px",
        }}
      >
        <div>
          <h2 className="text-darkblue text-m">Problems?</h2>
          <p className="text-Steelblue">Find all doctor here</p>
        </div>
        <Link
          to="/alldoctors"
          state={{ role: user?.role }}
          className="cursor-pointer"
        >
          →
        </Link>
      </section>
      <Speciality />
    </main>
  );
};

export default Home;
