import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './componente'

// ReactDOM é a parte do react que interage com o DOM
ReactDOM.render(
    <div>
        <Primeiro />
        <Segundo />
    </div>
, document.getElementById('app'))