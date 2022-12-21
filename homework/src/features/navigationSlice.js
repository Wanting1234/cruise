import {createSlice} from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: true,
    reducers: {
        setNavigationState: (state, action) => {
            state = action.payload
            return state
        }
    },
})

export const {setNavigationState} = navigationSlice.actions
export default navigationSlice.reducer
