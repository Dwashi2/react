import React from 'react'
import './Card.css';

export default (props) => {

    const cardStyle = {
        /*Caso nao tenha cor, então sera #F00*/ 
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }

    return (
        <div className='Card' style={cardStyle}>
            <div className="Title">
                {props.titulo}
            </div>
            <div className="Content">
                {props.children}
                </div>
        </div>
    )
}