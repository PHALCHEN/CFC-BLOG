"use client";

import { productCategories } from "@/app/constants/product";
import { createData } from "@/app/services/databaseService";
import { formatDate } from "@/app/utils/formatDate";
import { useState } from "react";

const CreateBlogPage = () => {
  const [blogInput, setBlogData] = useState({
    category: "",
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
      ...blogInput,
      createdAt: formattedDate,
    };

    try {
      setIsLoading(true);
      await createData("blogs", newBlogData);
      setBlogData(() => {
        return {
          category: "",
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
          value={blogInput.cover}
          onChange={handleChange}
          required
        />
        <select
          value={blogInput.category}
          onChange={handleChange}
          className="select select-bordered w-full "
          required
          name="category"
        >
          {productCategories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Author's name..."
          className="input input-bordered w-full"
          name="author"
          value={blogInput.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Title..."
          className="input input-bordered w-full"
          name="title"
          value={blogInput.title}
          onChange={handleChange}
          required
        />
        <textarea
          className="textarea text-base textarea-bordered w-full"
          placeholder="description..."
          name="description"
          value={blogInput.description}
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
