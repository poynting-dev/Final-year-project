import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import db from "src/my-articles/src/firebaseConfig.js";
import { fDate } from "src/utils/formatTime";

// --------------------Authentication Purpose-----------------------
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "src/contexts/AuthContext.js";
import { getAuth, updateProfile } from "firebase/auth";

// --------------------Authentication Purpose-----------------------

export default function AllApplicationsAdmin() {
  const [applications, setApplications] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, "Applications");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const applications = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // setArticles(articles.map(({ title, createdAt }) => title));
      setApplications(
        applications.map(
          (
            {
              id,
              title,
              description,
              file,
              createdAt,
              createdByName,
              createdByEmail,
              createdByUserPhoto,
              approvedBy,
            },
            index
          ) => ({
            id: id,
            title: title,
            description: description,
            createdAt: createdAt.toDate().toDateString(),
            file: file,
            createdByName: createdByName,
            createdByUserPhoto: createdByUserPhoto,
            createdByEmail: createdByEmail,
            approvedBy: approvedBy,
          })
        )
      );
    });
  }, []);

  return (
    <div className="container">
      <div className="mx-24 block shadow-md sm:rounded-lg">
        <fieldset className="p-3 border border-black">
          <legend>Applications Requisition</legend>
          Computer Science & Engineering
        </fieldset>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Requested By(Student Name)
              </th>
              <th scope="col" className="px-6 py-3">
                Published Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Download</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Handle</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <ApplicationRow
                key={application.id}
                application={application}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const ApplicationRow = ({ application, index }) => {
  const {
    id,
    title,
    description,
    file,
    createdAt,
    createdByName,
    createdByEmail,
    createdByUserPhoto,
    approvedBy,
  } = application;
  return (
    <tr
      className="
            text-black
            bg-indigo-500
            hover:text-white
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
            text-black
            bg-indigo-500
            hover:text-white
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300
            cursor-pointer"
    >
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label for="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="px-2 py-1 font-medium text-gray-900 dark:text-white whitespace-nowrap "
      >
        <a
          href="#!"
          aria-current="true"
          className="44
            block
            px-6
            py-2
            
            w-full
            rounded-t-md
            text-black
        "
        >
          <details
            className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
            close
          >
            <summary className="text-sm leading-6 open:text-black dark:text-white font-semibold select-none">
              {title}
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-white">
              <p>{description}</p>
            </div>
          </details>
        </a>
      </th>
      <td className="px-6 py-4">{createdByName}</td>
      <td className="px-6 py-4">{fDate(createdAt)}</td>
      <td className="px-6 py-4">
        {approvedBy ? (
          <button
            type="button"
            class="text-black bg-white hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Approved! by <b>{approvedBy}</b>
          </button>
        ) : (
          <button
            type="button"
            class="text-black bg-white hover:bg-slate-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Progress
          </button>
        )}
      </td>
      <td className="px-6 py-4 text-right">
        <a href={file} className="font-medium text-white hover:underline">
          Download
        </a>
      </td>
      <td className="px-6 py-4 text-right">
        <a
          href={`/handle-application/${id}`}
          className="font-medium text-white hover:underline"
        >
          Handle
        </a>
      </td>
    </tr>
  );
};
