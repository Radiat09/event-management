import error from "../assets/error.png";
const Error = () => {
  return (
    <div className="mt-32 shadow-2xl shadow-pink-600">
      <h1 className="text-5xl font-black text-center ">Page not Found</h1>
      <div className="flex justify-center mt-10">
        <img src={error} alt="" />
      </div>
    </div>
  );
};

export default Error;
