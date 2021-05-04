import React,{useState} from "react";
import "./Tab.css";


const Tab = ({ data }) => {
    const [activetab, setActivetab] = useState(data[0])

    const onClickHandler = (item) => {
        setActivetab(item);
        console.log(activetab)
    }
    return (

        <div className="mainsection">
            {
                data.map((item, i) => (
                    
                    <button className={`tabbutton ${item.title===activetab.title?'active':''}`}  key={i} onClick={() => onClickHandler(item)}>{item.title}</button>
                ))
            }
            <div className="tabitem">{activetab.content}</div>
        </div>
    )
}

export default Tab;