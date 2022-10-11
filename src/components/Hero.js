import React from 'react';
import heroImg from '../images/hero.png'

const Hero = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-evenly py-10'>
            <div>
                <h1 className='text-5xl font-medium mb-2'>Quizlet</h1>
                <p className='text-xl font-thin'>An online quick quiz platform for teachers. <br /> We believe in making faster, better, simple, easier.</p>
            </div>
            <img className='w-fit' src={heroImg} alt="" />
        </div>
    );
};

export default Hero;