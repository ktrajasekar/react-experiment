import { combineReducers } from "redux";


const postReducer = (state = [], action) => {
    console.log(state);
    switch (action.type) {
        case "ADD_POST":
            return [...state, { text: action.payload.text, id: action.payload.id }]
        default: return state
    }
}

const rootReducer = combineReducers({
    posts: postReducer
});


export default rootReducer;