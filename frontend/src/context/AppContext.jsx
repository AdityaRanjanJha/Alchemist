import React, { createContext } from 'react';
// Import the facultyData array
import { facultyData } from '../assets/assets.js'; // Correct import

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    // Provide facultyData in the context value
    const value = { facultyData }; // Correct value

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;