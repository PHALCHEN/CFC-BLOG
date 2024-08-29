"use client";

import Arrow from "@/app/components/icons/Arrow";
import More from "@/app/components/icons/More";
import { db } from "@/app/services/firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetailPage = ({ params }) => {
  const { blogId } = params;
  const router = useRouter();
  const [blog, setBlog] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getDataById = async () => {
      const docRef = doc(db, "blogs", blogId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setBlog(docSnap.data());
      } else {
        setIsNotFound(true);
      }
      setIsLoading(false);
    };

    getDataById();
  }, [blogId]);

  if (isNotFound) notFound();

  const handleDelete = async () => {
    await deleteDoc(doc(db, "blogs", blogId));
    router.back();
  };
  return (
    <div className="flex flex-col gap-5 md:w-[1000px] mx-auto">
      {isLoading && (
        <>
          <div className="skeleton h-4 w-32 rounded-none"></div>
          <div className="skeleton h-[300px] w-full rounded-none"></div>
          <div className="skeleton h-4 w-28 rounded-none"></div>
          <div className="skeleton h-4 w-32 rounded-none"></div>
          <div className="skeleton h-4 w-full rounded-none"></div>
          <div className="skeleton h-4 w-full rounded-none"></div>
          <div className="skeleton h-4 w-full rounded-none"></div>
        </>
      )}

      {!isLoading && (
        <>
          <div className="flex items-center gap-5">
            <button
              className="btn btn-circle btn-ghost"
              onClick={() => router.back()}
            >
              <Arrow className="w-6 h-6" />
            </button>
            <h1
              className="text-2xl cursor-pointer font-semibold"
              onClick={() => router.back()}
            >
              Back
            </h1>
            <div className="flext flex-1" />
            <div className="dropdown dropdown-button dropdown-ens">
              <button className="btn btn-circle btn-ghost btn-sm">
                <More className="w-6 h-6" />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <button className="text-red-600" onClick={handleDelete}>
                    Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-gray-100  dark:bg-gray-800 py-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                  <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      class="w-full h-full object-cover"
                      src={blog.cover}
                      alt="Product Image"
                    />
                  </div>
                  <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                      <button class="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                        Add to favorite
                      </button>
                    </div>
                    <div class="w-1/2 px-2">
                      <button class="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                        Add to Wishlist
                      </button>
                    </div>
                  </div>
                </div>
                <div class="md:flex-1 px-4">
                  <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {blog.title}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {blog.description}
                  </p>
                  <div class="flex mb-4">
                    <div class="mr-4">
                      <span class="font-bold text-gray-700 dark:text-gray-300">
                        Author: {blog.author}
                      </span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <span class="font-bold text-gray-700 dark:text-gray-300">
                      Created At: {blog.createdAt}
                    </span>
                  </div>

                  <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">
                      Description:
                    </span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BlogDetailPage;
