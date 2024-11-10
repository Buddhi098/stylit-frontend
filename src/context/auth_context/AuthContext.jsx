// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Request from "../../api_component/Request";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let refreshTimeout;
  let inactivityTimeout;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser(decodedToken);
          logExpirationTime(decodedToken);
          scheduleTokenRefresh(decodedToken.exp);
          setupInactivityTimeout();
        } else {
          logout();
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
        logout();
      }
    }
    setLoading(false);

    return () => {
      clearTimeout(refreshTimeout);
      clearTimeout(inactivityTimeout);
      removeEventListeners();
    };
  }, []);

  const login = async (username, password, userRole, setError) => {
    const data = {
      userName: username,
      password: password,
      userRole: userRole,
    };

    try {
      const response = await Request.post("/public/user/login", data);
      const { access_token, refresh_token, id } = response.data;
      localStorage.setItem("token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      localStorage.setItem("id", id);

      const decodedToken = jwtDecode(access_token);
      setUser(decodedToken);

      // console.log("Login successful", decodedToken);
      logExpirationTime(decodedToken);
      scheduleTokenRefresh(decodedToken.exp);
      setupInactivityTimeout();

      if(access_token){
        return true;
      }else{
        setError("Invalid email or password.");
        return false;
      }
      
    } catch (error) {
      if (error.response) {
        
        const statusCode = error.response.status;
        switch (statusCode) {
          case 400:
            setError("Invalid email or password.");
            break;
          case 403:
            setError("Forbidden: You don't have access to this resource.");
            break;
          case 404:
            setError("Not Found: The requested resource was not found.");
            break;
          case 500:
            setError("Internal Server Error: Please try again later.");
            break;
          case 503:
            setError("Server Not Found: Please try again later.");
            break;
          default:
            setError("An unexpected error occurred. Please try again.");
            break;
        }
      } else {
        // Handle errors without a response (e.g., network errors)
        setError("Network error: Please check your connection and try again.");
      }
      console.error(
        "There was an error adding the user:",
        error.response?.data
      );

      return false;
    }
  };

  const refreshAccessToken = async () => {
    console.log("Refreshing access token...");
    try {
      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken) {
        const response = await Request.post("/public/user/getAccessToken", {
          refreshToken: refreshToken,
        });
        const { access_token, refresh_token } = response.data;
        localStorage.setItem("token", access_token);
        localStorage.setItem("refresh_token", refresh_token);

        const decodedToken = jwtDecode(access_token);
        setUser(decodedToken);

        // console.log("Token refreshed", decodedToken);
        logExpirationTime(decodedToken);
        scheduleTokenRefresh(decodedToken.exp);
      } else {
        logout();
      }
    } catch (error) {
      console.error("Failed to refresh access token:", error);
      logout();
    }
  };

  const scheduleTokenRefresh = (exp) => {
    const currentTime = Date.now();
    const expirationTime = exp * 1000;
    const timeUntilExpiry = expirationTime - currentTime;
    const refreshTime = Math.max(timeUntilExpiry - 60000, 0); // Refresh 1 minute before expiry, but not less than 0

    clearTimeout(refreshTimeout);
    refreshTimeout = setTimeout(refreshAccessToken, refreshTime);
    console.log(
      `Token refresh scheduled in ${Math.floor(refreshTime / 1000)} seconds`
    );
  };

  const logExpirationTime = (token) => {
    const expirationTime = new Date(token.exp * 1000);
    console.log("Token will expire at:", expirationTime.toLocaleString());
  };

  const logout = () => {
    console.log("Logout successful");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    clearTimeout(refreshTimeout);
    clearTimeout(inactivityTimeout);
    removeEventListeners(); // Remove event listeners on logout
    setUser(null);
  };

  const setupInactivityTimeout = () => {
    clearTimeout(inactivityTimeout);

    inactivityTimeout = setTimeout(() => {
      console.log("User has been inactive for 14 minutes. Logging out...");
      logout();
    }, 840000); // 14 minutes in milliseconds

    addEventListeners();
  };

  const resetInactivityTimeout = () => {
    clearTimeout(inactivityTimeout);
    setupInactivityTimeout(); // Reset the inactivity timer
  };

  const addEventListeners = () => {
    window.addEventListener("mousemove", resetInactivityTimeout);
    window.addEventListener("keypress", resetInactivityTimeout);
  };

  const removeEventListeners = () => {
    window.removeEventListener("mousemove", resetInactivityTimeout);
    window.removeEventListener("keypress", resetInactivityTimeout);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, refreshAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
