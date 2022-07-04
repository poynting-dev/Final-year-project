import React from "react";
import { faker } from "@faker-js/faker";
import ash from "../_mocks_/Ashish-Agrawal.jpg";
import hg from "../_mocks_/2.png";
import ls from "../_mocks_/5.jpg";
import ad from "../_mocks_/4.jpg";
import shah from "../_mocks_/SHAHJAHAN.jpg";
import shailesh from "../_mocks_/Shailesh.jpg";
import amit from "../_mocks_/amit_sir.jpg";

export default function FacultyInfo() {
  return (
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
            Faculty - Computer Science & Engg.
          </span>
        </div>
        <section class="p-3 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 items-start ">
          <Faculty
            name="Mr Hiresh Kumar Gupta"
            src={hg}
            desg="Asst. Professor &    HOD"
          />
          <Faculty
            name="Mr. Shailesh Saxena"
            src={shailesh}
            desg="Assistant Professor"
            spec="Mr. Shailesh Saxena with experience of 16 years in the field of research, teaching and administration at different Institution of national repute."
          />
          <Faculty
            name="Mr. Ashish Agarwal"
            src={ash}
            desg="Assistant Professor"
            spec="Agile, Data Structures & Algorithms"
          />
          <Faculty
            name="Ms. Anubha Dhaka"
            src={ad}
            spec="Cloud Computing, DBMS"
            desg="Asst. Professor"
          />
          <Faculty
            name="Mr. Shahjahan Ali"
            src={shah}
            spec="Compiler Design & Theory of Computation"
            desg="Asst. Professor &    HOD"
          />
        </section>
      </div>
    </div>
  );
}

const Faculty = ({ name, src, desg }) => {
  return (
    <article class="p-4 transform duration-300 hover:-translate-y-1 cursor-pointer  hover:shadow-2xl group">
      <div class="relative max-h-125 overflow-hidden">
        {/* <img
      class="absolute"
      src="https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80"
      alt=""
    /> */}
        <div className="absolute block h-100 w-100 bg-blur-sm ">
          <p class="flex justify-center">
            <span className="mt-32 text-lg">{name}</span>
          </p>
        </div>
        <img
          //   &amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=934&amp;q=80
          class="relative object-cover transform duration-500 group-hover:opacity-0"
          src={src}
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
        <li class="inline mr-3 pb-1 border-b-2 border-green-500">{desg}</li>
      </ul>
      <p class="mt-6  text-xl leading-relaxed text-gray-700">
        Specialized in Agile, DSA
      </p>
      <p class="text-gray-400 mt-4 font-semibold">
        {faker.internet.email("Ashish Agarwal")}
      </p>
      <p class="text-gray-400 mt-1 font-semibold">
        {faker.phone.phoneNumber()}
      </p>
    </article>
  );
};
