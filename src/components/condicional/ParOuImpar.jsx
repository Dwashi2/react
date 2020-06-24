import React from 'react'

export default props => {
    const isPar = props.numero %2 === 0
    return(
        <div>
            { isPar ? <span>Even</span> :  <span>Odd</span>}
        </div>
    )
}