import React from "react";
import { useNavigate } from "react-router-dom";
import "./ImageBox.css";

const ImageBox = ({ imgSrc, targetRoute }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/todayworkoutplans");
  };

  return (
    <div className="image-box" onClick={handleClick}>
      <center>
        <img src={imgSrc} alt="Your content" className="image-contentmain" />
      </center>
    </div>
  );
};

export default ImageBox;
