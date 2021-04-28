import React, { useState } from "react";
import Accordion from "./Accordion";
import items from './data';
import "./App.css"


const App = () => {
  
    return(
        <Accordion items={items} multiple={true}/>
    )
   
    // return (
   
    //     <div className="warpper">
    //         <div className="accordion">
    //             {
    //                 items.map((item, i) => (
    //                     <div className="item" key={i}>
    //                         <div className="title" >
    //                             <h2>{item.question}</h2>
    //                             <button className="btn" onClick={() => toggle(i)}>  {selected === i ? '-' : '+'}</button>
    //                         </div>
                         
    //                             <div className={selected === i ? 'content show' : 'content'}>
                               
    //                                 {item.answer}
    //                             </div>
                            
    //                     </div>
    //                 )
    //                 )
    //             }
    //         </div>
    //     </div>
    // )
}

export default App;