import {createSlice} from "@reduxjs/toolkit";

const {actions, reducer: selectedAgentIdSlice} = createSlice({
    name: 'selectedAgent',
    initialState: -1,
    reducers: {
        selectCurrentAgentId: (state, action) => {
            state = action.payload
            return state;
        }
    },
})

export const {selectCurrentAgentId} = actions
export default selectedAgentIdSlice
