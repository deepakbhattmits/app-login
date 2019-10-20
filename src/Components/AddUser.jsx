import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "../Reusable/TextField";
import Modal from "../Reusable/Modal";
import Button from "../Reusable/Button";
import List from "../Reusable/List";
import { userLogin } from "../Actions";

const initialState = {
  fields: {},
  errorMessages: {}
};

class AddUser extends Component {
  state = initialState;
  handleChange = e => {
    let fields = this.state.fields;
    const { name, value } = e.target;
    fields[name] = value;
    this.setState(
      {
        fields
      },
      () => this.validateForm()
    );
  };
  handleSubmit = e => {
    e.preventDefault();
    let fields = this.state.fields;
    if (this.validateForm()) {
      this.props.userLogin(fields);
      fields["username"] = "";
      fields["password"] = "";
      this.setState({ fields });
    }
  };
  validateForm = () => {
    let fields = this.state.fields;
    let errorMessages = {};
    let formIsValid = true;
    if (!fields["firstName"]) {
      formIsValid = false;
      errorMessages["firstName"] = "Please enter first Name";
    }

    // if (typeof fields["username"] !== "undefined") {
    //   // regular expression for email validation
    //   var pattern = new RegExp(
    //     /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    //   );

    //   if (!pattern.test(fields["username"])) {
    //     formIsValid = false;
    //     errorMessages["username"] = "Please enter valid email id ";
    //   }
    // }
    if (!fields["lastName"]) {
      formIsValid = false;
      errorMessages["lastName"] = "Please enter Lastname";
    }
    // if (typeof fields["password"] !== "undefined") {
    //   var strongRegex = new RegExp(
    //     "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    //   );
    //   if (!strongRegex.test(fields["password"])) {
    //     formIsValid = false;
    //     errorMessages["password"] =
    //       "please use strong password with length 8 char. ( includes A-Z, a-z and ! @ # $ % ^ & *)";
    //   }
    // }
    if (!fields["profession"]) {
      formIsValid = false;
      errorMessages["profession"] = "Please enter Profession";
    }
    this.setState({ errorMessages: errorMessages });
    return formIsValid;
  };

  render() {
    const { close, open } = this.props;
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <Modal open={open} close={close}>
            <form
              className={`ui form ${this.state.errorMessages ? "error" : ""}`}
              onSubmit={this.handleSubmit}
            >
              <div
                className={`field ${
                  this.state.errorMessages.firstName ? "error" : ""
                  }`}
              >
                <div className="ui left icon input">
                  <i className="user icon" />
                  <TextField
                    type="text"
                    name="firstName"
                    value={this.state.fields.firstName || ""}
                    placeholder="First Name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div
                className={`field ${
                  this.state.errorMessages.lastName ? "error" : ""
                  }`}
              >
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <TextField
                    type="text"
                    name="lastName"
                    value={this.state.fields.lastName || ""}
                    placeholder="Last Name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div
                className={`field ${
                  this.state.errorMessages.profession ? "error" : ""
                  }`}
              >
                <div className="ui left icon input">
                  <i className="lock icon" />
                  <TextField
                    type="text"
                    name="profession"
                    value={this.state.fields.profession || ""}
                    placeholder="Profession"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <Button className="ui fluid large teal submit button">
                <i className='icon save' />save
              </Button>
              {this.state.errorMessages ? (
                <div className="ui error message">
                  <List error={this.state.errorMessages} />
                </div>
              ) : null}
            </form>
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
