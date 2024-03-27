import { createSlice } from "@reduxjs/toolkit";
import {  getSpecificPost } from "./apis";

const postSlice = createSlice({
  name: "post",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setPost(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSpecificPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSpecificPost.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getSpecificPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = null;
      });
  },
});

export const { setPost } = postSlice.actions;
export default postSlice.reducer;
