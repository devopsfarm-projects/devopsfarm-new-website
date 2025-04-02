import React, { Component } from "react";
import Options from "./Option";

class Question extends Component {
    render() {
        const { question, selectedOption, onOptionChange, onSubmit } = this.props;

        return (
            <div className="bg-white my-24 shadow-md rounded-lg p-6 max-w-lg w-full mx-auto">
                <h3 className="text-xl font-bold text-gray-800">Question {question.id}</h3>
                <h5 className="mt-2 text-lg text-gray-700">{question.question}</h5>
                <form onSubmit={onSubmit} className="mt-4 space-y-4">
                    <Options
                        options={question.options}
                        selectedOption={selectedOption}
                        onOptionChange={onOptionChange}
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all">
                        SUBMIT
                    </button>
                </form>
            </div>
        );
    }
}

export default Question;