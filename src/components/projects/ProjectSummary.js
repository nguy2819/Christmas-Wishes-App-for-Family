import React from 'react';
import moment from 'moment';
// import {firestoreConnect} from 'react-redux-firebase'
// import {compose} from 'redux'
// import {connect} from 'react-redux'

const ProjectSummary = ({project, profile}) => {
    const userId = profile.uid;
    const projectAuthorId = project.authorId;
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title red-text text-darken-4">{project.title}</span>
                    <p>{project.christmaswishes}</p>
                    <p>Posted by <span className="pink-text">{project.authorFirstName} {project.authorLastName}</span></p>
                    <p className="grey-text">{moment(project.createdAt.toDate().toString()).format('LLL')}</p>
                    <a class="btn-floating btn-small yellow accent-4 right-align"><i class="material-icons">details</i></a>
                    {userId === projectAuthorId && (
                        <span>
                            <button class="btn-floating btn-small green darken-4 right-align"><i class="material-icons">edit</i></button>
                            <button class="btn-floating btn-small red darken-4 right-align"><i class="material-icons">delete</i></button>
                        </span>
                    )}
                    
                </div>
            </div>
        </div>
    )
}


export default ProjectSummary;