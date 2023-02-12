import React from "react";

import github from './Assets/Images/github.png';

import gmail from './Assets/Images/gmail.png'

function Footer() {
    return (
        <div className="foot-div">
            <div className="icon-main-div">
                <div className="follow-div">
                    <p>Follow Me</p>
                </div>
                <div className="icon-div">
                    <div className="gmail-div">
                        <a href="mailto: ekamsidhu5678@gmail.com"><img id="gmailIcon" src={gmail} alt="gmail icon" ></img></a>
                    </div>
                    <div className="git-div">
                        <a href="https://github.com/EkamjotSidhu"> <img src={github} alt="icon for github"></img></a>
                    </div>
                   
                </div>
            </div>
            
        </div>
    )
}
export default Footer;