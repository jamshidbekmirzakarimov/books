import { createSlice } from "@reduxjs/toolkit";

interface LoaderType {
  isLoading: boolean;
}

const initialState: LoaderType = {
  isLoading: false,
};

const loaderSlice = createSlice({
  initialState,
  name: "loader",
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    endLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { endLoading, startLoading } = loaderSlice.actions;
export default loaderSlice.reducer;
