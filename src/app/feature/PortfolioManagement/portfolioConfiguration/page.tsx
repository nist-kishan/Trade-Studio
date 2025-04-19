"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface Config {
  id: string;
  startMargin: number;
  perOrderValue: number;
  maxHoldingCount: number;
}

export default function PortfolioConfiguration() {
  const [configs, setConfigs] = useState<Config[]>([
    {
      id: "config-001",
      startMargin: 0,
      perOrderValue: 1000,
      maxHoldingCount: 10,
    },
    {
      id: "config-002",
      startMargin: 0,
      perOrderValue: 2000,
      maxHoldingCount: 5,
    },
  ]);

  const router = useRouter();

  const addConfig = () => {
    localStorage.setItem("configs", JSON.stringify(configs));

    router.push("/feature/PortfolioManagement");
  };

  const handleChange = <K extends keyof Config>(
    index: number,
    field: K,
    value: Config[K]
  ) => {
    const updated = [...configs];
    updated[index][field] = value;
    setConfigs(updated);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Portfolio Configuration
        </h2>

        {configs.map((config, index) => (
          <div
            key={config.id}
            className="border rounded-lg px-4 py-3 flex flex-col gap-4"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">{config.id}</span>
              <button className="text-sm text-blue-500 hover:underline">
                Edit → 
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Start Margin
                </label>
                <input
                  type="number"
                  className="w-full border rounded px-3 py-2"
                  value={config.startMargin}
                  onChange={(e) =>
                    handleChange(index, "startMargin", +e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Per-Order Value
                </label>
                <input
                  type="number"
                  className="w-full border rounded px-3 py-2"
                  value={config.perOrderValue}
                  onChange={(e) =>
                    handleChange(index, "perOrderValue", +e.target.value)
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Max Holding Count
                </label>
                <input
                  type="number"
                  className="w-full border rounded px-3 py-2"
                  value={config.maxHoldingCount}
                  onChange={(e) =>
                    handleChange(index, "maxHoldingCount", +e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addConfig}
          className="mt-2 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
        >
          + Add Configuration
        </button>
      </div>
    </div>
  );
}
