import {createSlice} from "@reduxjs/toolkit";

const {actions, reducer: filterSlice} = createSlice({
    name: 'filter',
    initialState: 'All',
    reducers: {
        changeFilter: (state, action) => {
            state = action.payload
            return state
        },
    }
})

export const {changeFilter} = actions

export default filterSlice
