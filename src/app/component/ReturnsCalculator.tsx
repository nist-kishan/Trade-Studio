"use client"

import React, { useState } from "react";

const ReturnsCalculator: React.FC = () => {
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("2024-03-01");
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyGrowth, setMonthlyGrowth] = useState(5);

  const months = Math.max(
    0,
    (new Date(endDate).getFullYear() - new Date(startDate).getFullYear()) * 12 +
      (new Date(endDate).getMonth() - new Date(startDate).getMonth())
  );

  const projectedValue = (
    initialInvestment *
    Math.pow(1 + monthlyGrowth / 100, months)
  ).toFixed(2);

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Dynamic Returns <br /> Calculator
          </h1>
          <p className="text-gray-600 text-lg">
            Calculate your potential returns with our advanced trading analytics platform. Make informed decisions with real-time data and comprehensive analysis tools.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-md p-6 w-full max-w-md mx-auto">
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <label className="block font-medium">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">Initial Investment</label>
              <input
                type="number"
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Number(e.target.value))}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">Monthly Growth (%)</label>
              <input
                type="number"
                value={monthlyGrowth}
                onChange={(e) => setMonthlyGrowth(Number(e.target.value))}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>

            <div className="mt-6 text-right">
              <span className="text-gray-500">Projected Value:</span>
              <div className="text-xl font-bold text-indigo-600">${projectedValue}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnsCalculator;
