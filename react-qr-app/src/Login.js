import React, { useState } from "react";
function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(password);
  };
  return (
    <div className="login-container bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Enter Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;
