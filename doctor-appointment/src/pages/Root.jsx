import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import UserContext from "../context/userContext";

const Root = () => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkTocken() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/auth/check",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        setAuthorized(true);
        setUser(await response.json());
      } else {
        setAuthorized(false);
      }
      setLoading(false);
    }
    checkTocken();
  }, []);
  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/user/actuel",
        {
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      }
    }
    getUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser, authorized }}>
      <div className="w-10/12 mt-5">
        <Navbar />

        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

export default Root;
