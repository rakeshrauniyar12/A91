import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../backend.js"; // Import the fetchUser method

// Create Auth Context
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider Component
export const UserContext = ({ children }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const login = async (token) => {
        localStorage.setItem("authToken", token);
        setIsLoggedIn(true);
        try {
            const userData = await fetchUser(token);
            console.log("UserDara",userData)
            setCurrentUser(userData);
        } catch (error) {
            logout();
        }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        setCurrentUser(null);
        navigate("/");
    };

    // On app initialization, fetch user details
    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            fetchUser(token)
                .then(userData => {
                    setCurrentUser(userData);
                    setIsLoggedIn(true);
                })
                .catch(() => logout());
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
