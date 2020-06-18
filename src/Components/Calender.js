import React from 'react';
import moment from 'moment';
import { Link, withRouter } from 'react-router-dom';


class Calender extends React.Component {

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

    setMonth = (month) => {
        let monthNum = this.months.indexOf(month);
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("month", monthNum);
        this.setState({
            dateContext: dateContext
        });
    }

    prevMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).subtract(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onPrevMonth && this.props.onPrevMonth();
    }

    nextMonth = () => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).add(1, "month");
        this.setState({
            dateContext: dateContext
        });
        this.props.onNextMonth && this.props.onNextMonth();
    }

    onSelectChange = (e, data) => {
        this.setMonth(data);
        this.props.onMonthChange && this.props.onMonthChange();
    }
    SelectList = (props) => {
        let popup = props.data.map((data) => {
            return (
                <div key={data}>
                    <a href="" onClick={(e) => { this.onSelectChange(e, data) }}>{data}</a>
                </div>
            );
        });

        return (
            <div className="month-popup">
                {popup}
            </div>
        )
    }

    onChangeMonth = (e, month) => {
        this.setState({ showMonthPopup: !this.state.showMonthPopup });
    }

    MonthNav = () => {
        return (
            <span className="label-month" onClick={(e) => { this.onChangeMonth(e, this.month()) }}>
                {this.month()}
                {this.state.showMonthPopup &&
                    <this.SelectList data={this.months} />
                }
            </span>
        );
    }

    showYearEditor = () => {
        this.setState({
            showYearNav: true
        })
    }

    setYear = (year) => {
        let dateContext = Object.assign({}, this.state.dateContext);
        dateContext = moment(dateContext).set("year", year);
        this.setState({
            dateContext: dateContext
        });
    }

    onYearChange = (e) => {
        this.setYear(e.target.value);
        this.props.onYearChange && this.props.onYearChange(e, e.target.value);
    }

    onKeyUpYear = (e) => {
        if (e.which === 13 || e.which === 27) {
            this.setState({
                showYearNav: false
            })
        }
    }

    YearNav = () => {
        return (
            this.state.showYearNav ? <input defaultValue={this.year()} className="editor-year"
                ref={(yearInput) => { this.yearInput = yearInput }}
                onKeyUp={(e) => this.onKeyUpYear(e)}
                onChange={(e) => this.onYearChange(e)} type="number"
                placeholder="year"
            /> :
                <span className="label-year" onClick={(e) => { this.showYearEditor() }}>

                    {this.year()}
                </span>
        )
    }

    onDayClick = (e, day) => {
        this.props.onDayClick && this.props.onDayClick(e, day);
    }


    render() {

        let weekdays = this.weekDays.map((day) => {
            return (
                <th key={day} className="weekday">{day}</th>
            )
        });

        let blanks = [];

        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td key={i * 69} className="emptySlots">{" "}</td>);
        }

        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let className = (d === this.currentDay() ? "day current-day" : "day");
            daysInMonth.push(
                <td key={d} className={className}>
                    <span onClick={(e) => { this.onDayClick(e, d) }} >{d}</span>
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

            if (i === totalSlots.length - 1) {
                let insertRow = cells.slice();
                rows.push(insertRow);

            }
        });

        let trElements = rows.map((d, i) => {
            return (
                <tr key={i * 10} >
                    {d}
                </tr>

            )
        });



        return (
            <div className="cal-container">
                <h2>Calender</h2>

                <table className="calender">
                    <thead>
                        <tr className="calender-header">
                            <th colSpan="5">
                                <this.MonthNav />
                                {" "}
                                <this.YearNav />
                            </th>
                            <th colSpan="2" className="nav-month">
                                <i className="prev fa fa-fw fa-chevron left" onClick={(e) => { this.prevMonth() }} >
                                    {"<-"}
                                </i>
                            </th>

                            <th colSpan="2" className="nav-month">
                                <i className="prev fa fa-fw fa-chevron right" onClick={(e) => { this.nextMonth() }} >
                                    {"->"}
                                </i>
                            </th>
                        </tr>

                        <tr>{weekdays}</tr>
                    </thead>

                    <tbody>


                        {trElements}

                    </tbody>
                </table>
            </div >
        );
    }
}

export default withRouter(Calender);