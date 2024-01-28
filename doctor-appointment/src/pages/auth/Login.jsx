import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(form.getAll("password"));
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/auth/login",
      {
        method: "POST",
        credentials: "include",
        body: form,
      }
    );
    if (response.ok) {
      //const data = await response.json();
      navigate("/");
    }
  }

  return (
    <main>
      <form
        onSubmit={login}
        className="border-4 rounded-m p-5 mt-10 flex flex-col items-center"
      >
        <div className="flex mb-3">
          <label className="label" htmlFor="email">
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
        <input
          type="submit"
          value="Login"
          className="mx-auto btn btn-primary w-6/12"
        />
      </form>
      <h2 className="my-10 px-3 text-sm">
        Wenn Sie noch nicht registriert sind, registrieren Sie sich bitte{" "}
        <Link
          to={"/register"}
          className="text-primary underline underline-offset-2 "
        >
          hier
        </Link>{" "}
        .
      </h2>
    </main>
  );
};

export default Login;
