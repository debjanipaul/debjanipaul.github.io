import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'


class Header extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleClick(e) {
        this.toggleMenu();
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState(
            {
                visible: !this.state.visible
            }
        );
    }


    render() {
        const visible = this.state.visible;
        let visibility = "hide";

        if (visible) {
            visibility = "show";
        } else {
            visibility = "hide";
        }

        return (
            <div>
                <div className="topMenu">
                    <Link to="/" className="name">Debjani Paul</Link>
                    <i className="fas fa-bars burger" onClick={this.handleClick}></i>
                </div>

                <div className={visibility}>
                    <div className="vertical-menu">
                        <div className="iconContainer">
                            <i className="fas fa-user icons"></i>
                            <Link to="/aboutMe" className="menuLinks">About Me</Link>
                        </div>

                        <div className="iconContainer">
                            <i className="fas fa-project-diagram icons"></i>
                            <Link to="/projects" className="menuLinks">Projects</Link>
                        </div>

                        <div className="iconContainer">
                            <i className="far fa-newspaper icons"></i>
                            <Link to="/articles" className="menuLinks">Articles</Link>
                        </div>

                        <div className="iconContainer">
                            <i className="far fa-file icons"></i>
                            <Link to="/resume" target="_blank" rel="noopener noreferrer" className="menuLinks">Resume</Link>
                        </div>

                        <div className="iconContainer">
                            <i className="fas fa-id-card-alt icons"></i>
                            <Link to="contactMe" className="menuLinks">Contact Me</Link>
                        </div>

                        <div className="socialContainer">
                            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/pauld3105"><i className="fab fa-twitter socialIcons"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/debjanipaul"><i className="fab fa-github socialIcons"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mam-pal-260862149/"><i className="fab fa-linkedin-in socialIcons"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;