//this is the file where we asemble our photocard
import React from "react";

const PhotoCard = (props) =>{

  return (
    <div className="photo-card" key={props.date}>
      <div className="pic">
        <img className="daily-img" alt="i'm betting it's space yall" src={props.picUrl} />
      </div>
      <div className="text-content">
        <h2>{props.title}</h2>
        <p>{props.exp}</p>
        <a href={props.hdUrl} target='_blank'>Click Here for High Def View</a>
      </div>
    </div>
  );
};
export default PhotoCard;
