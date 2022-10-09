import "../css/phone.css";
import React, { useState } from "react";

function Phone() {
  const[imageNo, setimageNo]=useState(1);
  setInterval(() => {
    if (imageNo<3) {
      setimageNo(imageNo+1);  
    }
    else{
      setimageNo(1);
    }
  }, 5000);
  
  return (
    <div id="phone-screen">
      <img
        className="screenshot"
        src={require(`../images/${imageNo}.png`)}
        alt=""
      />
    
    </div>
  );
}
export default Phone;
