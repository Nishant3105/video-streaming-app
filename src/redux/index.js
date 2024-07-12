import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice'
import userReducer from './userSlice'

const store=configureStore({
    name: '',
    reducers: {
        movie: movieReducer,
        user: userReducer
    }
})

export default store