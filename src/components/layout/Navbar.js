import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Christmas Wishes App</Link>
            </div>
        </nav>
    )
}

export default Navbar;