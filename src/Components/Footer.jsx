import React from "react";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <header>
      <div className="ui secondary menu">
        <Link className="item" to="/dashboard">
          Footer
        </Link>
        <div className="right menu">
          {props.isSignedIn === true ? (
            <Link className="ui item" to="/dashboard">
              Dashboard
            </Link>

          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};
export default Footer;
