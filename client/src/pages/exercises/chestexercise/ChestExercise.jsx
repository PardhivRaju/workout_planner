import React from 'react';
import CustomFooter from '../../../components/footer/CustomFooter';
import CustomHeader from '../../../components/header/CustomHeader';
import thirdimg from "../../../assets/thirdimg.webp";
import ImageBox from '../../../components/main_page_box/ImageBox';
import { Heading } from '../../../components/customTypo/CustomTypo';
import "./ChestExercise.css"; 

const ChestExercise = () => {
    return (
        <div className="customs" style={{fontFamily:"poppins"}}>
            <CustomHeader />
            <Heading style={{ margin: "20px" }}>
                  <center>Chest Exercise</center>
            </Heading>
            <div className="exerdetail">
            
            <div className="image-exercise">
                <ImageBox className="exerimage" imgSrc={thirdimg} />
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
                                    Barbell, Bench
                                </a>
                            </li>
                        </ul>
                        <p className="section-heading">Benefits</p>
                        <ul className="benefits">
                            <li>Improved posture <br /></li>
                            <li>Increased strength<br /></li>
                            <li>Better breathing<br /></li>
                            <li>Reduced upper back pain <br /></li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="section-heading">Main Muscles</p>
                        <ul className="muscle-list">
                            <li>Chest: Large pectoral muscle<br /><span>(Musculus pectoralis major)</span></li>
                            <li>Chest: Small pectoral muscle <br /><span>(Musculus pectoralis minor)</span></li>
                            <li>Shoulder: Anterior deltoid muscle <br /><span>(Musculus deltoideus, Pars clavicularis)</span></li>
                            <li>Triceps: Three-headed arm muscle <br /><span>(Musculus triceps brachii)</span></li>
                            <li>Back: Large back muscle <br /><span>(Musculus latissimus dorsi)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <CustomFooter />
        </div>
    );
};

export default ChestExercise;
