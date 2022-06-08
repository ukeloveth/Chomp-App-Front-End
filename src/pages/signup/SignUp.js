import React from "react";
import "./signup.css"


export default function SignUp() {
    return (
        <div className="form_div">
            <h1 className="headerText"> Register</h1>
            <form className="signup_form"> 
                <div className="signup_input">
                    <label> 
                        <input htmlFor="firstName" typeof="text" name="firstName" placeholder="FirstName" />
                    </label>
                </div>
                <div className="signup_input">
                    <label> 
                        <input htmlFor="firstName" typeof="text" name="firstName" placeholder="Lastname" />
                    </label>
                </div>
                <div className="signup_input">
                    <label> 
                        <input htmlFor="username" typeof="text" name="username" placeholder="Username" />
                    </label>
                </div>
                <div className="signup_input">
                    <label className="email">
                        <input htmlFor="email" typeof="email" name="email" placeholder="email" />
                    </label>
                </div>
                <div className="signup_input">
                    <label> 
                        <input htmlFor="firstName" typeof="password" name="password" placeholder="Password" />
                    </label>
                </div>
                <div className="buttonDiv"> <button type="submit" className="signup_btn">Submit</button></div>
                <h4>Already have an account?. <a href="#">SignIn</a>  </h4>
                
            </form>
        </div>
    )
}