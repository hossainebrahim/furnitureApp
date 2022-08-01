import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-800 pt-14 pb-8 text-white mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>Furniture</h4>
              <p className="text-slate-300 mt-4">
                625 E Franklin Ave,Minneapolis, MN 55404,USA
              </p>
              <p className="text-slate-300 mt-5">
                © 2022 Furniture.All rights reserved.
              </p>
            </div>
            <div className="col-md-3">
              <h4>About us</h4>
              <div className="flex flex-col space-y-3 ">
                <a
                  href=""
                  className="text-slate-300 no-underline hover:underline hover:text-white"
                >
                  Our story
                </a>
                <a
                  href=""
                  className="text-slate-300 no-underline hover:underline hover:text-white"
                >
                  Designer
                </a>
                <a
                  href=""
                  className="text-slate-300 no-underline hover:underline hover:text-white"
                >
                  Craftsmanship
                </a>
                <a
                  href=""
                  className="text-slate-300 no-underline hover:underline hover:text-white"
                >
                  Sustainability
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Support</h4>
              <div className="flex flex-col space-y-3">
                <a
                  href=""
                  className="text-slate-300 no-underline hover:underline hover:text-white"
                >
                  {" "}
                  FAQs
                </a>
                <a
                  href=""
                  className="text-slate-300 no-underline hover:underline hover:text-white"
                >
                  shipping & Returns
                </a>
                <a
                  href=""
                  className="text-slate-300 no-underline hover:underline hover:text-white"
                >
                  Care guide
                </a>
                <a
                  href=""
                  className="text-slate-300 no-underline hover:underline hover:text-white"
                >
                  Warranty
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Contact us</h4>
              <p className="flex items-center text-slate-300">
                <ImPhone />
                <span className="ml-2">+276473276</span>
              </p>
              <p className="flex items-center text-slate-300">
                <MdEmail />
                <span className="ml-2">hello@gmail.com</span>
              </p>
              <div className="flex space-x-4 mt-3">
                <span className="cursor-pointer bg-slate-600 p-2 hover:bg-[#3b5998]">
                  <FaFacebookF size={25} />
                </span>
                <span className="cursor-pointer bg-slate-600 p-2 hover:bg-[#405DE6]">
                  <AiFillInstagram size={25} />
                </span>
                <span className="cursor-pointer bg-slate-600 p-2 hover:bg-[#00ACEE]">
                  <BsTwitter size={25} />
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4 cursor-pointer">
            <p>Privacy Policy | term Of Use | California Code</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
