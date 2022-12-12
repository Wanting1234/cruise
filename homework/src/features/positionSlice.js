import {createSlice} from "@reduxjs/toolkit";

const {actions, reducer: positionSlice} = createSlice({
    name: 'position',
    initialState: {
        x:0,
        y:0,
    },
    reducers: {
        setPosition: (state, action) => {
            state.x = action.payload.x;
            state.y = action.payload.y;
            return state;
        }
    },
})

export const {setPosition} = actions

export default positionSlice
