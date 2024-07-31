import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Courier A', acceptanceRate: 90, rejectionRate: 5, onTimeDelivery: 85, delayedDelivery: 15 },
  { name: 'Courier B', acceptanceRate: 80, rejectionRate: 10, onTimeDelivery: 75, delayedDelivery: 25 },
  { name: 'Courier C', acceptanceRate: 85, rejectionRate: 8, onTimeDelivery: 82, delayedDelivery: 18 },
  { name: 'Courier D', acceptanceRate: 70, rejectionRate: 15, onTimeDelivery: 65, delayedDelivery: 35 },
  { name: 'Courier E', acceptanceRate: 95, rejectionRate: 2, onTimeDelivery: 93, delayedDelivery: 7 },
];

const CourierPerformanceChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="acceptanceRate" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="rejectionRate" stroke="#82ca9d" />
        <Line type="monotone" dataKey="onTimeDelivery" stroke="#ffc658" />
        <Line type="monotone" dataKey="delayedDelivery" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CourierPerformanceChart;
