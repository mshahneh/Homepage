import React, { Component } from "react";
import "./CSS/Projects.css";
import ArrorRight from "react-icons/lib/fa/arrow-circle-o-right";
let Images = {
    vision: require("../Images/vision.jpg"),
    chess: require("../Images/chess.png"),
    calc: require("../Images/calc.png"),
    android: require("../Images/android.png"),
    art: require("../Images/art.jpg"),
    site: require("../Images/site.png")
};

class ProjectCard extends Component {
    render() {
        return (
            <div className="project-card" onClick={this.props.onClick}>
                <div class="project-image">
                    <img src={Images[this.props.image]} />
                    <a className="parentbox">
                        <ArrorRight className="childbox" />
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
