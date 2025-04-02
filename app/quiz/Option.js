import React, { Component } from 'react';

class Options extends Component {
    render() {
        const { options, selectedOption, onOptionChange } = this.props;

        return (
            <div className="flex flex-col space-y-2">
                {options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer transition-all hover:bg-gray-100 peer-checked:bg-blue-500 peer-checked:text-white">
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={onOptionChange}
                            className="hidden peer"
                        />
                        <span className="text-gray-800 peer-checked:text-white">{option}</span>
                    </label>
                ))}
            </div>
        );
    }
}

export default Options;
