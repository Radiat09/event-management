import PropTypes from "prop-types";
import Service from "../../components/Service/Service";

const Services = ({ services }) => {
  console.log(services);
  return (
    <div className="my-40 max-w-7xl xl:mx-auto mx-4">
      <h2 className="text-5xl font-semibold text-center mb-3">Our Services</h2>
      <p className="text-xl text-center">Best service With best price</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {services.map((service) => (
          <Service key={service?.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

Services.propTypes = {
  services: PropTypes.array,
};
export default Services;
