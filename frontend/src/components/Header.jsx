import React from 'react';
import { assets } from '../assets/assets.js';

// --- Reusable Feature Card Component ---
// Note: This is now part of Header.jsx but kept separate for clarity
// If FeatureCard is used elsewhere, consider moving it to its own file.
function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center md:text-left p-4">
       {/* <div className="mb-3 inline-block bg-pink-100 p-3 rounded-full">
         { icon && <img src={icon} alt="" className="w-6 h-6" /> }
         { !icon && <span className="w-6 h-6 block"></span> } 
       </div> */}
       <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
       <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}


// --- Header Component ---
const Header = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-12 md:py-20">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">FROM TYPING TO SOLUTION</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Your Faculty<br />Booking <span className="text-[#e77979]">Sidekick</span>
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Effortlessly book faculty appointments with Alchemist. Stay organized with smart scheduling, reminders, and hassle-free coordination for students and faculty alike.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[#e77979] text-white px-6 py-3 rounded-md font-medium hover:bg-[#d65c5c] transition duration-150 ease-in-out">
            Book your Appointment
          </button>
          <button className="bg-transparent text-[#e77979] border border-[#e77979] px-6 py-3 rounded-md font-medium hover:bg-red-50 transition duration-150 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
      {/* Image */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={assets.hero} alt="Faculty booking illustration" className="w-full h-auto rounded-lg" />
      </div>
    </section>
  );
};

// Exporting both Header and FeatureCard if FeatureCard needs to be used independently elsewhere
// If FeatureCard is ONLY used within Home's feature section (rendered below Header),
// you might reconsider its placement or just export Header as default.
// For now, exporting Header as default and FeatureCard as named export.
export { FeatureCard };
export default Header;