import { createSlice } from '@reduxjs/toolkit';

const navigationSlice = createSlice({
  name: 'navigation',
  initialState: {
    isNavigationShow: true,
  },
  reducers: {
    setIsNavigationShow: (state, action) => {
      state.isNavigationShow = action.payload;
      return state;
    },
  },
});

export const { setIsNavigationShow } = navigationSlice.actions;
export default navigationSlice.reducer;
