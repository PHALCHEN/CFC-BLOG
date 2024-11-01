// import React from "react";
// import PostBlog from "./PostBlog";

// const Navbar = () => {
//   return (
//     <div>
// <div className="  flex fixed ml-5 z-50 w-[1400px] shadow-lg bg-opacity-80 bg-clip-padding blur-backdrop-filter justify-between items-center bg-gray-300 top-7 rounded-[30px]">
//   <a href="/">
//     <img
//       className="w-[180px] pl-5"
//       src="https://seeklogo.com/images/B/bluebird-group-logo-6E64B89C88-seeklogo.com.png"
//     />
//   </a>
//   <ul className="flex gap-2 text-white md:gap-14  h-[70px] text-xl p-5 ">
//     <a className="hover:bg-stone-800 cursor-pointer w-32 h-10 text-center pt-1 rounded-full " href="/">
//       Home
//     </a>
//     <a className="hover:bg-stone-800 cursor-pointer  w-32 h-10 text-center pt-1 rounded-full" href="/about">
//       About Us
//     </a>
//     <a className="hover:bg-stone-800 cursor-pointer  w-32 h-10 text-center pt-1 rounded-full " href="contact">
//       Contact Us
//     </a>
//   </ul>
//   <button className="btn z-10 transition duration-200 cursor-pointer text-opacity-90 hover:text-gray-400 bg-black rounded-full text-white pr-5 text-center mr-5">
//     Login
//   </button>
// </div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <div>
      <header class="flex border-b  bg-white font-sans min-h-[70px] tracking-wide relative z-50">
        <div class="flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full fixed z-50 bg-gray-800">
          <a href="/">
            <img
              src="7NEWS_Logo_RED_RGB-removebg-preview.png"
              alt="logo"
              class="w-36 "
            />
          </a>

          <div
            id="collapseMenu"
            class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul class="lg:flex lg:gap-x-10 max-lg:space-y-3 text-white max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li class="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://images.vexels.com/content/142789/preview/multicolor-swirls-circle-logo-41322f.png"
                    alt="logo"
                    class="w-36"
                  />
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3">
                <a
                  href="/"
                  class="hover:text-blue-600 text-[15px] font-bold  block"
                >
                  Home
                </a>
              </li>

              <li class="max-lg:border-b max-lg:py-3">
                <a
                  href="/about"
                  class="hover:text-[#007bff] text-white text-[15px] font-bold block"
                >
                  About
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3">
                <a
                  href="/contact"
                  class="hover:text-[#007bff] text-white text-[15px] font-bold block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="flex items-center space-x-8 max-lg:ml-auto">
            <span class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                class="cursor-pointer fill-[#fffafa] hover:fill-[#007bff] inline"
                viewBox="0 0 64 64"
              >
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"
                />
              </svg>
              <span class="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
                0
              </span>
            </span>

            <a href="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                class="cursor-pointer fill-[#fff7f7] hover:fill-[#077bff]"
                viewBox="0 0 512 512"
              >
                <path
                  d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                  data-original="#000000"
                />
              </svg>
            </a>
            <button id="toggleOpen" class="lg:hidden">
              <svg
                class="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
