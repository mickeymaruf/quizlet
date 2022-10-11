import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';


let uniqueKey = 1;

const Question = ({ data, serial }) => {
    const { correctAnswer, question, options } = data;
    const [showAns, setShowAns] = useState(false);

    const handleAnswer = (option) => {
        if (option === correctAnswer) {
            toast.success("Correct answer!", { autoClose: 1500, theme: "colored" });
        } else {
            toast.error("Wrong answer!", { autoClose: 1500, theme: "colored" });
        }
    }
    const revealAnswer = () => {
        setShowAns(!showAns);
    }
    return (
        <div className="bg-slate-700 p-5 md:p-10 text-center mb-10 rounded-xl relative">
            <div className='w-10/12 mx-auto'><code>Quiz {serial}: {question}</code></div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
                {
                    options.map(option => (
                        <code onClick={() => handleAnswer(option)} key={data.id + uniqueKey++} className={`${showAns ? correctAnswer === option ? 'bg-green-500' : 'bg-red-600' : 'bg-slate-900 hover:bg-sky-600'} p-3 sm:p-5 rounded-lg flex items-center justify-center cursor-pointer`}>{option}</code>
                    ))
                }
            </div>
            <div onClick={revealAnswer} className='absolute top-5 right-5 cursor-pointer h-6 w-6 text-indigo-400'>
                {showAns ? <EyeSlashIcon /> : <EyeIcon />}
            </div>
        </div>
    )
}

export default Question;