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
        className="w-fit  mx-auto md:grid-cols-10  justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        <div class=" bg-white w-[250px] ml-[100px] mx-auto shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
          <div className="card cursor-pointer h-[500px]  hover:border-blue-600 card-compact bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src={cover}
                alt={title}
                className=" object-cover h-[200px] shadow-slate-600 "
              />
            </figure>
            <p className="font-semibold m-3">
              {author}.{createdAt}.{category}
            </p>

            <div className="card-body ">
              <h2 className="card-title line-clamp-2 h-[50px]">{title}</h2>
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
              <p className="line-clamp-6">{description}</p>

              <div className="card-actions justify-end">
                <Link href={`/blog/${id}`}>
                  <button
                    type="button"
                    class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-gradient-to-tr hover:bg-gradient-to-tl from-orange-700 to-orange-300"
                  >
                    Read more..
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
