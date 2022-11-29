import React, { Component } from "react";
import "../CSS/projectCards.scss";

class Art extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">Ronash App trened website</p>
                    <p className="desc" > This website is not running in the Ronash domain at the moment. I'll create a demo and put it here soon ;)</p>
                    <img src={require("../../Images/site.png")} />
                </div>
            </div>
        );
    }
}

export default Art;