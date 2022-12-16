import {createSlice} from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: 'popup',
    initialState: false,
    reducers: {
        setPopupBoxState: (state, action) => {
            state = action.payload
            return state
        }
    },
})

export const {setPopupBoxState} = popupSlice.actions
export default popupSlice.reducer
