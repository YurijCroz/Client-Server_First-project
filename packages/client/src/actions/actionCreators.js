import ACTION_TYPES from "./actionTypes";

export const getUsersAction = () => ({
    type: ACTION_TYPES.GET_USERS_ACTION
});

export const getUsersRequest = () => ({
    type: ACTION_TYPES.GET_USERS_REQUEST
});

export const getUsersSuccess = (data) => ({
    type: ACTION_TYPES.GET_USERS_SUCCESS,
    data
});

export const getUsersError = (err) => ({
    type: ACTION_TYPES.GET_USERS_ERROR,
    err
});


export const deleteUserAction = (id) => ({
    type: ACTION_TYPES.DELETE_USER_ACTION,
    id
});

export const deleteUserRequest = () => ({
    type: ACTION_TYPES.DELETE_USER_REQUEST
});

export const deleteUserSuccess = (id) => ({
    type: ACTION_TYPES.DELETE_USER_SUCCESS,
    id
});

export const deleteUserError = (err) => ({
    type: ACTION_TYPES.DELETE_USER_ERROR,
    err
});

export const createUserAction = (data) => ({
    type: ACTION_TYPES.CREATE_USER_ACTION,
    data
});

export const createUserRequest = () => ({
    type: ACTION_TYPES.CREATE_USER_REQUEST
});

export const createUserSuccess = (data) => ({
    type: ACTION_TYPES.CREATE_USER_SUCCESS,
    data
});

export const createUserError = (err) => ({
    type: ACTION_TYPES.CREATE_USER_ERROR,
    err
});