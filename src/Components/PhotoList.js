//this will be the file where we get the information for the PhotoCard
import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard.js";

export default function PhotoList(){
  const [pic, setPic] = useState({});

  useEffect(()=>{
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=ikuPkhYl79MxL4UHkbuTnzYKzr36mqxNK7BRrMEQ")
    .then(res=>{
    setPic(res.data);
    console.log("logged data is: ", res.data);
    })
    .catch(err=>{
      console.log(`Today's error is: ${err}`);
    })
  },[])
console.log(setPic);

return null;
}
