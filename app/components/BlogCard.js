"use client";
import React, { useState } from "react";
import HeartIcon from "./icons/HeartIcon";
import HeartFill from "./icons/HeartFill";
import Link from "next/link";

const BlogCard = ({
  cover,
  title,
  author,
  createdAt,
  description,
  category,
  id,
}) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <div>
      <section
        id="Projects"
        className="w-fit mx-auto md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <div class=" bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <div className="card cursor-pointer  hover:border-blue-600 card-compact bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src={cover}
                alt={title}
                className=" object-cover shadow-slate-600 "
              />
            </figure>
            <p className="font-semibold m-3">
              {author}.{createdAt}.{category}
            </p>

            <div className="card-body ">
              <h2 className="card-title w-[300px] h-[20px] ">{title}</h2>
              <div className="mt-[-50px]">
                {" "}
                <button
                  onClick={() => setIsFav(!isFav)}
                  className="btn btn-circle float-right"
                >
                  {isFav ? (
                    <HeartFill className="text-[#f63333] " />
                  ) : (
                    <HeartIcon className="text-[#f63333] " />
                  )}
                </button>
              </div>
              <p className="line-clamp-3">{description}</p>

              <div className="card-actions justify-end">
                <Link href={`/blog/${id}`}>
                  <button className=" hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 border border-red-600 bg-blue-600 rounded shadow">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogCard;
