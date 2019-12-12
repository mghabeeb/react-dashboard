import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from '../Generic/Title';

const data = [
  {
    name: 'January', unique: 4000, return: 2400, amt: 2400,
  },
  {
    name: 'February', unique: 3000, return: 1398, amt: 2210,
  },
  {
    name: 'March', unique: 2000, return: 9800, amt: 2290,
  },
  {
    name: 'April', unique: 2780, return: 3908, amt: 2000,
  },
  {
    name: 'May', unique: 1890, return: 4800, amt: 2181,
  },
  {
    name: 'June', unique: 2390, return: 3800, amt: 2500,
  },
  {
    name: 'July', unique: 3490, return: 4300, amt: 2100,
  },
];

export default function Chart() {
  
  return (
    <React.Fragment>
      <Title>Visitors</Title>
      <ResponsiveContainer height={300}>
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="return" stackId="a" fill="#3f51b5" />
          <Bar dataKey="unique" stackId="a" fill="#009688" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}