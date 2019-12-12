import React from 'react';
import { Radar, RadarChart, PolarGrid, Legend,PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Title from '../Generic/Title';

const data = [
    {
      subject: 'Users', A: 54, B: 100, fullMark: 100,
    },
    {
      subject: 'New Users', A: 98, B: 100, fullMark: 100,
    },
    {
      subject: 'Sessions', A: 26, B: 100, fullMark: 100,
    },
    {
      subject: 'Bounce Rate', A: 49, B: 100, fullMark: 100,
    },
    {
      subject: 'Pages / Session', A: 100, B: 86, fullMark: 100,
    },
    {
      subject: 'Session Duration', A: 100, B: 85, fullMark: 100,
    },
];

export default function Chart() {
  
  return (
    <React.Fragment>
      <Title>Metrics</Title>
      <ResponsiveContainer height={300}>
        <RadarChart cx={230} cy={120} outerRadius={90} width={80} height={80} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar name="Current Year" dataKey="A" stroke="#3f51b5" fill="#3f51b5" fillOpacity={0.6} />
            <Radar name="Last Year" dataKey="B" stroke="#009688" fill="#009688" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}