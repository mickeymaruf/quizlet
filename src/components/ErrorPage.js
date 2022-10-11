import { ArrowLeftIcon, FaceFrownIcon } from '@heroicons/react/24/solid';
import React from 'react';

const ErrorPage = () => {
    return (
        <section className='bg-slate-900 text-white flex justify-center items-center h-screen'>
            <div className='text-center'>
                <FaceFrownIcon className="h-28 w-28 mx-auto text-blue-500" />
                <h1 className='text-4xl mb-2'>Opps... 404 !</h1>
                <p className='text-xl font-thin'>Pgae Not Found</p>
                <button onClick={() => window.history.back()}><ArrowLeftIcon className="h-8 w-8 text-blue-500 inline mt-3 cursor-pointer" /></button>
            </div>
        </section>
    );
};

export default ErrorPage;