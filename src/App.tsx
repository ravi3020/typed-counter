import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = (): void => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = (): void => {
    setCount(prev => prev - 1);
  };

  const handleReset = (): void => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm text-center mx-4">
        <h1 className="text-2xl font-bold mb-4">Typed Counter</h1>

        <p
          className={`text-4xl font-semibold mb-6 transition-colors duration-300 ${
            count > 0
              ? "text-green-600"
              : count < 0
              ? "text-red-600"
              : "text-gray-700"
          }`}
        >
          {count}
        </p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white rounded
                       hover:bg-green-600 active:scale-95 transition-transform"
          >
            +
          </button>

          <button
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white rounded
                       hover:bg-red-600 active:scale-95 transition-transform"
          >
            -
          </button>

          <button
            onClick={handleReset}
            className="px-4 py-2 border border-gray-400 text-gray-600 rounded
                       hover:bg-gray-100 active:scale-95 transition-transform"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
