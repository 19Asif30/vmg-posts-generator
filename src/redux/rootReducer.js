import { combineReducers } from "@reduxjs/toolkit";
import posts from "./postsSlice";
import post from "./postSlice";

const rootReducer = combineReducers({
  posts,
  post,
});

export default rootReducer;
