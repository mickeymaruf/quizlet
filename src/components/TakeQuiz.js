import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from './Question';

const TakeQuiz = () => {
    const quiz = useLoaderData().data;
    const { name, questions } = quiz;
    return (
        <section className='bg-slate-900 text-white py-20'>
            <div className='w-8/12 mx-auto'>
                <h3 className='text-2xl font-medium text-center mb-8'>Quiz of {name}</h3>
                {
                    questions.map((question, idx) => <Question
                        key={question.id}
                        data={question}
                        serial={idx + 1}
                    />)
                }
                
            </div>
        </section>
    );
};

export default TakeQuiz;