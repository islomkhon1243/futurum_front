import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
    return (
        <div className="user-profile-container">
            <div className="user-profile-header">
                <h1>My Profile</h1>
            </div>
            <div className="user-profile-content">
                <div className="user-profile-sidebar">
                    <ul>
                        <li className="active">Profile</li>
                        <li>Settings</li>
                        <li>Activity</li>
                        <li>Progress</li>
                    </ul>
                </div>
                <div className="user-profile-main">
                    <form>
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="first-name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="last-name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" id="confirm-password" name="confirm-password" />
                        </div>
                        <div className="form-group">
                            <button type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
