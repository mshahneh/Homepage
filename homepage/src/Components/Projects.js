import React, { Component } from "react";
import posed, { PoseGroup } from "react-pose";
import "./CSS/Projects.scss";
import ProjectCard from "./ProjectCard.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import Vision from "./Vision.js";
import Chess from "./Chess.js";
import Android from "./Android.js";
import Art from "./Art.js";
import Tab from "./Tab"

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

let Research = [
    {
        name: "Vision",
        title: "Computer Vision",
        desc: "some image processing and computer vision methods",
        image: "vision"
    }];

let Applications = [
    {
        name: "Chess",
        title : "Graphical Chess",
        desc : "Written in java. supporting both 1v1 and AI",
        image : "chess"
    },
    {
        name: "Calc",
        title: "Graphical Calculator",
        desc: "basic mathematical functions e.g. sin, log, etc. with ability to draw graphs",
        image: "calc"
    },
    {
        name: "Android",
        title: "Android App",
        desc: "Location based social media Application (group project)",
        image: "android"
    },
    {
        name: "Site",
        title:"Website Design",
        desc:"a project for Ronash Corporation",
        image:"site",
    },
    {
        name: "Art",
        title: "Paintings",
        desc: "some paintings by me",
        image: "art",
    }];

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
            this.state = { projects: projects, selectedTab:0, showing: "Vision" };
        else if (url.includes("/projects/app"))
            this.state = { projects: projects, selectedTab:0, showing: "Android" };
        else if (url.includes("/projects/chess"))
            this.state = { projects: projects, selectedTab:0, showing: "Chess" };
        else if (url.includes("/projects/art"))
            this.state = { projects: projects, selectedTab:0, showing: "Art" };
        else if (url.includes("/projects/site"))
            this.state = { projects: projects, selectedTab:0, showing: "Site" };
        else if (url.includes("/projects/calc"))
            this.state = { projects: projects, selectedTab:0, showing: "Calc" };
        else this.state = { projects: projects, selectedTab:0, showing: "none" };
    }

    handler(str) {
        window.history.pushState(null, "", `/projects/${str}`);
        this.setState({
            showing: str
        });
    }

    tab_item_click(num){
        this.setState({ selectedTab: num });
        // window.history.pushState(null, menuItems[num], `/${menuItems[num]}`);
    }

    render() {
        let tabProjects = Research;
        if(this.state.selectedTab == 1)
            tabProjects = Applications;

        return (
            <div id="projects">
                <div className={"title"}>
                    <h1>My Works!</h1>
                    <Tab tabItems={["Research", "Applications"]}
                         onClick={(x) => this.tab_item_click(x)}
                         activeTab={this.state.selectedTab}/>
                </div>
                <div className="archive">
                    {
                        tabProjects.map((item) => <ProjectCard
                            onClick={() => this.handler(item.name)}
                            title={item.title}
                            desc={item.desc}
                            image={item.image}
                            />
                            )
                    }
                </div>
                <PoseGroup>
                    {this.state.showing !== "none" && [
                        <Shade
                            key="shade"
                            className="shade"
                            onClick={() => {
                                window.history.pushState(null, "projects", "/projects");
                                this.setState({ showing: "none" });
                            }}
                        />,
                        <Modal key="modal" className="modal">
                            <FontAwesomeIcon
                                icon="times-circle"
                                className="close"
                                onClick={() => {
                                    window.history.pushState(null, "projects", "/projects");
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
