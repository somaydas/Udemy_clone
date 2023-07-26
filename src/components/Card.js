import React from 'react';

const Cardc = ({ title, description }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Cardc;
