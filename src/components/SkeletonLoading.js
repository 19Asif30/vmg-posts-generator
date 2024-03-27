import React from "react";

export const PostLoading = () => {
  return (
    <div>
      <p className="card-text post-skeleton placeholder-glow">
        <span className="placeholder col-6"></span>
        <br />
        <br />
        <span className="placeholder col-10"></span>
      </p>
    </div>
  );
};

export const SkeletonTable = ({ pageSize }) => {
  const mapArray = [...new Array(pageSize)].map((_, index) => index);
  return (
    <>
      {mapArray.map((number) => (
        <tr key={number}>
         
          <td>
            <p className="card-text post-skeleton placeholder-glow">
              <span className="placeholder col-12"></span>
            </p>{" "}
          </td>
          <td>
            <p className="card-text post-skeleton placeholder-glow">
              <span className="placeholder col-12"></span>
            </p>{" "}
          </td>
        </tr>
      ))}
    </>
  );
};
