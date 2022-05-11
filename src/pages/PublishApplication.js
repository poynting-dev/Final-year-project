import React, { useState, useRef } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

// --------------------Authentication Purpose-----------------------
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext.js";
import { getAuth, updateProfile } from "firebase/auth";

// --------------------Authentication Purpose-----------------------

export default function PublishApplication() {
  //========AUTH Purpose======================
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  //========AUTH Purpose======================

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: "",
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
    if (!formData.title || !formData.description || !formData.file) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/applications/${Date.now()}${formData.file.name}`
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
          const applicationRef = collection(db, "Applications");
          addDoc(applicationRef, {
            title: formData.title,
            description: formData.description,
            file: url,
            createdAt: Timestamp.now().toDate(),
            createdByName: currentUser.displayName,
            createdByEmail: currentUser.email,
            createdByUserPhoto: currentUser.photoURL,
          })
            .then(() => {
              toast("Application submitted successfully", { type: "success" });
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
    <div className="border p-3 mt-3 bg-light" style={{ position: "fixed" }}>
      <h2>Create Application</h2>
      <label htmlFor="">Subject</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        className="form-control"
        onChange={(e) => handleChange(e)}
      />

      {/* description */}
      <label htmlFor="">Description</label>
      <textarea
        type="text"
        name="description"
        value={formData.description}
        className="form-control"
        onChange={(e) => handleChange(e)}
      />

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

      <button className="form-control btn-primary mt-2" onClick={handlePublish}>
        Publish
      </button>
    </div>
  );
}
