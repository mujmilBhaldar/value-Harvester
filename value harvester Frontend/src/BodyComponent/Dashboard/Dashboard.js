import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from "@mui/material";
import {XAxis, YAxis, Tooltip, Bar, BarChart, CartesianGrid, ResponsiveContainer, RadialBarChart, Legend, RadialBar } from 'recharts';



const data1 = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: '40-49',
        uv: 8.63,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: '50+',
        uv: 2.63,
        pv: 4800,
        fill: '#d0ed57',
    },
    {
        name: 'unknow',
        uv: 6.67,
        pv: 4800,
        fill: '#ffc658',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};
// ----2nd chart

const data2 = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

const Dashboard = () => {

    return (
        <>
            <Grid container spacing={0}>
                <Grid item md={6}>
                    <Paper style={{ height: '350px', margin: '20px', background:'#c5e1a5' }}>
                        <Typography style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>
                            User Overview
                        </Typography>

                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart cx="50%" cy="50%" innerRadius="8%" outerRadius="80%" barSize={15} data={data1}>
                                <RadialBar
                                    minAngle={15}
                                    label={{ position: 'outsideEnd', fill: '#000' }}
                                    background
                                    clockWise
                                    dataKey="uv"
                                />
                                <Legend iconSize={18} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Paper style={{ height: '350px', margin: '20px', background:'#c5e1a5'  }}>
                        <Typography style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>
                            Trading Request Overview
                        </Typography>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data2}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis /> 
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                                <Bar dataKey="uv" fill="#ffc658" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}
export default Dashboard;