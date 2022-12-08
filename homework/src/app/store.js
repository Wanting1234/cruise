import { configureStore } from '@reduxjs/toolkit'
import agentSlice from "../features/agentSlice";

export default configureStore({
    reducer: {
        agents: agentSlice,
    },
})
