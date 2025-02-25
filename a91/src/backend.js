import axios from "axios";

// const apiUrl = "http://localhost:3001/api";
const apiUrl ="https://a91-backend.onrender.com/api"

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/register`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Registration successful:", response.data);
    return response.data; // Optional: Return the response data for further usage
  } catch (error) {
    if (error.response) {
      // Handle errors from the server
      console.error("Registration failed:", error.response.data);
    } else {
      // Handle network or other errors
      console.error("An error occurred:", error.message);
    }
    throw error; // Optional: Re-throw error for further handling
  }
};

const loginUser = async (userEmail) => {
  try {
    // Make POST request to the backend API
    const response = await axios.post(`${apiUrl}/auth/login`, {
      userEmail, // Send userEmail in the request body
    });

    // Handle successful login
    if (response) {
      // Optionally, store the token in localStorage or cookies
      localStorage.setItem("authToken", response.data.token);

      return response.data; // Return the response data for further use
    }
  } catch (error) {
    // Handle errors
    if (error.response) {
      console.error("Error:", error.response.data.message);
    } else {
      console.error("Error:", error.message);
    }

    throw error; // Re-throw the error for handling at a higher level if needed
  }
};

const sendOtp = async (email) => {
  try {
    const response = await axios.post(`${apiUrl}/auth/send-otp`, {
      email, // dynamically send either email or phone
    });
    if (response) {
      console.log("OTP sent successfully");
      return true; // Indicating OTP was sent successfully
    } else {
      console.error("Failed to send OTP");
      return false;
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    return false;
  }
};

const validateOtp = async (emailOrPhone, otp, type = "email") => {
  try {
    const response = await axios.post(`${apiUrl}/auth/validate-otp`, {
      [type]: emailOrPhone, // dynamically use either email or phone
      otp: otp, // OTP entered by the user
    });
    if (response) {
      console.log("OTP validated successfully");
      return true; // Indicating OTP is valid
    } else {
      console.error("Invalid OTP");
      return false; // OTP is invalid
    }
  } catch (error) {
    console.error("Error validating OTP:", error);
    return false; // Error in OTP validation
  }
};

const fetchUser = async (token) => {
  try {
    const response = await axios.get(`${apiUrl}/auth/getuser`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const addAgent = async (formData) => {
  try {
    const response = await axios.post(`${apiUrl}/agent/addAgent`, formData);
    return response.data;
  } catch (error) {
    console.error("Error registering agent", error);
  }
};

export const updateAgent = async (agentId,formData) => {
  try {
    const response = await axios.put(`${apiUrl}/agent/updateagent/${agentId}`, formData);
    return response.data;
  } catch (error) {
    console.error("Error registering agent", error);
  }
};


export const getAgentById = async (agentId) => {
  try {
    const response = await axios.get(`${apiUrl}/agent/getagent/${agentId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching agent:", error);
    return null;
  }
};

export const getAllAgent = async () => {
  try {
    const response = await axios.get(`${apiUrl}/agent/getallagent`);
    return response.data;
  } catch (error) {
    console.error("Error fetching agent:", error);
    return null;
  }
};

export const addProperty = async (formData) => {
  try {
    const response = await axios.post(`${apiUrl}/property/addproperty`, formData);
    return response;
  } catch (error) {
    console.error("Error registering agent", error);
  }
};

export const getPropertyByUserIdAndPropertyType = async (userId,propertyType) => {
  try {
    const response = await axios.get(`${apiUrl}/property/getproperty/${userId}/${propertyType}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching agent:", error);
    return null;
  }
};

export { registerUser, sendOtp, validateOtp, loginUser, fetchUser };
