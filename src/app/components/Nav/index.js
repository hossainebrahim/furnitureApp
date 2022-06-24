import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";

function Nav() {
  return (
    <>
      <div className="bg-[#f9f7f3]">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="text-3xl no-underline text-black" href="/">
              Furniture
            </a>
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
                  <a
                    className="nav-link active hover:underline"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hover:underline" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link hover:underline" href="#">
                    Collection
                  </a>
                </li>
              </ul>

              <div className="flex space-x-4 cursor-pointer justify-center">
                <span>
                  <BiShoppingBag size={30} />
                </span>
                <span>
                  <MdManageAccounts size={30} />
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
