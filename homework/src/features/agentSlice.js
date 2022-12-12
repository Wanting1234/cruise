import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import request from "../api/api";

const initialState = {
    agents: [],
    fetchStatus: 'idle',
    updateStatus: 'idle',
    error: null,
}

export const fetchAgents = createAsyncThunk('agents/fetchAgents', async () => {
    return await request.getAgents()
})

export const updateAgent = createAsyncThunk('agents/updateAgent', async agent => {
    return await request.updateAgent(agent);
})


const agentsSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAgents.pending, (state,) => {
                state.fetchStatus = 'loading'
            })
            .addCase(fetchAgents.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                state.agents = state.agents.concat(action.payload)
            })
            .addCase(fetchAgents.rejected, (state, action) => {
                state.fetchStatus = 'failed'
                state.error = action.error.message
            })
            .addCase(updateAgent.pending, (state,) => {
                state.updateStatus = 'loading'
            })
            .addCase(updateAgent.fulfilled, (state, action) => {
                const updatedAgent = action.payload;
                const index = state.agents.findIndex(agent => agent.id === updatedAgent.id)
                if (index!== -1) state.agents[index] = updatedAgent;
            })
            .addCase(updateAgent.rejected, (state, action) => {
                state.updateStatus = 'failed'
            })
    },
})

export default agentsSlice.reducer

export const selectAllAgents = (state) => state.agents.agents
