import React, { useState } from "react";
import profilePic from '../assets/profile_pic.png'; // Import the image

const initialUserData = {
  name: "Alex Johnson",
  email: "alex.johnson@email.com",
  phone: "+91 98765 43210",
  address: {
    line1: "221B Baker Street",
    line2: "London, UK 12345"
  },
  gender: "male",
  dob: "1990-01-01"
};

// Helper component for profile fields
const ProfileField = ({ label, value, isEdit, onChange, type = "text", placeholder, options }) => (
  <>
    <p className="font-medium text-gray-600">{label}</p>
    {isEdit ? (
      type === "select" ? (
        <select
          className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D55E5D] focus:border-[#D55E5D] text-sm"
          value={value}
          onChange={onChange}
        >
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
      ) : (
        <input
          className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D55E5D] focus:border-[#D55E5D] text-sm"
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
        />
      )
    ) : (
      <p className="text-gray-800 break-words">{value || '-'}</p>
    )}
  </>
);

const MyProfile = () => {
  const [userData, setUserData] = useState(initialUserData);
  const [isEdit, setIsEdit] = useState(false);

  // Handle input changes for simple fields
  const handleChange = (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  // Handle input changes for address fields
  const handleAddressChange = (line, value) => {
    setUserData(prev => ({
      ...prev,
      address: { ...prev.address, [line]: value }
    }));
  };

  // Handle Save action
  const handleSave = () => {
    // Add API call logic here to save userData
    console.log("Saving data:", userData);
    setIsEdit(false);
    // Optionally show a success message (e.g., using react-hot-toast)
  };

  // Handle Cancel action (revert changes)
  const handleCancel = () => {
    setUserData(initialUserData); // Revert to initial data
    setIsEdit(false);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* Profile Header */}
        <div className="p-6 sm:p-8 flex flex-col items-center gap-4 border-b border-gray-200">
          <img
            src={profilePic} // Use the imported image variable
            alt="Profile"
            className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-[#D55E5D] shadow-md"
          />
          {isEdit ? (
            <input
              className="bg-gray-50 text-2xl sm:text-3xl font-semibold w-full max-w-xs mt-2 px-3 py-1.5 rounded-md border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-[#D55E5D] focus:border-[#D55E5D]"
              value={userData.name}
              onChange={e => handleChange("name", e.target.value)}
            />
          ) : (
            <p className="font-semibold text-2xl sm:text-3xl text-[#22223b] mt-2 text-center">{userData.name}</p>
          )}
        </div>

        {/* Profile Details */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Contact Info Section */}
          <section>
            <h3 className="text-lg font-semibold text-[#D55E5D] mb-5 border-b pb-2 border-gray-200">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-6 gap-y-4 text-sm">
              <ProfileField
                label="Email ID"
                value={userData.email}
                isEdit={isEdit}
                onChange={e => handleChange("email", e.target.value)}
                type="email"
              />
              <ProfileField
                label="Phone"
                value={userData.phone}
                isEdit={isEdit}
                onChange={e => handleChange("phone", e.target.value)}
                type="tel"
              />
              {/* Address Field */}
              <p className="font-medium text-gray-600 sm:col-start-1">Address</p>
              <div className="sm:col-start-2">
                {isEdit ? (
                  <div className="space-y-2">
                    <input
                      className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D55E5D] focus:border-[#D55E5D] text-sm"
                      value={userData.address.line1}
                      onChange={e => handleAddressChange("line1", e.target.value)}
                      placeholder="Address line 1"
                    />
                    <input
                      className="bg-gray-50 w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D55E5D] focus:border-[#D55E5D] text-sm"
                      value={userData.address.line2}
                      onChange={e => handleAddressChange("line2", e.target.value)}
                      placeholder="Address line 2"
                    />
                  </div>
                ) : (
                  <p className="text-gray-800 break-words">
                    {userData.address.line1 || '-'}
                    <br />
                    {userData.address.line2}
                  </p>
                )}
              </div>
            </div>
          </section>

          {/* Basic Info Section */}
          <section>
            <h3 className="text-lg font-semibold text-[#D55E5D] mb-5 border-b pb-2 border-gray-200">Basic Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-x-6 gap-y-4 text-sm">
              <ProfileField
                label="Gender"
                value={userData.gender}
                isEdit={isEdit}
                onChange={e => handleChange("gender", e.target.value)}
                type="select"
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                  { value: "prefer_not_to_say", label: "Prefer not to say" }
                ]}
              />
              <ProfileField
                label="Birthday"
                value={userData.dob}
                isEdit={isEdit}
                onChange={e => handleChange("dob", e.target.value)}
                type="date"
              />
            </div>
          </section>

          {/* Action Buttons */}
          <div className="mt-10 pt-6 border-t border-gray-200 flex justify-end gap-3">
            {isEdit ? (
              <>
                <button
                  type="button"
                  className="px-5 py-2 rounded-md text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="px-5 py-2 rounded-md text-sm font-medium text-white bg-[#D55E5D] hover:bg-[#b94c4c] border border-transparent transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D]"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                type="button"
                className="px-6 py-2 rounded-md text-sm font-medium text-white bg-[#D55E5D] hover:bg-[#b94c4c] border border-transparent transition-colors duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D]"
                onClick={() => setIsEdit(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;