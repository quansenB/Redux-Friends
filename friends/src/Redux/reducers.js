import { combineReducers } from "redux";
import * as types from "./actions.js";

function friendsReducer(state= [], action){
    switch(action.type){
        case (""): 
        case (" "):
        default: 
            return state;
    }
}

export const combinedReducer = combineReducers({
  friends: friendsReducer
});
