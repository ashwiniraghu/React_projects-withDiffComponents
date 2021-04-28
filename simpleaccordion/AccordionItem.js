import React, { useState } from "react";

const AccordionItem = ({ question, answer, toggle, active, multiple }) => {

    const [visibility, setVisibility] = useState(false);
    const isActive = () => (multiple ? visibility : active);
    // console.log(question); 
    // console.log(answer); 
    console.log("Active "+active); 
     console.log("Visibe "+visibility); 
     console.log(isActive()); 

    const toggleVisibility = () => {
        console.log("I am called first"); 
        setVisibility((v) => !v);
        toggle();
  
        console.log("visibility changed"+visibility); 
    }

    return (
        <div className="item">
            <div className="title" >
                <h2>{question}</h2>
                <button className="btn" onClick={toggleVisibility}>  {isActive() ? '-' : '+'}</button>
            </div>
            <div className={isActive()  ? 'content show' : 'content'}>
                {answer}
            </div>

        </div>
    )
}

export default AccordionItem;