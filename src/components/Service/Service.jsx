import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, image, title, short_description } = service;
  return (
    <div>
      <div className="card shadow-xl">
        <img
          src={image}
          alt={`image of ${title}`}
          className="rounded-xl h-64"
        />
        <div className="card-body">
          <div className="h-24">
            <h2 className="card-title font-bold">{title}</h2>
            <p className="font-medium mt-2">{short_description}</p>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/services/${id}`} className="btn btn-primary">
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
