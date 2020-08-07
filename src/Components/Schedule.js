import React from 'react';
import EmployeeList from './Employee/EmployeeList.js';

import '../Styling/Schedule.css';

import { Link, withRouter } from 'react-router-dom';
class Schedule extends React.Component {

    state = {
        employees: []
    };

    url = "https://obscure-chamber-42272.herokuapp.com/api/employees";

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
                //this.setState({ employees: responseData });
                //console.log("WeekID: " + 1);
                let employees = [];
                responseData.map((e) => {


                    e.weekSchedule.map((emp) => {
                        //console.log(emp);
                        if (emp.weekId === this.props.match.params.id) {
                            //console.log(emp.weekId);
                            employees.push(e);
                        }

                        else {

                        }

                        return emp;
                    }

                    )
                    return e;
                })

                this.setState({ employees: employees });
            })
            .catch(error => {
                console.log(error);
            });


    }

    render() {

        return (
            <div className="schedule-main">
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

                </table>

                <br />

                <Link className="btn" to={`/employee/add/${this.props.match.params.id}`}>Add Employee</Link>
            </div>
        );



    }

};

export default withRouter(Schedule);