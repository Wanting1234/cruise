import { configureStore } from "@reduxjs/toolkit";
import agentsSlice from "../features/agentsSlice";
import popupSlice from "../features/popupSlice";
import navigationSlice from "../features/navigationSlice";

export default configureStore({
  reducer: {
    agents: agentsSlice,
    popup: popupSlice,
    navigation: navigationSlice,
  },
});
