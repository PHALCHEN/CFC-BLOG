import React from "react";
import PostBlog from "./PostBlog";

const Navbar = () => {
  return (
    <div>
      {/* <div classNameName="navbar bg-fixed  bg-base-300">
        <div classNameName="navbar-start ">
          <div classNameName="dropdown">
            <div tabIndex={0} role="button" classNameName="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                classNameName="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              classNameName="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a classNameName="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div classNameName="navbar-center hidden lg:flex">
          <ul classNameName="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        <div>
          <PostBlog />
        </div>

        <div classNameName="navbar-end">
          <a classNameName="btn">Login</a>
        </div>
      </div> */}
      {/* <!-- nav bar section --> */}
      <div className="flex fixed z-10 w-full shadow-sm bg-opacity-80 bg-clip-padding blur-backdrop-filter justify-between items-center bg-gray-900">
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
          <li className="hover:font-bold cursor-pointer">About Us</li>
          <li className="hover:font-bold cursor-pointer">Contact Us</li>
        </ul>
        <button className="btn z-10 transition duration-200 cursor-pointer text-opacity-90 hover:text-gray-400 bg-red-500 rounded-full text-white">
          Login
        </button>
      </div>

      {/* <!-- hero seciton --> */}
      {/* <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
          <img
            src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
            alt="Background Image"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
              Welcome
            </h1>
            <p className="font-regular text-xl mb-8 mt-4">
              If you need some help please contact us
            </p>
            <a
              href="#contactUs"
              className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858]  transition duration-200"
            >
              Contact Us
            </a>
          </div>
          <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
            <img
              src="https://images.twinkl.co.uk/tr/image/upload/t_illustration/illustation/Daily-Citizen-Newspaper--Object-Global-Citizenship-Life-KS2.png"
              className="max-w-xs md:max-w-2xl m-auto"
            />
          </div>
        </div>
      </div>
      <br></br>
      <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
        <ul class="flex flex-wrap justify-center -mb-px">
          <li class="mr-2">
            <a
              href="/"
              class="inline-block p-4 text-purple-600 border-b-2 border-purple-600 rounded-t-lg active  "
            >
              All
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
              aria-current="page"
            >
              Sport
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
            >
              Computer Basic
            </a>
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
            >
              Technology
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
