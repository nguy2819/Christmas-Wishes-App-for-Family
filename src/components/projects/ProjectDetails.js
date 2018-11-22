import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom';
import moment from 'moment';

const ProjectDetails = (props) => {
    const {project, auth} = props;
    if(!auth.uid) return <Redirect to='/signin' />

    if (project){
        const userId = auth.uid;
        const authorId = project.authorId;
        return(
        <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title red-text text-darken-4">{project.title}</span>
                <p>
                    {project.christmaswishes}
                </p>
                {userId === authorId && (
                    <span>
                        <a class="btn-floating btn-small green darken-4 pulse right-align"><i class="material-icons">edit</i></a>
                        <a class="btn-floating btn-small red darken-4 pulse right"><i class="material-icons">delete</i></a>
                    </span>
                )}
                
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by <span className="pink-text">{project.authorFirstName} {project.authorLastName}</span></div>
                <div> {moment(project.createdAt.toDate().toString()).format('LLL')} </div>
            </div>
        </div>
    </div>
    )
    } else{
        return (
            <div className="container center">
                <p>Loading Christmas Wishes"</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
