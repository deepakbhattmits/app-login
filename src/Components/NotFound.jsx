import React from "react";
import { Link } from "react-router-dom";

const NotFound = props => {
  return (
    <div className="highlight">
      Oops Something Went Wrong.
      <button className="ui button default">
        <Link to="/">go to main page</Link>
      </button>
    </div>
  );
};
export default NotFound;
