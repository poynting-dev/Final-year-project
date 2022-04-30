import React, { useState, useRef } from "react";
import "./handler.css";

export default function CreateBlog() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInput = useRef(null);

  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleOnDrop = (e) => {
    //prevent the browser from opening the image
    e.preventDefault();
    e.stopPropagation();
    //let's grab the image file
    let imageFile = e.dataTransfer.files[0];
    handleFile(imageFile);
  };

  return (
    <div className="container">
      <div class=" md:grid-cols-3 md:gap-6">
        <div class="text-5xl font-extrabold">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Publish a New Blog
          </span>
        </div>
        <div class="mt-4 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 bg-white sm:p-6 bg-gradient-to-r from-cyan-500 to-blue-500">
                <div>
                  <label
                    for="title"
                    class="block text-3xl font-medium text-gray-700 mb-1"
                  >
                    Title
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter Title here!"
                      className="bg-neutral-700	text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-3 block w-full sm:text-lg border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label class="block text-3xl font-medium text-gray-700">
                    Cover photo
                  </label>
                  <div className="pt-3">
                    <div
                      className="drop_zone bg-neutral-700	text-white"
                      onDragOver={handleDragOver}
                      onDrop={handleOnDrop}
                      onClick={() => fileInput.current.click()}
                    >
                      <p>Click to select or Drag and drop image here....</p>
                      <input
                        type="file"
                        accept="image/*"
                        ref={fileInput}
                        hidden
                        onChange={(e) => handleFile(e.target.files[0])}
                      />
                    </div>
                    {previewUrl && <img src={previewUrl} alt="image" />}
                  </div>
                </div>

                <div className="mt-4 pb-4">
                  <label
                    for="title"
                    class="block text-3xl font-medium text-gray-700 mb-2"
                  >
                    Content
                  </label>
                  <div class="mt-1">
                    <textarea
                      type="text"
                      name="content"
                      id="content"
                      rows={4}
                      placeholder="Write content here!"
                      className="bg-neutral-700	text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-3 block w-full sm:text-lg border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div class="pb-4 w-full sm:px-6 text-white">
                  <button
                    type="submit"
                    class="text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 w-full rounded-md hover:from-pink-500 hover:to-yellow-500"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
