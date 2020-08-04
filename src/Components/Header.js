import React from 'react';
import auth from '../auth'
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    if (auth.isAuthenticated()) {
        return (

            <div>
                App
                <button onClick={() => {
                    auth.logout(() => {
                        props.history.push("/");
                    });
                }}
                >
                    Logout
            </button>
            </div>
        );
    }

    else {
        return (
            <div>App</div>
        )
    }
};

export default withRouter(Header);