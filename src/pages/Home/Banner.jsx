const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/bg-img.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="mb-5 text-5xl text-white font-bold shadow-md shadow-pink-500"
            >
              Create & Enjoy Your Party With Perfect Planner
            </h1>
            <p
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              className="mb-5 font-bold text-pink-100 text-lg"
            >
              Our guide covers all aspects of event planning and hosting. It
              serves as a valuable resource for anyone looking to create
              memorable and enjoyable parties and events while staying within
              their budget and ensuring a smooth, stress-free planning process.
            </p>
            <button className="btn btn-outline btn-secondary border-[4px] font-black">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
