import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title red-text text-darken-4">{project.title}</span>
                    <p>{project.christmaswishes}</p>
                    <p>Posted by <span className="pink-text">{project.authorFirstName} {project.authorLastName}</span></p>
                    <p className="grey-text">{moment(project.createdAt.toDate().toString()).format('LLL')}</p>
                    <a class="btn-floating btn-small yellow accent-4 pulse right-align"><i class="material-icons">details</i></a>
                    <a class="btn-floating btn-small green darken-4 pulse right-align"><i class="material-icons">edit</i></a>
                    <a class="btn-floating btn-small red darken-4 pulse right-align"><i class="material-icons">delete</i></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;