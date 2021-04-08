import React from "react";

import dataTree from "./data";



const Tree1 = () => {


    return (

        <ul className="treeConatiner">
            {
                dataTree.map((node, i) => {
                    const type = node.type;
                    const label = <span className="node">{type}</span>;
                    return (
                        <li key={type + "|" + i}>{label}
                            <ul class="nested">
                                {node.people.map(person => {
                                    const label2 = <span className="node">{person.name}</span>
                                    return (
                                        <li key={person.name}
                                        >{label2}
                                            <div className="info">age:{person.age}</div>
                                            <div className="info">age:{person.sex}</div>
                                            <div className="info">age:{person.role}</div>
                                  
                                        </li>
                                    )
                                })

                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>

    )
}
export default Tree1;

