import React, { useEffect } from "react";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/postsSlice";
import { getPosts } from "../redux/apis";
import { useNavigate } from "react-router-dom";
import { SkeletonTable } from "../components/SkeletonLoading";

let PageSize = 10;

export default function Posts() {
  const { data, currentPage, loading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;

    dispatch(getPosts({ start: firstPageIndex, limit: 10 }));
  }, [currentPage]);

  const columnDetails = [
    // {
    //   name: "User ID",
    //   minWidth: "100px",
    // },
    // {
    //   name: "ID",
    //   minWidth: "80px",
    // },
    {
      name: "Title",
      minWidth: "200px",
    },
    {
      name: "Description",
      minWidth: "350px",
    },
  ];

  return (
    <>
      <>
        <p className="text-info">
          *Tap on the rows to access additional information about the post.
        </p>
        <div className="table-container">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                {columnDetails.map((item) => (
                  <th
                    key={item.name.split("")[0]}
                    style={{ minWidth: item.minWidth }}
                  >
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && <SkeletonTable pageSize={PageSize} />}

              {data &&
                !loading &&
                data.map((item) => {
                  return (
                    <tr
                      onClick={() => navigate(`/post/${item.id}`)}
                      className="clickable-tr"
                      key={item.id}
                    >
                      {/* <td>{item.userId}</td>
                      <td>{item.id}</td> */}
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={100}
            pageSize={PageSize}
            onPageChange={(page) => dispatch(setCurrentPage(page))}
          />
        </div>
      </>
    </>
  );
}
