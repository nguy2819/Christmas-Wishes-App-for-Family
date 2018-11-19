import React from 'react';

const ProjectSummary = ({project}) => {
    return(
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>{project.christmaswishes}</p>
                    <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text">November 11th, 2018, 10am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary;