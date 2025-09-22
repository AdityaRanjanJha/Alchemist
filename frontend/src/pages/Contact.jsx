import React from "react";
// Optional: Import icons if you use a library like react-icons
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  // Basic form state (optional, if you want to build a form)
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  // const handleSubmit = (e) => { e.preventDefault(); console.log('Form submitted:', formData); /* Add form submission logic */ };

  return (
    <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">

        {/* Page Title */}
        <h1 className="text-4xl font-bold mb-4 text-[#22223b] tracking-tight">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          We'd love to hear from you! Reach out with any questions or feedback.
        </p>

        {/* Contact Information Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-12 border border-gray-200 text-left">
          <h2 className="text-2xl font-semibold text-[#22223b] mb-6 text-center">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-5 text-gray-700">
              <div className="flex items-start gap-3">
                {/* Optional Icon: <FaMapMarkerAlt className="text-[#D55E5D] text-xl mt-1 flex-shrink-0" /> */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">Office Address</h3>
                  <p className="leading-relaxed">
                    Alchemist Teachers Office<br />
                    123 Knowledge Avenue,<br />
                    Learning City, LC 56789
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Optional Icon: <FaPhoneAlt className="text-[#D55E5D] text-lg" /> */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                  <a href="tel:+919876543210" className="hover:text-[#D55E5D] transition-colors duration-200">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* Optional Icon: <FaEnvelope className="text-[#D55E5D] text-lg" /> */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Email</h3>
                  <a href="mailto:contact@alchemistteachers.com" className="hover:text-[#D55E5D] transition-colors duration-200">contact@alchemistteachers.com</a>
                </div>
              </div>
            </div>

            {/* Quick Message / Info */}
            <div className="text-gray-700 space-y-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Have Questions?</h3>
              <p className="leading-relaxed">
                For inquiries about booking sessions, partnerships, or general feedback, please don't hesitate to reach out.
              </p>
              <p className="leading-relaxed">
                Our dedicated team aims to respond to all queries within 24 business hours.
              </p>
              {/* Replace button with a simple message or link to a form page */}
              {/* Or implement a simple contact form here */}
              <div className="pt-4">
                 <a
                    href="mailto:contact@alchemistteachers.com" // Link directly to email
                    className="inline-block bg-[#D55E5D] text-white font-medium px-6 py-2 rounded-lg shadow hover:bg-[#b94c4c] transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D]"
                 >
                    Send us an Email
                 </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-16 border-t border-gray-300 pt-6">
          &copy; {new Date().getFullYear()} Alchemist Teachers. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Contact;