import React from 'react';
import { assets, specialityData } from '../assets/assets.js';
import Header, { FeatureCard } from '../components/Header'; // Import Header (default) and FeatureCard (named)
import SubjectCard from '../components/Subject'; // Import SubjectCard (default)

function Home() {
  return (
    <>
      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">

        <Header />

        <section className="py-16">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              <FeatureCard
                // icon={assets.some_icon_1} // Add actual icon asset if available
                title="Your Day Your Way"
                description="Flexible scheduling options designed to meet your needs."
              />
              <FeatureCard
                // icon={assets.some_icon_2} // Add actual icon asset if available
                title="Keep Everything on Track"
                description="Automated reminders and notifications keep you informed."
              />
              <FeatureCard
                // icon={assets.some_icon_3} // Add actual icon asset if available
                title="Collaborate Effortlessly"
                description="Share availability and coordinate meetings with ease."
              />
              <FeatureCard
                // icon={assets.some_icon_4} // Add actual icon asset if available
                title="Flexible Availability"
                description="Faculty can set custom availability slots easily."
              />
              <FeatureCard
                // icon={assets.some_icon_5} // Add actual icon asset if available
                title="Transparent Pricing"
                description="No hidden fees. Clear and predictable pricing models."
              />
              <FeatureCard
                // icon={assets.some_icon_6} // Add actual icon asset if available
                title="Instant Deployments"
                description="Launch servers in under 60 seconds with one-click provisioning."
              />
           </div>
        </section>

        <section className="py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find by Subject</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-10">
                {specialityData.map((subject) => (
                    <SubjectCard
                        key={subject.speciality}
                        image={subject.image}
                        name={subject.speciality}
                    />
                ))}
            </div>
        </section>

        <section className="bg-[#e77979] rounded-lg text-white my-16">
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">
                        Book Appointment<br />With 100+ Faculty
                    </h2>
                    <button className="bg-white text-[#e77979] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-150 ease-in-out">
                        Create account
                    </button>
                </div>
                <div className="md:w-1/3 mt-6 md:mt-0">
                    <img src={assets.group_profiles} alt="Illustration of diverse people" className="w-full h-auto" />
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-[#F6F0E3] border-t border-gray-200">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Adjusted grid for responsiveness */}
            <div className="space-y-4">
               <div className="flex items-center">
                 <img className="h-8 w-auto mr-2" src={assets.logo} alt="Alchemist Logo" />
               </div>
               <p className="text-sm text-gray-600">
                 Lorem ipsum is placeholder text commonly used in the graphic, print,
                 and publishing industries for previewing layouts and visual mockups.
               </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h4>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Company</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Services</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Team</a>
              <a href="#" className="block text-sm text-gray-600 hover:text-[#e77979]">Privacy Policy</a>
            </div>

             <div className="space-y-2">
               <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Get In Touch</h4>
               <p className="text-sm text-gray-600">SRM University, Chennai - 603202</p>
               <p className="text-sm text-gray-600">+91 12345 67890</p>
               <p className="text-sm text-gray-600">alchemist@email.com</p>
             </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;