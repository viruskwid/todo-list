import { configureStore } from '@reduxjs/toolkit'
import todos from './TodoSlice'
export const store=configureStore({
    reducer:{
        todos
    }
})