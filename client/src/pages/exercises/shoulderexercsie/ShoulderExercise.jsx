import React from 'react';
import CustomFooter from '../../../components/footer/CustomFooter';
import CustomHeader from '../../../components/header/CustomHeader';
import sixthimg from "../../../assets/sixthimg.webp";
import ImageBox from '../../../components/main_page_box/ImageBox';
import { Heading } from '../../../components/customTypo/CustomTypo';
import "../backexercise/BackExercise.css"; 

const ShoulderExercise = () => {
    return (
        <div className="customs" style={{fontFamily:"poppins"}}>
            <CustomHeader />
            <Heading style={{ margin: "20px" }}>
                  <center>Shoulder Exercise</center>
            </Heading>
            <div className="exerdetail">
            
            <div className="image-exercise">
                <ImageBox className="exerimage" imgSrc={sixthimg} />
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
                                    Cable pull station
                                </a>
                            </li>
                        </ul>
                        <p className="section-heading">Benefits</p>
                        <ul className="benefits">
                            <li>Biceps: Arm flexor <br /></li>
                            <li>Upper arm: Coracobrachialis muscle <br /></li>
                            <li>Neck: Trapezius muscle <br /></li>
                            <li>Back: Large round muscle <br /></li>
                            <li>Back: Large back muscle <br /></li>
                        </ul>
                    </div>
                    <div className="col">
                        <p className="section-heading">Main Muscles</p>
                        <ul className="muscle-list">
                            <li>Biceps: Arm flexor <br /><span>(Musculus biceps brachii)</span></li>
                            <li>Upper arm: Coracobrachialis muscle <br /><span>(Musculus coracobrachialis)</span></li>
                            <li>Neck: Trapezius muscle <br /><span>(Musculus trapezius)</span></li>
                            <li>Back: Large round muscle <br /><span>(Musculus teres major)</span></li>
                            <li>Back: Large back muscle <br /><span>(Musculus latissimus dorsi)</span></li>
                            <li>Back: Larger rhomboid muscle <br /><span>(Musculus rhomboideus major)</span></li>
                            <li>Back: Small round muscle <br /><span>(Musculus teres minor)</span></li>
                            <li>Shoulder: Posterior deltoid muscle <br /><span>(Musculus deltoideus, posterior deltoid muscle)</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <CustomFooter />
        </div>
    );
};

export default ShoulderExercise;
