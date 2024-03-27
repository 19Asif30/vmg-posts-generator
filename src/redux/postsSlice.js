import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./apis";

const postsSlice = createSlice({
  name: "newPost",
  initialState: {
    data: [],
    loading: false,
    error: null,
    currentPage: 1,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setPosts(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.data = [];
      }
      
      );
  },
});

export const { setCurrentPage, setPosts } = postsSlice.actions;
export default postsSlice.reducer;
