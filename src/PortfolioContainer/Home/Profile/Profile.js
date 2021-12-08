import React from "react";
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                                   <a href="#">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter-square"></i>
                        </a>
                        </div>
                    </div>
                
                <div className="profile-details-name">
                    <span className="Primary-text">
                        {" "}
                        Hello, I'm <span className="highlighted-text">Marklen</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            <Typical 
                                loop={Infinity}
                                steps={[
                                    "Front-End Developer",
                                    1000,
                                    "HTML, CSS ",
                                    1000,
                                    "JavaScript",
                                    1000,
                                    "React",
                                    1000,
                                    "CMS",
                                    1000,
                                    "WIX",
                                    1000,
                                 
                                    
                                ]}
                            />
                        </h1>
                        <span className="Profile-role-tagline">
                        Knack of building applications with front end operations
                        </span>
                    </span>
                </div>
                    <div className="profile-options">
                        <a href="https://github.com/Marklen2017">
                        <button className="btn primary-btn">
                       
                            {""}
                            Hire Me{" "}
                        </button>
                         </a>
                        <a href='CV.jpg' download='reghtej CV.jpg'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}