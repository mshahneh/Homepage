import React, { Component } from "react";
import "../CSS/projectCards.scss";

class Shelem extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">
                        Location based social media application
                    </p>
                    <p className="desc">
                        Shelem is a popular card game in Iran. We developed a web application for this game giving players the ability to play shelem online from anywhere in the world!.
                    </p>
                    <p className="desc">
                        In this project we used React for the web version, Nodejs with <a href={'https://colyseus.io/'} > colyseus framework </a> the Unity version of this is still under developement.
                    </p>
                    <p>
                        you can find a working demo of this game on <a href={'shelem.mohammad-reza.com'}> shelem.mohammad-reza.com</a>
                    </p>
                    <img src={require("../../Images/shelem-create.png")} />
                    <img src={require("../../Images/shelem-team.png")} />
                    <img src={require("../../Images/shelem-desktop.png")} />
                    <img src={require("../../Images/shelem-mobile.png")} />

                </div>
            </div>
        );
    }
}

export default Shelem;
