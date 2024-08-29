"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import { db } from "./services/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import EmptyData from "./components/EmptyData";
import BlogCardsSkeleton from "./components/BlogCardsSkeleton";
import Link from "next/link";
const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "blogs"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];
        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });

        // change here...
        setBlogs(() => itemsArr);
        setIsLoading(() => false);
      });

      return () => unsubscribe();
    };
    fetchData();
  }, []);

  const isEmptyData = blogs.length === 0;
  return (
    <main>
      {isLoading && <BlogCardsSkeleton />}
      {!isLoading && isEmptyData && <EmptyData />}
      {!isLoading && !isEmptyData && (
        <div className="flex flex-wrap gap-10 max-auto p-2">
          {blogs.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                cover={blog.cover}
                title={blog.title}
                author={blog.author}
                creatAt={blog.creatAt}
                description={blog.description}
                id={blog.id}
              />
            );
          })}
        </div>
      )}
    </main>
  );
};

export default HomePage;
