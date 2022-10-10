import React from 'react';

const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (
        <div className='bg-slate-800 rounded-md p-3'>
            <img className='bg-slate-600 mb-3' src={logo} alt={name} />
            <div className='flex justify-between items-center'>
                <h5>{name}</h5>
                <button className='bg-indigo-500 py-2 px-6 rounded-lg text-white hover:shadow-lg hover:shadow-slate-700'>Start Quiz</button>
            </div>
        </div>
    );
};

export default Quiz;