import React from 'react';
import './articles.css';
import Header from './header';
import Footer from './footer';

class Articles extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <div id="articles" className="articleDiv">
                    <h1 className="recentArticles">Recent Articles</h1>
                    {/* <hr /> */}
                    <div className="articlesContainer">
                        <div className="article">
                            <a target="_blank" rel="noopener noreferrer" href="https://icodemag.com/creating-a-two-player-tic-tac-toe-game-with-python/"> <h3 >Creating a Two-Player Tic-Tac-Toe Game with Python</h3></a>
                            <p>Published on: 31.03.2020</p>
                            <p>In this tutorial, we will look at one of the ways to make the classic two-player game Tic-Tac-Toe using Python. The Python concepts that we will use in this game are: strings, loops, conditional(If/else) statements, lists <span><a className="more" target="_blank" rel="noopener noreferrer" href="https://icodemag.com/creating-a-two-player-tic-tac-toe-game-with-python/">[..more]</a></span></p>
                        </div>
                        <div className="article">
                            <a target="_blank" rel="noopener noreferrer" href="https://icodemag.com/creating-a-simple-hangman-game-in-python/">
                                <h3>Creating a Simple Hangman Game in Python</h3></a>
                            <p>Published on: 26.11.2019</p>
                            <p>In this tutorial, we will look at one of the ways to make the classic word guessing game ‘Hangman’. THE PYTHON CONCEPTS THAT WE WILL USE IN THIS GAME ARE: STRINGS, LOOPS, CONDITIONAL (IF/ELSE) STATEMENTS, LISTS, AND <span><a className="more" target="_blank" rel="noopener noreferrer" href="https://icodemag.com/creating-a-simple-hangman-game-in-python/">[..more]</a></span></p>

                        </div>
                        <div className="article">
                            <a target="_blank" rel="noopener noreferrer" href="https://icodemag.com/web-accessibility-why-it-matters-and-how-to-achieve-it/"><h3>Web Accessibility – Why It Matters and How to Achieve It</h3></a>
                            <p>Published on: 29.10.2019</p>
                            <p>Every web developer should strive to develop websites that can be used by everyone, irrespective of any conditions or impairments that might interfere with the successful navigation of the  <span><a className="more" target="_blank" rel="noopener noreferrer" href="https://icodemag.com/web-accessibility-why-it-matters-and-how-to-achieve-it/">[..more]</a></span ></p>

                        </div>
                        <div className="article">
                            <a target="_blank" rel="noopener noreferrer" href="https://icodemag.com/fetch-api-what-why-and-how/"><h3>Fetch API: What, Why, and How</h3></a>
                            <p>Published on: 26.08.2019</p>
                            <p>Just a few years back, the go-to method for making AJAX requests used to be XMLHttpRequest. But over time, the Fetch API has become an immensely popular method to fetch resources from the  <span><a className="more" target="_blank" rel="noopener noreferrer" href="https://icodemag.com/fetch-api-what-why-and-how/">[..more]</a></span></p>
                        </div>

                        <div className="article">
                            <a target="_blank" rel="noopener noreferrer" href="https://icodemag.com/building-a-landing-page-with-bootstrap-and-jquery/"><h3>Building a Landing Page with Bootstrap and jQuery</h3></a>
                            <p>Published on: 24.06.2019</p>
                            <p>Bootstrap is an immensely popular front-end framework for developing responsive web sites and web applications. It is a collection of reusable components written in HTML, CSS, and JavaScript <span><a className="more" target="_blank" rel="noopener noreferrer" href="https://icodemag.com/building-a-landing-page-with-bootstrap-and-jquery/">[..more]</a></span></p>
                        </div>

                        <div className="article">
                            <a target="_blank" rel="noopener noreferrer" href="https://icodemag.com/everything-you-didnt-know-about-iife/"><h3>Everything You Didn’t Know about IIFE</h3></a>
                            <p>Published on: 24.04.2019</p>
                            <p>Immediately Invoked Function Expression or IFFE (pronounced as ‘iffy’), as the name suggests, is a function expression which is ‘immediately invoked’. i.e. it is a function that gets executed as soon as it is defined <span><a className="more" target="_blank" rel="noopener noreferrer" href="https://icodemag.com/everything-you-didnt-know-about-iife /">[..more]</a></span> </p>
                        </div>

                        <div className="article">
                            <a target="_blank" rel="noopener noreferrer" href="https://icodemag.com/all-about-loops-in-javascript/"><h3>All About Loops in JavaScript</h3></a>
                            <p>Published on: 25.03.2019</p>
                            <p>The word ‘loop’ is defined as a shape produced by a curve that bends around and crosses itself. In computer programming world, loop is used in the same context. Loops are one of the important features of a programming language, as they take care of repetitive <span><a className="more" target="_blank" rel="noopener noreferrer" href="https://icodemag.com/all-about-loops-in-javascript/">[..more]</a></span></p>
                        </div>
                    </div>
                </div>
                <Header />
                <Footer />
            </div>
        )
    }

}
export default Articles;