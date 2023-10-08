import { useContext } from "react";
import { ContextData } from "../../ContextProvider/ContextProvider";

const Profile = () => {
  const { user } = useContext(ContextData);
  const { displayName, email, emailVerified, photoURL, uid } = user;
  // console.log(displayName);
  return (
    <div className="min-h-[60vh] mt-20 max-w-7xl lg:mx-auto mx-5">
      <div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img
            className="rounded-full w-36"
            src={photoURL}
            alt={`image of ${displayName}`}
          />
          <button className="btn btn-secondary">Edit Profile</button>
        </div>
        <div className="mx-auto w-fit mt-10">
          <h4 className="text-start">
            <span className="text-lg font-bold">Account Id :</span>{" "}
            <span className="text-pink-500">{uid}</span>
          </h4>
          <h4 className="text-start">
            <span className="text-lg font-bold">Username : </span>
            <span className="text-pink-500"> {displayName}</span>
          </h4>
          <h4 className="text-start">
            <span className="text-lg font-bold">Email : </span>
            <span className="text-pink-500"> {email}</span>
          </h4>
          <h4 className="text-start">
            <span className="text-lg font-bold">Email Verified : </span>
            <span className="text-pink-500">
              {" "}
              {emailVerified ? "True" : "False"}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Profile;
