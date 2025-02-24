import React from "react";
import classes from "./SignUp.module.css";
import { Link } from "react-router";

function Auth() {
  return (
    <section className={classes.login}>
      {/* logo  */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      {/* form  */}
      <div className={classes.login_container}>
        <h1>Sign-in</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>

            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>

            <input type="password" id="password" />
          </div>

          <button className={classes.login_signInButton}>Sign in</button>
          {/* agreement */}
          
          
        </form>
        <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          {/* create account button */}
          <button className={classes.login_registerButton}>Create your Amazon Account</button>
      </div>
    </section>
  );
}

export default Auth;
