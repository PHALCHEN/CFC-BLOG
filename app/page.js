"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./components/BlogCard";
import { db } from "./services/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import EmptyData from "./components/EmptyData";
import BlogCardsSkeleton from "./components/BlogCardsSkeleton";
import Search from "./components/Search";
import Button from "./components/Button";
import ProductFlterTab from "./components/ProductFlterTab";
import LastedBlog from "./components/LastedBlog";
import Content from "./components/Content";
import NightModeToggle from "./components/NightModeToggle";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [orgBlogs, setOrgBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    const fetchData = async () => {
      const q =
        filter == "All"
          ? query(collection(db, "blogs"))
          : query(collection(db, "blogs"), where("category", "==", filter));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let itemsArr = [];
        querySnapshot.forEach((doc) => {
          itemsArr.push({ ...doc.data(), id: doc.id });
        });

        // change here...
        setBlogs(() => itemsArr);
        setOrgBlogs(() => itemsArr);
        setIsLoading(() => false);
      });

      return () => unsubscribe();
    };
    fetchData();
  }, [filter]);
  const handleFilter = (filter) => {
    setIsLoading(true);
    setFilter(filter);
  };

  const isEmptyData = blogs.length === 0;

  const filterPost = (tag) => {
    if (tag == "all") {
      setBlogs(orgBlogs);
      return;
    }
    const itemsArr = orgBlogs.filter((item) => item.tag == tag);
    setBlogs(() => itemsArr);
  };
  return (
    <main className="flex flex-col ">
      <NightModeToggle />
      <Search selectedTag={(tag) => filterPost(tag)} />
      <ProductFlterTab active={filter} onFilter={handleFilter} />
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
                createdAt={blog.createdAt}
                category={blog.category}
                description={blog.description}
                id={blog.id}
              />
            );
          })}
          <Button />
          <Content />

          <LastedBlog />
        </div>
      )}
    </main>
  );
};

export default HomePage;
