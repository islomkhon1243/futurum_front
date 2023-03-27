import React from 'react';
import './Courses.css';

const Courses = () => {
    const courses = [
        {
            title: 'Introduction to Python Programming',
            instructor: 'John Smith',
            image: 'https://via.placeholder.com/300x200',
            description: 'Learn the basics of Python programming language and start building simple applications.',
            rating: 4.5,
            enrolled: 2000,
            price: 99.99
        },
        {
            title: 'Web Development with React',
            instructor: 'Jane Doe',
            image: 'https://via.placeholder.com/300x200',
            description: 'Build web applications using React, a popular JavaScript library for building user interfaces.',
            rating: 4.2,
            enrolled: 1500,
            price: 129.99
        },
        {
            title: 'Machine Learning Fundamentals',
            instructor: 'Adam Lee',
            image: 'https://via.placeholder.com/300x200',
            description: 'Learn the basics of machine learning and start building simple models to make predictions.',
            rating: 4.8,
            enrolled: 3000,
            price: 149.99
        }
    ];

    return (
        <div className="courses-container">
            <h2>Popular Courses</h2>
            {courses.map((course, index) => (
                <div className="course" key={index}>
                    <div className="course-image">
                        <img src={course.image} alt={course.title} />
                    </div>
                    <div className="course-details">
                        <h3>{course.title}</h3>
                        <p>{course.instructor}</p>
                        <p>{course.description}</p>
                        <div className="course-stats">
                            <span>Rating: {course.rating}</span>
                            <span>Enrolled: {course.enrolled}</span>
                            <span>Price: ${course.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Courses;
