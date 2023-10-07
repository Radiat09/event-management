import { FaCheckCircle, FaGlassCheers, FaWineBottle } from "react-icons/fa";
import { MdTableBar } from "react-icons/md";

const WhyUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 max-w-7xl xl:mx-auto mx-5 my-40">
      <div className="space-y-5 flex-1">
        <h2 className="text-5xl font-bold text-pink-300">Why Us</h2>
        <p>
          Construction is an ancient{" "}
          <span className="text-bold">humanity activity</span>. It began with
          the pureley functional need for a controlls environment to moderate
          the effects of climate. Constructed shelters were one means by which
          human beings were ableto adap
        </p>
        <div className="space-y-5">
          <p className="flex items-center gap-3">
            <FaCheckCircle className="text-3xl text-pink-500"></FaCheckCircle>{" "}
            Enjoying & Eating
          </p>
          <p className="flex items-center gap-3">
            <FaCheckCircle className="text-3xl text-pink-500"></FaCheckCircle>
            Live Togather
          </p>
          <p className="flex items-center gap-3">
            <FaCheckCircle className="text-3xl text-pink-500"></FaCheckCircle>
            The Beautiful Moments{" "}
          </p>
        </div>
      </div>
      <div className="space-y-8 flex-1">
        <div className="flex items-center gap-8">
          <MdTableBar className="text-5xl"></MdTableBar>
          <div>
            <h4 className="text-3xl font-semibold text-pink-500">520+</h4>
            <p className="font-semibold">Expert & Professional Staff</p>
          </div>
        </div>
        <div className="divider w-4/5 mx-auto"></div>
        <div className="flex items-center gap-8">
          <FaGlassCheers className="text-4xl"></FaGlassCheers>
          <div>
            <h4 className="text-3xl font-semibold text-pink-500">25000</h4>
            <p className="font-semibold">Completed Wedding</p>
          </div>
        </div>
        <div className="divider w-4/5 mx-auto"></div>
        <div className="flex items-center gap-8">
          <FaWineBottle className="text-4xl"></FaWineBottle>
          <div>
            <h4 className="text-3xl font-semibold text-pink-500">520+</h4>
            <p className="font-semibold">Achived Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
