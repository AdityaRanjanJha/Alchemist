import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets, facultyData, specialityData } from '../assets/assets.js';

// --- Individual Teacher Card Component ---
function TeacherCard({ image, name, onClick }) {
  // ... (TeacherCard code remains the same) ...
  return (
    <div
      className="bg-[#fffaf5] rounded-lg shadow-md overflow-hidden text-center transition-transform duration-200 ease-in-out hover:-translate-y-1 min-w-0 cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-base text-gray-800">{name}</h4>
      </div>
    </div>
  );
}


// --- Main Teachers Page Component ---
function Teachers() {
  const navigate = useNavigate();

  // Use the teacher's unique 'id' for navigation
  const handleTeacherClick = (teacherId) => {
    // *** ADD THIS LOG ***
    console.log('[Teachers] Navigating with ID:', teacherId, 'Type:', typeof teacherId);
    // Ensure teacherId is not undefined before navigating
    if (teacherId !== undefined && teacherId !== null) {
        navigate(`/appointment/${teacherId}`);
    } else {
        console.error('[Teachers] Attempted to navigate with undefined or null ID.');
    }
  };

  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="grid grid-cols-[300px_1fr] gap-8">
          {/* ----- Sidebar ----- */}
          {/* ... (Sidebar code remains the same) ... */}
          <aside>
            <div className="bg-[#fffaf5] p-5 rounded-lg shadow-sm h-fit">
              <h3 className="text-lg font-semibold text-gray-800 mb-5">Browse through the teachers specialties</h3>
              {/* Filter Inputs */}
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Search by name..." // Changed placeholder
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e77979] focus:border-[#e77979]"
                />
                {/* Removed second input, can add filtering logic later */}
              </div>
              {/* Specialties Navigation */}
              <nav className="space-y-2">
                {specialityData.map((spec) => (
                   <button
                     key={spec.speciality}
                     className="w-full text-left px-4 py-2.5 bg-[#fdf5ef] border border-[#f5e8dc] rounded text-gray-600 hover:bg-[#e77979] hover:text-white hover:border-[#e77979] transition duration-150 ease-in-out focus:outline-none focus:bg-[#e77979] focus:text-white"
                   >
                     {spec.speciality}
                   </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* ----- Teacher Grid ----- */}
          <section>
            <div className="grid grid-cols-4 gap-6">
              {facultyData.map((teacher) => {
                if (!teacher.id && teacher.id !== 0) { // Check if id is missing or null/undefined (allow 0)
                    console.error("[Teachers] Teacher object missing valid ID:", teacher);
                    return null;
                }
                return (
                  <TeacherCard
                    key={teacher.id}
                    image={teacher.image}
                    name={teacher.name}
                    // Pass the click handler with the specific teacher's id
                    onClick={() => handleTeacherClick(teacher.id)}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </main>

      {/* ----- Footer ----- */}
      {/* ... (Footer code remains the same) ... */}
       <footer className="bg-[#fffaf5] border-t border-gray-200 mt-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 gap-8">
            {/* Footer Section 1 */}
            <div className="space-y-4">
               <div className="flex items-center">
                 <img className="h-8 w-auto mr-2" src={assets.logo} alt="Alchemist Logo" />
               </div>
               <p className="text-sm text-gray-600">
                 Lorem ipsum is placeholder text commonly used in the graphic, print,
                 and publishing industries for previewing layouts and visual mockups.
               </p>
            </div>
            {/* Footer Section 2 */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h4>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Company</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Services</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Team</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Privacy Policy</a>
            </div>
             {/* Footer Section 3 */}
             <div className="space-y-2">
               <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Get In Touch</h4>
               <p className="text-sm text-gray-600">SRM University, Chennai - 603202</p>
               <p className="text-sm text-gray-600">+91 12345 67890</p>
               <p className="text-sm text-gray-600">alchemist@email.com</p>
             </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2025 Alchemist. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default Teachers;