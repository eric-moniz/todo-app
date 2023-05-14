import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

// Action creators
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value,
});

/**
 * @returns a lista de tarefas em ordem decrescente
 */
export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`);

    return {
        type: 'TODO_SEARCHED',
        payload: request,
    };
};
