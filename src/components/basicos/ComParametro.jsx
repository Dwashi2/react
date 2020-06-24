import React from 'react'

export default function ComParametro(props){
    const status = props.nota >= 7 ? 'approved' : 'good'
    const notaInt = Math.ceil(props.nota)
    return( 
    <div>
        <h2>{props.Titulo}</h2>
    <p>
        <strong>{props.aluno} </strong> 
        has note
        <strong> {notaInt} </strong>
        and it was 
        <strong> {status}!</strong>
    </p>
    </div>
    )
}