"use client";
import React, { useState } from 'react';
import Certificate from './certificatedata';
import Quiz from '../../public/quiz/page'; // Import the Quiz component correctly
import usersData from './users.json'; // Assuming the JSON file is in the same directory

function Certificatedata() {
    const [name, setName] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [certifier1] = useState<string>('Omprakash Paliwal');
    const [certifier2] = useState<string>('Dinesh Paliwal');
    const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);
    const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [totalScore, setTotalScore] = useState<number>(0);
    const [showCertificate, setShowCertificate] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const user = usersData.find(user => user.mobile === mobile);
        if (user) {
            setName(user.name);
            setIsQuizStarted(true); // Start the quiz
        } else {
            setErrorMessage('Mobile number not found.');
        }
    };

    const handleQuizCompletion = (quizScore: number, quizTotalScore: number) => {
        setScore(quizScore);
        setTotalScore(quizTotalScore);
        setIsQuizCompleted(true); // Set quiz as completed
    };

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMobile(e.target.value);
    };

    const handleGetCertificate = () => {
        setShowCertificate(true); // Show the certificate after clicking the button
    };

    return (
        <div className="min-h-screen bg-white dark:bg-clip-bg dark:bg-transparent dark:bg-logo-gradient font-bold flex flex-col items-center justify-center">
            {!isQuizStarted && !isQuizCompleted && (
                <form onSubmit={handleSubmit} className="mb-10 p-6 bg-white rounded shadow-md max-w-md w-full">
                    <h2 className="text-xl font-bold mb-6">Enter Certificate Details</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="text"
                            value={mobile}
                            onChange={handleMobileChange}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                            required
                        />
                    </div>
                    {errorMessage && (
                        <p className="text-red-500 mb-4">{errorMessage}</p>
                    )}
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
                    >
                        Start Quiz
                    </button>
                </form>
            )}

            {isQuizStarted && !isQuizCompleted && (
                <Quiz onComplete={handleQuizCompletion} />
            )}

            {isQuizCompleted && !showCertificate && (
                <div className="mb-10 p-6 bg-white rounded shadow-md max-w-md w-full text-center">
                    <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
                    <p className="text-lg mb-4">Your Score: {score} / {totalScore}</p>
                    <button
                        onClick={handleGetCertificate}
                        className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600 mb-4"
                    >
                        Get Certificate
                    </button>
                </div>
            )}

                {showCertificate && (
                    <Certificate 
                        name={name} 
                        certifier1={certifier1} 
                        certifier2={certifier2} 
                        date={new Date().toLocaleDateString()} 
                    />
                )}


        </div>
    );
}

export default Certificatedata;
