 import React from 'react';
 class UserLoggedIn extends React.Component{
    render()
    {
      return (<>
              <h1><center>User Successfully Logged In !! Welcome </center></h1>
              <br></br><br></br><br></br>
              <center><input type="button" value="LOGOUT" onClick={this.props.logout_action}></input></center>
              </>);
    }
 }

 export default UserLoggedIn;
