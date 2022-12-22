import {createSlice} from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        popupBoxState: false,
        position: {x:0, y:0}
    },
    reducers: {
        setPopupBoxState: (state, action) => {
            state.popupBoxState = action.payload
            return state
        },
        setPosition: (state, action) => {
            state.position.x = action.payload.x;
            state.position.y = action.payload.y;
            return state;
        }
    },
})

export const {setPopupBoxState, setPosition} = popupSlice.actions
export default popupSlice.reducer
