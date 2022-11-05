import { put } from "redux-saga/effects";
import {
    getUsersSuccess,
    getUsersRequest,
    deleteUserRequest,
    getUsersError,
    createUserRequest,
    deleteUserSuccess,
    deleteUserError,
    createUserSuccess,
    createUserError
} from "../actions/actionCreators";
import * as api from './../api';

export function * getUsersSaga(){
    yield put(getUsersRequest());
    try{
        const{
            data: {data}
        } = yield api.getUsers();
        //console.log('users:',data);
        yield put(getUsersSuccess(data));
    } catch(err){
        yield put(getUsersError(err));
    }
}

export function * deleteUserSaga({id}){
    yield put(deleteUserRequest());
    try{
        yield api.deleteUser(id);
        yield put(deleteUserSuccess(id));
    } catch(err){
        yield put(deleteUserError(err));
    }
}

export function * createUserSaga({data}){
    yield put(createUserRequest());
    console.log(data)
    try{
        const{
            data: {data}
        } = yield api.createUser(data);
        console.log('new user:',data);
        yield put(createUserSuccess(data));
    } catch(err){
        yield put(createUserError(err));
    }
}
