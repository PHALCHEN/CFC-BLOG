import React from "react";

const Content = () => {
  return (
    <div>
      <div class="bg-gradient-to-r ml-[350px] from-purple-500 to-blue-500 animate-gradient-x text-white rounded-lg shadow-lg p-8 max-w-xl mx-auto font-[sans-serif]">
        <h2 class="text-2xl font-bold text-center">
          We're constantly evolving and innovating
        </h2>
        <marquee
          class="mt-4 text-base font-italic"
          behavior="scroll"
          direction="left"
          scrollamount="3"
        >
          Always pushing boundaries, never settling, always creating the future.
        </marquee>
      </div>
    </div>
  );
};

export default Content;
