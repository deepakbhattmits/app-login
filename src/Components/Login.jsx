import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "../Reusable/TextField";
import Button from "../Reusable/Button";
import List from "../Reusable/List";
import { userLogin } from "../Actions";

const initialState = {
  fields: {},
  errorMessages: {}
};
class Login extends Component {
  state = initialState;
  handleChange = e => {
    let fields = this.state.fields;
    const { name, value } = e.target;
    // console.log("change in ", name, value);
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
    if (!fields["username"]) {
      formIsValid = false;
      errorMessages["username"] = "Please enter email id";
    }

    if (typeof fields["username"] !== "undefined") {
      // regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(fields["username"])) {
        formIsValid = false;
        errorMessages["username"] = "Please enter valid email id ";
      }
    }
    if (!fields["password"]) {
      formIsValid = false;
      errorMessages["password"] = "Please enter password";
    }
    if (typeof fields["password"] !== "undefined") {
      var strongRegex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      if (!strongRegex.test(fields["password"])) {
        formIsValid = false;
        errorMessages["password"] =
          "please use strong password with length 8 char. ( includes A-Z, a-z and ! @ # $ % ^ & *)";
      }
    }
    this.setState({ errorMessages: errorMessages });
    return formIsValid;
  };

  render() {
    console.log("login form : ", this.props);
    return (
      <div className="loginForm">
        {this.props.isSignedIn ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/" />
        )}
        <div className="login-form">
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <h2 className="ui teal image header">
                <div className="content">Log-in to your account</div>
              </h2>
              <form
                className={`ui form ${this.state.errorMessages ? "error" : ""}`}
                onSubmit={this.handleSubmit}
              >
                <div
                  className={`field ${
                    this.state.errorMessages.username ? "error" : ""
                  }`}
                >
                  <div className="ui left icon input">
                    <i className="user icon" />
                    <TextField
                      type="text"
                      name="username"
                      value={this.state.fields.username || ""}
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div
                  className={`field ${
                    this.state.errorMessages.password ? "error" : ""
                  }`}
                >
                  <div className="ui left icon input">
                    <i className="lock icon" />
                    <TextField
                      type="password"
                      name="password"
                      value={this.state.fields.password || ""}
                      placeholder="Passowrd"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <Button className="ui fluid large teal submit button">
                  login
                </Button>
                {this.state.errorMessages ? (
                  <div className="ui error message">
                    <List error={this.state.errorMessages} />
                  </div>
                ) : null}
              </form>
            </div>
          </div>
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
)(Login);
