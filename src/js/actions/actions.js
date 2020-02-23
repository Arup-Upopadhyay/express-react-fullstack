import {USER_SELECTED , USER_LIST} from './actionList';

const _userSelected = (user) => {
    return {
        type: USER_SELECTED,
        payload: user
    };
}; 

export const userSelected = (user) => {
    return (dispatch) => {
        setTimeout(() =>{
            dispatch(_userSelected(user))
        },0)
    }
}

const _userList = async () => {
    const URL = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(URL);

    const userList = await response.json();
    
    return {
        type: USER_LIST,
        payload: userList
    };
};

export const fetchUserList = () => {
    return (dispatch) => {
        _userList().then(userList => {
            dispatch(userList);
        });
    }
};
