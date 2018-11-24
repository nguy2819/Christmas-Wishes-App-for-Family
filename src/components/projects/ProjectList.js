import React from 'react';
import ProjectSummary from './ProjectSummary';
import {connect} from 'react-redux';

const ProjectList = ({projects, auth}) => {
    return(
        <div className="project-list section">
           {projects && projects.map(project => {
               return(
                <ProjectSummary project={project} profile={auth}/>
               )
           })}

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(ProjectList);