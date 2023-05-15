import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';
import { changeDescription, search, add, clear } from './todoActions';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);
    }

    // componente do react que sempre será executado quando o componente for exibido
    componentWillMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { add, clear, search, description } = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description);
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const { add, search, description } = this.props;

        return (
            <div role={'form'} className="todoForm">
                <Grid cols="12 9 10">
                    <input
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}
                    />
                </Grid>

                <Grid cols="12 3 2">
                    <IconButton
                        styles={'primary'}
                        icon="plus"
                        onClick={() => add(description)}
                    />
                    <IconButton
                        styles="info"
                        icon="search"
                        onClick={() => {
                            search();
                        }}
                    />
                    <IconButton
                        styles="default"
                        icon="close"
                        onClick={this.props.clear}
                    />
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => ({ description: state.todo.description });
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search, add, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
