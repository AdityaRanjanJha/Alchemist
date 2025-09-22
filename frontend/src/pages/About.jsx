import React from "react";
import aboutus from "../assets/logo.svg"

const About = () => {
  return (
    <div className="min-h-screen pt-10 pb-20 px-4">
      {/* About Us Section */}
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-[#22223b]">About Us</h1>
        <div className="flex flex-col md:flex-row gap-12 items-center bg-white/80 border border-gray-300 rounded-xl p-8 mb-14">
          {/* Left: Image */}
          <img
            src={aboutus}
            alt="About Us"
            className="w-full max-w-[360px] rounded-xl"
          />
          {/* Right: Text */}
          <div className="flex-1 flex flex-col gap-6 text-[#22223b] text-lg text-left">
            <p>
              Welcome to <b className="text-[#D55E5D]">Alchemist</b>, where education meets inspiration. We are dedicated to connecting students with highly qualified teachers across various disciplines, ensuring personalized learning and academic growth.
            </p>
            <p>
              Our platform is built on the belief that every student deserves access to passionate educators who can make a difference in their learning journey.
            </p>
            <b className="text-gray-800 text-xl">Our Vision</b>
            <p>
              To empower learners by providing seamless access to expert teachers, fostering a culture of curiosity, growth, and lifelong learning.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <p className="text-xl uppercase font-semibold text-center mb-8 tracking-wide">
            Why <span className="text-gray-700 font-semibold">Choose Us</span>
          </p>
          <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center">
            {/* Block 1 */}
            <div className="group flex-1 border border-gray-300 rounded-xl p-8 flex flex-col gap-4 text-center text-lg bg-white/70 hover:bg-[#D55E5D] transition-all duration-300 cursor-pointer">
              <b className="text-[#D55E5D] text-xl md:text-2xl group-hover:text-white">Expert Teachers</b>
              <p className="group-hover:text-white">
                Our teachers are experienced, certified, and passionate about helping students succeed in their academic pursuits.
              </p>
            </div>
            {/* Block 2 */}
            <div className="group flex-1 border border-gray-300 rounded-xl p-8 flex flex-col gap-4 text-center text-lg bg-white/70 hover:bg-[#D55E5D] transition-all duration-300 cursor-pointer">
              <b className="text-[#D55E5D] text-xl md:text-2xl group-hover:text-white">Personalized Learning</b>
              <p className="group-hover:text-white">
                We match students with teachers who tailor lessons to individual needs, ensuring effective and engaging learning experiences.
              </p>
            </div>
            {/* Block 3 */}
            <div className="group flex-1 border border-gray-300 rounded-xl p-8 flex flex-col gap-4 text-center text-lg bg-white/70 hover:bg-[#D55E5D] transition-all duration-300 cursor-pointer">
              <b className="text-[#D55E5D] text-xl md:text-2xl group-hover:text-white">Flexible Scheduling</b>
              <p className="group-hover:text-white">
                Book sessions at your convenience with our easy-to-use scheduling system, making learning accessible anytime.
              </p>
            </div>
          </div>

        </div>

        {/* Optional: Footer */}
        <footer className="text-center text-gray-500 text-sm mt-10">
          &copy; {new Date().getFullYear()} Alchemist. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default About;
