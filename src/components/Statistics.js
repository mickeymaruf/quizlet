import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const quizzes = useLoaderData().data;
    return (
        <section className='flex justify-center items-center'>
            <div className='w-full sm:w-10/12 md:w-8/12 lg:w-6/12 h-full sm:border-2 rounded-lg mt-10'>
                <h4 className='p-5 text-2xl font-medium'>Quiz Statistics</h4>
                <ResponsiveContainer width="95%" minHeight={350}>
                    <BarChart data={quizzes}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: '#0F172A', color: '#fff' }} itemStyle={{color: '#fff'}} />
                        <Bar dataKey="total" fill="#8884d8" />
                        <Bar dataKey="name" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default Statistics;