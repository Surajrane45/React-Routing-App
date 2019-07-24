import React from 'react';
import { LogOut, StoreUserData } from './action.js'; 
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Route,Link } from 'react-router-dom'
import User from './user.js'
import FetchApi from './FetchApi'
import { UsersURL,ApiHeader } from './constants'

class Users extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }

  componentWillMount() {
    FetchApi(UsersURL,'get',ApiHeader,null)
    .then(result => {
      const UserData = result.data;
      this.props.dispatch(StoreUserData(UserData))
    })
  }
  
  userlogout = () => {
    window.localStorage.removeItem('Current_Logged_user_JWT_Token');
    this.setState({
      redirect: true
    })
    this.props.dispatch(LogOut());
  }

  render() {
    let match = this.props.match
    if(this.state.redirect !== true) {
      return (
        <div>
          <h1> 
            Users 
          </h1>
          <ul>
            {this.props.UserList.map(({ fname,userid }) => (
              <li key={userid}>
                <Link to={`${match.path}/${userid}`}> <h1> {fname} </h1> </Link>
              </li>
            ))}
          </ul>
          <hr />
          <Route path="/users/:userid" component={User} />
          <button onClick={this.userlogout}>
            LOGOUT
          </button>
        </div>
      );
    } else {
      return (
        <Redirect to="/" />
      );
    } 
  }
};

function mapStateToProps(State){
  return {
    UserList: State.user_data
  }
}
export default connect(mapStateToProps)(Users);