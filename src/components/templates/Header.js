import React from 'react';
import { Link } from "react-router-dom";
import Logo from 'assets/brand/logo.svg'
import 'docs/bootstrap.css'
import './header.css'
import 'docs/globalStyles.css'



const Header = (props) => {
    return(
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-black">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand"><img alt="img" src={Logo} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto mb-2 mb-md-0">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Contest</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Explore</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link" href="#">Blog</Link>
                            </li>
                            </ul>
                            <div className="d-flex">
                            <button className="btn btn-turquoise margin-l-20 margin-r-20" >Host a contest</button>
                            </div>
                            <div className="d-flex">
                            {/* Button trigger modal */}
                            <button type="button" 
                                className="btn btn-border-white margin-l-20 margin-r-20" 
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                >
                            Login / Sign up
                            </button>
                            {/* Modal */}
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body text-center">
                                        <main className="form-signin">
                                        <form>
                                        <img alt="img" className="mb-4" src="../assets/brand/arttest-logo-black.png" width={108} height={43} />
                                        <h1 className="h3 mb-3 fw-bold">Please sign in</h1>
                                        <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                        <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <div className="checkbox mb-3">
                                        <label>
                                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                                        </label>
                                        </div>
                                        <button className="w-70 btn btn-turquoise-solid margin-b-100" type="submit">Sign in</button>
                                        </form>
                                        </main>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
