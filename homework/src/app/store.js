import { configureStore } from '@reduxjs/toolkit'
import agentSlice from "../features/agentSlice";
import selectedAgentIdSlice from "../features/selectedAgentIdSlice";
import popupSlice from "../features/popupSlice";

export default configureStore({
    reducer: {
        agents: agentSlice,
        selectedAgent: selectedAgentIdSlice,
        popup: popupSlice,
    },
})
