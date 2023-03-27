import React, { useState } from 'react';
import './Universities.css';

const universitiesData = [
    { rank: 1, name: "Al-Farabi Kazakh National University", students: 22894, language: "Kazakh, Russian", foundation: 1934 },
    { rank: 2, name: "L.N. Gumilyov Eurasian National University", students: 12000, language: "Kazakh, Russian, English", foundation: 1996 },
    { rank: 3, name: "Kazakh National Agrarian University", students: 10714, language: "Kazakh, Russian", foundation: 1953 },
    { rank: 4, name: "Satbayev University", students: 8000, language: "Kazakh, Russian, English", foundation: 1940 },
    { rank: 5, name: "Kazakh-British Technical University", students: 5450, language: "Kazakh, English, Russian", foundation: 2001 }
];

const Universities = () => {
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSort = (column) => {
        if (column === sortBy) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortOrder("asc");
        }
    };

    const sortedData = universitiesData.sort((a, b) => {
        if (sortBy === "name") {
            return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (sortBy === "students") {
            return sortOrder === "asc" ? a.students - b.students : b.students - a.students;
        } else if (sortBy === "language") {
            return sortOrder === "asc" ? a.language.localeCompare(b.language) : b.language.localeCompare(a.language);
        } else if (sortBy === "foundation") {
            return sortOrder === "asc" ? a.foundation - b.foundation : b.foundation - a.foundation;
        }
        return 0;
    });

    return (
        <div className="container">
            <h1 className="text-center my-5">Top Kazakhstani Universities</h1>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Rank</th>
                    <th onClick={() => handleSort("name")} style={{ cursor: "pointer" }}>
                        Name{sortBy === "name" ? sortOrder === "asc" ? " ▲" : " ▼" : ""}
                    </th>
                    <th onClick={() => handleSort("students")} style={{ cursor: "pointer" }}>
                        Number of Students{sortBy === "students" ? sortOrder === "asc" ? " ▲" : " ▼" : ""}
                    </th>
                    <th onClick={() => handleSort("language")} style={{ cursor: "pointer" }}>
                        Educating Language{sortBy === "language" ? sortOrder === "asc" ? " ▲" : " ▼" : ""}
                    </th>
                    <th onClick={() => handleSort("foundation")} style={{ cursor: "pointer" }}>
                        Year of Foundation{sortBy === "foundation" ? sortOrder === "asc" ? " ▲" : " ▼" : ""}
                    </th>
                </tr>
                </thead>
                <tbody>
                {sortedData.map((university, index) => (<tr key={university.rank}>
                        <td>{university.rank}</td>
                        <td>{university.name}</td>
                        <td>{university.students}</td>
                        <td>{university.language}</td>
                        <td>{university.foundation}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Universities;