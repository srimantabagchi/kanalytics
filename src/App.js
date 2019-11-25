import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import SignInForm from "./components/signinform";
import Register from "./pages/register/register";
import SignIn from "./pages/signin/signin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path='/' component={SignIn} />
          <Route path='/register' component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
