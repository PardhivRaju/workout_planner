import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sideImage.css";

const SideImage = ({ imgSrc, exercise, targetRoute }) => { 
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(targetRoute);  
    };
  
    return (
      <div 
        className="image-box" 
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <center>
          <img src={imgSrc} alt="Exercise" className="image-content" />
          {hover && <div className="hover-details">{exercise}</div>}
        </center>
      </div>
    );
};

export default SideImage;
