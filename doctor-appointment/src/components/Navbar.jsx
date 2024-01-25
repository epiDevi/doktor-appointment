import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useContext } from "react";
import UserContext from "../context/userContext";

const Navbar = () => {
  const { user, authorized } = useContext(UserContext);

  console.log("user", user, authorized);
  return (
    <nav className="flex justify-between items-center">
      <p className="text-xs font-['Museo-Sans-Cyrl'] tracking-wider	 ">
        Welcome {user ? user.email : ""}
      </p>
      <div className="flex justify-between items-center">
        <Link className="mx-2" to="/home">
          <IoHomeOutline />
        </Link>
        {authorized ? (
          user?.role === "doctor" ? (
            <Link to="/doctorprofile">
              <CiUser />
            </Link>
          ) : (
            <Link to="/patientprofile">
              <CiUser />
            </Link>
          )
        ) : (
          <Link to="/">{authorized ? <CiLogout /> : <IoIosLogIn />}</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
