import React from 'react';
import { connect } from "react-redux";
import { LogIn } from './action.js';
import { LogOut } from './action.js';
import { EmailChange } from './action.js';
import { PasswordChange } from './action.js';
import SignInPage from './SignInPage.js'
import { Redirect } from 'react-router-dom'
import FetchApi from './FetchApi'
import { SignInURL, ApiHeader } from './constants.js';

class UserForm extends React.Component {

  handleEmailChange = (event) => {
    event.preventDefault();
    this.props.dispatch(EmailChange(event.target.value))
  }

  handlePasswordChange = (event) => {
    event.preventDefault();
    this.props.dispatch(PasswordChange(event.target.value))
  }

  userlogout = () => {
    window.localStorage.removeItem('Current_Logged_user_JWT_Token');
    this.props.dispatch(LogOut());
  }

  submitClick = () => {
    let Body=JSON.stringify({ "user": {
      "email": this.props.email_id,
      "password":this.props.password
    }})
    FetchApi(SignInURL,"post",ApiHeader,Body)
    .then(data => {
      if(data["message"]!=="User not Found ") {
        this.props.dispatch(LogIn());
      } else {
        alert("Login Failed !! Email/Password is Wrong");
      }
      window.localStorage.setItem("Current_Logged_user_JWT_Token",data["data"]);
    })
  };

  render() {
    if(this.props.user_logged_in !== true)
      return <SignInPage submit_action={this.submitClick} email_change={this.handleEmailChange} pass_change={this.handlePasswordChange} />
    else
      return <Redirect to="/users" />
  }
}

function mapStateToProps(state) {
  return {
    user_logged_in: state.user_logged_in,
    email_id:state.email_id,
    password:state.password,
    isError:state.isError
  }
}

export default connect(mapStateToProps)(UserForm);
