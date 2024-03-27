import React, { useState } from "react";
import { toast } from "react-toastify";
import { addNewPost } from "../redux/apis";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loading";

const NewPost = () => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [charCount, setCharCount] = useState(0);
  const maxChars = 1000;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleDescriptionChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxChars) {
      setDescription(inputText);
      setCharCount(inputText.length);
    }
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = await addNewPost({ title: title, body: description });
    if (data.status) {
      toast.success("Added new post!");
      navigate("/");
    } else toast.error("Failed to add post!");
    setLoading(false);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleAddPost}>
        <h2 className="text-center">Add a Post</h2>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            rows="5"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
          <div className="char-count">
            {charCount}/{maxChars}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {
        loading && <Loader />
      }
    </div>
  );
};

export default NewPost;
