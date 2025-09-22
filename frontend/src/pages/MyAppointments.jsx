import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { facultyData } = useContext(AppContext);

  // Fetch appointments from localStorage or context
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // For demo: appointments are stored in localStorage as an array of objects
    // Each object: { teacherId, date, time }
    const saved = localStorage.getItem("appointments");
    if (saved) {
      try {
        setAppointments(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to parse appointments from localStorage:", error);
        setAppointments([]); // Reset to empty array on error
      }
    }
  }, []);

  // Helper to get teacher info for an appointment
  const getTeacherInfo = (teacherId) => {
    if (!facultyData || facultyData.length === 0) {
      return null; // Return null if facultyData is not ready
    }
    return facultyData.find((t) => t.id === teacherId);
  };

  // Cancel appointment handler (removes from localStorage and state)
  const handleCancel = (idx) => {
    const updated = [...appointments];
    updated.splice(idx, 1);
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));
    // Optionally add a toast notification for cancellation
  };

  // Helper to format date for display
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString + 'T00:00:00'); // Ensure it's treated as local date
      return date.toLocaleDateString('en-US', {
        weekday: 'short', // e.g., 'Mon'
        year: 'numeric', // e.g., '2024'
        month: 'short', // e.g., 'Jul'
        day: 'numeric', // e.g., '23'
      });
    // eslint-disable-next-line no-unused-vars
    } catch (e) {
      return dateString; // Fallback to original string if formatting fails
    }
  };

  return (
    // Added theme background and padding
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Centered container */}
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-10 text-center text-[#22223b]">
          My Appointments
        </h1>
        {/* Appointments List/Message */}
        <div className="space-y-6">
          {appointments.length === 0 ? (
            // Message for no appointments
            <div className="text-center text-gray-500 bg-white p-10 rounded-lg shadow border border-gray-200">
              You have no appointments booked yet.
            </div>
          ) : (
            // Mapping through appointments
            appointments.map((appt, idx) => {
              const teacher = getTeacherInfo(appt.teacherId);

              // Loading state placeholder (simple version)
              if (!teacher) {
                return (
                    <div key={`loading-${idx}`} className="bg-white rounded-lg shadow-md p-6 animate-pulse border border-gray-200">
                        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    </div>
                );
              }

              // Appointment Card
              return (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg border border-gray-200"
                >
                  {/* Card Content using Flexbox */}
                  <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                    {/* Teacher Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={teacher.image || '/assets/default-avatar.png'} // Fallback image
                        alt={teacher.name}
                        className="w-24 h-24 object-cover rounded-full border-2 border-[#D55E5D]" // Circular image
                      />
                    </div>

                    {/* Info Section */}
                    <div className="flex-1 text-center sm:text-left">
                      <h2 className="text-xl font-semibold text-[#22223b] mb-1">
                        {teacher.name}
                      </h2>
                      <p className="text-sm text-[#D55E5D] font-medium mb-3">
                         {teacher.speciality}
                      </p>

                      {/* Details with labels */}
                      <div className="space-y-1.5 text-sm text-gray-700">
                        <p>
                          <span className="font-medium text-gray-500">Date:</span>
                          <span className="ml-1.5">{formatDate(appt.date)}</span>
                        </p>
                        <p>
                          <span className="font-medium text-gray-500">Time:</span>
                          <span className="ml-1.5">{appt.time}</span>
                        </p>
                        {teacher.address?.line1 && (
                           <p>
                             <span className="font-medium text-gray-500">Location:</span>
                             <span className="ml-1.5">
                               {teacher.address.line1}
                               {teacher.address.line2 && `, ${teacher.address.line2}`}
                             </span>
                           </p>
                        )}
                      </div>
                    </div>

                    {/* Actions Section */}
                    <div className="flex flex-col items-stretch sm:items-end justify-center gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
                      {/* <button
                        className="px-4 py-2 text-sm font-medium rounded-md border border-[#D55E5D] text-[#D55E5D] bg-white hover:bg-[#D55E5D] hover:text-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D]"
                      >
                        Pay Online
                      </button> */}
                      <button
                        className="px-4 py-2 text-sm font-medium rounded-md border border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                        onClick={() => handleCancel(idx)}
                      >
                        Cancel Appointment
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;