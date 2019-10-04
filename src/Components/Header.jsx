import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import Button from "../Reusable/Button";

const Header = props => {
  return (
    <header>
      <div className="ui secondary menu">
        <Link className="item" to="/dashboard">
          Header
        </Link>
        <div className="right menu">
          {props.isSignedIn === true ? (
            <Fragment>
              <Link className="ui item" to="/dashboard">
                Dashboard
              </Link>
              <span className='ui item custom-link' onClick={props.onClick}>
                <strong><i className="icon user"></i> logout</strong>
              </span>
            </Fragment>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
