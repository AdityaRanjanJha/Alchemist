// src/pages/Teachers.jsx
import React from 'react';
// Import data and assets from your assets.js file
import { assets, facultyData, specialityData } from '../assets/assets.js'; // Adjust path if necessary

// --- Individual Doctor Card Component (defined within the same file) ---
function DoctorCard({ image, name }) {
  return (
    // Added min-w-0 to prevent potential overflow issues within the grid cell
    <div className="bg-[#fffaf5] rounded-lg shadow-md overflow-hidden text-center transition-transform duration-200 ease-in-out hover:-translate-y-1 min-w-0">
      {/* Use the imported image variable */}
      <img src={image} alt={name} className="w-full h-48 object-cover" /> {/* Adjust height h-48 as needed */}
      <div className="p-4">
        {/* Specialty tag removed as facultyData doesn't have a direct equivalent */}
        <h4 className="font-semibold text-base text-gray-800">{name}</h4>
      </div>
    </div>
  );
}

// --- Main Teachers Page Component ---
function Teachers() {
  return (
    <>
      {/* ----- Main Content Area ----- */}
      {/* Changed max-w-7xl to max-w-screen-2xl (1536px) for fixed wider layout */}
      {/* Kept mx-auto for centering, remove if left-alignment is desired */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        {/* Changed grid layout to fixed columns: 300px sidebar, remaining space for grid */}
        {/* Removed responsive prefix md: */}
        <div className="grid grid-cols-[300px_1fr] gap-8">

          {/* ----- Sidebar ----- */}
          {/* Removed md:col-span-1 as column width is now fixed by grid-cols-[300px_1fr] */}
          <aside>
            <div className="bg-[#fffaf5] p-5 rounded-lg shadow-sm h-fit">
              <h3 className="text-lg font-semibold text-gray-800 mb-5">Browse through the doctors specialties</h3>
              {/* Filter Inputs (Kept as is) */}
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e77979] focus:border-[#e77979]"
                />
                <input
                  type="text"
                  placeholder="Your message"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e77979] focus:border-[#e77979]"
                />
              </div>
              {/* Specialties Navigation - Using specialityData */}
              <nav className="space-y-2">
                {specialityData.map((spec) => (
                   <button
                     key={spec.speciality} // Use speciality name as key
                     className="w-full text-left px-4 py-2.5 bg-[#fdf5ef] border border-[#f5e8dc] rounded text-gray-600 hover:bg-[#e77979] hover:text-white hover:border-[#e77979] transition duration-150 ease-in-out focus:outline-none focus:bg-[#e77979] focus:text-white"
                   >
                     {/* Display the speciality name */}
                     {spec.speciality}
                   </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* ----- Doctor Grid ----- */}
          {/* Removed md:col-span-3 as column width is now fixed */}
          <section>
            {/* Using facultyData */}
            {/* Changed grid layout to fixed 4 columns, removed responsive prefixes */}
            <div className="grid grid-cols-4 gap-6">
              {facultyData.map((doctor, index) => ( // Use index as key if no unique ID is present
                <DoctorCard
                  key={doctor.profile_url || index} // Use profile_url or index as key
                  image={doctor.image} // Use the imported image
                  name={doctor.name}
                />
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* ----- Footer ----- */}
      {/* Changed max-w-7xl to max-w-screen-2xl (1536px) for fixed wider layout */}
      {/* Kept mx-auto for centering */}
      <footer className="bg-[#fffaf5] border-t border-gray-200 mt-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Changed grid layout to fixed 3 columns, removed responsive prefix md: */}
          <div className="grid grid-cols-3 gap-8">
            {/* Footer Section 1: Logo and About */}
            <div className="space-y-4">
               <div className="flex items-center">
                 <img className="h-8 w-auto mr-2" src={assets.logo} alt="Alchemist Logo" />
               </div>
               <p className="text-sm text-gray-600">
                 Lorem ipsum is placeholder text commonly used in the graphic, print,
                 and publishing industries for previewing layouts and visual mockups.
               </p>
            </div>

            {/* Footer Section 2: Company Links */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h4>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Company</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Services</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Team</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Privacy Policy</a>
            </div>

             {/* Footer Section 3: Get In Touch */}
             <div className="space-y-2">
               <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Get In Touch</h4>
               <p className="text-sm text-gray-600">SRM University, Chennai - 603202</p>
               <p className="text-sm text-gray-600">+91 12345 67890</p>
               <p className="text-sm text-gray-600">alchemist@email.com</p>
             </div>
          </div>
          {/* Optional: Copyright line */}
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2025 Alchemist. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Teachers;
