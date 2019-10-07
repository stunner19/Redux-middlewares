import * as ActionTypes from './types';

export function fetchUsers() {
    return {
        type : ActionTypes.FETCH_USERS,
        payload : [
            { id : '1', name : 'Jane'},
            { id : '2', name : 'Alex'},
            { id : '3', name : 'Jim'}
        ]
    }
}