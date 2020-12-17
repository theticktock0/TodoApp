import {ADD_HISTORY, DELETE_HISTORY} from '../actions/types'

export const addHistory = (history) => (
    {
        type:ADD_HISTORY,
        original:history.original,
        discount:history.discount,
        final:history.q
    }
);

export const deleteHistory = (key) => (
    {
        type:DELETE_HISTORY,
        key:key
    }
);