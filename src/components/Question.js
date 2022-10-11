import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'


let uniqueKey = 1;

const Question = ({ data, serial }) => {
    const { correctAnswer, question, options } = data;
    const handleAnswer = (selectedAns) => {
        if (selectedAns === correctAnswer) {
            toast.success("Correct answer!", { autoClose: 1500, theme: "colored" });
        } else{
            toast.error("Wrong answer!", { autoClose: 1500, theme: "colored" });
        }
    }
    return (
        <div className="bg-slate-700 p-10 text-center mb-10 rounded-xl relative">
            <div className='w-10/12 mx-auto'><code>Quiz {serial}: {question}</code></div>
            <div className='grid grid-cols-2 gap-3 mt-5'>
                {
                    options.map(option => (
                        <code onClick={(e) => handleAnswer(e.target.innerText)} key={data.id + uniqueKey++} className='bg-slate-900 p-5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-sky-600'>{option}</code>
                    ))
                }
            </div>
            <div className='absolute top-5 right-5 cursor-pointer'>
                <EyeIcon className="h-6 w-6 text-indigo-400" />
            </div>
        </div>
    )
}

export default Question;