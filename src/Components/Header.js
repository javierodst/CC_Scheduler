import React from 'react';
import auth from '../auth'
import $ from 'jquery';
import { Link, Route, Router, withRouter } from 'react-router-dom';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }
    /*
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
    */
    render() {
        return (
            <HeaderNav />
        )
    }

};

export default withRouter(Header);


function HeaderNav(props) {
    $(document).ready(function () {
        $(".burger-nav").on("click", function () {
            $(".header-nav ul").toggleClass("open");
        });

        $(".header-nav ul li .links").on("click", function () {
            $(".header-nav ul").toggleClass("open");
        });
    });

    if (auth.isAuthenticated()) {
        return (

            <div className="header-body">

                <div className="header-nav">
                    <a className="burger-nav"></a>
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

        );
    }

    else {
        return (
            <div></div>
        )
    }
}