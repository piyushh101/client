import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";   // ✅ import API URL

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
const res = await fetch(`${API_BASE_URL}/api/login`, {   // ✅ use config
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error("Invalid credentials");

      const data = await res.json();
      localStorage.setItem("authToken", data.token);

      navigate("/admin");
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Admin Login</h2>
      <form
        onSubmit={handleLogin}
        style={{
          display: "inline-block",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", margin: "10px auto", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 15px",
            background: "goldenrod",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
