import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Reset() {
    const [signInForm, setSignInForm] = useState(false);
  return (
      <>
            {/* Home rest password section starts. */}
                <section className="home-login-form home-sign-in-form">
                    <div className="home-login-form-sec reset-pass-form">
                        <div className="login-remove">
                            <Link to="/"><i class="fa-sharp fa-solid fa-xmark"></i></Link>
                        </div>
                        <div className="home-login-title">
                            <h6>Reset your password</h6>
                        </div>
                        <form className="home-form">
                            <label htmlFor="text">Email</label> <br />
                            <input type="text" placeholder="Email" required/>                             
                            <button>Reset</button>
                        </form>   
                        <div className="login-reset reset-pass">
                            <p>Don't have account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </section>
            {/* Home reset password in section ends. */}
      </>
  )
}

export default Reset