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
    await deleteDoc(doc(db, "blog", blogId));
    router.back();
  };
  return (
    <div className="flex flex-col gap-5 max-w-[500px] mx-auto">
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
            <h1 className="text-2xl font-semibold">Titlte: {blog.title}</h1>
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

          <img src={blog.cover} className=" " />
          <p>Author: {blog.author}</p>
          <p>Created At: {blog.createdAt}</p>
          <p>Description: {blog.description}</p>
        </>
      )}
    </div>
  );
};

export default BlogDetailPage;
