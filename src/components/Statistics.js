import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizzes = useLoaderData().data;
    return (
        <section className='flex justify-center items-center'>
            <div className='pt-10'>
                <BarChart width={730} height={350} data={quizzes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#8884d8" />
                    <Bar dataKey="name" fill="#82ca9d" />
                </BarChart>
            </div>
        </section>
    );
};

export default Statistics;