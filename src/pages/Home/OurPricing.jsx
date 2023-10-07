import { FaCheck } from "react-icons/fa";

const OurPricing = () => {
  return (
    <div className="my-40 max-w-7xl xl:mx-auto mx-5">
      <h2 className="text-4xl font-black text-center text-pink-300">
        Our <span className="text-pink-600">Pricing</span>
      </h2>
      <p className="text-center mt-4 text-white">
        Do not sell yourself short. No one will value you. Set a fair price for
        you, your book, your services, whatever it is that you have to offer.
      </p>
      <div className="flex flex-col lg:flex-row  justify-between gap-5 mt-20">
        <div className="w-full md:w-1/2 lg:w-1/4 mx-auto  text-center space-y-5 p-4 md:p-8 border-[8px] hover:scale-110  shadow-lg shadow-pink-600">
          <h5 className="text-4xl text-pink-500">Silver Plan</h5>
          <h3 className="text-3xl">$100</h3>
          <p className="text-lg">One Time Installation</p>
          <div className="text-start space-y-3 ">
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Planning
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> PhotoGraphy
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Dresses
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck>Shoes
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Bouquets
            </p>
            <div className="flex justify-center">
              <button className="btn btn-outline btn-secondary ">
                PURCHASE NOW
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 mx-auto text-center space-y-5 p-4 md:p-8 border-[8px] hover:scale-110 lg:w-1/4 shadow-lg shadow-pink-600">
          <h5 className="text-4xl text-pink-500">Gold Plan</h5>
          <h3 className="text-3xl">$150</h3>
          <p className="text-lg">One Time Installation</p>
          <div className="text-start space-y-3">
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Venue Selection
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Preperation
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Event Catering
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck>Guest List
              Manafgement
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Videography
            </p>
            <div className="flex justify-center">
              <button className="btn btn-outline btn-secondary">
                PURCHASE NOW
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mx-auto text-center space-y-5 p-4 md:p-8 border-[8px] hover:scale-110 lg:w-1/4 shadow-lg shadow-pink-600">
          <h5 className="text-4xl text-pink-500">Diamond Plan</h5>
          <h3 className="text-3xl">$200</h3>
          <p className="text-lg">One Time Installation</p>
          <div className="text-start space-y-3">
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> MakeUp
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Musicians & Djs
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Dresses
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck>Cake Design
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck className="text-pink-500"></FaCheck> Decor
            </p>
            <div className="flex justify-center">
              <button className="btn btn-outline btn-secondary">
                PURCHASE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
