import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EmployeeEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = { empItem: {} };

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);

    }

    urlEmp = `http://localhost:8080/api/employees/${this.props.id}`

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
                this.setState({ empItem: responseData });
                console.log(this.state.empItem);


            })

    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleOnSubmit = () => {

    }

    render() {

        return (

            <div>
                {this.state.empItem.name}
            </div>
        );
    }


}

export default withRouter(EmployeeEdit);