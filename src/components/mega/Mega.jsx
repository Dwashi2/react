import React, { useState } from 'react'
import './Mega.css'

export default props => {

    function gerarNumerosNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
        return (array.includes(aleatorio)
            ? gerarNumerosNaoContido(min, max, array)
            : aleatorio)

    }

    function gerarNumeros(qtde) {
        const numeros = Array(qtde).fill(0).reduce((nums) => {
            const novoNumero = gerarNumerosNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
            .sort((n1, n2) => n1 - n2)
        //sort = ordem crescente n1-n2 
        //ordem decrescente n2-n1
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 6)
    const numeroIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numeroIniciais)


    return (
        <div className='Mega'>
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>
                    Quantity of numbers</label>
                <input
                    min='3'
                    max='17'
                    type='number'
                    value={qtde}
                    onChange={e => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumeros(+e.target.value))

                    }}>
                </input>

            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Generate Numbers
                </button>
        </div>
    )

}