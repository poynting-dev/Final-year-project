import React, { useState, useRef } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { toast } from "react-toastify";
import "./handler.css";

export default function CreateBlog() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInput = useRef(null);

  //---------------------FILE UPLOAD OPERTIONS BELOW-------------------------
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);
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
          image: "",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            createdAt: Timestamp.now().toDate(),
          })
            .then(() => {
              toast("Article added successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };
  ///-----------------------------FILE UPLOAD OPERATIONS----------------------------
  const handleFile = (file) => {
    //you can carry out any file validations here...
    setImage(file);
    setPreviewUrl(URL.createObjectURL(file));
    setFormData({ ...formData, image: file });
    console.log(formData);
    console.log(db);
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
      <div className=" md:grid-cols-3 md:gap-6">
        <div className="text-5xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Publish a New Blog
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
              <div className="mt-4">
                <label className="block text-3xl font-medium text-gray-700">
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
                      name="image"
                      hidden
                      onChange={(e) => handleFile(e.target.files[0])}
                      // onChange={(e) => handleImageChange(e)}
                    />
                  </div>
                  {previewUrl && <img src={previewUrl} alt="image" />}
                </div>
              </div>

              <div className="mt-4 pb-4">
                <label
                  htmlFor="title"
                  className="block text-3xl font-medium text-gray-700 mb-2"
                >
                  Content
                </label>
                <div className="mt-1">
                  <textarea
                    type="text"
                    name="description"
                    id="content"
                    onChange={(e) => handleChange(e)}
                    rows={4}
                    placeholder="Write content here!"
                    className="bg-neutral-700	text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-3 block w-full sm:text-lg border-gray-300 rounded-md"
                  />
                </div>
              </div>
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
  );
}
