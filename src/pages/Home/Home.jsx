import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import OurPricing from "./OurPricing";
import Services from "./Services";
import WhyUs from "./WhyUs";
import OurTeam from "./OurTeam";

const Home = () => {
  const services = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Services services={services}></Services>
      <OurPricing></OurPricing>
      <OurTeam></OurTeam>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
