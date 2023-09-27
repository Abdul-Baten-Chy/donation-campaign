import { useLoaderData } from 'react-router-dom';
import React from 'react';
import { PieChart, Pie } from 'recharts';
import { getStoredData } from './components/Details/store';
const Stats = () => {
    
    // const data = [
    //     { name: 'Geeksforgeeks', students: 400 },
    //     { name: 'Technical scripter', students: 700 },
    //     { name: 'Geek-i-knack', students: 200 },
    //     { name: 'Geek-o-mania', students: 1000 }
    // ];

    const data =getStoredData();
    
    const numPercent = [
        {name:'total', number:12 },
        {name:'donation', number:data.length}
    ]
    return (
        <PieChart width={700} height={700} className='mx-auto'>
            <Pie data={numPercent} dataKey="number" outerRadius={250} fill="#FF444A" />
        </PieChart>
    );
};

export default Stats;