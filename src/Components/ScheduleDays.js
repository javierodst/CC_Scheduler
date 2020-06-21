import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ScheduleDays extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        /* OLD IF NEEDED
        const days = this.props.days.map(({ i, daysWorking }) => {

            const dayWorking = daysWorking.map(({ startTime, endTime }) => {
                return (
                    <td key={i * 10}>
                        {startTime} - {endTime}
                    </td>
                );
            })

            return dayWorking;
        })
        */

        const days = this.props.days.map(({ startTime, endTime }) => {
            return (
                <td key={startTime * 10}>
                    {startTime} - {endTime}
                </td>
            );
        })



        return (
            days
        );

    }

};

export default withRouter(ScheduleDays);
