import React, { Component } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "./signinform.css";

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col sm={9} md={7} lg={5}>
              <div className='mx-auto'>
                <div className='card card-signin my-5'>
                  <div className='card-body'>
                    <h5 className='card-title text-center'>Sign In</h5>
                    <Form className='form-signin'>
                      <div className='form-label-group'>
                        <input
                          type='email'
                          id='inputEmail'
                          className='form-control'
                          placeholder='Email address'
                          required
                          autofocus
                        ></input>
                        <label for='inputEmail'>Email address</label>
                      </div>
                      <div class='form-label-group'>
                        <input
                          type='password'
                          id='inputPassword'
                          className='form-control'
                          placeholder='Password'
                          required
                        ></input>
                        <label for='inputPassword'>Password</label>
                      </div>
                      <div class='custom-control custom-checkbox mb-3'>
                        <input
                          type='checkbox'
                          class='custom-control-input'
                          id='customCheck1'
                        ></input>
                        <label class='custom-control-label' for='customCheck1'>
                          Remember password
                        </label>
                      </div>
                      <button
                        class='btn btn-lg btn-primary btn-block text-uppercase'
                        type='submit'
                        onClick={this.submitLogin.bind(this)}
                      >
                        Sign in
                      </button>
                      <hr className='my-4'></hr>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default SignInForm;
