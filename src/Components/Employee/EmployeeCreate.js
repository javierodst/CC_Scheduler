import React from 'react';
import { Links, withRouter } from 'react-router-dom';

class EmployeeCreate extends React.Component {

    constructor(props) {
        super(props);

        this.state = { newCar: {} };

        this.handleNameChange = this.handleNameChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    url = "https://localhost:8080/api/employees";


    componentDidMount() {

    }

    handleNameChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        let newEmp = { 'name': this.state.name }

        fetch(this.url, {
            method: 'POST',
            headers: { "Content-Type": 'application.json' },
            body: JSON.stringify(newEmp)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                else if (response.status >= 400 && response.status <= 500) {
                    throw Error(`HTTP ${response.status}, ${response.statusText}`);
                }

                else {
                    throw Error(`HTTP ${response.status}, ${response.statusText}`);
                }
            })
            .then(responseDate => {
                console.log(responseDate);

                this.props.history.push(`/schedule/23`);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        return (

            <div>
                <h4>Add a new Employee to the database</h4>

                <div className="form-horizontal">
                    <p>Enter Employees Details</p>

                    <div className="form-group">
                        <h3 className='control-label col-md-2'>Employee</h3>
                    </div>

                    <div className="form-group">
                        <label className='control-label col-md-2'>Name</label>
                        <div className="col-md-6">
                            <input name="name" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleNameChange} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
};

export default withRouter(EmployeeCreate);