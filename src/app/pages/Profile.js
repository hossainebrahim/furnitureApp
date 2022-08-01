import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../components/redux/slices/authSlice";

function Profile() {
  const user = useSelector(selectUser);
  console.log(user);

  return (
    <>
      <div className="container">
        <div className="w-3/4 md:w-1/2 mx-auto ">
          <div className="row">
            <div className="py-10 bg-slate-300 rounded-md">
              <div className=" flex justify-center">
                <img
                  className="w-14 rounded-full"
                  src={user.photoURL}
                  alt="profile"
                />
              </div>
              <div className="mt-3">
                <h4 className="text-slate-800 text-lg">
                  Name:
                  <span className="ml-3 text-red-400 text-xl">
                    {user.displayName}
                  </span>
                </h4>
                <h4 className="text-slate-800 text-lg">
                  Email:
                  <span className="ml-3 text-red-400 text-xl">
                    {user.email}
                  </span>
                </h4>
                <h4 className="text-slate-800 text-lg">
                  email is verified :
                  <span className="ml-3 text-red-400 text-xl">
                    {user.emailVerified}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
