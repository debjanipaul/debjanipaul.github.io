import React from 'react';
import './about.css';
import Header from './header';
import Footer from './footer';
import AboutPic from './portfolioPic.jpg';
import Bootstrap from './images/Bootstrap.png';
import CSS3 from './images/CSS3.png';
import Express from './images/express.png';
import Github from './images/github1.png';
import Html5 from './images/HTML5.png';
import Jquery from './images/jquery.jpg';
import JS from './images/js.png';
import Mongo from './images/mongo.png';
import Node from './images/node.png';
import ReactJs from './images/react2.png';
import Python from './images/python.png';


class About extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <div id="aboutMe" className="about">
                    <div className="portfolioPic">
                        <img className="portPic" src={AboutPic} alt="Portfolio pic" />
                    </div>
                    <div className="aboutMe">
                        <p>I am a self-taught Web Developer based in San Francisco Bay Area with an MBA in Finance. I am passionate about turning abstract ideas and concepts into Dynamic and Responsive web applications.</p>
                        <p>I began dabbling with some online courses in January 2017, which paved the path to a very insightful and immersive journey into the world of web development. I recently graduated from the Front-End Nanodegree program from Udacity. </p>
                        <p>When not coding you will find me spending time with my husband and son. I also love painting, singing and baking.</p>
                    </div>
                </div>

                <div className="skillDiv">
                    <h1 className="skills">Skills</h1>
                    {/* <hr /> */}
                    <div className="skillContainer">

                        <div className="skillClass">
                            <img src={Html5} alt="html pic" />
                        </div>
                        <div className="skillClass">
                            <img src={CSS3} alt="html pic" />
                        </div>
                        <div className="skillClass">
                            <img src={JS} alt="html pic" />
                        </div>
                        <div className="skillClass">
                            <img src={Python} alt="html pic" />
                        </div>
                        <div className="skillClass">
                            <img src={Jquery} alt="html pic" />
                        </div>
                        <div className="skillClass">
                            <img src={ReactJs} alt="html pic" />
                        </div>
                        <div className="skillClass">
                            <img src={Node} alt="html pic" />
                        </div>
                        <div className="skillClass">
                            <img src={Express} alt="html pic" />
                        </div>
                        <div className="skillClass">
                            <img src={Mongo} alt="html pic" />
                        </div>
                        <div className="skillClass">
                            <img src={Bootstrap} alt="Bootstrap pic" />
                        </div>
                        <div className="skillClass">
                            <img src={Github} alt="html pic" />
                        </div>
                    </div>

                </div>
                <Header />
                <Footer />
            </div>
        )
    }
}
export default About;