//this will be the file where we get the information for the PhotoCard
import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard.js";

export default function PhotoList(){
  const [pic, setPic] = useState({});

  useEffect(()=>{
    axios
    .get("https://api.nasa.gov/planetary/apod")
    .then(res=>{
    setPic(res.data);
    console.log("logged data is: ", res.data);
    })
    .catch(err=>{
      console.log(`Today's error is: ${err}`);
    })
  },[pic])


  return (
    <div className="post-container">
        <PhotoCard
          key={pic.date}
          picUrl={pic.url}
          title={pic.title}
          exp={pic.explanation}
          hdUrl={pic.hdurl}
        />
        //issue there was that i didn't need to loop through things because it's just one picture a day
    </div>
  )
}
