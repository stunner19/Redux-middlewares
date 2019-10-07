import * as ActionTypes from './types';
import axios from 'axios';

export function fetchUsers() {

    const response = axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        type : ActionTypes.FETCH_USERS,
        payload : response
    }
}