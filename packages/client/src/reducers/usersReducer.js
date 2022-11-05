import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
    users: [],
    isFetching: false,
    error: null
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.GET_USERS_REQUEST: {
            return {...state, isFetching:true,  error: null}
        }
        case ACTION_TYPES.GET_USERS_SUCCESS: {
            const {data} = action;
            return {...state, isFetching: false, users: [...data]}
        }
        case ACTION_TYPES.GET_USERS_ERROR:{
            const {err} = action;
            return {...state, isFetching: false, error: err}
        }
        case ACTION_TYPES.DELETE_USER_REQUEST: {
            return {...state, isFetching:true,  error: null}
        }
        case ACTION_TYPES.DELETE_USER_SUCCESS: {
            const {id} = action;
            const {users} = state;
            const updUsers = [...users];
            updUsers.splice(updUsers.findIndex(i => i.id === id), 1);
            return {...state, isFetching:false, users: updUsers};
        }
        case ACTION_TYPES.DELETE_USER_ERROR: {
            const {err} = action;
            return {...state, isFetching: false, error: err}
        }
        case ACTION_TYPES.CREATE_USER_REQUEST: {
            return{...state, isFetching:true,  error: null}
        }
        case ACTION_TYPES.CREATE_USER_SUCCESS: {
            const {data} = action;
            const {users} = state;
            return {...state, isFetching: false, users: [...users, data]}
        } 
        case ACTION_TYPES.CREATE_USER_ERROR: {
            const {err} = action;
            return {...state, isFetching: false, error: err}
        }
        default: return state;
    }
}
export default usersReducer;