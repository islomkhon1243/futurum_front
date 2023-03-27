import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

// import mongoose from "mongoose";

//mongoose.connect('mongodb+srv://islomkhon1243:islomkhon1243@cluster0.alcnfvk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const User = require('./User');



const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMessage("Please fill in all fields.");
        } else {
            const user = await User.findOne({ email, password });
            if (!user) {
                setErrorMessage("Invalid email or password.");
            } else {
                onLogin({ email, password });
            }
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account?{" "}
                <Link to="/registration" className="register-link">
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;