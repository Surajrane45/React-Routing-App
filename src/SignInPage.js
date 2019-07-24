import React from 'react';
import { connect } from 'react-redux';

class SignInPage extends React.Component
{
  // constructor(props){
  //   super(props);
  //   // this.handleEmailChange=this.handleEmailChange.bind(this)
  //   // this.handlePasswordChange=this.handlePasswordChange.bind(this)
  // }

  render(props){
      return(
          <div id="div1">
             <div id="div2"><h1> <center>Welcome To the Login Page</center> </h1></div>
             <br></br><br></br>
             <center>
               <div id="div3">
                 <br></br><br></br>
                 <table>
                 <tbody>
                 <tr>
                 <td><b><h3>Email Id  </h3></b><input type="text" id="email"
                 value={this.props.email_id} onChange={this.props.email_change}></input></td>
                 </tr>
                 <tr>
                 <td><b><h3> Password  </h3></b><input type="password" id="password"
                 value={this.props.password} onChange={this.props.pass_change}></input></td>
                 </tr>
                 </tbody>
                 </table>
                 <br></br><br></br>
                 <input type="button" value="SUBMIT" onClick={this.props.submit_action}></input>
               </div>
             </center>
          </div>
        )
  }
}

function mapStateToProps(store) {
  console.log("store", store);
  return {
    user_logged_in: store.user_logged_in,
    email_id:store.email_id,
    password:store.password,
    isError:store.isError
  };
}

export default connect(mapStateToProps)(SignInPage);
