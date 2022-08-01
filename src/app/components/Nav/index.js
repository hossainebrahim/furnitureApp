import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { MdManageAccounts } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../utils/firebase";
import { selectUser } from "../redux/slices/authSlice";
import profile from "../../../images/profile.png";

const Nav = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        navigate("/Login");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  return (
    <>
      <div className="bg-[#f9f7f3] py-2 sticky top-0 z-50 shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link to="/" className="text-3xl text-black no-underline">
              Furniture
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex justify-center items-center w-[100%]">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active hover:underline"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Product" className="nav-link hover:underline">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="Collection" className="nav-link hover:underline">
                    Collection
                  </Link>
                </li>
              </ul>

              <div className="flex space-x-4 cursor-pointer justify-center">
                <span>
                  <BiShoppingBag size={30} />
                </span>
                <span>
                  {user ? (
                    <div className="flex justify-center items-center gap-2">
                      <Link to="Profile">
                        <img className="w-8" src={profile} alt="profile" />
                      </Link>
                      <FiLogOut className="w-8" onClick={logout} />
                    </div>
                  ) : (
                    <Link to="Register" className="text-gray-800">
                      <MdManageAccounts size={30} />
                    </Link>
                  )}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
