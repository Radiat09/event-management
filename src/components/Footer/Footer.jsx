import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-7xl xl:mx-auto mx-5 my-10">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
        <div className="text-3xl font-bold text-pink-600">HIGH & DRY</div>
        <div className="flex items-center gap-3">
          <Link className="font-bold hover:text-white" to="/">
            Home
          </Link>
          <Link className="font-bold hover:text-white" to="/">
            About
          </Link>
          <Link className="font-bold hover:text-white" to="/">
            Blog
          </Link>
          <Link className="font-bold hover:text-white" to="/">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <FaFacebook className="text-5xl p-3 bg-white rounded-full text-blue-500"></FaFacebook>
          <FaTwitter className="text-5xl p-3 bg-white rounded-full text-blue-400"></FaTwitter>
          <FaInstagram className="text-5xl p-3 bg-white rounded-full text-red-500"></FaInstagram>
        </div>
      </div>
      <div className="divider my-12"></div>
      <div className="text-center">
        <h4 className="text-2xl font-semibold mb-4">
          Subscribe To Our Newsletter
        </h4>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-4  input-bordered w-full md:w-1/4"
          />
          <button className="px-3 btn-secondary btn-outline font-bold border w-fit">
            Submit
          </button>
        </div>
      </div>
      <div className="divider my-12"></div>
      <div>
        <p className="flex gap-2 items-center justify-center">
          <FaCopyright></FaCopyright>
          HIGH & DRY - 2030, Made with Love.
        </p>
      </div>
    </div>
  );
};

export default Footer;
