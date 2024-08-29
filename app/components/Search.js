"use client";
import React, { useState } from "react";
import SearchIcon from "./icons/SearchIcon";

const Search = ({ selectedTag }) => {
  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Sport",
    },
    {
      id: 3,
      name: "Computer Basic",
    },
    {
      id: 4,
      name: "Technology",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className=" flex  justify-center mt-7 flex-col px-[70] md:px-[150px]">
      <img
        className="rounded-2xl   "
        src="https://media.istockphoto.com/id/895000980/photo/a-man-holding-a-megaphone-whats-new.jpg?s=612x612&w=0&k=20&c=s7mUiD-dBqdIAh1SYEeXvtyBSxFxLl9tdCnrpY72SWw="
      />

      <div className="bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center">
        <SearchIcon className="text-[20px] text-gray-400" />
        <input type="text" placeholder="search" className="outline-none ml-2" />
      </div>
      <div className="flex gap-10 justify-center mt-5">
        {tags.map((item, index) => (
          <ul
            onClick={() => {
              setActiveIndex(index);
              selectedTag(item.name);
            }}
            className={`${index == activeIndex ? "bg-red-500 text-white" : null}
            p-1 pb-2 rounded-sm md:rounded-full cursor-pointer md:px-4 hover:scale-110 hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out
            `}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Search;
