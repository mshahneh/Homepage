import React, { Component } from "react";
import "./App.css";
import posed, { PoseGroup } from "react-pose";
import MetaTags from "react-meta-tags";

import FaHome from "react-icons/lib/go/home";
import FileAlt from "react-icons/lib/go/file-media";
import CheckList from "react-icons/lib/go/checklist";
import Mail from "react-icons/lib/go/mail";
import AboutMe from "./Components/AboutMe.js";
import Resume from "./Components/Resume.js";
import Projects from "./Components/Projects.js";
import Contacts from "./Components/Contacts.js";

const Screen = posed.div({
    inside: {
        position: "absolute",
        top: 0,
        height: "100vh",
        transition: { duration: 600 },
        zindex: 15
    },
    up: {
        position: "absolute",
        top: "100vh",
        // height: "0vh",
        zindex: -1,
        transition: { duration: 600 }
    },
    down: {
        position: "absolute",
        top: "0",
        height: "0vh",
        transition: { duration: 600 },
        zindex: -1
    }
});

class App extends Component {
    constructor(props) {
        super(props);
        var url = window.location.href;
        if (url.includes("/projects")) this.state = { selectedScreen: 3 };
        else if (url.includes("/resume")) this.state = { selectedScreen: 2 };
        else if (url.includes("/aboutme")) this.state = { selectedScreen: 1 };
        else if (url.includes("/contactme")) this.state = { selectedScreen: 4 };
        else this.state = { selectedScreen: 1 };
    }
    handleAnimation(key) {
        if (this.state.selectedScreen === key) return "inside";
        else if (this.state.selectedScreen < key) return "up";
        else return "down";
    }

    render() {
        return (
            <div className="App">
                <MetaTags>
                    <title>Mohammadreza Shahneh</title>
                    <meta name="description" content="Some description." />
                    <meta property="og:title" content="MyApp" />
                    <meta
                        property="og:image"
                        content="./Images/mohammadreza.jpg"
                    />
                </MetaTags>
                <div className="RightPanel">
                    <div
                        style={{
                            padding: "0",
                            margin: "0",
                            position: "relative"
                        }}
                    >
                        <img
                            style={{
                                width: "100%",
                                position: "relative",
                                margin: 0,
                                padding: 0
                            }}
                            src={require("./Images/mohammadreza.jpg")}
                        />
                        <p>Mohammad Reza</p>
                    </div>
                    <ul>
                        <li
                            className={
                                this.state.selectedScreen === 1
                                    ? "ActiveRitem"
                                    : "Ritem"
                            }
                            onClick={() => {
                                this.setState({ selectedScreen: 1 });
                                window.history.pushState(null, "", "");
                            }}
                        >
                            <FaHome className="panelIcon" />
                            ABOUT ME
                        </li>
                        <li
                            className={
                                this.state.selectedScreen === 2
                                    ? "ActiveRitem"
                                    : "Ritem"
                            }
                            onClick={() => {
                                this.setState({ selectedScreen: 2 });
                                window.history.pushState(null, "", "");
                            }}
                        >
                            <FileAlt className="panelIcon" /> RESUME
                        </li>
                        <li
                            className={
                                this.state.selectedScreen === 3
                                    ? "ActiveRitem"
                                    : "Ritem"
                            }
                            onClick={() => {
                                this.setState({ selectedScreen: 3 });
                                window.history.pushState(null, "", "");
                            }}
                        >
                            <CheckList className="panelIcon" /> PROJECTS
                        </li>
                        <li
                            className={
                                this.state.selectedScreen === 4
                                    ? "ActiveRitem"
                                    : "Ritem"
                            }
                            onClick={() => {
                                this.setState({ selectedScreen: 4 });
                                window.history.pushState(null, "", "");
                            }}
                        >
                            <Mail className="panelIcon" />
                            CONTACT
                        </li>
                    </ul>
                </div>
                <div className="mainView">
                    <PoseGroup>
                        <Screen
                            className="screen"
                            style={{ overflow: "hiden" }}
                            key="1"
                            pose={this.handleAnimation(1)}
                        >
                            <AboutMe />
                        </Screen>
                        <Screen
                            className="screen"
                            key="2"
                            pose={this.handleAnimation(2)}
                        >
                            <Resume />
                        </Screen>
                        <Screen
                            className="screen"
                            key="3"
                            pose={this.handleAnimation(3)}
                        >
                            <Projects />
                        </Screen>
                        <Screen
                            key="4"
                            className="screen"
                            pose={this.handleAnimation(4)}
                        >
                            <Contacts />
                        </Screen>
                    </PoseGroup>
                </div>

                {/* <div onClick = {() => this.setState({ item: 1-this.state.item })}>salam</div>
        <Screen key="1" pose={this.state.item < 1 ? 'inside': 'up'} style={{height:'80vh', backgroundColor:'#004030',color:'#fff'}}>
          aaaaaaaaaaaaaaaaaa
        </Screen>
        <Screen key="2" pose={this.state.item < 1  ? 'down' : 'inside'} style={{height:'80vh', backgroundColor:'#004050', color:'#fff'}}>al sdlaksjd ;kjkjfkjadkjfhs djkahsd hAJDH JHGAJSHDF JHDAJ </Screen> */}
            </div>
        );
    }
}

export default App;
