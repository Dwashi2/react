import React, { Component } from 'react'
import './Contador.css'
import Dislpay from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    /*  constructor(props){
         super(props)
         
         this.state = {
             numero: props.numeroInicial
         }
     
     }
     */

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }


    /*  constructor(props){
             super(props)
             
             this.inc = this.inc.bind(this)
         
         }
         */


    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            //+ converte apra valor inteiro
            passo: novoPasso
        })
    }


    render() {
        return (
            <div className="Contador">
                <h2>Counter</h2>
                <Dislpay numero={this.state.numero}></Dislpay>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
            </div>
        )
    }
}

export default Contador