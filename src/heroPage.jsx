import React from 'react';
import './heroPage.css';
import Header from './header';
import Footer from './footer';
import HeroPic from './profilePic2.svg';
import Typical from 'react-typical'

class Hero extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <div id="hero" className="heroContainer">
                    <img src={HeroPic} alt="Hero Pic" className="pic" />
                    <h1 className="bioMain">Hi, I'm Debjani Paul</h1>
                    <p className="bioTyping"><span className="white">I'm a {' '}</span>
                        <Typical
                            loop={Infinity}
                            wrapper='b'
                            steps={[
                                'Web Developer',
                                1000,
                                'Computer Science Instructor',
                                1000,
                                'Technical Writer',
                                1000
                            ]}
                        />
                    </p>

                </div>
                <Header />
                <Footer />

            </div>

        )
    }
}
export default Hero;