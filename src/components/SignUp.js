import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    const [password, setPassword] = useState(false); 
    const [signInPassword, setSignInPassword] = useState(false);
  return (
      <>
           {/* Home sign in section starts. */}
                <section className="home-login-form home-sign-in-form">
                    <div className="home-login-form-sec">
                        <div className="login-remove">
                            <Link to="/"><i className="fa-sharp fa-solid fa-xmark"></i></Link>
                        </div>
                                <div className="home-login-title">
                                <img src=".\assets\logo\logo.svg" alt="" />
                                <h6>Create Your Account</h6>
                                </div>
                                <form className="home-form">
                                    <label htmlFor="text">Full Name</label> <br />
                                    <input type="text" placeholder="Enter Your Name" required/>
                                    <label htmlFor="text">Email or Phone Number</label> <br />
                                    <input type="text" placeholder="example@gmail.com" required/>
                                    <div className="pass-login pass-signin">
                                    <label htmlFor="text">Password</label> <br />
                                        <input type={password ? 'text' : 'password'} placeholder="*********" required/>
                                        <span onClick={() => setPassword(!password)}>{password ? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i> }</span>
                                    </div>
                                    <div className="pass-login pass-signin">
                                        <label htmlFor="text">Retype Password</label> <br />
                                        <input type={signInPassword ? 'text' : 'password'} placeholder="*********" required/>
                                        <span onClick={() => setSignInPassword(!signInPassword)}>{signInPassword ? <i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i> }</span>
                                    </div>
                                    <div className="sign-in-checkbox"> 
                                        <input type="checkbox" />
                                        <p>By signing up, you agree to <Link>Terms & Condtion</Link> </p>
                                    </div>
                                    <button>Create Account</button>
                                </form>
                                <div className="form-para">
                                    <p>or</p>   
                                </div>
                                <div className="login-form-btns">
                                    <button className="fb-btn"><i class="fa-brands fa-facebook"></i>Continue with Facebook</button> <br />
                                    <button className="google-btn"><i class="fa-brands fa-google"></i>Continue with Google</button>
                                </div>      
                                <div className="login-reset">
                                {/* <p>Already have an account? <span  onClick={() => setloginForm(!loginForm)}>Login</span></p> */}
                                <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
                            </div>
                            </div>
                </section>
            {/* Home sign in section ends. */}
      
      </>
  )
}

export default SignUp