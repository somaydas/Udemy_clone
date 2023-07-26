import { useEffect, useState } from "react";

import axios from "axios";
import React from 'react';

const Uploaded_courses = () => {
    const [data, setData] = useState([]);


    function getData() {
        axios
            .get("http://localhost:8000/courses")
            .then((res) => {
                setData(res.data);
            });
    }
    useEffect(() => {
        getData();
    }, []);




    const tableStyle = {
        width: '75%',
        margin: '20px auto',
        border: '1px solid #ddd',
        borderRadius: '5px',
        overflow: 'hidden'
    };

    const thStyle = {
        backgroundColor: '#f2f2f2',
        padding: '10px',
        borderBottom: '2px solid #ddd'
    };

    const tdStyle = {
        padding: '10px',
        borderBottom: '1px solid #ddd'
    };

    const evenRowStyle = {
        backgroundColor: '#f2f2f2'
    };



    return (

        <div style={tableStyle}>
            <h1>Courses added by users</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Course Name</th>
                        <th style={thStyle}>Category</th>
                        <th style={thStyle}>Price</th>
                        <th style={thStyle}>Description</th>
                        <th style={thStyle}>Creator</th>
                        <th style={thStyle}>Approved</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={row.id} style={index % 2 === 0 ? evenRowStyle : {}}>
                            <td style={tdStyle}>{row.id}</td>
                            <td style={tdStyle}>{row.cname}</td>
                            <td style={tdStyle}>{row.category}</td>
                            <td style={tdStyle}>{row.price}</td>
                            <td style={tdStyle}>{row.description}</td>
                            <td style={tdStyle}>{row.creator}</td>
                            <td style={tdStyle}>{row.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Uploaded_courses;