// src/pages/Home.jsx
import React from 'react';
// Import data and assets from your assets.js file
import { assets, specialityData } from '../assets/assets.js'; // Adjust path if necessary

// --- Reusable Feature Card Component ---
function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center md:text-left p-4">
       {/* Placeholder for icon - replace with actual icon component or img tag */}
       <div className="mb-3 inline-block bg-pink-100 p-3 rounded-full">
         {/* Example using an img tag if 'icon' is a URL/path */}
         { icon && <img src={icon} alt="" className="w-6 h-6" /> }
         {/* Or use a placeholder if no icon provided */}
         { !icon && <span className="w-6 h-6 block"></span> }
       </div>
       <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
       <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// --- Reusable Subject Card Component ---
function SubjectCard({ image, name }) {
    return (
        <div className="text-center group cursor-pointer">
            {/* The circular background */}
            <div className="mb-3 inline-block p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-full group-hover:scale-105 transition-transform duration-200">
                 {/* Increased image size from w-12 h-12 to w-16 h-16 */}
                 <img src={image} alt={name} className="w-16 h-16 object-contain" /> {/* Adjust size as needed */}
            </div>
            <p className="text-sm font-medium text-gray-700">{name}</p>
        </div>
    );
}


// --- Main Home Page Component ---
function Home() {
  return (
    <>
      {/* ----- Main Content Area ----- */}
      {/* Using max-w-screen-2xl for fixed wider layout consistent with Teachers page */}
      {/* Kept mx-auto for centering */}
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">

        {/* ----- Hero Section ----- */}
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
            {/* Use header_img from assets */}
            <img src={assets.hero} alt="Faculty booking illustration" className="w-full h-auto rounded-lg" />
          </div>
        </section>

        {/* ----- Features Section ----- */}
        {/* Using grid for layout, fixed 3 columns */}
        <section className="py-16">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {/* Feature 1 */}
              <FeatureCard
                // icon={assets.some_icon_1} // Replace with actual icon from assets if available
                title="Your Day Your Way"
                description="Flexible scheduling options designed to meet your needs."
              />
               {/* Feature 2 */}
              <FeatureCard
                // icon={assets.some_icon_2} // Replace with actual icon from assets if available
                title="Keep Everything on Track"
                description="Automated reminders and notifications keep you informed."
              />
               {/* Feature 3 */}
              <FeatureCard
                // icon={assets.some_icon_3} // Replace with actual icon from assets if available
                title="Collaborate Effortlessly"
                description="Share availability and coordinate meetings with ease."
              />
              {/* Feature 4 */}
              <FeatureCard
                // icon={assets.some_icon_4} // Replace with actual icon from assets if available
                title="Flexible Availability"
                description="Faculty can set custom availability slots easily."
              />
               {/* Feature 5 */}
              <FeatureCard
                // icon={assets.some_icon_5} // Replace with actual icon from assets if available
                title="Transparent Pricing"
                description="No hidden fees. Clear and predictable pricing models."
              />
               {/* Feature 6 */}
              <FeatureCard
                // icon={assets.some_icon_6} // Replace with actual icon from assets if available
                title="Instant Deployments"
                description="Launch servers in under 60 seconds with one-click provisioning."
              />
           </div>
        </section>

        {/* ----- Find by Subject Section ----- */}
        <section className="py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find by Subject</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </p>
            {/* Using grid for subjects, fixed 6 columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10">
                {specialityData.map((subject) => (
                    <SubjectCard
                        key={subject.speciality}
                        image={subject.image} // Use image from specialityData
                        name={subject.speciality}
                    />
                ))}
            </div>
        </section>

        {/* ----- Call to Action (CTA) Section ----- */}
        <section className="bg-[#e77979] rounded-lg text-white my-16">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">
                        Book Appointment<br />With 100+ Faculty
                    </h2>
                    <button className="bg-white text-[#e77979] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-150 ease-in-out">
                        Create account
                    </button>
                </div>
                {/* Image */}
                <div className="md:w-1/3 mt-6 md:mt-0">
                     {/* Assuming group_profiles or appointment_img is suitable */}
                    <img src={assets.group_profiles} alt="Illustration of diverse people" className="w-full h-auto" />
                </div>
            </div>
        </section>

      </main>

      {/* ----- Footer ----- */}
      {/* Reusing the same footer structure and style */}
      <footer className="bg-[#fffaf5] border-t border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Fixed 3 columns */}
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
          {/* <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            © 2025 Alchemist. All rights reserved.
          </div> */}
        </div>
      </footer>
    </>
  );
}

export default Home;
