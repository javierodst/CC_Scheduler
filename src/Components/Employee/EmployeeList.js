import React from 'react';

import { Link, withRouter } from "react-router-dom";

import ScheduleDays from '../ScheduleDays.js';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        const employees = this.props.employees.map(({ _id, name, employeeId, weekSchedule }) => {

            return (

                <tr key={employeeId}>
                    <td>{name} <Link className="btn-edit" to={`/employee/edit/${_id}`}>Edit</Link></td>
                    <ScheduleDays days={weekSchedule} />


                </tr >


            );
        })


        return employees;
    }
}

export default withRouter(EmployeeList);