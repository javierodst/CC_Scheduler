import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EmployeeEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            empItem: {
                weekSchedule: []
            }
        };

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

    }

    urlEmp = `https://obscure-chamber-42272.herokuapp.com/api/employees/${this.props.id}`

    componentDidMount(e) {

        fetch(this.urlEmp)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                else {
                    throw Error(`HTTP ${response.status}, ${response.statusText}`);
                }
            })
            .then((responseData) => {
                console.log(responseData);
                this.setState({ empItem: responseData });
                console.log(this.state.empItem);


            })

    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name + ":" + e.target.value, this.state.empItem.name)
    }

    handleOnSubmit = (e) => {
        let emp = this.state.empItem;
        console.log("TEST:", emp.name)
        let editedEmp = {
            '_id': this.props.id, 'name': emp.name, 'employeeId': emp.employeeId, 'email': emp.email, 'branch': emp.branch, 'position': emp.position,
            'rank': emp.rank, 'status': emp.status, 'totalHours': emp.totalHours, 'weekId': emp.weekId, 'weekSchedule': emp.weekSchedule
        };
        console.log("REEEE", editedEmp);
        fetch(this.urlEmp, {
            method: 'PUT',
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(editedEmp)
        })
            .then((response) => {

                if (response.ok) {
                    console.log("OK");
                    return response.json();
                }

                else if (response.status >= 400 && response.status <= 500) {
                    throw Error(`HTTP ${response.status}, ${response.statusText}`);
                }

                else {
                    throw Error(`HTTP ${response.status}, ${response.statusText}`);
                }

            })
            .then(responseData => {
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
            })

    }

    render() {



        return (

            <div className="employee-edit">

                <div>
                    <h2>Edit Employee - {this.state.empItem.name}</h2>

                </div>


                <div className="form-horizontal">
                    <p>Enter Employees Details</p>



                    <div className="form-group">
                        <h3 className='control-label col-md-2'>Employee</h3>
                    </div>

                    <div className="form-group">

                        <label className='control-label col-md-2'>Employee ID</label>
                        <div className="col-md-6">
                            <input name="employeeId" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleOnChange} defaultValue={this.state.empItem.employeeId} />
                        </div>

                    </div>

                    <div className="form-group">
                        <label className='control-label col-md-2'>Name</label>
                        <div className="col-md-6">
                            <input name="name" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleOnChange} defaultValue={this.state.empItem.name} />
                        </div>

                    </div>

                    <div className="form-group">

                        <label className='control-label col-md-2'>Email</label>
                        <div className="col-md-6">
                            <input name="email" type="email" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleOnChange} defaultValue={this.state.empItem.email} />
                        </div>

                    </div>


                    <div className="form-group">
                        <label className='control-label col-md-2'>Position</label>
                        <div className="col-md-6">
                            <input name="position" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleOnChange} defaultValue={this.state.empItem.position} />
                        </div>

                    </div>


                    <div className="form-group">
                        <label className='control-label col-md-2'>Rank</label>
                        <div className="col-md-6">
                            <input name="rank" className="form-control" ref={(i) => { this.input = i }} onChange={this.handleOnChange} defaultValue={this.state.empItem.rank} />
                        </div>

                    </div>


                    <div className="form-group">
                        <div className="col-md-offset-2 col-md-6">
                            <button onClick={this.handleOnSubmit} className="btn btn-primary">Save</button>
                            <Link className='btn btn-default' to='/'>Cancel</Link>
                        </div>

                    </div>


                </div>

                <hr />

                <WeekDays item={this.state.empItem} />



            </div>





        );
    }


}

function WeekDays(item) {

    var weekDays = item.item.weekSchedule.map((weeks) => {

        let scheduleDaysArr;
        if (true) {
            const scheduleDays = weeks.daysWorking.map((d) => {

                return (
                    <span> ({d.startTime}-{d.endTime}) </span>
                );
            })

            scheduleDaysArr = scheduleDays;
        }

        return scheduleDaysArr;


    })

    return weekDays;
}

export default withRouter(EmployeeEdit);