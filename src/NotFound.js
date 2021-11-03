import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>404! Page cannot be found.</h2>
      <br />
      <br />
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
