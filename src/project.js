import React from 'react'
import { connect } from 'react-redux'
import FetchApi from './FetchApi';
import { DeleteProjectURL, ApiHeader } from './constants';
import { Redirect } from 'react-router-dom'

class Project extends React.Component {

  constructor(props){
    super(props);
    this.state={
      redirect:false
    }
  }

  DeleteProject = () => {
    const pid=this.props.match.params.subid
    FetchApi(DeleteProjectURL+pid,"get",ApiHeader,null)
    .then(() => {
      this.setState({
        redirect:true
      })
    })
    return <Redirect to="/users/" />
  }

  render() {
    const match=this.props.match
    const project=this.props.ProjectList.find( ({pid}) => pid === match.params.subid )
    if(this.state.redirect){
      return <Redirect to="/users/" />
    } 
    else {
      return (
        <div>
          <h1>
            Title-{project.title} <br />
            Description-{project.description} <br />
            Client-{project.client}
          </h1>
          <button onClick={this.DeleteProject}>
            DELETE PROJECT
          </button>
          <hr />
        </div>
      )
    }
  }  
}

function mapStateToProps(State) {
  return {
    ProjectList: State.project_data
  }
}

export default connect(mapStateToProps)(Project);