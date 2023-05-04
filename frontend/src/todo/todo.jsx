import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm.jsx';
import TodoList from './todoList';

// this por padrão aponta para quem chamou a função, para apontar this para a classe Todo,
// independente de quem chamar a função, usamos a this.'function' = this.'function'.bind(this)

const URL = 'http://localhost:3003/api/todos';
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '', list: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value });
    }

    handleAdd() {
        const description = this.state.description;
        axios
            .post(URL, { description })
            .then(resp => console.log('Funcionou!'))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                />
                <TodoList />
            </div>
        );
    }
}
