import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import DoctorProfile from "./pages/doctor/DoctorProfile";
import Register from "./pages/auth/Register";
import VerifyEmail from "./pages/auth/VerifyEmail";
import PatientProfile from "./pages/patient/patientProfile";
import AllDoctors from "./pages/doctor/AllDoctors";
import DoctorDetails from "./components/doctor/DoctorDetails";
import DoctorDetailsPage from "./pages/doctor/DoctorDetailsPage";
import Booking from "./pages/Booking";

function App() {
  return (
    <>
      <div className="mt-32 max-w-container mx-auto  items-center justify-center bg-white">
        <BrowserRouter>
          <Routes>
            <Route element={<Root />}>
              <Route path="/" element={<Home />} />
              <Route path="/doctorprofile" element={<DoctorProfile />} />
              <Route path="/patientprofile" element={<PatientProfile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<VerifyEmail />} />
            <Route path="/alldoctors" element={<AllDoctors />} />
            <Route path="/doctordetails" element={<DoctorDetails />} />
            <Route path="/doctordetailspage" element={<DoctorDetailsPage />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
