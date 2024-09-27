"use client";

import { chartData } from "@/lib/dummydata";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DisplayBarChart = () => {
  //fix hydration errors
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsClient(false);
    } else {
      setIsClient(true);
    }
  }, []);

  return (
    isClient && (
      <ResponsiveContainer width={350} height={400}>
        <BarChart
          width={500}
          height={300}
          data={chartData.slice(0, 4)}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="pv"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
          <Bar
            dataKey="uv"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        </BarChart>
      </ResponsiveContainer>
    )
  );
};

export default DisplayBarChart;
