import React, { Component } from "react";
import "../CSS/projectCards.scss";

class Pedestrian extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">Pedestrian Detection and tracking</p>
                    <p className="desc">
                        I'll add the video demo and work description soon ;)
                    </p>
                    <img src={require("../../Images/pedestrian detection.jpg")} />
                </div>
            </div>
        );
    }
}

export default Pedestrian;
