"use client";
import React, { Component } from "react";
import Question from "./Question";
import qBank from "./QuestionBank";
import Score from "./Score";
import userdata from "./users"; 

class Resultdata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: qBank,
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
            isAuthenticated: false,
            email: "",
            dob: "",
            error: "",
        };
    }

    handleOptionChange = (e) => {
        this.setState({ selectedOption: e.target.value });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.checkAnswer();
        this.handleNextQuestion();
    };

    checkAnswer = () => {
        const { questionBank, currentQuestion, selectedOption } = this.state;
        if (selectedOption === questionBank[currentQuestion].answer) {
            this.setState((prevState) => ({ score: prevState.score + 1 }));
        }
    };

    handleNextQuestion = () => {
        const { questionBank, currentQuestion } = this.state;
        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({
                currentQuestion: prevState.currentQuestion + 1,
                selectedOption: "",
            }));
        } else {
            this.setState({ quizEnd: true });
        }
    };

    // Handle authentication
    handleAuthSubmit = (e) => {
        e.preventDefault();
        const { email, dob } = this.state;

        // Check if user exists in userdata.js
        const userExists = userdata.some(user => user.email === email && user.dob === dob);

        if (userExists) {
            this.setState({ isAuthenticated: true, error: "" });
        } else {
            this.setState({ error: "Invalid Email or Date of Birth. Please try again." });
        }
    };

    render() {
        const { questionBank, currentQuestion, selectedOption, score, quizEnd, isAuthenticated, email, dob, error } = this.state;

        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
                <h1 className="text-3xl font-bold mb-6 text-blue-600">QUIZ APP</h1>

                {!isAuthenticated ? (
                    // Authentication Form
                    <div className="bg-black shadow-lg rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Enter Your Details</h2>
                        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                        <form onSubmit={this.handleAuthSubmit} className=" text-black space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                                className="w-full p-2 border border-gray-900 rounded"
                                required
                            />
                            <input
                                type="date"
                                value={dob}
                                onChange={(e) => this.setState({ dob: e.target.value })}
                                className="w-full p-2 border border-gray-900 rounded"
                                required
                            />
                            <button type="submit" className="w-full bg-blue-600 text-white font-semibold p-2 rounded hover:bg-blue-700">
                                Start Quiz
                            </button>
                        </form>
                    </div>
                ) : !quizEnd ? (
                    // Quiz Component
                    <Question
                        question={questionBank[currentQuestion]}
                        selectedOption={selectedOption}
                        onOptionChange={this.handleOptionChange}
                        onSubmit={this.handleFormSubmit}
                    />
                ) : (
                    // Score Component
                    <Score score={score} />
                )}
            </div>
        );
    }
}

export default Resultdata;
