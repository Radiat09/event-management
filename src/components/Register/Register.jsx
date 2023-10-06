import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  // const { createUser } = useContext(AuthContext);

  const [showHide, setShowHide] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const username = e.target.username.value;
    console.log(email, password, username);

    // createUser(email, password)
    //   .then((result) => {
    //     console.log(result.user);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });
  };

  return (
    <div>
      <h2 className="text-center text-5xl font-bold my-10">Register now!</h2>

      <div>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-5  items-center"
        >
          <div className="w-1/5 flex  justify-center">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="w-1/5 flex  justify-center">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <div className="w-1/5 flex  justify-center relative">
            <input
              type={showHide ? "text" : "password"}
              name="password"
              required
              placeholder="Password"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <span
              className="absolute top-4 right-12"
              onClick={() => setShowHide(!showHide)}
            >
              {showHide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <input
            type="submit"
            required
            value="Login"
            className="input input-bordered input-primary text-white hover:bg-purple-700 bg-purple-600 w-full max-w-xs"
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
  );
};

export default Register;
