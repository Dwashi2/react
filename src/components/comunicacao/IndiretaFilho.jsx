import React from 'react'


export default props => {
    const cb = props.quandoClicar
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarAtributo = () => Math.random() > 0.5
    return (
        <div>
            <div>
                Son
           </div>
            <button onClick={
                _ =>
                    cb("Alber", gerarIdade(), gerarAtributo())

            }>
                Provide Information
           </button>
        </div>
    )
}