import React from "react";
import ChartComponent from "./ChartComponent.jsx";

const LineChart = ({ data }) => {
    const lineChartData = {
        labels: data.months, //x axis labels
        datasets: [
            {
                label: "Monthly Porfits", //dataset label
                data: data.profits,  // y axis values
                borderColor: "purple",  // line color
                fill: false,  //no fill under the line
                tension: 0.1,  //smoothness of line
            },
        ],
    };

    const lineChartOptions = {
        scales: {
            y: {
                beginAtZero: true,   //makes sure y axis starts at 0
            },
        },
    };

    return <ChartComponent type ="line" data={lineChartData} options={lineChartOptions} />;
};

export default LineChart;
