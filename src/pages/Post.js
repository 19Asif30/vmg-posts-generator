import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSpecificPost } from "../redux/apis";
import { PostLoading } from "../components/SkeletonLoading";

const Post = () => {
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificPost({ id: id }));
  }, []);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/posts"}>Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Post {id}
          </li>
        </ol>
      </nav>
      {loading && <PostLoading />}
      {data && !loading && (
        <div>
          <div className="post-title">
            <h2>{data.title}</h2>
          </div>
          <div className="post-description">{data.body}</div>
          <br />
          <div className="fw-bold">Created by User ID: {data.userId}</div>

        </div>
      )}
    </>
  );
};

export default Post;
