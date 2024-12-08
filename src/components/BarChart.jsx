import React from "react";
import ChartComponent from "./ChartComponent.jsx";

const BarChart = ({ data }) => {
    const barChartData = {
        labels: data.months,  // x axis labels
        datasets: [
            {
                label: "Monthly Sales",  //dataset label
                data: data.sales,  // y value
                backgroundColor: "rgba(75,192,192, 0.2)", //bar fill color
                borderColor: "rgba(75,192,192, 1)", // bar border color
                borderWidth: 1,  // border width
            },
        ],
    };

    const barChartOptions = {
        scales: {
            y: {
                beginAtZero: true,   //make sure that y axis starts at 0
            },
        },
    };

    return <ChartComponent type ="bar" data={barChartData} options={barChartOptions} />;
};

export default BarChart;
