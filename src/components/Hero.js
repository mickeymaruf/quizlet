import React from 'react';
import heroImg from '../images/hero.png'

const Hero = () => {
    return (
        <div className='flex items-center justify-evenly pb-10'>
            <div>
                <h1 className='text-5xl font-medium'>Quizlet</h1>
                <p className='text-xl font-thin'>An online quick quiz platform for teachers.</p>
            </div>
            <img className='w-fit' src={heroImg} alt="" />
        </div>
    );
};

export default Hero;