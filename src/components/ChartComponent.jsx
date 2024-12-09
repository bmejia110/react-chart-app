import React, {useEffect, useRef } from "react";
import Chart from "chart.js/auto";  // importing chart.js with auto config

const ChartComponent = ({type, data, options}) => {
    const chartRef = useRef(null); //reference for the <canvas> element
    const chartInstanceRef = useRef(null); //reference for chart.js

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        if (chartInstanceRef.current) {  // if chart exist it will destroy it
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, { // new chart.js
            type,
            data,
            options,
        });

        return () => {   //cleanup function
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [type, data, options]);

    return <canvas ref={chartRef}></canvas>;  //render the canvas
};

export default ChartComponent;