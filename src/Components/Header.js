import React from 'react';
import auth from '../auth'
import $ from 'jquery';
import { Link, Route, Router, withRouter } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(document).ready(function () {
            $(".burger-nav").on("click", function () {
                $(".header-nav ul").toggleClass("open");
            });

            $(".header-nav ul li .links").on("click", function () {
                $(".header-nav ul").toggleClass("open");
            });
        });
    }

    header = () => {
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
                                        this.props.history.push("/");
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
    }
    render() {
        return (
            <div>
                {header}
            </div>

        )
    }

};

export default withRouter(Header);