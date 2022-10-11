import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='bg-slate-800 rounded-md p-3 hover:scale-105 duration-300 relative'>
            <img className='bg-slate-600 mb-3 w-full rounded-lg' src={logo} alt={name} />
            <div className='flex justify-between items-center'>
                <h5>{name}</h5>
                <Link to={`/quiz/${id}`} className='bg-indigo-500 py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-slate-700'>Start Quiz</Link>
            </div>
            <div className='bg-green-600 p-2 px-5 rounded-full text-sm absolute top-0 right-0 translate-x-3 -translate-y-3'>Total Quiestions: {total}</div>
        </div>
    );
};

export default Quiz;