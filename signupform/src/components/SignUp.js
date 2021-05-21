import React, { useState, useEffect } from "react";
import Validation from "./Validation";
import "./App.css";

const SignUp = ({ submitForm }) => {
    const [signUpValue, setSignUpValue] = useState({
        fullname: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const onHandleChange = (e) => {
        setSignUpValue({ ...signUpValue, [e.target.name]: e.target.value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(signUpValue));
        setIsFormSubmitted(true)
        
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isFormSubmitted) {
            submitForm(true);
        }
    }, [errors])

    return (
        <div className="signup__container">
            <div className="title">
                <h2>Create Account</h2>
            </div>
            <form className="form__container" onSubmit={onHandleSubmit} noValidate>
                <div className="name">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        autoComplete="off"
                        name="fullname"
                        className="input"
                        value={signUpValue.fullname}
                        onChange={onHandleChange}
                    />
                    {errors.fullname && <p className="error">{errors.fullname}</p>}
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        autoComplete="off"
                        name="email"
                    
                        className="input"
                        value={signUpValue.email}
                        onChange={onHandleChange}
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="password">
                    <label htmlFor="fullname">Password</label>
                    <input
                        type="password"
                        autoComplete="off"
                        name="password"
                        className="input"
                        value={signUpValue.password}
                        onChange={onHandleChange}
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <button className="submit" >Sign Up</button>
                </div>
               <span className="login">
               Already have an account? Login <a href='#'>here</a>
               </span>
            </form>

        </div>
    )
}

export default SignUp;