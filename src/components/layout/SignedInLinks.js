import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to='/create'>             
                <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">add</i></a>
                    New Christmas Wish
                </NavLink>
            </li>
            <li><a onClick={props.signOut}>
                <a class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">directions_run</i></a>
                    Log Out
                </a>
            </li>
            <li><NavLink to='/' className='btn btn-floating red lighten-1'>{props.profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);