import React from 'react';
import './contact.css';
import Header from './header';
import Footer from './footer';

class Contact extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <h1 className="letsConnect">Let's Connect!</h1>
                <div id="contactMe" className="contactContainer">
                    <p className="quest">Do you have a question or you want to work together?</p>
                    <div id="contact">
                        <div>
                            <form id="contactForm" className="contactOuter" action="https://formspree.io/debjani.paul222@gmail.com" method="POST" >

                                <input className="inputStyle" type="text" placeholder="Name" name="name" required ></input>
                                <br />
                                <input className="inputStyle" type="email" placeholder="Email" name="email" required ></input>
                                <br />
                                <textarea className="messageStyle" placeholder="Message" name="message" required></textarea>
                                <br />
                                <input type="submit" value="Send" className="buttonStyle" ></input>
                            </form>
                        </div>
                    </div>
                    <div className="social">
                        <div className="gap"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/pauld3105"><i className="fab fa-twitter socialIcon"></i></a></div>
                        <div className="gap"><a target="_blank" rel="noopener noreferrer" href="https://github.com/debjanipaul"><i className="fab fa-github socialIcon"></i></a></div>
                        <div className="gap"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mam-pal-260862149/"><i className="fab fa-linkedin-in socialIcon"></i></a></div>
                    </div>
                </div >

                <Header />
                <Footer />
            </div>
        )
    }
}
export default Contact;