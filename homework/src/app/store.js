import { configureStore } from '@reduxjs/toolkit'
import agentSlice from "../features/agentSlice";
import selectedAgentIdSlice from "../features/selectedAgentIdSlice";
import popupSlice from "../features/popupSlice";
import positionSlice from "../features/positionSlice";
import filterSlice from "../features/filterSlice";

export default configureStore({
    reducer: {
        agents: agentSlice,
        selectedAgent: selectedAgentIdSlice,
        popup: popupSlice,
        position: positionSlice,
        filter: filterSlice,
    },
})
