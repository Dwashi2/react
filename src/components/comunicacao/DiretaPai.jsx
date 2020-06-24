import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return(
        <div>
            <DiretaFilho texto="1 - Son " numero={30} bool={false}></DiretaFilho>
            <DiretaFilho texto="2 - Son " numero={10} bool={true}></DiretaFilho>
        </div>
    )
}