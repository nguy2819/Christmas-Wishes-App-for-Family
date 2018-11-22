import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const ProjectList = ({projects, auth}) => {
    return(
        <div className="project-list section">
           {projects && projects.map(project => {
               return(
                <Link to={'/project/' + project.id} key={project.id} >
                   <ProjectSummary project={project} profile={auth}/>
                </Link>
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