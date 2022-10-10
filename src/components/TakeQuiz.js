import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TakeQuiz = () => {
    const quiz = useLoaderData().data;
    const { id, name, questions } = quiz;
    console.log(quiz);
    return (
        <section className='bg-slate-900 text-white py-20'>
            <div className='w-8/12 mx-auto'>
                <h3 className='text-2xl font-medium text-center mb-8'>Quiz of {name}</h3>
                {
                    questions.map((question, idx) => <Quiz key={id} data={question} idx={idx + 1} />)
                }
            </div>
        </section>
    );
};

const Quiz = ({ data, idx }) => {
    const { question, options } = data;
    return (
        <div className="bg-slate-700 p-10 text-center mb-10 rounded-xl">
            <code>Quiz {idx}: {question}</code>
            <div className='grid grid-cols-2 gap-3 mt-5'>
                {
                    options.map(option => (
                        <code className='bg-slate-900 p-5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-600'>{option}</code>
                    ))
                }
            </div>
        </div>
    )
}

export default TakeQuiz;