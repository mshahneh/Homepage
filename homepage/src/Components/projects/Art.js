import React, { Component } from "react";
import "../CSS/projectCards.scss";

class Art extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">my Paintings</p>
                    <p className="desc">
                        I really like to paint. The following may not be my best paintings but they have a special value for me.
                    </p>
                    <img src={require("../../Images/painting1.jpg")} />
                    <img src={require("../../Images/painting2.jpg")} />
                    <p className="desc">
                        I also, design and build puzzle boxes! I mainly use wood. My last puzzle box was a 10"*10"*20" box with more than 10 completely different lock mechanisms and more than 50 different puzzles.
                    </p>
                    <img src={require("../../Images/puzzle-box.png")} />
                    {/*<p className="desc">drawing with straight lines</p>*/}
                    {/*<img src={require("../../Images/painting3.jpg")} />*/}
                    {/*<p className="desc">modern warfare</p>*/}
                    {/*<img src={require("../../Images/painting4.jpg")} />*/}
                </div>
            </div>
        );
    }
}

export default Art;
