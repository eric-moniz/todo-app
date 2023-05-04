import React, { Component } from "react";
import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm.jsx";
import TodoList from "./todoList";

// this por padrão aponta para quem chamou a função, para apontar this para a classe Todo,
// independente de quem chamar a função, usamos a this.'function' = this.'function'.bind(this)
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        console.log(this);
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleAdd={this.handleAdd} />
                <TodoList />
            </div>
        );
    }
}
