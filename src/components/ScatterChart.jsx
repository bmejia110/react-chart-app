import React from "react";
import ChartComponent from "./ChartComponent.jsx"

const ScatterChart = ({ data }) => {
    const scatterChartData = {
        labels: data.months,
        datasets: [
            {
                label: "Expenses vs Porfits",
                data: data.expenses.map((expense, index) => ({
                    x: expense,
                    y: data.profits[index],
                })),
                backgroundColor: "rgba(225,99,132, 0.2)",
                borderColor: "rgba(255,99,132, 1)",
                pointRadius: 5,
            },
        ],
    };

    const scatterChartOptions = {
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

    return <ChartComponent type ="Scatter" data={scatterChartData} options={scatterChartOptions} />;
};

export default ScatterChart;