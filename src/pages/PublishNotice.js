import React, { useState, useRef } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

export default function PublishNotice() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: "",
    category: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  const handlePublish = () => {
    if (
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.file
    ) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/notices/${Date.now()}${formData.file.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.file);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          file: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const applicationRef = collection(db, "Notices");
          addDoc(applicationRef, {
            title: formData.title,
            description: formData.description,
            file: url,
            category: formData.category,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Notice Published successfully", { type: "success" });
              setProgress(0);
              // Navigate("/", { replace: true });
            })
            .catch((err) => {
              toast("Error adding Applications", { type: "error" });
            });
        });
      }
    );
  };

  return (
    <>
      <div className="container -mt-2">
        <button>
          <a
            href="/"
            class="relative inline-flex items-center justify-start py-3 pl-4 mb-3 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
          >
            <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
            <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABk0lEQVRIie2UMUhUcRzHP78/V+EgNEhDKPeK60RwkVqkNqcWhYYWoVy8zS2HhtN/SBARBEWLONRkiERDa7NL0eD2rO70jggSBBUVPO/rINK9O+ze80mTn/F9f3w/j//v/x6c0waLM9RbmhqRc6+ROpBNhNf8+7gC127gRtk/ktkHpB6gC+NV3HKAzEnBzS+FC1tdV9+AxiOB+J1aEJT85S1jETTUFFVd5mA0lSC/6q8jPoH6ool9O6jtj4TB00oSQWQHuXJxEGmppVwsbF/kzo9csnJouEW9q/6+xFtQR0OzkHseBv4xhpKWHwmE5cvTHlMRLNa1jUkVVLB8afodxoMzLP6LWcVhZ/rWLbgw6x8KmwGd6oxPxKxidQr/YckN5MrFQYf7CFyJTImFnczmWLXn5W4qAfz7Q6tnGP7e7atJBC0/uzDrf16yvdtgn6OJBlxNS31rvj+VAGA5+2yjc/3XXWCuKequ1TWfWgDw9dbsfhg8GRc2CdSPn1vzfk4rOGYl8C9MuodZBeyPmU0kEZzTlkM6yI7t90+uXwAAAABJRU5ErkJggg==" />
            </span>
            <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABk0lEQVRIie2UMUhUcRzHP78/V+EgNEhDKPeK60RwkVqkNqcWhYYWoVy8zS2HhtN/SBARBEWLONRkiERDa7NL0eD2rO70jggSBBUVPO/rINK9O+ze80mTn/F9f3w/j//v/x6c0waLM9RbmhqRc6+ROpBNhNf8+7gC127gRtk/ktkHpB6gC+NV3HKAzEnBzS+FC1tdV9+AxiOB+J1aEJT85S1jETTUFFVd5mA0lSC/6q8jPoH6ool9O6jtj4TB00oSQWQHuXJxEGmppVwsbF/kzo9csnJouEW9q/6+xFtQR0OzkHseBv4xhpKWHwmE5cvTHlMRLNa1jUkVVLB8afodxoMzLP6LWcVhZ/rWLbgw6x8KmwGd6oxPxKxidQr/YckN5MrFQYf7CFyJTImFnczmWLXn5W4qAfz7Q6tnGP7e7atJBC0/uzDrf16yvdtgn6OJBlxNS31rvj+VAGA5+2yjc/3XXWCuKequ1TWfWgDw9dbsfhg8GRc2CdSPn1vzfk4rOGYl8C9MuodZBeyPmU0kEZzTlkM6yI7t90+uXwAAAABJRU5ErkJggg==" />
            </span>
            <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
              Go Back
            </span>
          </a>
        </button>
        <div className=" md:grid-cols-3 md:gap-6">
          <div className="text-5xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Create Notice
            </span>
          </div>
          <div className="mt-4 md:mt-0 md:col-span-2">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 bg-white sm:p-6 bg-gradient-to-r from-cyan-500 to-blue-500">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-3xl font-medium text-gray-700 mb-1"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      id="title"
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Title here!"
                      className="bg-neutral-700	text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-3 block w-full sm:text-lg border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="category"
                    className="block text-3xl font-medium text-gray-700"
                  >
                    Category:
                  </label>
                  <br />
                  <select
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={(e) => handleChange(e)}
                    className="form-select appearance-none
                    block
                    w-48
                    px-3
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  >
                    <option value="" disabled hidden>
                      Select an Option
                    </option>
                    <option value="Normal">Normal</option>
                    <option value="Important">Important</option>
                    <option value="Urgent">Urgent</option>
                  </select>
                </div>

                <div class="my-3 w-full">
                  <label
                    htmlFor="title"
                    className="block text-3xl font-medium text-gray-700 mb-2"
                  >
                    Upload your document here
                  </label>
                  <input
                    class="form-control
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    name="image"
                    onChange={(e) => handleImageChange(e)}
                  />
                </div>

                <div className="mt-4 pb-4">
                  <label
                    htmlFor="title"
                    className="block text-3xl font-medium text-gray-700 mb-2"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      type="text"
                      name="description"
                      value={formData.description}
                      onChange={(e) => handleChange(e)}
                      rows={4}
                      placeholder="Write Description here!"
                      className="bg-neutral-700	text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-3 block w-full sm:text-lg border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {progress === 0 ? null : (
                  <div className="progess">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: `${progress}%` }}
                    >
                      {`uploading image ${progress}%`}
                    </div>
                  </div>
                )}
                <div className="pb-4 w-full sm:px-6 text-white">
                  <button
                    type="submit"
                    className="text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 w-full rounded-md hover:from-pink-500 hover:to-yellow-500"
                    onClick={handlePublish}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border p-3 mt-3 bg-light" style={{ position: "fixed" }}>
        <label htmlfor="cars">Category: </label>
        <br />
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={(e) => handleChange(e)}
        >
          <option value="" disabled hidden>
            Select an Option
          </option>
          <option value="Normal">Normal</option>
          <option value="Important">Important</option>
          <option value="Urgent">Urgent</option>
        </select>

        <br />

        {/* image */}
        <label htmlFor="">Image</label>
        <input
          type="file"
          name="image"
          className="form-control"
          onChange={(e) => handleImageChange(e)}
        />
        {progress === 0 ? null : (
          <div className="progess">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: `${progress}%` }}
            >
              {`uploading image ${progress}%`}
            </div>
          </div>
        )}

        <button
          className="form-control btn-primary mt-2"
          onClick={handlePublish}
        >
          Publish
        </button>
      </div>
    </>
  );
}
