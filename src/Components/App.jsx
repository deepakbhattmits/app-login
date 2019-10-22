import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import createBrowserHistory from "./history";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Draggable from './Draggable';
// import Edit from "./Edit";

// import Delete from "./Delete";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogout } from "../Actions";
class App extends Component {
  handleClick = () => {
    this.props.userLogout();
  };
  render() {
    console.log("logout", this.props);
    return (
      <div className="App">
        <ToastContainer autoClose={2000} />
        <Router history={createBrowserHistory}>
          {this.props.isSignedIn ? (
            <Redirect to="/dashboard" />
          ) : (
              <Redirect to="/" />
            )}
          <header>
            <Header onClick={this.handleClick} isSignedIn={this.props.auth} />
          </header>
          <article>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/grid" component={Draggable} />
              {/* <Route path="/delete/:id" component={Delete} /> */}
              <Route path="*" exact component={NotFound} />
            </Switch>
          </article>
          <footer>
            <Footer isSignedIn={this.props.auth} />
          </footer>
        </Router>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userLogout: () => dispatch(userLogout())
  };
};
const mapStateToProps = state => {
  return {
    auth: state.Auth.isSignedIn
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
