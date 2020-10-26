import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import "./CSS/Projects.css";
import ProjectCard from "./ProjectCard.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import Vision from "./Vision.js";
import Chess from "./Chess.js";
import Android from "./Android.js";
import Art from "./Art.js";

library.add(faTimesCircle);

const Modal = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: { duration: 300 }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

const Shade = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 }
});

class Projects extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        let projects = {
            Vision: <Vision />,
            Android: <Android />,
            Chess: <Chess />,
            Art: <Art />
            // Site: <Site />,
            // Calc: <Calc />
        };
        let url = window.location.href.toLowerCase();
        if (url.includes("/projects/vision"))
            this.state = { projects: projects, showing: "Vision" };
        else if (url.includes("/projects/app"))
            this.state = { projects: projects, showing: "Android" };
        else if (url.includes("/projects/chess"))
            this.state = { projects: projects, showing: "Chess" };
        else if (url.includes("/projects/art"))
            this.state = { projects: projects, showing: "Art" };
        else if (url.includes("/projects/site"))
            this.state = { projects: projects, showing: "Site" };
        else if (url.includes("/projects/calc"))
            this.state = { projects: projects, showing: "Calc" };
        else this.state = { projects: projects, showing: "none" };
    }

    handler(str) {
        window.history.pushState(null, "", ``);
        this.setState({
            showing: str
        });
    }

    render() {
        return (
            <div id="projects">
                <h1>My Works!</h1>
                <div className="archive">
                    <ProjectCard
                        onClick={() => {
                            this.handler("Vision");
                        }}
                        title={"Computer Vision"}
                        desc={
                            "some image processing and computer vision methods"
                        }
                        image={"vision"}
                    />
                    <ProjectCard
                        onClick={() => {
                            this.handler("Chess");
                        }}
                        title={"Graphical Chess"}
                        desc={"Written in java. supporting both 2v2 and AI"}
                        image={"chess"}
                    />
                    <ProjectCard
                        onClick={() => {
                            this.handler("Calc");
                        }}
                        title={"Graphical Calculator"}
                        desc={
                            "basic mathematical functions e.g. sin, log, etc. with ability to draw graphs"
                        }
                        image={"calc"}
                    />
                    <ProjectCard
                        onClick={() => {
                            this.handler("Android");
                        }}
                        title={"Android App"}
                        desc={
                            "Location based social media Application (group project)"
                        }
                        image={"android"}
                    />
                    <ProjectCard
                        onClick={() => {
                            this.handler("Site");
                        }}
                        title={"Website Design"}
                        desc={"a project for Ronash Corporation"}
                        image={"site"}
                    />
                    <ProjectCard
                        onClick={() => {
                            this.handler("Art");
                        }}
                        title={"Paintings"}
                        desc={"some paintings by me"}
                        image={"art"}
                    />
                </div>
                <PoseGroup>
                    {this.state.showing !== "none" && [
                        <Shade
                            key="shade"
                            className="shade"
                            onClick={() => {
                                window.history.pushState(null, "", "");
                                this.setState({ showing: "none" });
                            }}
                        />,
                        <Modal key="modal" className="modal">
                            <FontAwesomeIcon
                                icon="times-circle"
                                className="close"
                                onClick={() => {
                                    window.history.pushState(null, "", "");
                                    this.setState({ showing: "none" });
                                }}
                            >
                                close
                            </FontAwesomeIcon>
                            {this.state.projects[this.state.showing]}
                        </Modal>
                    ]}
                </PoseGroup>
            </div>
        );
    }
}

export default Projects;
