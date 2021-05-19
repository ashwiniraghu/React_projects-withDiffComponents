import React, { useState } from "react"
import Loader from "./Loader";
import "./App.css";

const App = () => {
    const [isLoading, setIsLoading] = useState(false)

    const onHandleClick = () => {
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }

    return (
        <div className="container">
            {isLoading ? "" :
                <button className="btn" onClick={onHandleClick}>Click Me to see Loader</button>
            }
            <div>
                {isLoading && <Loader />}
            </div>
        </div>

    )

}

export default App;