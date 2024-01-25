import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DoctorProfile from "./pages/DoctorProfile";
import Register from "./pages/Register";
import VerifyEmail from "./pages/VerifyEmail";
import PatientProfile from "./pages/patientProfile";

function App() {
  return (
    <>
      <div className="mt-32 max-w-container mx-auto flex items-center justify-center bg-white">
        <BrowserRouter>
          <Routes>
            <Route element={<Root />}>
              <Route path="/home" element={<Home />} />
              <Route path="/doctorprofile" element={<DoctorProfile />} />
              <Route path="/patientprofile" element={<PatientProfile />} />
            </Route>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<VerifyEmail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
