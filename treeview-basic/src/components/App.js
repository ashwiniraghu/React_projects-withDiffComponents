import React from "react";
import Tree1 from "./Tree1";
import Tree2 from "./Tree2";
import TreeList from "./TreeList";


const App = () => {
    return (
        <main>
            <section className="container">
                 <div>
                    <h4> TreeView</h4>
                    <div className="underline"></div>
                </div>
                <div className="treeContainer">
                    <div className="firstTreeview">
                        <h4> TreeView W3Schools</h4>
  
                        <Tree1 />
                    </div>
                    <div className="secondTreeview">
                        <h4> TreeView using React-Treeview</h4>
             
                        <Tree2 />
                    </div> 

                    <div className="thirdTreeview">
                        <h4> TreeView using recursive</h4>
              
                        <TreeList />
                    </div>
        </div>
        
            </section>
        </main>
    )
}

export default App;