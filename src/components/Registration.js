import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Registration.css";

const Registration = ({ onRegister }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
        } else {
            try {
                const response = await axios.post("/api/users", { email, password });
                const user = response.data;
                onRegister(user);
            } catch (error) {
                setErrorMessage(error.response.data.message);
            }
        }
    };

    return (
        <div className="registration-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account?{" "}
                <Link to="/login" className="login-link">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Registration;
