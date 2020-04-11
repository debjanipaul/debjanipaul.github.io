import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p className="copyright">
                    Copyright <span><i className="far fa-copyright"></i></span> 2020 <span className="pinkName">Debjani Paul.</span> All rights reserved
                </p>
            </div>
        )
    }

}
export default Footer;