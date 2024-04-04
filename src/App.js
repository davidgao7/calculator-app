import React, { useState } from 'react';
import './App.css';

function App() {
    const [input, setInput] = useState(0);
    const [result, setResult] = useState(0);
    const [buttonColors, setButtonColors] = useState({
        add: 'blue',
        subtract: 'blue',
        multiply: 'blue',
        divide: 'blue',
    });

    const handleOperation = (operation) => {
        let newResult;
        switch (operation) {
            case 'add':
                newResult = result + input;
                break;
            case 'subtract':
                newResult = result - input;
                break;
            case 'multiply':
                newResult = result * input;
                break;
            case 'divide':
                newResult = result / input;
                break;
            default:
                newResult = result;
        }
        setResult(newResult);
        setInput(0);
    };

    const handleResetInput = () => {
        setInput(0);
    };

    const handleResetResult = () => {
        setResult(0);
    };

    return (
        <div className="App">
            <h1>Simple Calculator</h1>
            <div>
                <input type="number" value={input} onChange={(e) => setInput(parseFloat(e.target.value))} />
            </div>
            <div>
                <button
                    style={{ backgroundColor: buttonColors.add }}
                    onClick={() => {
                        handleOperation('add');
                        setButtonColors({ ...buttonColors, add: 'green' });
                    }}
                >
                    Add
                </button>
                <button
                    style={{ backgroundColor: buttonColors.subtract }}
                    onClick={() => {
                        handleOperation('subtract');
                        setButtonColors({ ...buttonColors, subtract: 'green' });
                    }}
                >
                    Subtract
                </button>
                <button
                    style={{ backgroundColor: buttonColors.multiply }}
                    onClick={() => {
                        handleOperation('multiply');
                        setButtonColors({ ...buttonColors, multiply: 'green' });
                    }}
                >
                    Multiply
                </button>
                <button
                    style={{ backgroundColor: buttonColors.divide }}
                    onClick={() => {
                        handleOperation('divide');
                        setButtonColors({ ...buttonColors, divide: 'green' });
                    }}
                >
                    Divide
                </button>
                <button onClick={handleResetInput}>Reset Input</button>
                <button onClick={handleResetResult}>Reset Result</button>
            </div>
            <div>
                <h2>Result: {result}</h2>
            </div>
        </div>
    );
}

export default App;

