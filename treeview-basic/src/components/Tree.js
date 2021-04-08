import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Tree = ({ data = [] }) => {

    return (
        <div>
            <ul className="mainlist">
                {data.map(tree => (
                    <TreeNode node={tree} key={tree.key} />
                ))}
            </ul>
        </div>
    )
};

const TreeNode = ({ node }) => {
    const [childVisible, setChildVisible] = useState(false);

    let hasChild = node.children ? true : false;

    return (
        <li>
            <div className="maintree">
                {hasChild &&
                    (
                        <button className="btn" onClick={() => setChildVisible(!childVisible)}>
                            {hasChild && !childVisible ? <AiOutlinePlus /> : <AiOutlineMinus />}
                        </button>
                    )
                }
                <h4>{node.label}</h4>
            </div>

            {hasChild && childVisible && (

                <div>
                    <ul>
                        <Tree data={node.children} />
                    </ul>
                </div>
            )}
        </li>

    )
}

export default Tree;