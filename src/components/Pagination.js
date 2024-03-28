import React, { useState } from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "./usePagination";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  // console.log(paginationRange)
  const [pageTrigger, setPageTrigger] = useState(0);

  // console.log(paginationRange.map(item=>item === DOTS))
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    setPageTrigger(prev=>prev+1)

  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    setPageTrigger(prev=>prev+1)
  };

  const handlePageChange = (pageNumber)=>{
    onPageChange(pageNumber);
    setPageTrigger(prev=>prev+1)

  }

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div>prev</div>
      </li>
      {paginationRange.map((pageNumber, index) => {
        // console.log(pageNumber)
        if (pageNumber === DOTS) {
          console.log('dots printing')
          return (
            <li className="pagination-item dots" key={index+pageNumber}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => handlePageChange(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div>next</div>
      </li>
    </ul>
  );
};

export default Pagination;
