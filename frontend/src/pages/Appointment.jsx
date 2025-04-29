import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appointment = () => {
    // Get the teacherId directly from URL params (assuming it's the simple ID now)
    const { teacherId } = useParams();
    console.log('[Appointment] Teacher ID from URL:', teacherId); // Log 1

    // Get the facultyData array from context
    const { facultyData } = useContext(AppContext);
    console.log('[Appointment] Faculty Data from Context:', facultyData); // Log 2

    const [teacherInfo, setTeacherInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('[Appointment] useEffect triggered. facultyData available:', !!facultyData, 'teacherId:', teacherId); // Log 3

        setIsLoading(true);
        setError(null);
        setTeacherInfo(null);

        if (facultyData && facultyData.length > 0) {
            try {
                // Find the teacher by comparing the ID from the URL params
                // Convert teacherId from URL (string) to number for comparison if IDs are numbers
                const numericTeacherId = parseInt(teacherId, 10);
                const foundTeacher = facultyData.find(
                    teacher => teacher.id === numericTeacherId
                );

                console.log('[Appointment] Attempting to find teacher with ID:', numericTeacherId); // Log 4
                console.log('[Appointment] Found teacher:', foundTeacher); // Log 5

                if (foundTeacher) {
                    setTeacherInfo(foundTeacher);
                } else {
                    console.warn(`[Appointment] Teacher with ID "${teacherId}" not found.`);
                    setError(`Teacher not found: ID ${teacherId}`);
                }
            } catch (err) {
                console.error("[Appointment] Error during find operation:", err);
                setError("An error occurred while searching for the teacher.");
            } finally {
                setIsLoading(false);
            }
        } else if (facultyData === null || facultyData === undefined) {
             console.log('[Appointment] Waiting for facultyData from context...');
             setIsLoading(true);
        } else {
             console.warn('[Appointment] facultyData from context is an empty array.');
             setError('No teacher data available.');
             setIsLoading(false);
        }
    }, [facultyData, teacherId]);

    if (isLoading) {
        return <div>Loading teacher information...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!teacherInfo) {
        return <div>Teacher information could not be loaded.</div>;
    }

    // Render the appointment page content using teacherInfo
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Appointment with {teacherInfo.name}</h1>
            <div className="flex flex-col md:flex-row gap-6">
                <img src={teacherInfo.image} alt={teacherInfo.name} className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-md" />
                <div className="flex-1">
                    <p className="text-lg font-semibold">{teacherInfo.designation}</p>
                    <a href={teacherInfo.profile_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">
                        View Profile
                    </a>
                    <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <h2 className="text-xl font-semibold mb-3">Book Appointment</h2>
                        <p className="text-gray-500">Appointment booking functionality will be added here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;