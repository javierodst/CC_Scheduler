import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EmployeeCreate extends React.Component {

    constructor(props) {
        super(props);

        this.state = { newEmp: {} };

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    url = "http://localhost:8080/api/employees";


    componentDidMount() {

    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        let newEmp = {
            'name': this.state.name, 'employeeId': parseInt(this.state.employeeId), 'email': this.state.email, 'branch': this.state.branch,
            'position': this.state.position, 'status': this.state.status,
            'weekSchedule': {
                'startDate': null,
                'endDate': null,
                'weekId': this.props.date,
                'daysWorking': {}
            }

        };

        fetch(this.url, {
            method: 'POST',
            headers: { "Content-Type": 'application/json' },
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
                this.props.history.push(`/schedule/${this.props.date}`);
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
                            <input name="name" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className='control-label col-md-2'>ID</label>
                        <div className="col-md-6">
                            <input name="employeeId" type="number" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleChange} />
                        </div>
                    </div>


                    <div className="form-group">
                        <label className='control-label col-md-2'>Email</label>
                        <div className="col-md-6">
                            <input name="email" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className='control-label col-md-2'>Branch</label>
                        <div className="col-md-6">
                            <select name="branch" className="form-control" value={this.state.value} ref={(i) => { this.input = i }} onChange={this.handleChange} >
                                <option value="North York">North York</option>
                                <option value="Other">Other</option>

                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className='control-label col-md-2'>Position</label>
                        <div className="col-md-6">
                            <input name="position" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className='control-label col-md-2'>Status</label>
                        <div className="col-md-6">

                            <select name="status" className="form-control" value={this.state.value} ref={(i) => { this.input = i }} onChange={this.handleChange} >
                                <option value="Working">Working</option>
                                <option value="On Leave">On Leave</option>

                            </select>
                        </div>
                    </div>


                    <div className="form-group">
                        <label className='control-label col-md-2'>Week ID</label>
                        <div className="col-md-6">
                            <input name="weekId" className="form-control" ref={(i) => { this.input = i }} value={this.props.date} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-6">
                            <button onClick={this.handleSubmit} className="btn btn-primary">Add Employee</button>&nbsp;&nbsp;
                            <Link className='btn btn-default' to={`/schedule/${this.props.date}`}>Cancel</Link>
                        </div>
                    </div>
                </div>


            </div >

        );
    }
};

export default withRouter(EmployeeCreate);