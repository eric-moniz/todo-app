import React from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm.jsx';
import TodoList from './todoList';

const Todo = () => (
    <div>
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
    </div>
);

export default Todo;
