import React from 'react'
import './auth.css'



function SignIn() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        loading: false
    })

    const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value })
	}
    
    const handleSubmit = (ev) => {
        ev.preventDefault();
    }
    return (
        <body className="auth">
            <main role="main">			
			<section class="section section--no-pt section--no-pb section--light-bg">
				<div class="grid grid--container">
					<div class="authorization authorization--login">
						<a class="site-logo" href="index.html">
							<img class="img-responsive" width="175" height="42" src="" alt="logo" />
						</a>
						<form class="authorization__form" onSubmit={handleSubmit}>
							<h3 class="__title">Sign In</h3>

							<div class="input-wrp">
								<input class="textfield" type="email" onChange={handleChange('email')} value={values.email} placeholder="Email" />
							</div>

							<div class="input-wrp">
								<i class="textfield-ico fontello-eye"></i>
								<input class="textfield" type="password" onChange={handleChange('password')} value={values.password} placeholder="Password" />
							</div>

							<p>
								<a href="sign_up.html#recovery">I forgot my password</a>

								<button class="custom-btn custom-btn--medium custom-btn--style-2 wide" type="submit" role="button">Submit</button>
							</p>

							<p class="text--center"><a href="sign_up.html">Sign Up</a> if you don’t have an account</p>
						</form>
					</div>
				</div>
			</section>	
		</main>
        </body>
    )
}

export default SignIn
