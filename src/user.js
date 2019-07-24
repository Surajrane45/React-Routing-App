import React from 'react'
import { StoreProjectData } from './action.js'; 
import { Link,Route } from 'react-router-dom'
import Project from './project.js'
import { connect } from 'react-redux'
import FetchApi from './FetchApi.js';
import { ProjectsURL,ApiHeader } from './constants'


class User extends React.Component {
  
  componentWillMount() {
    const match=this.props.match
    FetchApi(ProjectsURL+match.params.userid,"get",ApiHeader,null)
    .then(result => {
      console.log(result.data)
      this.props.dispatch(StoreProjectData(result.data))
    })
  }
  componentWillReceiveProps() {
    const match=this.props.match
    FetchApi(ProjectsURL+match.params.userid,"get",ApiHeader,null)
    .then(result => {
      console.log(result.data)
      this.props.dispatch(StoreProjectData(result.data))
    })
  }

  render() {
    const match=this.props.match
    return(
      <div>
        <h1>
          Project List
        </h1>   
        <ul>
          {this.props.ProjectList.map((e) => (
            <li key={e.pid}>
              <Link to={`${match.url}/${e.pid}`}> <h1> {e.title} </h1> </Link>  
            </li>
          ))}  
        </ul>
        <hr />
        <Route path="/users/:userid/:subid" component={Project} />
      </div>
    )
  }
}

function mapStateToProps(State){
  return {
    UserList: State.user_data,
    ProjectList: State.project_data
  }
}

export default connect(mapStateToProps)(User);