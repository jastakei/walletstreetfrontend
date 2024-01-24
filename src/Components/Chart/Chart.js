import React from "react";
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement } from "chart.js";
import { Line } from 'react-chartjs-2';

import styled from "styled-components";
import { dateFormat } from "../../utils/dateFormat";
import { useGlobal } from "../../context/Global";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
)

function Chart() {
    const {incomes, expenses} = useGlobal();
    let addedDates = []
    let ad = []
    let allDates = incomes.concat(expenses)
    let incomenew = incomes
    let expensenew = expenses
    allDates.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.date) - new Date(b.date);
    });
    allDates.map((i) => {
        const {date} = i;
        if (!ad.includes(dateFormat(date))) {
            ad.push(dateFormat(date))
        }
    });
    incomenew.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.date) - new Date(b.date);
    });
    expensenew.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.date) - new Date(b.date);
    });

    const incomedata = {}
    const expensedata = {}

    incomenew.map((i) => {
        const {date,amount} = i;
        if (!addedDates.includes(dateFormat(date))) {
            addedDates.push(dateFormat(date))
            incomedata[dateFormat(date)] = amount;
        }
        else {
            incomedata[dateFormat(date)] += amount;
        }
    });
    expensenew.map((i) => {
        const {date,amount} = i;
        if (!addedDates.includes(dateFormat(date)+" ")) {
            addedDates.push(dateFormat(date)+" ")
            expensedata[dateFormat(date)] = amount;
        }
        else {
            expensedata[dateFormat(date)] += amount;
        }
    });


    const data = {
     
        labels: ad,
        datasets: [
            {
                label: "Income",
                data: incomedata,
                backgroundColor: "green",
                tension: 0.5
            },
            {
                label: "Expenses",
                data: expensedata,
                backgroundColor: "red",
                tension: 0.5
            }
        ]
    }
    const scales = {
            x: {
              type: 'time'
            }
    }

    return (

        <ChartStyle>
            <Line data={data} scales={scales}/>
        </ChartStyle>
    )
}
const ChartStyle = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;
export default Chart