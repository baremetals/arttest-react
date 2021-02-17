import { combineReducers } from '@reduxjs/toolkit'
import userReducer from 'features/users/userSlice'
import userDataReducer from 'features/users/userDataSlice'
import modalReducer from 'features/modal/modalSlice'

const rootReducer = combineReducers({
    user: userReducer,
    data: userDataReducer,
    modal: modalReducer
})

export default rootReducer