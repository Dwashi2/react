import React, { useState } from 'react'
import './Input.css'
import { findByLabelText } from '@testing-library/react'

export default props => {
    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor}
                    onChange={quandoMudar}>
                </input>
                <p>Read only</p>
                <input value={valor}
                    readOnly>
                </input>
                <p>Uncontrolled Component</p>
                <input value={undefined}
                    >
                </input>
            </div>
        </div>
    )
}