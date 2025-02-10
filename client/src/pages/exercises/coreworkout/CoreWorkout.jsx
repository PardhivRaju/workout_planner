import React from 'react';
import CustomFooter from '../../../components/footer/CustomFooter';
import CustomHeader from '../../../components/header/CustomHeader';
import seventhimg from "../../../assets/seventhimg.webp";
import ImageBox from '../../../components/main_page_box/ImageBox';
import { Heading } from '../../../components/customTypo/CustomTypo';
import "../backexercise/BackExercise.css"; 

const CoreWorkout = () => {
    return (
        <div className="customs" style={{fontFamily:"poppins"}}>
            <CustomHeader />
            <Heading style={{ margin: "20px" }}>
                  <center>Core Workout</center>
            </Heading>
            <div className="exerdetail">
            
            <div className="image-exercise">
                <ImageBox className="exerimage" imgSrc={seventhimg} />
            </div>
            <div className="content-container">
                <div className="row">
                    <div className="col">
                        <p className="section-heading">Difficulty</p>
                        <p className="difficulty-level medium">Medium</p>
                        <p className="section-heading">Required Equipment</p>
                        <ul className="equipment-list">
                            <li>
                                <a href="https://training.fit/equipment/cable-pull-station/" target="_blank" rel="noopener noreferrer">
                                Exercise without equipment
                                </a>
                            </li>
                        </ul>
                        <p className="section-heading">Benefits</p>
                        <ul className="benefits">
                            <li>Better posture <br /></li>
                            <li>Stability and balance<br /></li>
                            <li>Reduced back pain<br /></li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="section-heading">Main Muscles</p>
                        <ul className="muscle-list">
                            <li>Abdomen: Straight abdominal muscle<br /><span>(Musculus rectus abdominis)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <CustomFooter />
        </div>
    );
};

export default CoreWorkout;
