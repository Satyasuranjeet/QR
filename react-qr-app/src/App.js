import React, { useState } from "react";
import CryptoJS from "crypto-js";
import Login from "./Login";
import QRGenerator from "./QRGenerator";
import "./App.css";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const storedHash ="0d45f5fd462b8c70bffb10021ac1bcff3f58f29b1faf7568595095427d42812c";
  const handleLogin = (password) => {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    if (hashedPassword === storedHash) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="App flex items-center justify-center h-screen bg-gray-100">
      {isAuthenticated ? <QRGenerator /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
