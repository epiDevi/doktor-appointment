import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  async function register(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/auth/register",
      {
        method: "POST",
        credentials: "include",
        body: form,
      }
    );
    if (response.ok) {
      navigate("/verify");
    }
  }
  return (
    <main>
      <form
        onSubmit={register}
        className="border-4 rounded-m p-5 mt-10 flex flex-col items-center"
      >
        <div className="flex mb-3">
          <label className="label" htmlFor="username">
            Username:{" "}
          </label>
          <input
            className="after:content-['*'] after:ml-0.5 after:text-red-500 input ml-3 border-2"
            type="text"
            name="email"
            placeholder="username"
          />
        </div>
        <div className="flex mb-3">
          <label className="label" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="input ml-3"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <div className="flex justify-between mb-3 w-full">
          <label className="label" htmlFor="role">
            role:
          </label>
          <select className="select  w-8/12" name="role" id="role">
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>
        <input
          type="submit"
          value="registerieren"
          className="mx-auto btn btn-primary w-6/12"
        />
      </form>
    </main>
  );
};

export default Register;
