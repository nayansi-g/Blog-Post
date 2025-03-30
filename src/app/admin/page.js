"use client";
import React, { useRef, useState } from "react";

const Adminpage = () => {
  const [category, setCategory] = useState("");
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let category_ref = category.split(" ").join("").toLowerCase();
    let obj = {
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      image: imageRef.current.value,
      category: category,
      category_ref: category_ref,
      content: contentRef.current.value,
    };

    try {
      const post = await fetch("http://localhost:3000/api/blogs/add-blog", {
        method: "POST",
        body: JSON.stringify(obj),
      });
      console.log("Data Added");
    } catch (err) {
      console.log(err);
    }
  };

  // Function to clear input fields
  const handleClear = () => {
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    imageRef.current.value = "";
    contentRef.current.value = "";
    setCategory(""); 
  };

  return (
    <div className="bg-gray-100 w-full flex justify-center">
      <div className="flex flex-col w-full sm:w-3/4 lg:w-1/2 p-6 sm:p-10 mt-10 bg-white shadow-md rounded-lg">
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center">Create A Post</h1>
          <ul className="flex flex-wrap gap-4 font-semibold text-sm sm:text-base cursor-pointer">
            <li
              onClick={handleSubmit}
              className="border-2 border-blue-600 py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white transition"
            >
              Publish
            </li>
            <li className="border-2 border-green-600 py-2 px-4 rounded-lg hover:bg-green-600 hover:text-white transition">
              Preview
            </li>
            <li className="border-2 border-yellow-600 py-2 px-4 rounded-lg hover:bg-yellow-600 hover:text-white transition">
              Save Draft
            </li>
            <li
              onClick={handleClear}
              className="border-2 border-red-600 py-2 px-4 rounded-lg cursor-pointer hover:bg-red-600 hover:text-white transition"
            >
              Clear
            </li>
          </ul>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col mt-8 gap-4 text-black">
          <label className="font-medium">Post Title</label>
          <input
            type="text"
            placeholder="Enter title of your post"
            className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary"
            ref={titleRef}
          />

          <label className="font-medium">Post Description</label>
          <input
            type="text"
            placeholder="Enter the description of your post"
            className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary"
            ref={descriptionRef}
          />

          <label className="font-medium">Header Image [Preferred Size: 900x300]</label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary"
            ref={imageRef}
          />

          <label className="font-medium">Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-primary"
            value={category}
          >
            <option value="">Select a category</option>
            <option value="Social Media">Social Media</option>
            <option value="IT Trends">IT Trends</option>
            <option value="Food">Food</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Cyber Trends">Cyber Trends</option>
            <option value="Sports">Sports</option>
            <option value="Programming">Programming</option>
          </select>

          <label className="font-medium">Content</label>
          <textarea
            ref={contentRef}
            className="w-full px-4 py-2 rounded-lg border h-64 resize-none border-gray-600 focus:ring-2 focus:ring-primary"
            placeholder="Write your blog content here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
