import React from "react";


const PicLayout = props =>{
  return(
    <div className="page-layout">
      <div className="center-this">
        <h2>{props.title}</h2>
        <img src={props.picUrl} alt={props.title}/>
        <p>Picture Copyright of {props.cr}</p>
        <p>{props.desc}</p>
        <p>{props.date}</p>
      </div>
    </div>
  );

};
export default PicLayout;
