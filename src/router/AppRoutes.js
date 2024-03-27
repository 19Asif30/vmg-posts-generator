import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import NewPost from "../pages/NewPost";
import Post from "../pages/Post";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Navigate to={"/posts"} />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/new-post" element={<NewPost />} />
      <Route path="/post">
        <Route path=":id" element={<Post />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
