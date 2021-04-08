import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const SingleQuestion = ({ question }) => {

    const [toggle, setToggle] = useState(false);
    return (
        <article className="question">
            <header >
                <h4>{question.title}</h4>
                <button className="btn" onClick={() => setToggle(!toggle)}>
                    {toggle ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {toggle && <p>{question.info}</p>}
        </article>
    );
}

export default SingleQuestion;