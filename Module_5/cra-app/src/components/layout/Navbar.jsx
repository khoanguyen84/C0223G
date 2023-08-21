import React from "react";
import logo from '../../assets/images/logo.jpg'
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/main"}>
                    <img className="logo-sm rounded-circle" src={logo} alt=""/> 
                    CRA
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"to={'/student/list'}>Student List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/dashboard'}>Dashboard</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;