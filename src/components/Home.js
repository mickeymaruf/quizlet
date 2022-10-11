import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from './Hero';
import Quiz from './Quiz';

const Home = () => {
    const quizzes = useLoaderData().data;
    return (
        <section className='bg-slate-900 text-white'>
            <div className='w-10/12 mx-auto'>
                <Hero />
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-10 pb-20'>
                    {
                        quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;