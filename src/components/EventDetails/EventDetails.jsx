import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  const [event, setEvent] = useState({});
  const { image, title, features, details, pricing } = event;
  const events = useLoaderData();
  const { id } = useParams();
  console.log(events, id);

  useEffect(() => {
    const currEvent = events.find((event) => event?.id == id);
    setEvent(currEvent);
  }, [events, id]);
  return (
    <>
      <div className="max-w-7xl mx-auto p-5">
        <img className="w-full lg:h-[700px] rounded-lg" src={image} alt="" />
        <div className="space-y-5 mt-4">
          <h3 className="text-4xl font-bold">: {title}</h3>
          <h5 className="text-xl font-semibold">Pricing: {pricing}</h5>
          <div className="flex flex-col gap-2">
            <h4 className="text-xl font-semibold">Features:</h4>
            {features?.map((feature, idx) => (
              <p key={idx}>
                {idx + 1}. {feature}
              </p>
            ))}
          </div>
          <p className="font-medium">{details}</p>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
