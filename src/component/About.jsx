// src/component/AdminPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Admin.css";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  // 🔐 Logout handler
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    fetch("http://localhost:5000/api/contact", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error loading messages:", err));
  }, []);

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>📩 Contact Messages</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table className="messages-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.subject}</td>
                <td>{msg.message}</td>
                <td>
                  {msg.createdAt
                    ? new Date(msg.createdAt).toLocaleString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
