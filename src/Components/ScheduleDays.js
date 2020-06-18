import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ScheduleDays extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {

        const days = this.props.days.map(({ daysWorking }) => {
            console.log(daysWorking);

            const dayWorking = daysWorking.map(({ startTime, endTime }) => {
                return (
                    <td>
                        {startTime} - {endTime}
                    </td>
                );
            })

            return dayWorking;
        })


        return (
            days
        );

    }

};

export default withRouter(ScheduleDays);