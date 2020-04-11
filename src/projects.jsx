import React from 'react';
import './projects.css';
import Header from './header';
import Footer from './footer';
import BootstrapLand from './images/BootstrapLandingPage.png';
import ChefMaker from './images/chefMaker.png';
import ColorGame from './images/colorGame.png';
import Jquery from './images/jQuery.png';
import MemeGenerate from './images/memeGenerator.png';
import MemoryGame from './images/memoryGame.png';
import RestReviews from './images/RestaurantReviews2.png';
import ArcadeClone from './images/ArcadeCloneGame.png';

class Project extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <div id="projects" className="project">
                    <h1 className="recentWork">Recent Work</h1>
                    {/* <hr /> */}
                    <div id="flexContainer">
                        <div className="projectPic">
                            <div>
                                <img src={MemeGenerate} alt="Meme Generator" />
                            </div>
                            <div className="projectDetails">
                                <h3>Meme-Generator</h3>
                                <p>React + JavaScript</p>
                                <p>
                                    An app to create custom meme by selecting a picture and adding top and bottom words. This app interacts with imgflip API to consume data.
                                 </p>
                                <p>
                                    <strong className="focusText">Focus:</strong> React, API interaction
                                 </p>
                                <div className="btn">
                                    {/* <!-- <a target="_blank" href="https://debjanipaul.github.io/React-Meme-Generator/"><i classNameNam="fas fa-laptop"><span classNameNam="text"> View Live</span></i></a> --> */}
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/debjanipaul/React-Meme-Generator"><i className="fab fa-github awesomeFonts"><span className="text"></span></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="projectPic">
                            <div>
                                <img src={ChefMaker} alt="Chef Maker" />
                            </div>
                            <div className="projectDetails">
                                <h3>Chef Maker</h3>
                                <p>HTML5 + CSS-SCSS + JavaScript + Edamam API </p>
                                <p>
                                    Created this project as a part of my Chingu voyage with my teammate. The recipe app helps users to search for recipes. The user can also add his own recipe cards. This app interacts with Edamam API to consume data.
                                 </p>
                                <p>
                                    <strong className="focusText">Focus:</strong> Javascript, Github version control
                                 </p>
                                <div className="btn">
                                    <a target="_blank" rel="noopener noreferrer" href="https://mychefmaker.netlify.com"><i className="fas fa-laptop"><span className="text"></span></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/chingu-voyages/v9-geckos-team-03"><i className="fab fa-github awesomeFonts"><span className="text"></span></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="projectPic">
                            <div>
                                <img src={RestReviews} alt="Restaurant Reviews" />
                            </div>
                            <div className="projectDetails">
                                <h3>Restaurant Reviews</h3>
                                <p>HTML5 + CSS-Flexbox + JavaScript</p>
                                <p>
                                    In this project, I converted a static webpage to a mobile-ready responsive web application. I added accessibility for screen reader use and also added service worker for a seamless offline experience for the users.
                                 </p>
                                <p>
                                    <strong className="focusText">Focus:</strong> Responsiveness and Service Worker
                                 </p>
                                <div className="btn">
                                    {/* <!-- <a target="_blank" href="https://debjanipaul.github.io/RestaurantRevieApp/"><i className="fas fa-laptop"><span className="text"> View Live</span></i></a> --> */}
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/debjanipaul/RestaurantRevieApp"><i className="fab fa-github awesomeFonts"><span className="text"></span></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="projectPic">
                            <div>
                                <img src={ArcadeClone} alt="ArcadeClone Game" />
                            </div>
                            <div className="projectDetails">
                                <h3>Arcade Clone Game</h3>
                                <p>HTML5 + CSS + JavaScript</p>
                                <p>
                                    This game is modelled after the well-known game Frogger. The goal of the game is to reach the water line by steering the player with the arrow keys. The game design is responsive.
                                 </p>
                                <p>
                                    <strong className="focusText">Focus:</strong> Object Oriented JavaScript
                                 </p>
                                <div className="btn">
                                    <a target="_blank" rel="noopener noreferrer" href="https://debjanipaul.github.io/ArcadeGameClone/"><i className="fas fa-laptop awesomeFonts"><span className="text"></span></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/debjanipaul/ArcadeGameClone"><i className="fab fa-github awesomeFonts"><span className="text"></span></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="projectPic">
                            <div>
                                <img src={ColorGame} alt="Color Game" />
                            </div>
                            <div className="projectDetails">
                                <h3>Color Matching Game</h3>
                                <p>HTML5 + CSS + JavaScript</p>
                                <p>
                                    The game is about guessing the right color from RGB Color Code. The design is responsive.
                                </p>
                                <p>
                                    <strong className="focusText">Focus:</strong> JavaScript DOM manipulation
                                 </p>
                                <div className="btn">
                                    <a target="_blank" rel="noopener noreferrer" href="https://debjanipaul.github.io/Color-Game/"><i className="fas fa-laptop"><span className="text"></span></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/debjanipaul/Color-Game"><i className="fab fa-github awesomeFonts"><span className="text"></span></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="projectPic">
                            <div>
                                <img src={BootstrapLand} alt="Bootstrap Landing Page Template" />
                            </div>
                            <div className="projectDetails">
                                <h3>Landing Page Template</h3>
                                <p>HTML5 + CSS + Bootstrap + jQuery</p>
                                <p>
                                    A landing page template created with Bootstrap and jQuery.
                                </p>
                                <p>
                                    <strong className="focusText">Focus:</strong> Bootstrap and jQuery.
                                 </p>
                                <div className="btn">
                                    <a target="_blank" rel="noopener noreferrer" href="https://debjanipaul.github.io/Bootstrap-Landing-Page-/"><i className="fas fa-laptop"><span className="text"></span></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/debjanipaul/Bootstrap-Landing-Page-"><i className="fab fa-github awesomeFonts"><span className="text"></span></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="projectPic">
                            <div>
                                <img src={MemoryGame} alt="Memory Game" />
                            </div>
                            <div className="projectDetails">
                                <h3>Memory Cards Game</h3>
                                <p>HTML5 + CSS + JavaScript</p>
                                <p>
                                    The game board consists of 16 cards and 8 pairs. The goal is to match each card's icon with its pair.
                                </p>
                                <p>
                                    <strong className="focusText">Focus:</strong> Dom Manipulation with JavaScript
                              </p>
                                <div className="btn">
                                    <a target="_blank" rel="noopener noreferrer" href="https://debjanipaul.github.io/MemoryGame/"><i className="fas fa-laptop"><span className="text"></span></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/debjanipaul/MemoryGame"><i className="fab fa-github awesomeFonts"><span className="text"></span></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="projectPic">
                            <div>
                                <img src={Jquery} alt="Todo List App" />
                            </div>
                            <div className="projectDetails">
                                <h3>Todo List</h3>
                                <p>JavaScript + jQuery</p>
                                <p>
                                    A Todo App to add and remove tasks. It is fully responsive.
                                  </p>
                                <p>
                                    <strong className="focusText">Focus:</strong> jQuery
                                  </p>
                                <div className="btn">
                                    <a target="_blank" rel="noopener noreferrer" href="https://debjanipaul.github.io/jQueryToDoList/"><i className="fas fa-laptop"><span className="text"></span></i></a>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/debjanipaul/jQueryToDoList"><i className="fab fa-github awesomeFonts"><span className="text"></span></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Header />
                <Footer />
            </div>
        )
    }
}
export default Project;