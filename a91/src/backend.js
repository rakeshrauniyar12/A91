import axios from "axios";

const apiUrl = "http://localhost:3001/api";
// const apiUrl ="https://a91-backend.onrender.com/api"

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
      console.log("Login successful!");
      console.log("Token:", response.data.token);

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
        console.log('OTP sent successfully');
        return true; // Indicating OTP was sent successfully
      } else {
        console.error('Failed to send OTP');
        return false;
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      return false;
    }
  };

  const validateOtp = async (emailOrPhone, otp, type = 'email') => {
    try {
      const response = await axios.post(`${apiUrl}/auth/validate-otp`, {
        [type]: emailOrPhone, // dynamically use either email or phone
        otp: otp, // OTP entered by the user
      });
      if (response) {
        console.log('OTP validated successfully');
        return true; // Indicating OTP is valid
      } else {
        console.error('Invalid OTP');
        return false; // OTP is invalid
      }
    } catch (error) {
      console.error('Error validating OTP:', error);
      return false; // Error in OTP validation
    }
  };
export { registerUser,sendOtp,validateOtp,loginUser };
