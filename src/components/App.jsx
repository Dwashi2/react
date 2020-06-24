import React from 'react'
import '../App.css'

import ParOuImpar from '../components/condicional/ParOuImpar';
import TabelaProdutos from '../components/basicos/repeticao/TabelaProdutos';
import ListaAlunos from '../components/basicos/repeticao/ListaAlunos';
import Familia from '../components/basicos/Familia';
import Card from '../components/layout/Card';
import Aleatorio from '../components/basicos/Aleatorio'
import Primeiro from '../components/basicos/Primeiro';
import ComParametro from '../components/basicos/ComParametro';
import Fragmento from '../components/basicos/Fragmento';
import FamiliaMembro from '../components/basicos/FamiliaMembro';
import UsuarioInfo from '../components/condicional/UsuarioInfo';
import DiretaPai from './comunicacao/DiretaPai';
import IndiretaPai from './comunicacao/IndiretaPai';
import Input from './formulario/Input'
import Contador from './contador/Contador'
import Mega from './mega/Mega'


export default () => (
  <div className='App'>
    <h1>Fundamentos React </h1>
    <div className='Cards'>

    <Card titulo="#13 - Mega "
        color="#B9006E">
        <Mega qtde={8}></Mega>
      </Card>

    <Card titulo="#12 - Counter "
        color="#424242">
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo="#11 - Controlled Componet "
        color="#E45F56">
        <Input></Input>
      </Card>

      <Card titulo="#10 - Indirect Communication "
        color="#8BAD39">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Direct Communication "
        color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Conditional Rendering"
        color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: 'Daniel' }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: 'danielvertigo@hotmail.com' }}></UsuarioInfo>
        <UsuarioInfo usuario={{}}></UsuarioInfo>
      </Card>


      <Card titulo="#07 - Repetition Challange"
        color="#3A9AD9">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetition"
        color="#FF4C56">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Component with children"
        color="#00C8F8">
        <Familia sobrenome="Ignacio">
          <FamiliaMembro nome="Daniel" ></FamiliaMembro>
          <FamiliaMembro nome="Jules"  ></FamiliaMembro>
          <FamiliaMembro nome="Spread operator" ></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo="#04 - Random Challenge"
        color="#FA6900">
        <Aleatorio min={1} max={60}></Aleatorio>
      </Card>

      <Card titulo="#03 - Fragment" color="#E94C6F">
        <Fragmento></Fragmento>
      </Card>

      <Card titulo="#02 - With Parameter" color="#E8B71A">
        <ComParametro
          Titulo="Student situation"
          aluno="Daniel"
          nota={9.5} >
        </ComParametro>
      </Card>

      <Card titulo="#01 - First Componemt" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
