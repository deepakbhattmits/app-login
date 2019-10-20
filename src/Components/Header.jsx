import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../Reusable/Button";

const Header = props => {
  // console.log(props.isSignedIn);
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
              <Button className='ui button red' onClick={props.onClick}>Logout</Button>
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
