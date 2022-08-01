import React, { useState } from "react";
import LoginImg from "../../images/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { AiFillEye } from "react-icons/ai";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        setError("");
        navigate("/");
      })
      .catch((err) => {
        if (err === "auth/email-already-in-use") {
          setError("This email is already use");
        }
        console.log(err);
        setError(err.message);
      });
  }
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <div className="container py-6">
        <div className="bg-slate-100 w-[90%] mx-auto p-6 rounded-md">
          <h1 className="text-3xl mb-4">Login</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="flex">
                <div className="border-r-4 border-[#E6B054]">
                  <img className="w-[100%] mb-4" src={LoginImg} alt="SignImg" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="flex flex-col">
                <form onSubmit={handleLogin}>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-3 p-2 outline-none rounded-sm w-full mx-auto"
                  />
                  <div className="flex">
                    <input
                      type={passwordShown ? "text" : "password"}
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mb-3 p-2 outline-none rounded-sm w-full mx-auto"
                    />
                    <button
                      onClick={togglePassword}
                      className="bg-white h-10 rounded-r-md pr-1"
                    >
                      <AiFillEye size={20} />
                    </button>
                  </div>
                  <p className="text-red-500 font-semibold">{error}</p>
                  <input
                    type="submit"
                    value="Login"
                    className="bg-slate-800 p-2 text-white w-1/2 mx-auto rounded-md uppercase"
                  />
                </form>
              </div>
              <div className="mt-2 text-center text-lg">
                <Link to={"/ForgetPassword"}>Forget Password ?</Link>
              </div>

              <Link to={"/Register"} className="no-underline">
                <button
                  className="border-solid border-2 border-[#EFCB69] shadow-sm p-2 text-gray-700 font-semibold flex items-center justify-center gap-3 w-full mx-auto rounded-md capitalize mt-4"
                  type="submit"
                >
                  Create a New Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
