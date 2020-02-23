import {combineReducers} from 'redux';

const activeUser = (state = null , action) => {
    return state; 
};

const userList = (state = [] , action) => {
    return state;
};

const allReducers = combineReducers({activeUser , userList});

export default allReducers;
