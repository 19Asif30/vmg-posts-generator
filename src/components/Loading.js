import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <div className="overlay">
      <Spinner color="success" />
    </div>
  );
};

export default Loader;
