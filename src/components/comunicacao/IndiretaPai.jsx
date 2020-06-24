import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
let [nome, setNome] = useState('?')
let [idade, setIdade] = useState(0)
let [atritubo, setAtributo] = useState(false)


    function fornecerInforacoes(nome,idade,atritubo){
        setNome(nome)
        setIdade(idade)
        setAtributo(atritubo)
    }

    return(
        <div>
            <div>
            <span>{nome} </span>
            <span>{idade} </span>
            <span>{atritubo ? 'True' : 'False'}</span>
                </div>
          
           <IndiretaFilho quandoClicar={fornecerInforacoes}>


           </IndiretaFilho>
        </div>
    )
}