"use client";
import React, { useState, useEffect } from 'react';
import QuizData from './quizdata.json'; // Adjust the path as necessary

interface QuizProps {
    onComplete: (score: number, totalScore: number) => void;
}

const Quiz: React.FC<any> = ({ onComplete }) => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [clickedOption, setClickedOption] = useState<number>(0);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [timeLeft, setTimeLeft] = useState<number>(10); // 10 seconds per question

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            changeQuestion();
        }
    }, [timeLeft]);

    const changeQuestion = () => {
        updateScore();

        if (currentQuestion < QuizData.length - 1) {
            setTimeout(() => {
                setCurrentQuestion(currentQuestion + 1);
                setClickedOption(0);
                setShowAnswer(false);
                setTimeLeft(10);
            }, 1000);
        } else {
            setTimeout(() => {
                setShowResult(true);
                onComplete(score, QuizData.length);
            }, 1000);
        }
    };

    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
        setShowAnswer(true);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="flex flex-col items-center dark:bg-clip-bg dark:bg-transparent dark:bg-gradient-to-r from-purple-600 to-pink-500 font-bold bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 w-full max-w-lg">
                {showResult ? (
                    <div className="text-4xl font-bold text-center text-gray-800 dark:text-white">
                        Your score: {score} / {QuizData.length}
                    </div>
                ) : (
                    <>
                        <div className="text-xl font-semibold mb-4 text-center">
                            <span>{currentQuestion + 1}. </span>
                            <span>{QuizData[currentQuestion].question}</span>
                        </div>
                        <div className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
                            Time Left: {timeLeft} seconds
                        </div>
                        <div className="flex flex-col w-full space-y-3">
                            {QuizData[currentQuestion].options.map((option, i) => (
                                <button
                                    className={`p-2 rounded shadow-md border border-gray-300 
                                    ${
                                        clickedOption === i + 1
                                            ? 'bg-purple-500 text-white'
                                            : 'bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                                    } 
                                    ${showAnswer && QuizData[currentQuestion].answer === i + 1 ? 'bg-green-500 text-white' : ''}
                                    ${showAnswer && clickedOption !== QuizData[currentQuestion].answer && clickedOption === i + 1 ? 'bg-red-500 text-white' : ''}`}
                                    key={i}
                                    onClick={() => !showAnswer && setClickedOption(i + 1)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <button
                            className="mt-6 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                            onClick={changeQuestion}
                        >
                            {currentQuestion === QuizData.length - 1 ? "Submit" : "Next"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Quiz;
