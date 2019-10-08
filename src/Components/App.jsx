import React, { Component } from "react";
import IdleTimer from 'react-idle-timer';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import createBrowserHistory from "./history";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userLogout } from "../Actions";
class App extends Component {
  state = { timeout: 30000 }
  handleClick = () => {
    this.props.userLogout();
  };
  onActive = () => {
    // console.log('active');
  }
  onIdle = () => {
    // console.log('idle');
    this.handleClick();
  }
  render() {
    return (
      <div className="App">
        <IdleTimer
          ref={ref => { this.idleTimer = ref }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          onAction={this.onAction}
          debounce={250}
          timeout={this.state.timeout} />
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
