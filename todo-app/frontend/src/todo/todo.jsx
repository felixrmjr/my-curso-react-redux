import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component {

    constructor(props){
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {

        console.log(this)
        // const description = this.state.description
        // axios.post(URL, { description })
        //     .then(resp => this.refresh())
    }

    render(){
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        )
    }
}