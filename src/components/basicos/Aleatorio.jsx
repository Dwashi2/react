import React from 'react'

export default props => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Random Value</h2>
            <p><strong>Minimum value: </strong> {min}</p>
            <p><strong>Maximum value: </strong> {max}</p>
            <p><strong>Chosen value: </strong> {aleatorio}</p>
        </div>
    );
};