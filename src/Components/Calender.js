import React from 'react';
import moment from 'moment';

export default class Calender extends React.Component {

    constructor(props) {
        super(props);

        this.width = props.width || "350px";
        this.style = props.style || {};
        this.style.width = this.width;
    }

    state = {
        dateContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showDayPopup: false
    }

    weekDays = moment.weekdays();
    weekDaysShort = moment.weekdaysShort();
    months = moment.months();

    year = () => {
        return this.state.dateContext.format("Y");
    }

    month = () => {
        return this.state.dateContext.format("MMMM");
    }

    daysInMonth = () => {
        return this.state.dateContext.daysInMonth();
    }

    currentDate = () => {
        return this.state.dateContext.format("date");
    }

    currentDay = () => {
        return this.state.dateContext.format("D");
    }

    firstDayOfMonth = () => {
        let dateContext = this.state.dateContext;
        let firstDay = moment(dateContext).startOf('month').format('d');
        return firstDay;
    }

    render() {

        let weekdays = this.weekDays.map((day) => {
            return (
                <td key={day} className="weekday">{day}</td>
            )
        });

        let blanks = [];

        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 69} className="emptySlots">{" "}</td>);
        }

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d == this.currentDay() ? "day current-day" : "day");
            daysInMonth.push(
                <td key={d} className={className}>
                    <span>{d}</span>
                </td>
            )
        }

        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if ((i % 7) !== 0) {
                cells.push(row);
            }

            else {
                let insertRow = cells.slice();
                rows.push(insertRow);
                cells = [];
                cells.push(row);
            }

            if (i == totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);

            }
        });

        let trElements = rows.map((d, i) => {
            return (
                <tr key={i * 10}>
                    {d}
                </tr>
            )
        });



        return (
            <div className="cal-container">
                <h2>Hi</h2>

                <table className="calender">
                    <thead>
                        <tr className="calender-header">
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>{weekdays}</tr>

                        {trElements}

                    </tbody>
                </table>
            </div>
        );
    }
}