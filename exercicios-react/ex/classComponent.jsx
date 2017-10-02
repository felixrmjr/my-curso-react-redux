import React, {Component} from 'react'

export default class ClassComponent extends Component{
    // Componente React baseado em classe é obrigatorio ter pelo menos
    // uma função, a função Render

    render() {
        return (
            <h1>{this.props.value}</h1>
        )
    }
}