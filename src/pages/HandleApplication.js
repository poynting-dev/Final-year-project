import React, { useState, useRef, useEffect } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function HandleApplication() {
  let { id } = useParams();

  const [existingDocument, setExistingDocument] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: "",
    remarks: "",
    modifiedBy: "",
    createdAt: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  const handlePublish = () => {
    if (!formData.remarks || !formData.file) {
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
          //   const applicationRef = collection(db, "Applications");
          //   addDoc(applicationRef, {
          //     title: formData.title,
          //     description: formData.description,
          //     file: url,
          //     remarks: formData.remarks,
          //     createdAt: Timestamp.now().toDate(),
          //   })
          db.collection("Applications")
            .doc(id)
            .set(
              {
                file: url,
                remarks: formData.remarks,
                completed: "Yes",
                approvedBy: "Dr. Aman Sinha",
                modifiedAt: Timestamp.now().toDate(),
              },
              { merge: true }
            )
            .then(() => {
              toast("Application approved successfully", { type: "success" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Error approving Application", { type: "error" });
            });
        });
      }
    );
  };

  useEffect(() => {
    db.collection("Applications")
      .doc(id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          formData.title = doc.data().title;
          formData.description = doc.data().description;
          setExistingDocument(doc.data().file);
          //   console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <div className="container border-2 border-gray-500 pb-5">
      <h1 class="mb-4 text-center font-black text-gray-700 font-bold text-3xl text-black tracking-tight">
        Progress
      </h1>
      <div class="flex">
        <div class="w-1/3 text-center px-6">
          <Step />
        </div>
        <div class="flex-1 flex items-center justify-center">
          <Arrow />
        </div>
        <div class="w-1/3 text-center px-6">
          <Step />
        </div>
        <div class="flex-1 flex items-center justify-center">
          <Arrow />
        </div>
        <div class="w-1/3 text-center px-6">
          <Step />
        </div>
      </div>
      <div className="items-center py-8 sm:px-8">
        <div className="group pb-4">
          <img
            className="shrink-0 h-12 w-12 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="dp"
          />
          <div className="ltr:ml-3 rtl:mr-3">
            <p className="text-sm font-medium text-slate-300 group-hover:text-white">
              Priyanshu Dixit
            </p>
            <p className="text-sm font-medium text-white-500 group-hover:text-slate-300">
              4th year CSE Student
            </p>
          </div>
        </div>
        <div class="pt-2 pb-2 font-bold text-3xl text-black tracking-tight">
          Subject
        </div>
        <div class="font-medium text-md text-white-500">
          <input
            type="text"
            name="remarks"
            value={formData.title}
            className="bg-neutral-700	text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-3 block w-full sm:text-lg border-gray-300 rounded-md"
            disabled
          />
        </div>
        <div class="pt-4 pb-2 font-bold text-3xl text-black tracking-tight">
          Description
        </div>
        <div class="font-medium text-md text-white-500">
          <input
            type="text"
            value={formData.description}
            placeholder="Enter Remarks here!"
            className="bg-neutral-700	text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-3 block w-full sm:text-lg border-gray-300 rounded-md"
            disabled
          />
        </div>
        <div class="pt-4 pb-2 font-bold text-3xl text-black tracking-tight">
          Remarks
        </div>
        <div class="mt-1 font-medium text-md text-white-500">
          <input
            type="text"
            name="remarks"
            value={formData.remarks}
            id="remarks"
            onChange={(e) => handleChange(e)}
            placeholder="Enter Remarks here!"
            className="bg-neutral-700	text-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-3 block w-full sm:text-lg border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-8">
          <a
            href={existingDocument}
            className="focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Click here to Download attached document for application
          </a>
        </div>
        <div class="pt-4 pb-2 font-bold text-3xl text-black tracking-tight">
          Document
        </div>
        <input
          type="file"
          name="image"
          accept="file"
          className="form-control"
          onChange={(e) => handleFileChange(e)}
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
    </div>
  );
}

const Step = () => {
  return (
    <div class="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 hover:bg-gradient-to-r hover:from-indigo-200 hover:via-red-200 hover:to-yellow-100 rounded-lg flex items-center justify-center border border-gray-200">
      <div class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z" />
        </svg>
      </div>
      <div class="w-2/3  h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
        <h2 class="font-bold text-sm">Personal Info</h2>
        <p class="text-xs text-gray-600">Just your personal information</p>
      </div>
    </div>
  );
};

const Arrow = () => {
  return (
    <div class="flex-1 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" />
      </svg>
    </div>
  );
};
