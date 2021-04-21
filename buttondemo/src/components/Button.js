import React from "react";
import "./Button.css";

const Button=()=>{
return (
<div class="container"> 
  <button className="btn primary">Primary</button>
  <button className="btn secondary">Secondary</button>
  <button className="btn success">Success</button>
  <button className="btn danger">Danger</button>
  <button className="btn warning">Warning</button>
  <button className="btn info">Info</button>
  <button className="btn light">Light</button>
  <button className="btn dark">Dark</button>
  <button className="btn link">Link</button>
</div>
)
}
 export default Button;