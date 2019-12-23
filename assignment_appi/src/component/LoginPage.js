import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/reducer';
import PopulatePage from './PopulatePage';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

class LoginPage extends Component {

  constructor(props) {
      super(props);
      this.state = {};
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    let { email, password } = this.state;
    let { issuccessLogin, errorLogin} = this.props;
    return (
      <div className="container">
          <h2>Login Page:</h2>
          <form ref="form" name="loginForm container" onSubmit={this.handleSubmit}>
              <div className="form-group col-sm-6">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" className="form-control" placeholder="Enter email" id="email" onChange={event => this.setState({email: event.target.value})} value={email}/>
              </div>
              <div className="form-group col-sm-6">
                  <label htmlFor="pwd">Password:</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter password" id="pwd" onChange={event => this.setState({password: event.target.value})} value={password}/>
              </div>
              <div className="form-group col-sm-6">
                  <button type="submit" className="btn btn-primary">Login</button>
              </div>
          </form>
          <div>
              { 
                issuccessLogin && <Router>
                    <Redirect path to = "./PopulatePage" />
                    <PopulatePage />
                </Router>
              }
              { 
                  errorLogin && <div>{ errorLogin.message }</div> 
              }
          </div>
        </div>
    )   
  }

  handleSubmit(event) {
      event.preventDefault();
      let { email, password } = this.state;
      this.props.login(email, password);
      this.setState({
          email: '',
          password: ''
      });
  }
}

const mapStateToProps = (state) => {
    return {
        issuccessLogin: state.issuccessLogin,
        errorLogin: state.errorLogin
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);