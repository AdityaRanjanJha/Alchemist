import React from 'react';

// --- Reusable Subject Card Component ---
function Subjects({ image, name }) {
    return (
        <div className="text-center group cursor-pointer">
            <div className="mb-3 inline-block p-4 bg-gradient-to-br from-pink-100 to-red-100 rounded-full group-hover:scale-105 transition-transform duration-200">
                 <img src={image} alt={name} className="w-16 h-16 object-contain" />
            </div>
            <p className="text-sm font-medium text-gray-700">{name}</p>
        </div>
    );
}

export default Subjects;