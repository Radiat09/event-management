import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { ContextData } from "../../ContextProvider/ContextProvider";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [showHide, setShowHide] = useState(false);
  const { emailPassSignIn, googleSignIn, githubLogin } =
    useContext(ContextData);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    emailPassSignIn(email, password)
      .then(() => {
        navigate("/");
        toast.success("Logged In successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        navigate("/");
        toast.success("Logged In successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleGithubSignIn = () => {
    githubLogin()
      .then(() => {
        navigate("/");
        toast.success("Logged In successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="min-h-[55vh] mt-40">
      <h2 className="text-center text-5xl font-bold my-10">Login now!</h2>

      <div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-5  items-center"
        >
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
              className="absolute  top-4 right-16 md:right-20 lg:right-16  xl:right-36 2xl:right-12"
              onClick={() => setShowHide(!showHide)}
            >
              {showHide ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <input
            type="submit"
            required
            value="Login"
            className="input input-bordered  input-primary btn-outline btn-secondary w-full max-w-xs cursor-pointer font-bold"
          />
        </form>
        <div className="divider w-1/4 mx-auto">OR</div>
        <div className="flex gap-4 justify-center">
          <p
            onClick={handleGithubSignIn}
            className="flex items-center gap-2 btn"
          >
            <FaGithub className="text-xl"></FaGithub>
            Github
          </p>
          <p
            onClick={handleGoogleSignIn}
            className="flex items-center gap-2 btn"
          >
            <FcGoogle className="text-xl text-white"></FcGoogle>
            Google
          </p>
        </div>
      </div>
      <p className="text-center mt-4">
        New to here?{" "}
        <Link
          className="text-blue-500 font-semibold cursor-pointer"
          to="/register"
        >
          Register!
        </Link>
      </p>
    </div>
  );
};

export default Login;
