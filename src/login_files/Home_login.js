import { useEffect, useState } from "react";

import axios from "axios";
import React from 'react';
import Uploaded_courses from "../components/Uploaded_courses";
const Home_login = () => {

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
    const [data, setData] = useState([]);


    function getData() {
        axios
            .get("https://udemy-clone-ri0m.onrender.com/user")
            .then((res) => {
                setData(res.data);
            });
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>

            <div style={tableStyle}>
                <h1>Users</h1>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Username</th>
                            <th style={thStyle}>Full Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Phone</th>
                            <th style={thStyle}>Role</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={row.id} style={index % 2 === 0 ? evenRowStyle : {}}>
                                <td style={tdStyle}>{row.id}</td>
                                <td style={tdStyle}>{row.name}</td>
                                <td style={tdStyle}>{row.email}</td>
                                <td style={tdStyle}>{row.phone}</td>
                                <td style={tdStyle}>{row.role}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br />
            {/*eslint-disable-next-line*/}
            <Uploaded_courses />
        </>
    );
}



export default Home_login;