import React, { Component } from "react"
import UserData from "./UserData"
import Button from "../Reusable/Button"
import AddUser from "./AddUser"
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux'
class Dashboard extends Component {
  state = {
    open: false
  };
  show = () => {
    this.setState({ open: !this.state.open });
  }
  close = () => {
    this.setState({ open: false });
  }
  render() {
    return (
      <div className="Dashboard">
        {this.props.isSignedIn ? (
          <Redirect to="/dashboard" />
        ) : (
            <Redirect to="/" />
          )}
        <Button className="ui button positive" onClick={this.show}>
          add data
        </Button>
        {this.state.open ? (
          <AddUser open={this.state.open} close={this.close} />
        ) : null}
        <UserData />


      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.Auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  null
)(Dashboard);