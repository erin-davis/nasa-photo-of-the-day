import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import PicLayout from "./PicLayout.js";

// API to be used is https://api.nasa.gov/planetary/apod
//key is 2RgdYgx8TA9uU1sMwgjG9toP1M6OcMBccaKTPejN
export default function PicList(){
  const [picture, setPicture] = useState({});

  useEffect(()=>{
    axios
      .get('https://api.nasa.gov/planetary/apod?')
      .then(response =>{
        console.log(response);
        setPicture(response.data);
      })
      .catch(err =>{
        console.log(`The error with this is: ${err}`);
      })
  }, [picture]);


  return (
    <div className="nasa-pics">
          <div>
            <PicLayout
              title={picture.title}
              desc={picture.explanation}
              cr={picture.copyright}
              date={picture.date}
              picUrl={picture.url}
            />
          </div>
    </div>
  );
};
