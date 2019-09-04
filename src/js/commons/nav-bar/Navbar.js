import React from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 navShadow">
            <div className="logoDiv">
                <a className="navbar-brand logoName" href="#">INDIGO</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navInnerDiv" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto navUl">
                    <li className="nav-item active navLi">
                        <NavLink to="/" exact={true} className="nav-link n" activeClassName='activeClass' >

                            <i className="fa fa-home linkName" style={{ fontSize: 26 }}></i> <span className="linkName" style={{ top: -3 }} >Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="nav-item active navLi">
                        <NavLink to="/create-batch" exact={true} className="nav-link n" activeClassName='activeClass' >

                            <i className="fa fa-home linkName" style={{ fontSize: 26 }}></i> <span className="linkName" style={{ top: -3 }} >Create New Batch</span>
                        </NavLink>
                    </li>
                </ul>

                <img className="rounded-circle" src="http://placehold.it/32x32" ></img>

                <div className="nav-item dropdown pr-2">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Syed Mohsin Ali
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Another action</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

