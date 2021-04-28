import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
const Accordion = ({ items, multiple }) => {

    const [selected, setSelected] = useState(0);

    const toggle = (i) => {

        if (selected === i) {
            console.log("Selected" + selected);
            console.log("i" + i);
            return setSelected(null);
        }
        setSelected(i);
        console.log("i" + i);
        // console.log("hi");
        console.log("when selected and i not equal"+i); 
    }

    return (

        <div className="warpper">
            <div className="accordion">
                {
                    items.map((item, i) => (
                        <AccordionItem key={i} {...item} toggle={() => toggle(i)} active={selected === i} multiple={multiple} />
                         )
                    )
                }
            </div>
        </div>
    )
}

export default Accordion;