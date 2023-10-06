import { FaCheck } from "react-icons/fa";

const OurPricing = () => {
  return (
    <div className="my-40 max-w-7xl mx-auto ">
      <h2 className="text-4xl font-black text-center">
        Our <span>Pricing</span>
      </h2>
      <p className="text-center mt-4">
        Do not sell yourself short. No one will value you. Set a fair price for
        you, your book, your services, whatever it is that you have to offer.
      </p>
      <div className="flex justify-between gap-5 mt-20">
        <div className="text-center space-y-5 p-8 border hover:scale-110 w-1/4">
          <h5 className="text-4xl">Silver Plan</h5>
          <h3 className="text-3xl">$100</h3>
          <p className="text-lg">One Time Installation</p>
          <div className="text-start space-y-3 ">
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Planning
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> PhotoGraphy
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Dresses
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck>Shoes
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Bouquets
            </p>
            <div className="flex justify-center">
              <button className="btn self-center">PURCHASE NOW</button>
            </div>
          </div>
        </div>

        <div className="text-center space-y-5 p-8 border hover:scale-110 w-1/4">
          <h5 className="text-4xl">Gold Plan</h5>
          <h3 className="text-3xl">$150</h3>
          <p className="text-lg">One Time Installation</p>
          <div className="text-start space-y-3">
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Venue Selection
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Preperation
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Event Catering
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck>Guest List Manafgement
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Videography
            </p>
            <div className="flex justify-center">
              <button className="btn self-center">PURCHASE NOW</button>
            </div>
          </div>
        </div>
        <div className="text-center space-y-5 p-8 border hover:scale-110 w-1/4">
          <h5 className="text-4xl">Diamond Plan</h5>
          <h3 className="text-3xl">$200</h3>
          <p className="text-lg">One Time Installation</p>
          <div className="text-start space-y-3">
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> MakeUp
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Musicians & Djs
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Dresses
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck>Cake Design
            </p>
            <p className="flex items-center gap-4">
              {" "}
              <FaCheck></FaCheck> Decor
            </p>
            <div className="flex justify-center">
              <button className="btn self-center">PURCHASE NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPricing;
