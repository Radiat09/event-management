import Event from "../../components/Event/Event";
import { useLoaderData } from "react-router-dom";

const Events = () => {
  const events = useLoaderData();

  return (
    <div className="my-40 max-w-7xl xl:mx-auto mx-5">
      <h2 className="text-5xl font-semibold text-center mb-3">
        Events We Handle
      </h2>
      <p className="text-xl text-center">Best service With best price</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 shadow-lg shadow-pink-500">
        {events.map((event) => (
          <Event key={event?.id} event={event}></Event>
        ))}
      </div>
    </div>
  );
};

export default Events;
