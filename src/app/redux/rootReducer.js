import { combineReducers } from '@reduxjs/toolkit'
import userReducer from 'features/users/userSlice'
import usernameReducer from 'features/userData/usernameSlice'
// import modalReducer from 'features/modal/modalSlice'
import uIReducer from 'features/ui/uiSlice'


const rootReducer = combineReducers({
    user: userReducer,
    username: usernameReducer,
    // modal: modalReducer,
    ui: uIReducer
})

export default rootReducer