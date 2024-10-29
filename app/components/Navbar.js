import React from "react";
import PostBlog from "./PostBlog";

const Navbar = () => {
  return (
    <div>
      <div className="  flex fixed ml-5 z-50 w-[1400px] shadow-lg bg-opacity-80 bg-clip-padding blur-backdrop-filter justify-between items-center bg-gray-300 top-7 rounded-[30px]">
        <a href="/">
          <img
            className="w-[180px] pl-5"
            src="https://seeklogo.com/images/B/bluebird-group-logo-6E64B89C88-seeklogo.com.png"
          />
        </a>
        <ul className="flex gap-2 text-white md:gap-14  h-[70px] text-xl p-5 ">
          <a className="hover:bg-stone-800 cursor-pointer w-32 h-10 text-center pt-1 rounded-full " href="/">
            Home
          </a>
          <a className="hover:bg-stone-800 cursor-pointer  w-32 h-10 text-center pt-1 rounded-full" href="/about">
            About Us
          </a>
          <a className="hover:bg-stone-800 cursor-pointer  w-32 h-10 text-center pt-1 rounded-full " href="contact">
            Contact Us
          </a>
        </ul>
        <button className="btn z-10 transition duration-200 cursor-pointer text-opacity-90 hover:text-gray-400 bg-black rounded-full text-white pr-5 text-center mr-5">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
