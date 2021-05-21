import React, { useState } from "react";
import SignUp from "./SignUp";
import SignUpSuccess from "./SignUpSuccess";
import "./App.css";

const App = () => {
    const [signUpSucsess, setSignUpSucess] = useState(false)

    const submitForm = () => {
     
        setSignUpSucess(true);
    }
    return (
        <div className="container">
            {signUpSucsess ? <SignUpSuccess  /> : <SignUp submitForm={submitForm} />}
        </div>
    )
}

export default App;