import { combineReducers } from '@reduxjs/toolkit'
import userReducer from 'features/users/userSlice'
import userInfoReducer from 'features/contests/contestSlice'
// import modalReducer from 'features/modal/modalSlice'
import uIReducer from 'features/ui/uiSlice'


const rootReducer = combineReducers({
    user: userReducer,
    userInfo: userInfoReducer,
    // modal: modalReducer,
    ui: uIReducer
})

export default rootReducer