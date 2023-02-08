import React, { useState } from "react";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const sublinks = [
    {
      name: "T-shirt",
      link: "/",
    },
    {
      name: "Casual shirts",
      link: "/",
    },
    {
      name: "fprmal-shirt",
      link: "/",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex bg-white py-4 px-7 md:px-10 justify-between">
        <div className="font-bold text-4xl cursor-pointer flex items-center font-[Poppins]">
          Designer
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`pb-12  
          absolute bg-white z-[-1]  left-0 w-full 
           pl-9 transition-all duration-500 ease-in ${
             open ? "left-0" : "left-[-100%]"
           } md:w-auto md:pl-0 
           md:static md:flex md:items-center md:z-auto  md:pb-0 `}
        >
          <li className=" text-lg uppercase my-7 md:my-0 md:ml-8  ">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Home
            </a>
          </li>

          <li className="md:ml-8 text-lg uppercase my-7 md:my-0">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              About
            </a>
          </li>
          <li className="md:ml-8 text-lg uppercase my-7 md:my-0 ">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-400 duration-500 peer"
            >
              Blog
            </a>
             
            {/* <div className="h-4 w-5 border-x-8 absolute top-12 peer border-x-transparent border-b-[16px] border-b-blue-600"></div> */}
            <div className="hidden absolute md:top-20  peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg">
              
              <a href="" className="px-5 py-3 hover:bg-gray-200 text-lg">
                About Us
              </a>
              <a href="" className="px-5 py-3 hover:bg-gray-200">
                Contact Us
              </a>
              <a href="" className="px-5 py-3 hover:bg-gray-200">
                Private Policy
              </a>
            </div>
          </li>

          <li className="md:ml-8 text-lg uppercase my-7 md:my-0">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-400 duration-500"
            >
              Contact
            </a>
          </li>
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
