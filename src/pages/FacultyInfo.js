import React from "react";
import ash from "../_mocks_/Ashish-Agrawal.jpg";

export default function FacultyInfo() {
  return (
    <>
      <div>FacultyInfo</div>
      <section class="container mx-auto p-10 md:py-20 px-0 md:p-10 md:px-0">
        <section class="p-3 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start ">
          <article class="p-4 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div class="relative max-h-125 overflow-hidden">
              {/* <img
                class="absolute"
                src="https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                alt=""
              /> */}
              <div className="absolute block h-100 w-100 bg-blur-sm ">
                <p class="flex justify-center">
                  <span className="mt-32 text-lg">Ashish Agarwal</span>
                </p>
              </div>
              <img
                //   &amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80
                class="relative object-cover transform duration-500 group-hover:opacity-0"
                src={ash}
                alt=""
              />
            </div>
            <div class="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
              <a target="_blank" href="https://unsplash.com/@mehranhadad">
                <svg
                  class="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(0,0,0,0.5)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
            <ul class="mt-6 font-semibold text-gray-500">
              <li class="inline mr-3 pb-1 border-b-2 border-green-500">
                Features
              </li>
              <li class="inline mr-3 pb-1 border-b-2 border-green-500">
                Fashion
              </li>
            </ul>
            <p class="mt-6  text-xl leading-relaxed text-gray-700">
              Specialized in Agile, DSA
            </p>
            <p class="text-gray-400 mt-4 font-semibold">test@test.com</p>
          </article>

          <article class="p-4 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
            <div class="relative max-h-125 overflow-hidden">
              {/* <img
                class="absolute"
                src="https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                alt=""
              /> */}
              <div className="absolute block h-100 w-100 bg-blur-sm ">
                <p class="flex justify-center">
                  <span className="mt-32 text-lg">Ashish Agarwal</span>
                </p>
              </div>
              <img
                class="relative object-contain transform duration-500 group-hover:opacity-0"
                src="https://images.unsplash.com/photo-1579612635567-e45dc47a0985?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
                alt=""
              />
            </div>
            <div class="p-4 absolute bg-gray-200 rounded-full top-10 right-10 transform duration-500 opacity-0 group-hover:opacity-100">
              <a target="_blank" href="https://unsplash.com/@mehranhadad">
                <svg
                  class="w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgba(0,0,0,0.5)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  ></path>
                </svg>
              </a>
            </div>
            <ul class="mt-6 font-semibold text-gray-500">
              <li class="inline mr-3 pb-1 border-b-2 border-green-500">
                Features
              </li>
              <li class="inline mr-3 pb-1 border-b-2 border-green-500">
                Fashion
              </li>
            </ul>
            <p class="mt-6  text-xl leading-relaxed text-gray-700">
              Specialized in Agile, DSA
            </p>
            <p class="text-gray-400 mt-4 font-semibold">test@test.com</p>
          </article>
        </section>
      </section>
    </>
  );
}
