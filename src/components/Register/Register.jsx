import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "../../ContextProvider/ContextProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { createUser } = useContext(ContextData);
  const [showHide, setShowHide] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;
    console.log(email, password, username);
    setError("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
        toast.success("Congratulations! Your Account has been created.");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        toast.error(error);
      });
  };

  return (
    <>
      <div className="min-h-[55vh] mt-48">
        <h2 className="text-center text-5xl font-bold my-10">Register now!</h2>

        <div>
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-5  items-center"
          >
            <div className="2xl:w-1/5 w-full flex justify-center">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="2xl:w-1/5 w-full flex  justify-center">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="input input-bordered input-primary w-full max-w-xs"
              />
            </div>
            <div className="2xl:w-1/5 lg:w-2/5 md:w-3/5 w-full flex  justify-center relative">
              <input
                type={showHide ? "text" : "password"}
                name="password"
                required
                placeholder="Password"
                className="input input-bordered input-primary w-full max-w-xs"
              />
              <span
                className="absolute top-4 right-16 md:right-20 lg:right-16  xl:right-36 2xl:right-12"
                onClick={() => setShowHide(!showHide)}
              >
                {showHide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
            <input
              type="submit"
              required
              value="Register"
              className="input input-bordered input-primary text-white hover:bg-purple-700 bg-purple-600 w-full max-w-xs cursor-pointer"
            />
          </form>
        </div>
        <p className="text-center mt-4">
          Already have an account?
          <Link className="text-blue-500 ml-1 font-semibold" to="/login">
            Login!
          </Link>
        </p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default Register;
