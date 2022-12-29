import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    isPopupShow: false,
    position: { x: 0, y: 0 },
  },
  reducers: {
    setIsPopupShow: (state, action) => {
      state.isPopupShow = action.payload;
      return state;
    },
    setPosition: (state, action) => {
      state.position.x = action.payload.x;
      state.position.y = action.payload.y;
      return state;
    },
  },
});

export const { setIsPopupShow, setPosition } = popupSlice.actions;
export default popupSlice.reducer;
