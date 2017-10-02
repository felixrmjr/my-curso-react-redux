import React from 'react'
import ReactDOM from 'react-dom'
import Field from './field'

// ReactDOM é a parte do react que interage com o DOM
ReactDOM.render(
   <Field initialValue='Teste' />
, document.getElementById('app'))