import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import { getUsersSaga, deleteUserSaga, createUserSaga} from "./usersSaga";

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, 
    getUsersSaga);
  yield takeLatest(ACTION_TYPES.DELETE_USER_ACTION, 
    deleteUserSaga);
  yield takeLatest(ACTION_TYPES.CREATE_USER_ACTION, 
    createUserSaga);
}

export default rootSaga;
