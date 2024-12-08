import React from "react";
import ChartComponent from "./ChartComponent.jsx"

const ScatterChart = ({ data }) => {
    const scatterChartData = {
        labels: data.months,
        datasets: [
            {
                label: "Expenses vs Porfits",  //dataset label
                data: data.expenses.map((expense, index) => ({
                    x: expense,  // x axis expenses
                    y: data.profits[index],  // y axis profits
                })),
                backgroundColor: "rgba(225,99,132, 0.2)",  //point fill color
                borderColor: "rgba(255,99,132, 1)",  // point border color
                pointRadius: 5,  // the size of each point
            },
        ],
    };

    const scatterChartOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Expenses",  //x title
                },
                y: {
                    title: {
                        display: true,
                        text: "Profits",  //y title
                    },
                },
            },
        },
    };

    return <ChartComponent type ="Scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;