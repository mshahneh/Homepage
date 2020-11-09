// import React, { Component } from "react";
// import "./CSS/AboutMe.css";
//
// class AboutMe extends Component {
//     render() {
//         return (
//             <div id="aboutme">
//                 <div id="color1" />
//                 <div id="color2" />
//                 <div id="color3" />
//                 <div class="about">
//                     <div className="tr">
//                         <img src={require("../Images/mohammadreza.jpg")} />
//                     </div>
//                     <div className="tr">
//                         <h2>Hi!</h2>
//                         <pr>
//                             I am Mohammadreza Zare Shahneh, a senior Computer
//                             Science undergraduate in the Mathematical Sciences
//                             Department at Sharif University of Technology.
//                         </pr>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default AboutMe;

import React, { Component } from "react";
import "./CSS/AboutMe.scss";

class AboutMe extends Component {
    render() {
        return (
            <div id="aboutme">
                <h1>
                    About me
                </h1>
                <div id={"personal"}>
                    <div id={"mypic"}>
                        <img src={require("../Images/me.png")} alt={"My image"}/>
                    </div>
                    <div id={"mybio"}>
                        <h1>Hello, I am <span className={"colorText"}>Mohammad Reza </span></h1>
                        <p>
                            I am Mohammad Reza Zare Shahneh, a master’s student in Computer Science at University of California Riverside where I am very fortunate to be advised by Samet Oymak and Amr Magdy.
                        </p>
                        <p>
                            I am broadly interested in Machine Learning. My recent works have been focused on black box optimization applied for hyperparameter tuning.
                        </p>
                        <p>
                            Prior to joining UCR, I earned my Bachelor’s degree in Computer Science from Sharif University of Technology.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;

