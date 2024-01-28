// in der nächte version sollte rating durch Patient aufgefürt werden

import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { useContext } from "react";

import UserContext from "../../context/userContext";
import DoctorDetails from "../../components/doctor/DoctorDetails";

const DoctorProfile = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const { user, authorized } = useContext(UserContext);

  const [img, setImg] = useState(null);

  const [checkboxState, setCheckboxState] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
  });

  const checkboxChange = (day) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  const selectFoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImg(fileUrl);
    }
  };

  useEffect(() => {
    async function getProfile() {
      console.log("ich bin in getprofile");
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/profile/" + user.email,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("respose ist ok getprofile", data);
          // if (data.length > 0) {
          setProfile(data);
          console.log("profile ist => ", data);
          // }
        }
      } catch (error) {
        console.error("Fehler beim Laden des Profils:", error);
      } finally {
        setLoading(false);
      }
    }
    getProfile();
  }, [refresh]);

  async function saveProfile(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    // console.log(form.get("image"));
    const workingTimeData = [];
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const selectedDays = form.getAll("workingDays");
    daysOfWeek.forEach((day) => {
      const isWorkingDay = selectedDays.includes(day);
      if (isWorkingDay) {
        const start = form.get(`workingTimeStart_${day}`);
        const end = form.get(`workingTimeEnd_${day}`);

        workingTimeData.push({ day, start, end });
      }
    });
    console.log("workingTimeData", workingTimeData);
    console.log("Rating", form.get("rating"));
    form.set("workingTime", JSON.stringify(workingTimeData));
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/profile/addprofile",
      {
        method: "POST",
        credentials: "include",
        body: form,
      }
    );
    if (response.ok) {
      e.target.reset();
      setRefresh(!refresh);
    }
  }

  return (
    <section>
      {loading ? (
        <section>
          <span className="loading loading-spinner loading-xs"></span>
          <span className="loading loading-spinner loading-sm"></span>
          <span className="loading loading-spinner loading-md"></span>
          <span className="loading loading-spinner loading-lg"></span>
        </section>
      ) : profile ? (
        <DoctorDetails profile={profile} />
      ) : (
        <form onSubmit={saveProfile} className="[&>*]:mb-4 mt-5">
          <article>
            <div className="avatar">
              <div className="w-24 rounded-full">
                {img ? (
                  <img src={img} alt="" name="image" />
                ) : (
                  <CiUser className="text-7xl" />
                )}
              </div>
            </div>
            <input
              type="file"
              name="image"
              onChange={selectFoto}
              className="file-input file-input-bordered file-input-xs w-full max-w-xs"
            />
          </article>
          <article>
            <label htmlFor="firstname">Name</label>
            <input
              type="text"
              name="firstname"
              className="input input-bordered  ml-3"
            />
          </article>
          <article>
            <label htmlFor="lastname">Nachname</label>
            <input
              type="text"
              name="lastname"
              className="input input-bordered ml-3"
            />
          </article>
          <article className="flex justify-between">
            <label htmlFor="experience">Erfahrung in Jahren</label>
            <input
              type="number"
              name="experience"
              className="input input-bordered ml-3"
            />
          </article>
          <article>
            <label htmlFor="">bewertung</label>
            <div className="rating ml-3">
              <input
                value="1"
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                value="2"
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                value="3"
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                value="4"
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                value="5"
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </article>

          <article className="flex justify-between">
            <label htmlFor="specialty">specialty</label>
            <select
              defaultValue="specialty"
              className="select select-bordered select-sm w-full max-w-xs ml-3"
              name="specialty"
            >
              <option value="specialty" disabled>
                specialty
              </option>
              <option value="Hausarzt">Hausarzt</option>
              <option value="HNO">HNO</option>
              <option value="Gynägologie">Gynaegologie</option>
              <option value="Orthopädie">Orthopaedie</option>
              <option value="Zahnarzt">Zahnarzt</option>
            </select>
          </article>

          <section>
            <div className="flex items-center space-x-3">
              <label className="flex justify-between cursor-pointer w-4/12">
                <span className="label-text">Monday</span>
                <input
                  readOnly
                  type="checkbox"
                  className="checkbox ml-3 cursor-pointer"
                  name="workingDays"
                  value="Monday"
                  checked={checkboxState.Monday}
                  onChange={() => checkboxChange("Monday")}
                />
              </label>
              <input
                type="time"
                className="ml-3 cursor-pointer"
                name="workingTimeStart_Monday"
              />
              <span className="label-text">bis</span>
              <input
                type="time"
                className="ml-3 cursor-pointer"
                name="workingTimeEnd_Monday"
              />
            </div>
          </section>
          <section>
            <div className="flex items-center space-x-3">
              <label className="flex justify-between cursor-pointer w-4/12">
                <span className="label-text ">Tuesday</span>
                <input
                  readOnly
                  type="checkbox"
                  className="checkbox ml-3 cursor-pointer"
                  name="workingDays"
                  value="Tuesday"
                  checked={checkboxState.Tuesday}
                  onChange={() => checkboxChange("Tuesday")}
                />
              </label>
              <input
                type="time"
                className=" ml-3 cursor-pointer "
                name="workingTimeStart_Tuesday"
                id=""
              />
              <span className="label-text ">bis</span>
              <input
                type="time"
                className=" ml-3 cursor-pointer "
                name="workingTimeEnd_Tuesday"
                id=""
              />
            </div>
          </section>
          <section>
            <div className="flex items-center space-x-3">
              <label className="flex justify-between cursor-pointer w-4/12">
                <span className="label-text ">Wednesday</span>
                <input
                  readOnly
                  type="checkbox"
                  className="checkbox ml-3 cursor-pointer"
                  name="workingDays"
                  value="Wednesday"
                  checked={checkboxState.Wednesday}
                  onChange={() => checkboxChange("Wednesday")}
                />
              </label>
              <input
                type="time"
                className=" ml-3 cursor-pointer "
                name="workingTimeStart_Wednesday"
                id=""
              />
              <span className="label-text ">bis</span>
              <input
                type="time"
                className=" ml-3 cursor-pointer "
                name="workingTimeEnd_Wednesday"
                id=""
              />
            </div>
          </section>
          <section>
            <div className="flex items-center space-x-3">
              <label className="flex justify-between cursor-pointer w-4/12">
                <span className="label-text ">Thursday</span>
                <input
                  readOnly
                  type="checkbox"
                  className="checkbox ml-3 cursor-pointer"
                  name="workingDays"
                  value="Thursday"
                  checked={checkboxState.Thursday}
                  onChange={() => checkboxChange("Thursday")}
                />
              </label>
              <input
                type="time"
                className=" ml-3 cursor-pointer "
                name="workingTimeStart_Thursday"
                id=""
              />
              <span className="label-text ">bis</span>
              <input
                type="time"
                className=" ml-3 cursor-pointer "
                name="workingTimeEnd_Thursday"
                id=""
              />
            </div>
          </section>
          <section>
            <div className="flex items-center space-x-3">
              <label className="flex justify-between w-4/12 cursor-pointer">
                <span className="label-text ">Friday</span>
                <input
                  readOnly
                  type="checkbox"
                  className="checkbox ml-3 cursor-pointer"
                  name="workingDays"
                  value="Friday"
                  checked={checkboxState.Friday}
                  onChange={() => checkboxChange("Friday")}
                />
              </label>
              <input
                type="time"
                className=" ml-3 cursor-pointer "
                name="workingTimeStart_Friday"
                id=""
              />
              <span className="label-text ">bis</span>
              <input
                type="time"
                className=" ml-3 cursor-pointer "
                name="workingTimeEnd_Friday"
                id=""
              />
            </div>
          </section>
          <article className="flex flex-col ">
            <label htmlFor="description">Beschreibung</label>
            <textarea
              name="about"
              className="textarea textarea-bordered mt-3"
              placeholder="Bio"
            />
          </article>

          <input
            type="submit"
            className="mx-auto btn btn-primary w-6/12"
            value="Speichern"
          />
        </form>
      )}
    </section>
  );
};

export default DoctorProfile;
