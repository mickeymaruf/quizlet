import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='bg-slate-800 rounded-md p-3 hover:shadow-lg hover:shadow-slate-700/75 shadow-blur-md'>
            <img className='bg-slate-600 mb-3' src={logo} alt={name} />
            <div className='flex justify-between items-center'>
                <h5>{name}</h5>
                <Link to={`/quiz/${id}`} className='bg-indigo-500 py-2 px-6 rounded-lg'>Start Quiz</Link>
            </div>
        </div>
    );
};

export default Quiz;