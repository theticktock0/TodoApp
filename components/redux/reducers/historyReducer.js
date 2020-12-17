import {ADD_HISTORY, DELETE_HISTORY} from '../actions/types'

const initialState = {
    data:[]
}

const historyReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_HISTORY:
            return {
                ...state,
                data: state.data.concat({
                    key: Math.random(),
                    original: action.original,
                    final: action.final,
                    discount: action.discount
            })
        };
        case DELETE_HISTORY:
            return{
                ...state,
                data: state.data.filter((item) => item.key !== action.key)
            };
        default:
            return state;
    }
}

export default historyReducer;