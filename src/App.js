import React, { Component } from "react";
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
      <div className='App'>
        <SignIn />
      </div>
    );
  }
}

export default App;
