import React, { Component } from "react";
import "./CSS/AboutMe.css";

class AboutMe extends Component {
    render() {
        return (
            <div id="aboutme">
                <div id="color1" />
                <div id="color2" />
                <div id="color3" />
                <div class="about">
                    <div className="tr">
                        <img src={require("../Images/mohammadreza.jpg")} />
                    </div>
                    <div className="tr">
                        <h2>Hi!</h2>
                        <pr>
                            I am Mohammadreza Zare Shahneh, a senior Computer
                            Science undergraduate in the Mathematical Sciences
                            Department at Sharif University of Technology.
                        </pr>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
