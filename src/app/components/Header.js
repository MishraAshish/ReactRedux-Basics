import React from "react";
import {Link} from "react-router";

export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><Link to={"/home"} activeStyle={{color:"blue"}}>Home</Link></li>
                        <li><Link to={"/user"} activeStyle={{color:"blue"}}>User</Link></li>
                        <li><Link to={"/contact"} activeStyle={{color:"blue"}}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};