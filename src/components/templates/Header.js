import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from 'assets/images/logo.svg'


const Header = (props) => {
    

    return(
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"><img alt="img" src={logo} width="40" height="28.49"/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contests" className="nav-link" >Contest</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/explore-page" className="nav-link" >Explore</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/events" className="nav-link" >Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blogs" className="nav-link" >Blog</Link>
                            </li>
                            </ul>
                            <div className="d-flex">
                            <Link to="/host-a-contest">
                            <button className="btn btn-turquoise margin-l-20 margin-r-20" >Host a contest</button>
                            </Link>
                            </div>
                            <div className="">
                            <Link to="/signup">
                            <button type="button" 
                                className="btn btn-border-white margin-l-20 margin-r-20">
                            Login / Sign up
                            </button>
                            </Link>
                            
                        </div>
                            <div className="d-flex">
                            <Link to="/" className="link-secondary" href="#" aria-label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="mx-3" role="img" viewBox="0 0 24 24">
                                    <title>Search</title>
                                    <circle cx="10.5" cy="10.5" r="7.5" />
                                    <path d="M21 21l-5.2-5.2" />
                                </svg>
                            </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;
