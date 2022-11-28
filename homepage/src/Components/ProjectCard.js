import React, { Component } from "react";
import "./CSS/Projects.scss";
import { FaArrowCircleRight } from "react-icons/fa";
let Images = {
    vision: require("../Images/vision.jpg"),
    chess: require("../Images/chess.png"),
    calc: require("../Images/calc.png"),
    android: require("../Images/android.png"),
    art: require("../Images/art.jpg"),
    site: require("../Images/site.png"),
    covid: require("../Images/covid.png"),
    pedestrian: require("../Images/pedestrian.jpg"),
    shelem: require("../Images/shelem.png")
};

class ProjectCard extends Component {
    render() {
        return (
            <div className="project-card" onClick={this.props.onClick}>
                <div className="project-image">
                    <img src={Images[this.props.image]} />
                    <a className="parentbox">
                        <FaArrowCircleRight className="childbox" />
                    </a>
                </div>
                <div>
                    <p className="project-title">{this.props.title}</p>
                    <p className="project-desc">{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
