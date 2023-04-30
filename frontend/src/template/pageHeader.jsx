import React from 'react';

/**
 * props:
 * name
 * small
 */

export default props => (
    <header className='page-header'>
        <h2>
            {props.name} <small>{props.small}</small>
        </h2>
    </header>
);
