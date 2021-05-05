import React, { useEffect, useState } from "react";
import "./Link.css";

const Link = () => {
    const [active, setActive] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    const onClickHandler = () => {
        setActive(v => !v)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
            setActive(false)
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    },[])

    return (
        <nav>
            <div className="main__nav">
                Nav Bar
         </div>
            {(active || screenWidth > 500) &&
                <ul className="ham__list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contacts</li>
                </ul>
            }
            <div className="button__ham" onClick={onClickHandler}>
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>
    )
}

export default Link;