import TimAbell from "../../../src/assets/TimAbell.jpg";
import ThomasBradson from "../../../src/assets/ThomasBradson.jpg";
import MariaHenry from "../../../src/assets/MariaHenry.jpg";
const OurTeam = () => {
  return (
    <div className="my-20 xl:max-w-7xl md:mx-auto mx-3">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="flex-1 flex gap-5 items-center justify-end">
          <div className="p-8 flex flex-col justify-center items-center gap-3 bg-white shadow-xl shadow-pink-600">
            <img src={TimAbell} alt="" />
            <h3 className="text-2xl font-medium text-pink-500">Tim Abell</h3>
            <h5 className="font-semibold text-pink-300">Founder</h5>
          </div>
          <div className="space-y-5">
            <div className="p-8 flex flex-col justify-center items-center gap-3 bg-white shadow-xl shadow-pink-600">
              <img src={ThomasBradson} alt="" />
              <h3 className="text-2xl font-medium text-pink-500">
                Thomas Bradson
              </h3>
              <h5 className="font-semibol text-pink-300">Planner</h5>
            </div>
            <div className="p-8 flex flex-col justify-center items-center gap-3 bg-white shadow-xl shadow-pink-600">
              <img src={MariaHenry} alt="" />
              <h3 className="text-2xl font-medium text-pink-500">
                Maria Henry
              </h3>
              <h5 className="font-semibol text-pink-300">Plan Handler</h5>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-5 mx-3">
          <h4 className="text-xl text-pink-700">Our One Of Experts</h4>
          <h2 className="text-5xl font-bold text-pink-300">
            Welcome To The Best Day Of Life
          </h2>
          <p>
            We are often used to express enthusiasm and positivity about a
            particular day or moment in someones life. We signify a sense of
            excitement and anticipation for a wonderful experience or a
            significant event that is expected to bring joy and happiness.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
