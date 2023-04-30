import React from 'react';

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-reader'>
                <a
                    href='#'
                    className='navbar-brand'
                >
                    <i className='fa fa-calendar-check-o'>Todo App</i>
                </a>
            </div>

            <div
                id='navbar'
                className='mavbar-collapse collapse'
            >
                <ul className='nav navbar-nav'>
                    <li>
                        <a href='#/todos'>Tarefas</a>
                    </li>
                    <li>
                        <a href='#/about'>Sobre</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
