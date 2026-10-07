import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setDisplay(String(eval(display)));
    } catch {
      setDisplay("Error");
    }
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-80 bg-gray-800 p-5 rounded-2xl shadow-2xl">

        <h1 className="text-2xl text-white font-bold text-center mb-5">
          React Calculator
        </h1>

        {/* Display */}
        <input
          type="text"
          value={display}
          readOnly
          className="w-full h-16 mb-4 px-4 text-right text-2xl
                     bg-gray-900 text-white rounded-lg outline-none"
          placeholder="0"
        />

        {/* Clear Button */}
        <button
          onClick={clearDisplay}
          className="w-full bg-red-500 hover:bg-red-600
                     text-white py-3 rounded-lg mb-3 font-bold"
        >
          Clear
        </button>

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() =>
                button === "="
                  ? calculate()
                  : handleClick(button)
              }
              className={`h-14 rounded-lg text-xl font-bold
                text-white transition
                ${
                  button === "="
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;