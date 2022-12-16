import {createSlice} from "@reduxjs/toolkit";

const selectedAgentIdSlice = createSlice({
    name: 'selectedAgent',
    initialState: -1,
    reducers: {
        selectCurrentAgentId: (state, action) => {
            state = action.payload
            return state;
        }
    },
})

export const {selectCurrentAgentId} = selectedAgentIdSlice.actions
export default selectedAgentIdSlice.reducer
