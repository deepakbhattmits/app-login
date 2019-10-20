import React, { Component } from "react"
import { connect } from "react-redux"
import Modal from "../Reusable/Modal"
import Form from './Form'
import { userLogin } from "../Actions";



class AddUser extends Component {

  render() {
    const { close, open } = this.props;
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <Modal open={open} close={close}>
            <Form />
          </Modal>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userLogin: data => dispatch(userLogin(data))
  };
};
const mapStateToProps = state => {
  return {
    isSignedIn: state.Auth.isSignedIn,
    dashboard: state.Auth.dashboard
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
