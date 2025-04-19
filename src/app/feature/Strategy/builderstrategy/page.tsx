import React, { useState } from "react";


const StrategyBuilder = () => {
  const [strategyName, setStrategyName] = useState("");
  const [buyConditions, setBuyConditions] = useState<string[]>([]);
  const [sellConditions, setSellConditions] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="flex justify-center items-start pt-12 px-4">
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-xl">
          <h2 className="text-lg font-semibold mb-4">Strategy Builder</h2>

          <input
            type="text"
            className="w-full border rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="New Strategy"
            value={strategyName}
            onChange={(e) => setStrategyName(e.target.value)}
          />

          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Buy Trigger Conditions</h3>
            <div className="bg-gray-100 rounded px-4 py-2">
              {buyConditions.map((cond, idx) => (
                <p key={idx} className="text-sm text-gray-700 mb-1">• {cond}</p>
              ))}
              <button
                className="text-sm text-blue-600 hover:underline mt-2"
                onClick={() => setBuyConditions([...buyConditions, "New Buy Condition"])}
              >
                + Add Buy Condition
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-800 mb-2">Sell Trigger Conditions</h3>
            <div className="bg-gray-100 rounded px-4 py-2">
              {sellConditions.map((cond, idx) => (
                <p key={idx} className="text-sm text-gray-700 mb-1">• {cond}</p>
              ))}
              <button
                className="text-sm text-blue-600 hover:underline mt-2"
                onClick={() => setSellConditions([...sellConditions, "New Sell Condition"])}
              >
                + Add Sell Condition
              </button>
            </div>
          </div>

          <div className="text-right">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => alert("Strategy Saved!")}
            >
              💾 Save Strategy
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StrategyBuilder;
