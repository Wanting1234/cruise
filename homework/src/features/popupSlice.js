import {createSlice} from "@reduxjs/toolkit";

const {actions, reducer: popupSlice} = createSlice({
    name: 'popup',
    initialState: false,
    reducers: {
        setPopupBoxState: (state, action) => {
            state = action.payload
            return state
        }
    },
})

export const {setPopupBoxState} = actions
export default popupSlice
