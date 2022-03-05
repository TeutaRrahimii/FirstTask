import React from "react";
import './EachData.css';


const EachData = (props) => (
    <div className="box">
       <h1 className="icon">{props.icon}</h1>
       <div className="title">{props.title}</div>
       <div className="description">{props.description}</div>
    </div>
  );
  
 export default EachData;