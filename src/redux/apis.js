import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNewPost = async (body) => {
  try {
    const response = await axios({
      method: "POST",
      url: `https://jsonplaceholder.typicode.com/posts`,
      data: body,
    });
    const data = await response.data;
    return { status: true, data };
  } catch (err) {
    console.log(err);
    return { status: false, error: "Internal Server Error!" };
  }
};

export const getPosts = createAsyncThunk("getPosts", async (body) => {
  try {
    const response = await axios({
      method: "GET",
      url: `https://jsonplaceholder.typicode.com/posts?_start=${body.start}&_limit=${body.limit}`,
    });
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
});

export const getSpecificPost = createAsyncThunk(
  "getSpecificPost",
  async (body) => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts/${body.id}`,
      });
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);
