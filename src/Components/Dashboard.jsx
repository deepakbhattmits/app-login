import React, { Component } from "react";
import Table from "../Reusable/Table";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        {this.props.isSignedIn ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/" />
        )}
        <Table user={this.props.user} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.Auth.user,
    isSignedIn: state.Auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  null
)(Dashboard);
