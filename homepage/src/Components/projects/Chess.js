import React, { Component } from "react";
import "../CSS/projectCards.scss";

class Chess extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">Graphical chess game</p>
                    <p className="desc">
                        using alpha beta pruning algorithm, in order to find the
                        best values for each piece, I made two AI play with
                        diffrent numbers and then the code updated itself. the
                        resualting number is good enough that it has defeated me
                        and my chess game application every time!
                    </p>
                    <img src={require("../../Images/chessg.PNG")} />
                </div>
            </div>
        );
    }
}

export default Chess;
