import React from 'react';
import { withRouter } from 'react-router-dom';
import Calender from '../Calender.js';

const style = {
    position: "relative",
    margin: "50px auto"
}

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.today = new Date();
    }

    onDayClick = (e, day) => {
        alert(day);
    }

    render() {

        return (
            <div>

                <h1>Home</h1>

                <Calender style={style}
                    width="302px"
                    onDayClick={(e, day) => this.onDayClick(e, day)} />

            </div>
        );
    }

}

export default withRouter(Home);

/*
function Calender(props) {




    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



    let firstDay = new Date(props.year, props.month - 1).getDay();
    let daysinMonth = 32 - new Date(props.year, props.month, 32).getDate();
    //

    let date = 1;
    var row = [];

    for (let i = 0; i < 6; i++) {


        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                row.push(<td>0</td>);
            }

            else if (date > daysinMonth) {
                break;
            }

            else {
                row.push(<p>{date}</p>);
            }
            date++;
        }
    }

    return (
        <div>

            {
                row.map((value, index) => {

                    //row.day++;
                    if (index % 7 == 0) {
                        //row.day = 0;
                        return <tr>{value}\n</tr>

                    }
                    else {

                        return (
                            <td>{value}</td>

                        );

                    }

                })
            }

        </div >
    )
    /*
    let tbl = document.getElementById("calander-body");

    tbl.innerHTML = ""

    monthYear.innerHTML = months[month] + " " + year;

    let date = 1;

    for (let i = 0; i < 6; ++i) {
            let row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {

            let cell = document.createElement('td');
            if (i === 0 && j < firstDay) {
            let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            else if (date > daysinMonth) {
                break;
            }

            else {
            let cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }

            date++;
        }

        tbl.appendChild(row);
    }

}
*/