import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [doctorWorkingdays, setDoctorWorkingDays] = useState([]);
  const today = new Date();
  const location = useLocation();

  const daysInMonth = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + 1,
    0
  ).getDate();
  const weekDays = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  let doctor = {};
  if (location && location.state && location.state.doctor) {
    doctor = location.state.doctor;
    console.log("doctor from Booking", doctor);
  }

  useEffect(() => {
    setDoctorWorkingDays(doctor.workingTime);
    console.log("doctorWorkingdays", doctorWorkingdays);
    const days = doctorWorkingdays.map((item) => item.day);
    setDoctorWorkingDays(days);
    daysArray.map((day) => {
      const wert = doctorWorkingdays.includes(getDayName(day));
      if (wert) console.log("jaaaa");
      else console.log("neiiiiinnn");
    });
  }, []);
  function getDayName(dayIndex) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return daysOfWeek[dayIndex];
  }

  // Verwendung der Funktion
  const dayName = getDayName(0); // Beispiel: 'Sonntag'

  return (
    <section>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM yyyy"
        minDate={today}
        className="p-2"
        showMonthYearPicker
        showFullMonthYearPicker
      />
      <div className="carousel rounded-box mt-3 w-full">
        {daysArray.map((day) => (
          <div
            key={day}
            className={`flex flex-col carousel-item w-3/12 cursor-pointer rounded-md border-2 ml-1 ${
              doctorWorkingdays.includes(getDayName(day))
                ? "text-blue"
                : "text-Steelblue"
            }`}
          >
            <p className="mx-auto">{day}</p>
            <p className="mx-auto">
              {
                weekDays[
                  new Date(
                    startDate.getFullYear(),
                    startDate.getMonth(),
                    day
                  ).getDay()
                ]
              }
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Booking;
