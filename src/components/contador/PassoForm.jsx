import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="passoINput">
                Increment:
                        <input id='passoINput' type="number"
                    value={props.passo}
                    onChange={e => props.setPasso(+e.target.value)}>
                </input>
            </label>
        </div>
    )
}