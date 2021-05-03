import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
    return (
        <>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul>
                        <li className="nav-item">
                            <p>COWORKOFFICE</p>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                         <li className="nav-item">
                             <Link className="nav-link text-white" to="/signin">Login </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="/signup">SignUp</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav;
