import React, { Component } from 'react';

class Score extends Component {
    render() {
        const { score } = this.props;

        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
                <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Results</h2>
                    <h4 className="text-xl text-gray-600">Your score: <span className="font-semibold text-blue-600">{score}</span></h4>
                </div>
            </div>
        );
    }
}

export default Score;
