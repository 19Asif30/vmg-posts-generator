import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bolder" to="/">
          Postify
        </Link>
        <ul></ul>

        <ul className="navbar-nav mb-2 flex-row mb-lg-0 gap-3">
          <li className="nav-item">
            <Link
              className={pathname === "/posts" ? "nav-link active" : "nav-link"}
              aria-current="page"
              to="/posts"
            >
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={
                pathname === "/new-post" ? "nav-link active" : "nav-link"
              }
              to="/new-post"
            >
              + New Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
