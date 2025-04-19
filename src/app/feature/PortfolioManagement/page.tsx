"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { Settings } from "lucide-react";
import { Button } from "./component/Button";
import { Input } from "./component/Input";
import { Card, CardContent } from "./component/Card";

interface Config {
  id: string;
  startMargin: number;
  perOrderValue: number;
  maxHoldingCount: number;
}

export default function PortfolioManagement() {
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

  const addGroup = () => {
    router.push("/feature/PortfolioManagement/portfolioConfiguration");
  };

  const handleChange = <K extends keyof Config>(
    index: number,
    field: K,
    value: Config[K]
  ) => {
    setConfigs((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center max-w-5xl mx-auto mb-6">
        <div className="flex items-center gap-2">
          <Settings className="text-violet-600" />
          <h1 className="text-lg font-semibold">Portfolio Management Configuration</h1>
        </div>
        <Button className="bg-violet-600 hover:bg-violet-700">Save Changes</Button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-md font-semibold text-gray-700">Groups</h2>
          <Button variant="outline" onClick={addGroup} type="button">
            + Add Group
          </Button>
        </div>

        {configs.map((config, index) => (
          <Card key={config.id}>
            <CardContent className="p-4 space-y-4">
              <p className="text-sm font-medium text-gray-800">{config.id}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block" htmlFor={`startMargin-${config.id}`}>
                    Start Margin
                  </label>
                  <Input
                    id={`startMargin-${config.id}`}
                    type="number"
                    value={config.startMargin}
                    onChange={(e) => handleChange(index, "startMargin", +e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block" htmlFor={`orderValue-${config.id}`}>
                    Per Order Value (Rule-001)
                  </label>
                  <Input
                    id={`orderValue-${config.id}`}
                    type="number"
                    value={config.perOrderValue}
                    onChange={(e) => handleChange(index, "perOrderValue", +e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-600 mb-1 block" htmlFor={`holdingCount-${config.id}`}>
                    Max Holding Count (Rule-002)
                  </label>
                  <Input
                    id={`holdingCount-${config.id}`}
                    type="number"
                    value={config.maxHoldingCount}
                    onChange={(e) => handleChange(index, "maxHoldingCount", +e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
