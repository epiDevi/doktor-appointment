import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();

  async function virifyemail(e) {
    e.preventDefault();
    const form = new FormData(e.target);

    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + "/api/auth/verify",
      {
        method: "POST",
        credentials: "include",
        body: form,
      }
    );
    if (response.ok) {
      navigate("/");
    }
  }
  return (
    <>
      <main>
        <form
          onSubmit={virifyemail}
          className="border-4 rounded-m p-5 mt-10 flex flex-col items-center"
        >
          <div className="flex mb-3">
            <label className="label" htmlFor="email">
              Email:{" "}
            </label>
            <input
              className="after:content-['*'] after:ml-0.5 after:text-red-500 input ml-3 border-2"
              type="text"
              name="email"
              placeholder="email"
            />
          </div>
          <div className="flex mb-3">
            <label className="label" htmlFor="code">
              Six DigitCode:{" "}
            </label>
            <input
              className="input ml-3"
              type="text"
              name="sixDigitCode"
              placeholder="sixDigitCode"
            />
          </div>
          <input
            type="submit"
            value="Ok"
            className="mx-auto btn btn-primary w-6/12"
          />
        </form>
      </main>
    </>
  );
};

export default VerifyEmail;
