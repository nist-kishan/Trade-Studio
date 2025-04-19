import React from "react";
import { Input } from "./component/Input";
import { Button } from "./component/Button";
import { Card,CardContent,CardHeader,CardTitle } from "./component/Card";

export default function TradingSimulator() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-blue-400">📈</span> Trading Simulator
        </h1>
        <p className="text-sm text-gray-400">Test your trading strategies with our advanced simulation engine</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-[#161b22] border-none">
            <CardHeader>
              <CardTitle className="text-green-400">Buy Trigger ➜</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter buy trigger conditions..." className="bg-[#0d1117] border-gray-700 text-white" />
            </CardContent>
          </Card>

          <Card className="bg-[#161b22] border-none">
            <CardHeader>
              <CardTitle className="text-red-400">Sell Trigger ➜</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter sell trigger conditions..." className="bg-[#0d1117] border-gray-700 text-white" />
            </CardContent>
          </Card>

          <Card className="bg-[#161b22] border-none">
            <CardHeader>
              <CardTitle className="text-blue-400">Portfolio Management ➜</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter portfolio management rules..." className="bg-[#0d1117] border-gray-700 text-white" />
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#161b22] p-4 rounded-lg">
          <p className="mb-2 text-sm text-gray-400">Simulation Settings</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label className="text-sm">Tokens:</label>
              <Input defaultValue="100" className="w-24 bg-[#0d1117] border-gray-700 text-white" />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">▶ Simulate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-[#161b22] border-none">
            <CardHeader>
              <CardTitle className="text-purple-400">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Stats and graphs will appear here after simulation</p>
            </CardContent>
          </Card>

          <Card className="bg-[#161b22] border-none">
            <CardHeader>
              <CardTitle className="text-purple-400">Simulation Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Trading orders will appear here after simulation</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}