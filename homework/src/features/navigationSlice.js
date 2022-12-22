import {createSlice} from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
       navigationState: true,
    },
    reducers: {
        setNavigationState: (state, action) => {
            state.navigationState = action.payload
            return state
        }
    },
})

export const {setNavigationState} = navigationSlice.actions
export default navigationSlice.reducer
