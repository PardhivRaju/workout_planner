import React from 'react';
import CustomFooter from '../../../components/footer/CustomFooter';
import CustomHeader from '../../../components/header/CustomHeader';
import fourthimg from "../../../assets/fourthimg.webp";
import ImageBox from '../../../components/main_page_box/ImageBox';
import { Heading } from '../../../components/customTypo/CustomTypo';
import "./TricepsExercise.css"; 

const TricepsExercise = () => {
    return (
        <div className="customs" style={{fontFamily:"poppins"}}>
            <CustomHeader />
            <Heading style={{ margin: "20px" }}>
                  <center>Triceps Exercise</center>
            </Heading>
            <div className="exerdetail">
            
            <div className="image-exercise">
                <ImageBox className="exerimage" imgSrc={fourthimg} />
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
                                Cable pull station
                                </a>
                            </li>
                        </ul>
                        <p className="section-heading">Benefits</p>
                        <ul className="benefits">
                            <li>Improved stability <br /></li>
                            <li>Increased range of motion<br /></li>
                            <li>Better muscle activation<br /></li>
                            <li>Increased grip strength<br /></li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="section-heading">Main Muscles</p>
                        <ul className="muscle-list">
                            <li>Triceps: Three-headed arm muscle <br /><span>(Musculus triceps brachii)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <CustomFooter />
        </div>
    );
};

export default TricepsExercise;
