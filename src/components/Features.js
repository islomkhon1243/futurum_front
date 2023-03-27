import React from 'react';
import './Features.css';

const Features = () => {
    return (
        <div className="features-container">
            <section className="features-section">
                <div className="feature-icon">
                    <i className="fas fa-briefcase"></i>
                </div>
                <h2 className="feature-heading">Professional Development</h2>
                <p className="feature-description">
                    Improve your skills and advance your career with our professional development programs.
                </p>
            </section>
            <section className="features-section">
                <div className="feature-icon">
                    <i className="fas fa-graduation-cap"></i>
                </div>
                <h2 className="feature-heading">Quality Education</h2>
                <p className="feature-description">
                    Learn from the best instructors and get a high-quality education that will help you succeed.
                </p>
            </section>
            <section className="features-section">
                <div className="feature-icon">
                    <i className="fas fa-users"></i>
                </div>
                <h2 className="feature-heading">Community</h2>
                <p className="feature-description">
                    Join a community of learners and connect with like-minded people from around the world.
                </p>
            </section>
            <section className="features-section">
                <div className="feature-icon">
                    <i className="fas fa-book"></i>
                </div>
                <h2 className="feature-heading">Flexible Learning</h2>
                <p className="feature-description">
                    Learn on your own schedule with our flexible online courses and programs.
                </p>
            </section>
        </div>
    );
};

export default Features;
