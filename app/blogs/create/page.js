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
    console.log(blogData);
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
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
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
          </div> */}
          <form class="md:col-span-8 p-10" onSubmit={handleCreate}>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Cover
                </label>
                <input
                  type="text"
                  placeholder="Cover url..."
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="cover"
                  value={blogData.cover}
                  onChange={handleChange}
                  required
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <br />
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Author's name..."
                  name="author"
                  value={blogData.author}
                  onChange={handleChange}
                  required
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Title..."
                  name="title"
                  value={blogData.title}
                  onChange={handleChange}
                  required
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Description
                </label>
                <textarea
                  placeholder="description..."
                  name="description"
                  value={blogData.description}
                  onChange={handleChange}
                  required
                  rows="10"
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
              <div class="flex justify-between w-full px-3">
                <button
                  class="shadow bg-indigo-600  hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading && <span className="loading loading-spinner" />}
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </main>
  );
};

export default CreateBlogPage;
