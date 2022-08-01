import React, { useState } from "react";
import SignImg from "../../images/sign_in.svg";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../utils/firebase";
import firebase from "firebase";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const user = firebase.auth().currentUser;
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // do validation
    if (password !== confirmPassword) {
      return setError("Passwords don't match!");
    } else if (password.length < 6) {
      return setError("Password should be at least 6 characters");
    } else if (error === "auth/email-already-in-use") {
      return setError("This email is already use");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        setError("");
        navigate("/");
        console.log(user);
      })
      .catch((err) => {
        if (err === "auth/email-already-in-use") {
          setError("This email is already use");
        }
        console.log(err);
        setError(err.message);
      });
  }

  const countingWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  const togglePassword2 = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown2(!passwordShown2);
  };

  return (
    <>
      <div className="container py-6">
        <div className="bg-slate-100 w-[90%] mx-auto p-6 rounded-md">
          <h1 className="text-3xl mb-4">Register</h1>
          <div className="row">
            <div className="col-md-6">
              <div className="flex">
                <div className="border-r-4 border-[#E6B054]">
                  <img className="w-[100%] mb-4" src={SignImg} alt="SignImg" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="flex flex-col">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mb-3 p-2 outline-none rounded-sm w-full mx-auto"
                  />
                  <div className="flex">
                    <input
                      type={passwordShown ? "text" : "password"}
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="mb-3 p-2 outline-none rounded-sm w-full mx-auto"
                    />

                    <button
                      onClick={togglePassword}
                      className="bg-white h-10 rounded-r-md pr-1"
                    >
                      <AiFillEye size={20} />
                    </button>
                  </div>
                  <div className="flex">
                    <input
                      type={passwordShown2 ? "text" : "password"}
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      className="mb-3 p-2 outline-none rounded-sm w-full mx-auto"
                    />
                    <button
                      onClick={togglePassword2}
                      className="bg-white h-10 rounded-r-md pr-1"
                    >
                      <AiFillEye size={20} />
                    </button>
                  </div>
                  <p className="text-red-500 font-semibold">{error}</p>
                  <input
                    type="submit"
                    value="Register"
                    className="bg-slate-800 p-2 text-white w-1/2 mx-auto rounded-md uppercase"
                  />
                </form>
              </div>

              <div>
                <p className="mt-2 text-center text-lg">
                  Already have a account ?<Link to={"/Login"}>Login</Link>
                </p>
              </div>

              <div>
                <button
                  className="border-solid border-2 border-[#EFCB69] shadow-sm p-2 text-gray-700 font-semibold flex items-center justify-center gap-3 w-full mx-auto rounded-md capitalize"
                  type="submit"
                  onClick={countingWithGoogle}
                >
                  <FcGoogle size={24} /> Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
