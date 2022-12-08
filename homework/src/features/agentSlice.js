import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getAgents} from "../api/api";

const initialState = {
    agents: [],
    status: 'idle',
    error: null,
}

export const fetchAgents = createAsyncThunk('agents/fetchAgents', async () => {
    return await getAgents()
})

const agentsSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAgents.pending, (state, ) => {
                state.status = 'loading'
            })
            .addCase(fetchAgents.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.agents = state.agents.concat(action.payload)
            })
            .addCase(fetchAgents.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default agentsSlice.reducer

export const selectAllAgents = (state) => state.agents.agents
