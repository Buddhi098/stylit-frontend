// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Request from "../../api_component/Request";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
    //   if (decodedToken.exp * 1000 < Date.now()) {
    //     localStorage.removeItem("token");
    //   } else {
    //     setUser(decodedToken);
    //   }
      setUser(decodedToken);
    }
    setLoading(false);
  }, []);

  const login = async (username, password, userRole) => {

    const data = {
      userName: username,
      password: password,
      userRole: userRole,
    };

    const response = await Request.post("/public/user/login", data);
    const { access_token, refresh_token } = response.data;
    localStorage.setItem("token", access_token);
    localStorage.setItem("refresh_token", refresh_token);

    const decodedToken = jwtDecode(access_token);
    setUser(decodedToken);

    console.log("Login successful", decodedToken);

  };

  const logout = () => {
    console.log("Logout successful");
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    setUser(null);
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
