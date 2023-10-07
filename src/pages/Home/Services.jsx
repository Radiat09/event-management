import PropTypes from "prop-types";
import Service from "../../components/Service/Service";
import { useState } from "react";

const Services = ({ services }) => {
  const [seeAll, setSeeAll] = useState(false);
  console.log(services);
  return (
    <div className="my-40 max-w-7xl xl:mx-auto mx-4">
      <h2 className="text-5xl font-semibold text-center mb-3 text-pink-200">
        Our Services
      </h2>
      <p className="text-xl text-center">Best services around the world</p>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {seeAll
            ? services.map((service) => (
                <Service key={service?.id} service={service}></Service>
              ))
            : services
                .slice(0, 6)
                .map((service) => (
                  <Service key={service?.id} service={service}></Service>
                ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setSeeAll(!seeAll)}
          className="btn btn-outline glass text-pink-500 text-xl"
        >
          {seeAll ? "Sell Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};
export default Services;
