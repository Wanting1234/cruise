import { configureStore } from '@reduxjs/toolkit'
import agentSlice from "../features/agentSlice";
import popupSlice from "../features/popupSlice";
import navigationSlice from "../features/navigationSlice";

export default configureStore({
    reducer: {
        agents: agentSlice,
        popup: popupSlice,
        navigation: navigationSlice,
    },
})
