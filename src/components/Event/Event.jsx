import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  const { id, image, pricing, title } = event;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="pt-10">
        <img src={image} alt="Shoes" className="rounded-xl w-72 h-52" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{title}!</h2>
        <p className="font-medium">Pricing: {pricing}</p>
        <div className="card-actions mt-3">
          <Link to={`/events/${id}`} className="btn btn-primary">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object,
};
export default Event;
