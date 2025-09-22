import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import toast, { Toaster } from 'react-hot-toast'; // Import toast

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const Appointment = () => {
    const { teacherId } = useParams();
    const { facultyData } = useContext(AppContext);

    const [teacherInfo, setTeacherInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Booking slot state
    const [teacherSlots, setTeacherSlots] = useState([]);
    const [slotIndex, setSlotIndex] = useState(0);
    const [slotTime, setSlotTime] = useState('');
    const [datesForButtons, setDatesForButtons] = useState([]); // Store dates for buttons

    // Fetch teacher info
    useEffect(() => {
        setIsLoading(true);
        setError(null);
        setTeacherInfo(null);

        if (facultyData && facultyData.length > 0) {
            try {
                const numericTeacherId = parseInt(teacherId, 10);
                const foundTeacher = facultyData.find(
                    teacher => teacher.id === numericTeacherId
                );
                if (foundTeacher) {
                    setTeacherInfo(foundTeacher);
                } else {
                    setError(`Teacher not found: ID ${teacherId}`);
                }
            // eslint-disable-next-line no-unused-vars
            } catch (err) {
                setError("An error occurred while searching for the teacher.");
            } finally {
                setIsLoading(false);
            }
        } else if (facultyData === null || facultyData === undefined) {
            // Keep loading if facultyData is not yet available
            setIsLoading(true);
        } else {
            // facultyData is an empty array
            setError('No teacher data available.');
            setIsLoading(false);
        }
    }, [facultyData, teacherId]);

    // Generate booking slots and dates for buttons (8 AM - 5 PM)
    useEffect(() => {
        if (!teacherInfo) return;

        const slots = [];
        const buttonDates = []; // Array to hold dates for the next 7 days
        let today = new Date();

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            currentDate.setHours(0, 0, 0, 0); // Normalize date to start of day
            buttonDates.push(new Date(currentDate)); // Store the date for the button

            let daySlots = [];
            let startHour = 8; // Default start time: 8:00 AM
            let startMinute = 0;

            // For today, start from next available half-hour slot within the 8 AM - 5 PM window
            if (i === 0) {
                const now = new Date();
                const currentHour = now.getHours();
                const currentMinute = now.getMinutes();

                // Check if current time is within the booking window (8:00 AM to 4:59 PM)
                if (currentHour >= 8 && currentHour < 17) {
                    // If past the 30-minute mark, start from the next hour
                    if (currentMinute > 30) {
                        startHour = currentHour + 1;
                        startMinute = 0;
                    } else {
                        // Otherwise, start from the current hour's 30-minute mark
                        startHour = currentHour;
                        startMinute = 30;
                    }
                    // Ensure start time doesn't go past 5 PM
                    if (startHour >= 17) {
                         startHour = 18; // Mark as no slots available
                    }
                } else if (currentHour >= 17) {
                    // If past 5:00 PM, no slots available for today
                    startHour = 18; // Set startHour beyond the end time to generate no slots
                }
                // If before 8:00 AM, default startHour (8) and startMinute (0) are used
            }

            let slotTimeObj = new Date(currentDate);
            slotTimeObj.setHours(startHour, startMinute, 0, 0);

            let endTime = new Date(currentDate);
            endTime.setHours(17, 0, 0, 0); // Slots end *before* 5:00 PM (last slot is 4:30 PM)

            // Generate slots only if the start time is before the end time
            while (slotTimeObj < endTime) {
                daySlots.push({
                    date: new Date(currentDate), // Store the date part
                    time: slotTimeObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
                });
                // Move to the next 30-minute interval
                slotTimeObj = new Date(slotTimeObj.getTime() + 30 * 60000);
            }
            slots.push(daySlots);
        }
        setTeacherSlots(slots);
        setDatesForButtons(buttonDates); // Set the dates for the buttons
        setSlotIndex(0); // Reset to the first day
        setSlotTime(''); // Reset selected time
    }, [teacherInfo]); // Rerun when teacherInfo is loaded

    // Console log for debugging (optional)
    useEffect(() => {
        if (teacherInfo) {
            console.log('Selected teacher:', teacherInfo);
        }
        if (teacherSlots.length) {
            console.log('Generated booking slots:', teacherSlots);
        }
        if (datesForButtons.length) {
            console.log('Dates for buttons:', datesForButtons);
        }
    }, [teacherInfo, teacherSlots, datesForButtons]);

    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen text-gray-700">Loading teacher information...</div>;
    }
    if (error) {
        return <div className="flex justify-center items-center min-h-screen text-red-600 font-semibold">Error: {error}</div>;
    }
    if (!teacherInfo) {
        return <div className="flex justify-center items-center min-h-screen text-gray-600">Teacher information could not be loaded.</div>;
    }

    const handleBooking = () => {
        if (!slotTime || !teacherSlots[slotIndex] || teacherSlots[slotIndex].length === 0) {
            toast.error("Please select a date and time slot.", {
                style: {
                    background: '#333',
                    color: '#fff',
                },
                icon: '⚠️',
            });
            return;
        }
        const selectedDate = datesForButtons[slotIndex];
        const formattedDate = selectedDate.toLocaleDateString('en-CA'); // YYYY-MM-DD format

        // Create the new appointment object
        const newAppointment = {
            teacherId: teacherInfo.id, // Use the teacher's ID
            date: formattedDate,
            time: slotTime,
        };

        // Simulate booking API call delay (optional)
        const bookingPromise = new Promise((resolve, reject) => {
            // Simulate API call
            setTimeout(() => {
                // Simulate success/failure (e.g., 90% success rate)
                if (Math.random() > 0.1) {
                    // --- Save to localStorage on Success ---
                    try {
                        const existingAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
                        existingAppointments.push(newAppointment);
                        localStorage.setItem("appointments", JSON.stringify(existingAppointments));
                        resolve(newAppointment); // Resolve the promise on success
                    } catch (error) {
                        console.error("Failed to save appointment to localStorage:", error);
                        reject(new Error("Failed to save booking locally.")); // Reject if localStorage fails
                    }
                    // --- End Save to localStorage ---
                } else {
                    reject(new Error("Simulated booking failure.")); // Reject on simulated failure
                }
            }, 1000); // 1 second delay
        });


        toast.promise(
            bookingPromise,
            {
                loading: 'Booking appointment...',
                success: `Appointment booked with ${teacherInfo.name} on ${formattedDate} at ${slotTime}`,
                error: (err) => `Booking failed: ${err.message || 'Please try again.'}`, // Display error message
            },
            {
                style: {
                    minWidth: '250px',
                    background: '#333', // Dark background for toast
                    color: '#fff', // White text
                },
                success: {
                    duration: 4000, // Longer duration for success
                    icon: '✅',
                },
                error: {
                    icon: '❌',
                },
            }
        );

        // Optionally reset selection after booking attempt (maybe only on success?)
        // bookingPromise.then(() => setSlotTime(''));
    };


    return (
        <div className="min-h-screen  py-10 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
            {/* Toaster component for displaying notifications */}
            <Toaster position="top-center" reverseOrder={false} />
            <div className="max-w-4xl mx-auto bg-[#f8f5ee] border border-gray-300 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Teacher Card */}
                <div className="flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
                    <img
                        src={teacherInfo.image || '/assets/default-avatar.png'}
                        alt={teacherInfo.name}
                        // Reduced photo size
                        className="w-40 h-52 md:w-48 md:h-64 object-cover rounded-lg border-2 border-[#D55E5D] flex-shrink-0 shadow-md"
                    />
                    <div className="flex-1 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-1"> {/* Reduced margin bottom */}
                            <span className="text-2xl md:text-3xl font-bold text-black">{teacherInfo.name}</span>
                            <img src="/assets/verified-icon.svg" alt="Verified" className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                         {/* Added Designation */}
                        <p className="text-md md:text-lg text-gray-800 font-semibold mb-1">
                            {teacherInfo.designation || 'Designation N/A'} {/* Display designation */}
                        </p>
                        <p className="text-sm md:text-base text-gray-700 font-medium mb-1">
                            {teacherInfo.speciality}
                        </p>
                        {/* Added Mock Cabin Number */}
                        <p className="text-sm md:text-base text-gray-600 font-medium">
                            Cabin: C-101 {/* Mock Cabin Number */}
                        </p>
                        {/* Removed Department */}
                        {/*
                        <p className="text-xs text-gray-500 mt-2">
                            Experience: {teacherInfo.experience} years
                        </p>
                        <p className="text-xs text-gray-500">
                            Fees: ${teacherInfo.fees}
                        </p>
                         */}
                    </div>
                </div>

                {/* Booking Slots Section */}
                <div className="px-6 md:px-8 py-6 border-t border-gray-200"> {/* Lighter border */}
                    <p className="text-lg md:text-xl font-semibold text-black mb-6 text-center">Select a Booking Slot</p>
                    {/* Day Selection Buttons */}
                    <div className="flex gap-3 items-center justify-center mb-8 overflow-x-auto pb-3"> {/* Increased margin bottom and padding bottom */}
                        {datesForButtons.map((date, idx) => (
                            <button
                                key={idx}
                                className={`
                                    flex flex-col items-center justify-center flex-shrink-0 min-w-[70px] px-3 py-2 rounded-lg border transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D]
                                    ${slotIndex === idx
                                        ? 'bg-[#D55E5D] text-white font-semibold shadow-md border-[#D55E5D]'
                                        : 'bg-white border-gray-300 text-gray-700 hover:border-[#D55E5D] hover:text-black hover:shadow-sm'}
                                `}
                                onClick={() => { setSlotIndex(idx); setSlotTime(''); }}
                            >
                                <span className={`text-sm font-bold ${slotIndex === idx ? 'text-white' : 'text-black'}`}>
                                    {daysOfWeek[date.getDay()]}
                                </span>
                                <span className={`text-xs mt-1 ${slotIndex === idx ? 'text-gray-100' : 'text-gray-500'}`}>
                                    {date.getDate()}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Time Slot Selection Buttons */}
                    {teacherSlots[slotIndex] && teacherSlots[slotIndex].length > 0 ? (
                        <div className="flex gap-3 items-center justify-center mb-10 flex-wrap max-w-lg mx-auto"> {/* Increased margin bottom, centered container */}
                            {teacherSlots[slotIndex].map((slot, idx) => (
                                <button
                                    key={idx}
                                    className={`
                                        px-5 py-2 rounded-md border transition duration-200 ease-in-out text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D]
                                        ${slot.time === slotTime
                                            ? 'bg-[#D55E5D] text-white shadow border-[#D55E5D]'
                                            : 'bg-white text-gray-700 border-gray-300 hover:border-[#D55E5D] hover:text-black hover:shadow-sm'}
                                    `}
                                    onClick={() => setSlotTime(slot.time)}
                                >
                                    {slot.time}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 mb-10 font-medium">No available slots for this day.</p> // Increased margin bottom
                    )}


                    {/* Booking Button */}
                    <div className="text-center">
                        <button
                            className="w-full max-w-xs bg-[#D55E5D] hover:bg-[#b94c4c] text-white text-base font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed disabled:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D55E5D]"
                            disabled={!slotTime || !teacherSlots[slotIndex] || teacherSlots[slotIndex].length === 0}
                            onClick={handleBooking} // Uses updated handleBooking with toast and localStorage
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;