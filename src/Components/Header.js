import React from 'react';
import auth from '../auth'
import { Link, Route, Router, withRouter } from 'react-router-dom';

const Header = (props) => {
    if (auth.isAuthenticated()) {
        return (

            <div>
                <div className="header-body">

                    <div className="header-nav">
                        <ul>
                            <li><Link className="links" to="/home">Home</Link></li>
                            <li><Link className="links" to="/report">Report</Link></li>
                            <li><Link className="links" to="/video">Video</Link></li>
                            <li><Link className="links" onClick={() => {
                                auth.logout(() => {
                                    props.history.push("/");
                                });
                            }}
                            >Logout</Link></li>
                        </ul>

                    </div>

                </div>

            </div>
        );
    }

    else {
        return (
            <div></div>
        )
    }
};

export default withRouter(Header);