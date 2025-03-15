
import Code from "@/components/Code";
import React from "react";



const Home = () => {

  return (
    <>
      <div className="p-10 max-w-6xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className=" flex flex-col justify-center items-start">
            <span className=" font-semibold">
              <span className=" text-blue-600">Hello,</span> Welcome to
            </span>
            <span className=" text-4xl font-semibold">
              CODER COMMUNITY CTF
            </span>
            <span className=" text-gray-400">
              Made by community for community
            </span>
            <p className="  mt-4">
              Coder Community CTF is a platform for all levels of cybersecurity enthusiasts. Whether you are a beginner or an experienced professional, we have something for you. Join us today and start your cybersecurity journey!
            </p>
            <button className=" mt-8 bg-indigo-800 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Get Started
            </button>
          </div>
          <div>
            <Code />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
