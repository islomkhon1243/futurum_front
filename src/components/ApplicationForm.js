import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        degree: '',
        major: '',
        university: '',
        gpa: '',
        experience: '',
        interests: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className="application-form-container">
            <h1 className="application-form-heading">Apply to IITU</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="degree">Degree:</label>
                    <select id="degree" name="degree" value={formData.degree} onChange={handleInputChange} required>
                        <option value="">Select your degree</option>
                        <option value="bachelor">Bachelor's</option>
                        <option value="master">Master's</option>
                        <option value="doctoral">Doctoral</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="major">Major:</label>
                    <input type="text" id="major" name="major" value={formData.major} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="university">University:</label>
                    <input type="text" id="university" name="university" value={formData.university} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="gpa">GPA:</label>
                    <input type="number" id="gpa" name="gpa" value={formData.gpa} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="experience">Relevant Experience:</label>
                    <textarea id="experience" name="experience" value={formData.experience} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="interests">Interests:</label>
                    <textarea id="interests" name="interests" value={formData.interests} onChange={handleInputChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ApplicationForm;

