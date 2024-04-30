import logo from "./logo.svg";
import "./App.css";

import $ from "jquery";
import { useState } from "react";

function App() {
  const days = new Date();

  const now = days.getFullYear();
  const [birthyear, setbirthyear] = useState("");
  const [spanclass, setspanclass] = useState("flex");
  const [alertclass, setalertclass] = useState("flex");
  const [flag, setFlag] = useState(true);

  var yearsgone = now - birthyear;
  var weeksgone = yearsgone * 52;
  var weeksleft = 3640 - weeksgone;
  const update = () => {
    $(document).ready(function () {
      for (var i = 0; i < weeksgone; i++)
        $("#lived").append("<div class='box-done'></div>");
    });
    $(document).ready(function () {
      for (var i = 0; i < weeksleft; i++)
        $("#home").append("<div class='box'></div>");
    });
    setbirthyear("");
    // weeksgone = 0;
    // weeksleft = 0;
    if (birthyear == "") {
      setspanclass("hidden");
      // alert("Birth Year is Empty");
      window.location.reload();
    }
  };

  return (
    <>
      <div
        className={`flex items-center justify-center px-4 sm:px-0 ${alertclass}`}
      >
        <div
          id="alert"
          className={
            flag
              ? "lg:w-10/12 transition duration-150 ease-in-out bg-teal-200 shadow rounded-md  md:flex justify-between items-center  top-0 mt-12 mb-8 py-4 px-4 "
              : "lg:w-10/12 transition duration-150 ease-in-out bg-teal-200 shadow rounded-md  md:flex justify-between items-center  top-0 mt-12 mb-8 py-4 px-4 translate-hidden"
          }
        >
          <div className="sm:flex items-center">
            <div className="flex items-end">
              <div className="mr-2 mt-0.5 sm:mt-0 text-teal-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={22}
                  height={22}
                  fill="currentColor"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  />
                </svg>
              </div>
              <p className="mr-2 text-base font-bold text-teal-500">
                Note from DEV:
              </p>
            </div>
            <div className="h-1 w-1 bg-teal-500 rounded-full mr-2 hidden xl:block" />
            <p className="text-base text-teal-500">
              Reload The Page Before Adding Another value.😊
            </p>
          </div>
          <div className="flex justify-end mt-4 md:mt-0 md:pl-4 lg:pl-0">
            {/* <span className="text-sm mr-4 font-bold cursor-pointer text-teal-500">
              Details
            </span> */}
            <span
              // onClick={() => setFlag(false)}
              onClick={() => setalertclass("hidden")}
              className="text-sm cursor-pointer text-gray-500"
            >
              Dismiss
            </span>
          </div>
        </div>
        <style>
          {`
                .translate-show{
                    transform : translateY(0%);
                }
                .translate-hide{
                    transform : translateY(18vh);
                }
                `}
        </style>
      </div>
      <span className="flex items-center">
        <span className="h-px flex-1 bg-black ml-3"></span>
        <span className="shrink-0 px-6">Don't Just Exist ! Live</span>
        <span className="h-px flex-1 bg-black mr-3"></span>
      </span>{" "}
      <section class="grid place-items-center bg-white p-16 min-h-10">
        <div class="flex gap-4">
          <input
            class="h-12 min-w-[12rem] rounded-lg border-emerald-500 indent-4 text-emerald-900 shadow-lg focus:outline-none focus:ring focus:ring-emerald-600"
            type="text"
            value={birthyear}
            placeholder="Year of Birth"
            onChange={(e) => setbirthyear(e.target.value)}
          />

          <button
            onClick={update}
            class="h-12 min-w-[8rem] rounded-lg border-2 border-emerald-600 bg-emerald-500 text-emerald-50 shadow-lg hover:bg-emerald-600 focus:outline-none focus:ring focus:ring-emerald-600"
          >
            Go
          </button>
        </div>
      </section>
      <h1 className="text-3xl font-black text-center py-3">My Life in Weeks</h1>
      <div className={`flex flex-wrap ${spanclass}`}>
        <div className="flex flex-wrap" id="lived"></div>
        <div
          // onMouseOver={setspanclass("block")}
          className="flex flex-wrap"
          id="home"
        ></div>
        {/* <span className={`${spanclass}`}>This is Remaining Weeks!</span> */}
        {/* <h1>{props.year}</h1> */}
      </div>
    </>
  );
}

export default App;
// import React, { useState } from "react";
// const Index = () => {
//     const [flag, setFlag] = useState(true);
