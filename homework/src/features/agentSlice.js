import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import request from "../api/api";

const initialState = {
    agents: [],
    fetchStatus: 'idle',
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
            .addCase(fetchAgents.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded'
                state.agents = state.agents.concat(action.payload)
            })
            .addCase(updateAgent.fulfilled, (state, action) => {
                const updatedAgent = action.payload;
                const index = state.agents.findIndex(agent => agent.id === updatedAgent.id)
                if (index!== -1) state.agents[index] = updatedAgent;
            })
    },
})

export default agentsSlice.reducer

export const selectAllAgents = (state) => state.agents.agents
