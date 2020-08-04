import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './auth';
export const ProtectedRoute = ({ component: Component, render: Render, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    return <Render {...props} />
                }

                else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }

            }
            } />
    );
};

