import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";   // ✅ CORRECT

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("authToken");
  let isValid = false;

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const now = Date.now() / 1000;
      if (decoded.exp > now) isValid = true;
    } catch (e) {
      isValid = false;
    }
  }

  if (!isValid) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
