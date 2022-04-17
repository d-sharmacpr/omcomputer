import React from "react";
import { BrowserRouter as Router, Routes, Route,Nava,a } from "react-router-dom";

let Navbar = () => {
    return (
        <>
   <div className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-sm">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Om Computer</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                   <a className="nav-link" exact activeClassName="active" href="/">Home </a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" exact activeClassName="active" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" exact activeClassName="active" href="/service">Service</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" exact activeClassName="active" href="/contact">Contact</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar;