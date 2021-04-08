import React from "react";
import TreeView from "react-treeview";
import "react-treeview/react-treeview.css"
import dataTree1 from "./data";



const Tree2 =()=>{

   
     return (
        
    <div className="treeConatiner">
        {
            dataTree1.map((node, i)=>{
                const type=node.type;
                const label=<span className="node">{type}</span>;
                return(
                    <TreeView key={type+"|"+i}
                     nodeLabel={label}
                     defaultCollapsed={true}>
                         {node.people.map(person=>{
                             const label2=<span className="node">{person.name}</span>
                             return(
                                 <TreeView key={person.name}
                                 nodeLabel={label2}
                                 defaultCollapsed={true}>
                                     <div className="info">age:{person.age}</div>
                                     <div className="info">age:{person.sex}</div>
                                     <div className="info">age:{person.role}</div>
                                   
                                </TreeView>
                             )
                         })
    
                         }
                     </TreeView>
                )
             })
         }
     </div>
         )
}
export default Tree2;

