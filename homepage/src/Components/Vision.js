import React, { Component } from "react";
import "./CSS/projectCards.css";

class Vision extends Component {
    render() {
        return (
            <div className="cards">
                <div className="item">
                    <p className="title">1 - improving image quality</p>
                    <p className="desc">
                        improving quiality of images using some methods like
                        histogram normalization
                    </p>
                    <img src={require("../Images/improve.jpg")} />
                </div>
                <div className="item">
                    <p className="title">2 - Texture Synthesizing</p>
                    <p className="desc">
                        filling up empty space using patches from other parts of
                        the image without any manual restrictions and improving
                        patch finding speed using image pyramid.
                    </p>
                    <img src={require("../Images/stich.jpg")} />
                </div>
                <div className="item">
                    <p className="title">3 - active contour</p>
                    <p className="desc">{""}</p>
                    <img src={require("../Images/movie01.gif")} />
                </div>
                <div className="item">
                    <p className="title">4 - morphing</p>
                    <p className="desc">(requires user to input some points)</p>
                    <img src={require("../Images/q2.gif")} />
                </div>
                <div className="item">
                    <p className="title">5 - poisson blending</p>
                    <p className="desc"> </p>
                    <img src={require("../Images/zLeo.jpg")} />
                </div>
                <div className="item">
                    <p className="title">6 - book detection!</p>
                    <p className="desc">
                        using line detection and the assumption of books being
                        rectangular! (with 90 degree angles)
                    </p>
                    <img src={require("../Images/books.jpg")} />
                </div>
                <div className="item">
                    <p className="title">7 - making panorama</p>
                    <p className="desc">
                        creating panorama pictures out of shuffled pictures.
                        finding corresponding points using SIFT algorithm and
                        finding homography matrix.
                    </p>
                    <img src={require("../Images/panorama.jpg")} />
                </div>
                {/* <div className="item">
                    <p className="title">8 - bag of features</p>
                </div>

                <div className="item">
                    <p className="title">
                        9 - face detection using viola-jones algorithm
                    </p>
                </div> */}
            </div>
        );
    }
}

export default Vision;
