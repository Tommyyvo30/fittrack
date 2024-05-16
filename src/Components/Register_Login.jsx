import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterLogin = () => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/fittrack/register.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Registration successful:", data);
      setIsRegistering(false); // Switch to the login form
    } else {
      const error = await response.json();
      console.error("Registration failed:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost/fittrack/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      console.error("Login failed");
    }
  };

  return (
    <div className="register-login-page">
      {isRegistering ? (
        <form className="register-form" onSubmit={handleRegister}>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Register</button>
          <button type="button" onClick={() => setIsRegistering(false)}>
            Already a member?
          </button>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <button type="button" onClick={() => setIsRegistering(true)}>
            Not a member yet?
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterLogin;
