import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAgents, modifyAgent} from '../api/api';

const initialState = {
    agents: [],
    fetchStatus: 'idle',
    selectedAgent: -1,
};

export const fetchAgents = createAsyncThunk('agents/fetchAgents', async () => getAgents());

export const updateAgent = createAsyncThunk('agents/updateAgent', async (agent) => modifyAgent(agent));

const agentsSlice = createSlice({
    name: 'agents',
    initialState,
    reducers: {
        selectCurrentAgentId: (state, action) => {
            state.selectedAgent = action.payload;
            return state;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAgents.fulfilled, (state, action) => {
                state.fetchStatus = 'succeeded';
                state.agents = state.agents.concat(action.payload);
            })
            .addCase(updateAgent.fulfilled, (state, action) => {
                const updatedAgent = action.payload;
                const index = state.agents.findIndex((agent) => agent.id === updatedAgent.id);
                if (index !== -1) state.agents[index] = updatedAgent;
            });
    },
});

export default agentsSlice.reducer;
export const {selectCurrentAgentId} = agentsSlice.actions;
export const selectAllAgents = (state) => state.agents.agents;
export const selectAgentById = (state, agentId) => state.agents.agents.find((agent) => agent.id === agentId);

export const countAgentsNumberWithProps = (state, selectedProps) => {
    if (selectedProps === 'building' || selectedProps === 'idle') {
        return state.agents.agents.filter((agent) => agent.status === selectedProps).length;
    }
    return state.agents.agents.filter((agent) => agent.type === selectedProps).length;
};
