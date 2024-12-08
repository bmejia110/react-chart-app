import React from "react";
import ChartComponent from "./ChartComponent.jsx";

const BubbleChart = ({ data }) => {
    const bubbleChartData = {
        labels: data.months,
        datasets: [
            {
                label: "Sales vs Expenses vs Profits",  //dataset label
                data: data.expenses.map((expense, index) => ({
                    x: expense,   // x axis is expenses
                    y: data.profits[index],  // y axis are the profits
                    r: data.sales[index] / 10  //bubble sizes are scaled
                })),
                backgroundColor: "rgba(54,162,235, 0.2)",  //fill corlor
                borderColor: "rgba(54,162,235, 1)",  // bubble border color
                pointRadius: 5,
            },
        ],
    };

    const bubbleChartOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Expenses",
                },
                y: {
                    title: {
                        display: true,
                        text: "Profits",
                    },
                },
            },
        },
    };

    return <ChartComponent type ="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};

export default BubbleChart;