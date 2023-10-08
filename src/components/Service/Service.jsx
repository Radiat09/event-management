import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, image, title, short_description } = service;
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="card border-[6px] shadow-lg shadow-pink-600 rounded-none">
        <img
          src={image}
          alt={`image of ${title}`}
          className="rounded-xl h-64"
        />
        <div className="card-body">
          <div className="h-24">
            <h2 className="card-title font-bold text-pink-700">{title}</h2>
            <p className="font-medium mt-2 ">{short_description}</p>
          </div>
          <div className="card-actions justify-center">
            <Link
              to={`/services/${id}`}
              className="btn btn-outline btn-secondary"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
