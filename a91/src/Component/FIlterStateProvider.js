import React, { createContext, useState, useContext } from 'react';

// Create Context
const FilterStateContext = createContext();

// Create a custom hook for easier access
export const useFilterState = () => useContext(FilterStateContext);

// Provider Component
export const FilterStateProvider = ({ children }) => {
    const [filterState, setFilterState] = useState("Select an agent");

    return (
        <FilterStateContext.Provider value={{ filterState, setFilterState }}>
            {children}
        </FilterStateContext.Provider>
    );
};