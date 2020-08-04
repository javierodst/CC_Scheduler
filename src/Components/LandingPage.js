import React from 'react';
import { withRouter } from 'react-router-dom';
import Authenticate from '../auth.js';
import auth from '../auth.js';
class LandingPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>Landing Page</h1>

                <button onClick={() => {
                    auth.login(() => { this.props.history.push("/home") })
                }}>Login</button>
            </div>
        )
    }
}

export default withRouter(LandingPage);