import React from 'react';
import CustomFooter from '../../../components/footer/CustomFooter';
import CustomHeader from '../../../components/header/CustomHeader';
import fifthimg from "../../../assets/fifthimg.webp";
import ImageBox from '../../../components/main_page_box/ImageBox';
import { Heading } from '../../../components/customTypo/CustomTypo';
import "./LegsWorkout.css"; 

const LegsWorkout = () => {
    return (
        <div className="customs" style={{fontFamily:"poppins"}}>
            <CustomHeader />
            <Heading style={{ margin: "20px" }}>
                  <center>Legs Workout</center>
            </Heading>
            <div className="exerdetail">
            
            <div className="image-exercise">
                <ImageBox className="exerimage" imgSrc={fifthimg} />
            </div>
            <div className="content-container">
                <div className="row">
                    <div className="col">
                        <p className="section-heading">Difficulty</p>
                        <p className="difficulty-level easy">Easy</p>
                        <p className="section-heading">Required Equipment</p>
                        <ul className="equipment-list">
                            <li>
                                <a href="https://training.fit/equipment/cable-pull-station/" target="_blank" rel="noopener noreferrer">
                                Machine
                                </a>
                            </li>
                        </ul>
                        <p className="section-heading">Benefits</p>
                        <ul className="benefits">
                            <li>Build muscle<br /></li>
                            <li>Burn calories<br /></li>
                            <li>Improve cardiovascular health<br /></li>
                            <li>Reduce risk of injury<br /></li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="section-heading">Main Muscles</p>
                        <ul className="muscle-list">
                            <li>Thigh: Quadriceps <br /><span>(Musculus quadriceps femoris)</span></li>
                            <li>Thigh: Thigh flexor <br /><span>(Musculus biceps femoris)</span></li>
                            <li>Buttocks: Large gluteus maximus<br /><span>(Musculus gluteus maximus)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <CustomFooter />
        </div>
    );
};

export default LegsWorkout;
