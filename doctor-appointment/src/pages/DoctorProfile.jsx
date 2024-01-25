import { useEffect, useState } from "react";

const DoctorProfile = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState(null);

  const selectFoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImg(fileUrl);
    }
  };

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/profile",
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          console.log("respose ist ok");
          const data = await response.json();
          if (data.length > 0) {
            setProfile(data[0]);
          }
          console.log(data);
        }
      } catch (error) {
        console.error("Fehler beim Laden des Profils:", error);
      } finally {
        setLoading(false);
      }
    }
    getProfile();
  }, []);

  async function saveProfile(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/profile/addprofile",
      {
        method: "POST",
        credentials: "include",
        body: form,
      }
    );
    if (response.ok) {
      //getProfile();
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
        <section>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={profile.image} alt={profile.firstname} />
            </div>
          </div>
          <label htmlFor="firstname">{profile.firstname}</label>
        </section>
      ) : (
        <form onSubmit={saveProfile}>
          <article>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={img} alt="" />
              </div>
            </div>
            <input
              type="file"
              name="image"
              onChange={selectFoto}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </article>
          <article>
            <label htmlFor="firstname">Name</label>
            <input type="text" name="firstname" />
          </article>
          <article>
            <label htmlFor="lastname">Nachname</label>
            <input type="text" name="lastname" />
          </article>
          <article>
            <label htmlFor="specialty">specialty</label>
            <input type="text" name="specialty" />
          </article>
          <input type="submit" value="Speichern" />
        </form>
      )}
    </section>
  );
};

export default DoctorProfile;
