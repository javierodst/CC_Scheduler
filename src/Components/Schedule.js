import React from 'react';
import EmployeeList from './Employee/EmployeeList.js';

import { Link, withRouter } from 'react-router-dom';
class Schedule extends React.Component {

    state = {
        employees: []
    };

    url = "http://localhost:8080/api/employees";

    componentDidMount() {
        fetch(this.url)
            .then(response => {
                this.setState({ httpStatusCode: response.status, httpStatusOk: response.ok });
                if (response.ok) {
                    return response.json();
                }

                else if (response.status === 404) {
                    throw Error("HTTP 404, Not found");
                }

                else {
                    throw Error(`HTTP ${response.status}, ${response.statusText}`);
                }
            })
            .then(responseData => {
                this.setState({ employees: responseData });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        return (
            <div>
                <h1>Schedule</h1>

                <table>
                    <thead>

                        <tr>
                            <th>Employee</th>
                            <th>Sunday</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>

                        </tr>

                    </thead>

                    <tbody>

                        <EmployeeList employees={this.state.employees} />

                    </tbody>

                    <Link to={`/employee/add`}>Add</Link>


                </table>
            </div>
        );



    }

};

export default withRouter(Schedule);