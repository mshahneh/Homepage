import React, { Component } from "react";
import "../CSS/projectCards.scss";

class Android extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">
                        Location based social media application
                    </p>
                    <p className="desc">
                        during my internship at Rahnema corp. My group and I
                        made a social media application in which users can only
                        see posts within 1km distance around them. we used
                        nodejs as our back-end language, mongoDB as our
                        database, and react native for our front end.
                    </p>
                    <img src={require("../../Images/android1.jpg")} />
                    <img src={require("../../Images/android2.jpg")} />
                    <img src={require("../../Images/android3.jpg")} />
                    <img src={require("../../Images/android4.jpg")} />
                </div>
            </div>
        );
    }
}

export default Android;
