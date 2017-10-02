import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

// ReactDOM é a parte do react que interage com o DOM
ReactDOM.render(
   <ClassComponent label='Contador' initialValue={10} />
, document.getElementById('app'))