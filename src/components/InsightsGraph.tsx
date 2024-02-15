import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";
import { Chart } from "chart.js";

interface InsightsGraphProps {
  data: { month: string; moneyIn: number; moneyOut: number }[];
}

const InsightsGraph: React.FC<InsightsGraphProps> = ({ data }) => {
  const [chartInstance, setChartInstance] = useState<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && chartInstance) {
      chartInstance.destroy(); // Destroy the existing chart instance
      setChartInstance(null); // Reset the chart instance state
    }
  }, [data]); // Re-run this effect whenever the data changes

  useEffect(() => {
    if (canvasRef.current && !chartInstance) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const newChartInstance = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.map((item) => item.month),
            datasets: [
              {
                label: "Money In",
                data: data.map((item) => item.moneyIn),
                borderColor: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.1)",
              },
              {
                label: "Money Out",
                data: data.map((item) => item.moneyOut),
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.1)",
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
        setChartInstance(newChartInstance);
      }
    }
  }, [data]); // Re-run this effect whenever the data changes

  return (
    <Box>
      <canvas ref={canvasRef} />
    </Box>
  );
};

export default InsightsGraph;
