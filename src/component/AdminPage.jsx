import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/contact`,  {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          localStorage.removeItem("authToken");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => setMessages(data))
      .catch((err) => console.error("Error loading messages:", err));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleLogout} style={{ marginBottom: "15px", padding: "6px 12px", background: "red", color: "#fff" }}>
        Logout
      </button>
      <h1>📩 Contact Messages</h1>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%", marginTop: "15px" }}>
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
                <td>{new Date(msg.id).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
