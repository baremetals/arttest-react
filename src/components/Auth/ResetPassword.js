import React, { useState } from 'react'
import './auth.css'

function ResetPassword() {
    const [email, setEmail] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    const handleChange = name => e => {
        setEmail({ ...email, [name]: e.target.value })
    }
    return (
        <section className="section section--no-pt section--no-pb section--light-bg">
            <form id="recovery" className="authorization__form" onSubmit={handleSubmit}>
                <h3 className="__title">Password Recovery</h3>

                <div className="input-wrp">
                    <input className="textfield" type="text" onChange={handleChange('email')} value="" placeholder="email address" />
                </div>

                <button className="custom-btn custom-btn--medium custom-btn--style-2 wide" type="submit" role="button">Submit</button>

                    <p className="text--center">Back to <a href="sign_in.html">Sign In</a></p>
            </form>
        </section>
    )
}

export default ResetPassword
