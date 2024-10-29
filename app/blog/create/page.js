"use client";

import { createData } from "@/app/services/databaseService";
import { formatDate } from "@/app/utils/formatDate";
import { useState } from "react";

const CreateBlogPage = () => {
  const [blogData, setBlogData] = useState({
    cover: "",
    author: "",
    title: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const now = new Date();
    const formattedDate = formatDate(now);
    const newBlogData = {
      ...blogData,
      createdAt: formattedDate,
    };

    try {
      setIsLoading(true);
      await createData("blogs", newBlogData);
      setBlogData(() => {
        return {
          cover: "",
          author: "",
          title: "",
          description: "",
        };
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <form
        className="max-w-[500px] mx-auto flex flex-col gap-5"
        onSubmit={handleCreate}
      >
        <h1 className="text-2xl text-center">Create Blog</h1>
        <input
          type="text"
          placeholder="Cover url..."
          className="input input-bordered w-full"
          name="cover"
          value={blogData.cover}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Author's name..."
          className="input input-bordered w-full"
          name="author"
          value={blogData.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Title..."
          className="input input-bordered w-full"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          required
        />
        <textarea
          className="textarea text-base textarea-bordered w-full"
          placeholder="description..."
          name="description"
          value={blogData.description}
          onChange={handleChange}
          required
        />
        <button
          className="btn btn-primary text-white"
          type="submit"
          disabled={isLoading}
        >
          {isLoading && <span className="loading loading-spinner" />}
          Create
        </button>
      </form>
    </main>
  );
};

export default CreateBlogPage;
