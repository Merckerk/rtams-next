"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const LineChart = ({ chartInfo, labels, data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: chartInfo,
              data: data,
              backgroundColor: ["rgb(255, 99, 132, 0.2)"],
              borderColor: ["rgb(255, 99, 132)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          // responsive: true
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [labels, data, chartInfo]);
  return (
    <div style={{ paddingTop: "20px" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;
