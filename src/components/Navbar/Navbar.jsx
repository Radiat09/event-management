import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ContextData } from "../../ContextProvider/ContextProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logout } = useContext(ContextData);

  const handleLogOut = () => {
    console.log("Outed");
    logout()
      .then(() => {
        // Sign-out successful.
        toast.success("Logged Out Successfully!");
      })
      .catch((err) => {
        // An error happened.
        toast.error(`${err.message}`);
      });
  };
  console.log(user);
  const navLinks = (
    <>
      <li>
        <NavLink className="font-bold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/events">
          Events
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/gallery">
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink className="font-bold" to="/team">
          Team
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box  w-52"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className=" font-black text-3xl text-pink-600">
          HIGH & DRY
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} className="avatar m-1">
                <div className="w-9 rounded-full ring ring-secondary ring-offset-pink-500 ring-offset-2">
                  {user.photoURL ? (
                    <img src={user?.photoURL} />
                  ) : (
                    <img src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  w-24"
              >
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <button onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end flex items-center gap-4 ">
            <NavLink
              to="/login"
              className="btn btn-sm btn-outline btn-secondary border"
            >
              Login
            </NavLink>
            <NavLink
              to="register"
              className="btn btn-sm btn-outline btn-secondary border"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
