// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Request from "../../api_component/Request";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let refreshTimeout;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 > Date.now()) {
          setUser(decodedToken);
          logExpirationTime(decodedToken);
          scheduleTokenRefresh(decodedToken.exp);
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

      logExpirationTime(decodedToken);
      scheduleTokenRefresh(decodedToken.exp);

      if (access_token) {
        return true;
      } else {
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
        setError("Network error: Please check your connection and try again.");
      }
      console.error("There was an error adding the user:", error.response?.data);

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
    const refreshTime = Math.max(timeUntilExpiry - 30000, 0); // Refresh 30 seconds before expiry, but not less than 0

    clearTimeout(refreshTimeout);
    refreshTimeout = setTimeout(refreshAccessToken, refreshTime);
    console.log(`Token refresh scheduled in ${Math.floor(refreshTime / 1000)} seconds`);
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
    setUser(null);
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
