import React, { createContext, useState, useContext } from 'react';

// Create Context
const FilterStateContext = createContext();

// Create a custom hook for easier access
export const useFilterState = () => useContext(FilterStateContext);

// Provider Component
export const FilterStateProvider = ({ children }) => {
    const [filterState, setFilterState] = useState("Select an agent");
    const [selectedPurpose, setSelectedPurpose] = useState("Purpose");
    const [selectedPurposeBanner,setSelectedPurposeBanner] = useState("Purpose");

    return (
        <FilterStateContext.Provider value={{ filterState, setFilterState,selectedPurpose,setSelectedPurpose,selectedPurposeBanner,setSelectedPurposeBanner }}>
            {children}
        </FilterStateContext.Provider>
    );
};