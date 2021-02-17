import React,  { useState} from 'react';

const Auth = (props) => {

    const [styles, setStyles] = useState({
        loginTitleColor: "#1FC5B9",
        loginTitleSize: "20px",
        signupTitleColor: "",
        signupTitleSize: "",
        loginFormState: "",
        signupFormState: "none",
    })
    const login = () => {
        setStyles({
            ...styles,
            loginTitleColor: "#1FC5B9",
            loginTitleSize: "20px",
            signupTitleColor: "",
            signupTitleSize: "",
            loginFormState: "",
            signupFormState: "none",
        })
    }

    const signup = () => {
        setStyles({
            ...styles,
            signupTitleColor: "#1FC5B9",
            signupTitleSize: "20px",
            loginTitleColor: "",
            loginTitleSize: "",
            loginFormState: "none",
            signupFormState: "",
        })
    }

    return(
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body text-center">
                            <main className="form-signin">
                                <form>
                                    <div className="panel-heading">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-6">
                                                <div 
                                                    className="active fw-bold" 
                                                    id="login-form-link"
                                                    style={{color: `${styles.loginTitleColor}`,fontSize: `${styles.loginTitleSize}`, cursor: "pointer"}}
                                                    onClick={() => login()}
                                                    >Login</div>
                                            </div>
                                            <div className="col-md-6 col-sm-6">
                                                <div 
                                                    id="register-form-link"
                                                    className="fw-bold"
                                                    style={{color: `${styles.signupTitleColor}`,fontSize: `${styles.signupTitleSize}`, cursor: "pointer"}}
                                                    onClick={() => signup()}
                                                >Register</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <img alt="img" className="mb-4" src="../assets/brand/arttest-logo-black.png" width={108} height={43} />
                                    </div>
                                    
                                    <div classNam="signin-form" style={{display: `${styles.loginFormState}`}}>
                                        <label htmlFor="inputEmail" className="visually-hidden">Email address</label>
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" style={{width: "100%"}} required />
                                        <label htmlFor="inputPassword" className="visually-hidden">Password</label>
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" style={{width: "100%"}} required />
                                        <div className="checkbox mb-3">
                                            <label>
                                                <input type="checkbox" defaultValue="remember-me" /> Remember me
                                            </label>
                                        </div>
                                        <button className="w-70 btn btn-turquoise-solid mb-4" type="submit">Sign in</button>
                                        <div className="text-center mb-4">
                                            <a 
                                                href="#" 
                                                tabindex="5" 
                                                className="forgot-password"
                                                style={{color: "#000",}}
                                            >Forgot Password?</a>
                                        </div>
                                    </div>                

                                    <div classNam="signup-form" style={{display: `${styles.signupFormState}`}}>
                                        <input type="text" id="userName" className="form-control" placeholder="Username" style={{width: "100%"}} required />
                                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" style={{width: "100%"}} required />
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" style={{width: "100%"}} required />
                                        <input type="password" id="inputConfPassword" className="form-control" placeholder="Confirm Password" style={{width: "100%"}} required />
                                        <button className="w-70 btn btn-turquoise-solid margin-b-30" type="submit">Sign up</button>
                                        <div className="checkbox mb-5">
                                            <label>
                                                <input type="checkbox" defaultValue="remember-me" />   By creating your account<br />you agree with our terms of service.
                                            </label>
                                        </div>
                                    </div>                

                                    

                                </form>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth;