import React from "react";

const Button = () => {
  return (
    <div>
      <div class="fixed bottom-0 right-0 p-4">
        <a href="/blog/create/">
          <button
            class="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
            onclick="backToTop()"
          >
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Button;
