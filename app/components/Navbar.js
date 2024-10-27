import React from "react";
import PostBlog from "./PostBlog";

const Navbar = () => {
  return (
    <div>
      <div className="flex fixed z-50 w-full shadow-sm bg-opacity-80 bg-clip-padding blur-backdrop-filter justify-between items-center bg-gray-900">
        <a href="/">
          <img
            className="w-[180px] "
            src="https://seeklogo.com/images/B/bluebird-group-logo-6E64B89C88-seeklogo.com.png"
          />
        </a>
        <ul className="flex gap-4 text-white md:gap-14">
          <a className="hover:font-bold cursor-pointer" href="/">
            Home
          </a>
          <a className="hover:font-bold cursor-pointer" href="/about">
            About Us
          </a>
          <a className="hover:font-bold cursor-pointer " href="contact">
            Contact Us
          </a>
        </ul>
        <button className="btn z-10 transition duration-200 cursor-pointer text-opacity-90 hover:text-gray-400 bg-red-500 rounded-full text-white">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
