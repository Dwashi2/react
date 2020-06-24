import React from 'react'
import produtos from '../../../data/produtos'
import './Tabelaprodutos.css'


export default props => {

    function getLinhas(){
        return  produtos.map((produto, i) => {
                return (
                    <tr key={produto.id} className={i % 2 === 0 ? 'Even' : 'Odd' }>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>R$: {produto.preco}</td>
                    </tr>
                )
            })
        
    }

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {getLinhas()}
                    
                </tbody>
            </table>
        </div>
    )
}