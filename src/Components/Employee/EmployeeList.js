import React from 'react';

import { Link, withRouter } from "react-router-dom";

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
        const employees = this.props.employees.map(({ name, employeeId }) => {

            return (
                <tr key={employeeId}>
                    <td>{name}</td>
                </tr >

            );
        })


        return employees;
    }
}

export default withRouter(EmployeeList);