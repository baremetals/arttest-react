import React from 'react'
import './auth.css'

function SignUp() {
	const [values, setValues] = useState({
        email: '',
        password: '',
		confirmPassword: '',
        loading: false
    })

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value })
	}
	
	const handleSubmit = (ev) => {
		ev.preventDefault();
	}
    return (
        <main role="main">		
			<section className="section section--no-pt section--no-pb section--light-bg">
				<div className="grid grid--container">
					<div className="authorization authorization--registration">						
						<div className="row">
							<div className="col col--md-auto">
								<div className="text--center">
									<a className="site-logo" href="index.html">
										<img className="img-responsive" width="175" height="42" src="img/site_logo_2.png" alt="logo" />
									</a>
								</div>

								<form className="authorization__form" onSubmit={handleSubmit}>
									<h3 className="__title">Sign Up</h3>

									<div className="input-wrp">
										<input className="textfield" type="text" onChange={handleChange('username')} value="" placeholder="Username" />
									</div>

									<div className="input-wrp">
										<input className="textfield" type="email" onChange={handleChange('email')} value="" placeholder="Email" />
									</div>

									<div className="input-wrp">
										<i className="textfield-ico fontello-eye"></i>
										<input className="textfield" type="password" onChange={handleChange('password')} value="" placeholder="Password" />
									</div>

									<div className="input-wrp">
										<i className="textfield-ico fontello-eye"></i>
										<input className="textfield" type="password" onChange={handleChange('confirmPassword')} value="" placeholder="Confirm Password" />
									</div>

									<p>
										<label className="checkbox">
											<input name="terms" type="checkbox" value="ok" required />
											<i className="fontello-check"></i><span>I agree with <a href="#">Terms of Services</a></span>
										</label>

										<button className="custom-btn custom-btn--medium custom-btn--style-2 wide" type="submit" role="button">Submit</button>
									</p>

									<p className="text--center"><a href="sign_in.html">Sign In</a> if you don’t have an account</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>			
		</main>
    )
}

export default SignUp
