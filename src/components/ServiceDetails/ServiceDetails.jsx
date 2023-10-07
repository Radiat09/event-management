import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const { image, title, short_description, long_description } = service;
  const services = useLoaderData();
  const { id } = useParams();
  console.log(services, id);

  useEffect(() => {
    const CurrService = services.find((service) => service?.id == id);
    setService(CurrService);
  }, [services, id]);
  return (
    <div className="max-w-7xl mx-auto p-5">
      <img className="w-full lg:h-[700px] rounded-lg" src={image} alt="" />
      <div className="space-y-5 mt-4">
        <h3 className="text-4xl font-bold">: {title}</h3>
        <h5 className="text-xl font-semibold">#{short_description}</h5>
        <p className="font-medium">{long_description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
