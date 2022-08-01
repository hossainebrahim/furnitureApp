import { useState } from "react";
import { Link } from "react-router-dom";
import ForgetPasswordImg from "../../images/forgot_password.svg";
import { auth } from "../../utils/firebase";
console.log(auth);
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const sendPasswordReset = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent!
        // ..
        alert("Password reset email sent!");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        setError(errorMessage);
        console.log(errorCode);
      });
    // try {
    //   auth.sendPasswordReset(email);
    //   alert("Password reset link sent!");
    // } catch (err) {
    //   alert(err.message);
    // }
  };
  return (
    <>
      <div className="container py-6">
        <div className="bg-slate-100 w-[90%] mx-auto p-6 rounded-md">
          <div className="row">
            <div className="col-md-6">
              <div className="flex">
                <div className="border-r-4 border-[#E6B054]">
                  <img
                    className="w-[100%] mb-4"
                    src={ForgetPasswordImg}
                    alt="SignImg"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="flex flex-col justify-center items-center mt-5">
                <form onSubmit={sendPasswordReset}>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3 p-2 outline-none rounded-sm w-full mx-auto"
                  />

                  <input
                    type="submit"
                    value="send a verification code"
                    className="bg-slate-800 p-2 text-white w-1/2 mx-auto rounded-md capitalize"
                  />
                </form>
                <p>{error}</p>
                <div className="py-4">
                  <p>Or</p>
                  <Link to={"/login"}>
                    <button className="border-solid border-2 border-[#EFCB69] text-gray-700 font-semibold px-4 py-1">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
