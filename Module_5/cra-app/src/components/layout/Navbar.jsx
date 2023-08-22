import React, { useContext } from "react";
import logo from '../../assets/images/logo.jpg'
import { themeContext } from "../../Context/ThemeProvider";

function Navbar() {
    const { theme, setTheme } = useContext(themeContext)
    return (
        <nav className={`navbar navbar-expand-md ${theme}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="logo-sm rounded-circle" src={logo} alt="" />
                    CRA
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <button className="btn btn-secondary">
                            Theme
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" onClick={() => setTheme('light')}>Light</button></li>
                            <li><button className="dropdown-item" onClick={() => setTheme('dark')}>Dark</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;