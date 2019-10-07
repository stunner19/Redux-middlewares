import * as ActionTypes from '../actions/types';

export default function(state = [],action){
    switch(action.type){
        case ActionTypes.FETCH_USERS :
            return [...state,...action.payload];    // important.
        default :
            return state;
    }
}