"use client";

import { useEffect, useState, useCallback } from "react";
import Header from "./component/Header";

const buyOptions = [
  "N-DAY Moving Avg. > Last Open",
  "Top X, N-DAY Top Gainers",
  "Last-Close > N-DAY High",
];

const sellOptions = ["Target Profit: X%", "Stop Loss: Y%"];

const ruleCards = [
  "Screening Rules",
  "Portfolio Management",
  "Buy Trigger Rules",
  "Sell Trigger Rules",
  "Simulate",
  "Subscribe For Future Triggers",
];

const globalMarkets = [
  "NYSE", "NASDAQ", "MSE", "JPX", "HKSE", "EURONEXT", "SIX", "TSX", "LSE"
];

const TradePro = () => {
  const [buyCriteria, setBuyCriteria] = useState<string[]>([]);
  const [sellCriteria, setSellCriteria] = useState<string[]>([]);

  const [selectedMarket, setSelectedMarket] = useState("NYSE");

  const toggleOption = useCallback(
    (option: string, list: string[], setList: (list: string[]) => void) => {
      setList(list.includes(option)
        ? list.filter((item) => item !== option)
        : [...list, option]
      );
    },
    []
  );

  useEffect(() => {
    const savedBuy = localStorage.getItem("buyCriteria");
    const savedSell = localStorage.getItem("sellCriteria");
    const savedMarket = localStorage.getItem("selectedMarket");

    if (savedBuy) setBuyCriteria(JSON.parse(savedBuy));
    if (savedSell) setSellCriteria(JSON.parse(savedSell));
    if (savedMarket) setSelectedMarket(savedMarket);
  }, []);

  useEffect(() => {
    localStorage.setItem("buyCriteria", JSON.stringify(buyCriteria));
    localStorage.setItem("sellCriteria", JSON.stringify(sellCriteria));
    localStorage.setItem("selectedMarket", selectedMarket);
  }, [buyCriteria, sellCriteria, selectedMarket]);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <StrategyBuilder
            buyCriteria={buyCriteria}
            sellCriteria={sellCriteria}
            onBuyToggle={(opt) => toggleOption(opt, buyCriteria, setBuyCriteria)}
            onSellToggle={(opt) => toggleOption(opt, sellCriteria, setSellCriteria)}
          />
          <BacktestResults />
        </div>

        <MarketSelector
          selectedMarket={selectedMarket}
          markets={globalMarkets}
          onSelect={setSelectedMarket}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ruleCards.map((label, index) => (
            <Card key={index} index={index} label={label} />
          ))}
        </div>
      </main>
    </>
  );
};

const StrategyBuilder = ({
  buyCriteria,
  sellCriteria,
  onBuyToggle,
  onSellToggle,
}: {
  buyCriteria: string[];
  sellCriteria: string[];
  onBuyToggle: (option: string) => void;
  onSellToggle: (option: string) => void;
}) => (
  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-300">
    <h2 className="text-lg font-semibold mb-2">💲 Build Your Strategy</h2>

    <OptionList
      title="Buy Criteria"
      options={buyOptions}
      selected={buyCriteria}
      onToggle={onBuyToggle}
    />

    <OptionList
      title="Sell Criteria"
      options={sellOptions}
      selected={sellCriteria}
      onToggle={onSellToggle}
    />
  </div>
);

const OptionList = ({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (option: string) => void;
}) => (
  <div className="mb-3 border-b pb-4">
    <h3 className="font-medium">{title}</h3>
    <ul className="space-y-1 mt-1">
      {options.map((option) => (
        <li key={option}>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
              className="mr-2"
            />
            {option}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

const BacktestResults = () => (
  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-300">
    <h2 className="text-lg font-semibold mb-2">📉 Backtest Results</h2>
    <div className="h-32 bg-gray-100 flex items-center justify-center rounded">
      Performance Chart
    </div>
    <div className="mt-4 text-sm space-y-1">
      <p>Overall Returns: <span className="text-green-600 font-semibold">+24.5%</span></p>
      <p>Weekly Win Rate: <span className="text-green-600 font-semibold">68%</span></p>
      <p>Max Drawdown: <span className="text-red-500 font-semibold">-12.3%</span></p>
    </div>
  </div>
);

const MarketSelector = ({
  selectedMarket,
  markets,
  onSelect,
}: {
  selectedMarket: string;
  markets: string[];
  onSelect: (market: string) => void;
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-300">
    <h2 className="text-lg font-semibold mb-3">🌐 Global Markets</h2>
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
      {markets.map((market) => (
        <button
          key={market}
          onClick={() => onSelect(market)}
          className={`px-4 py-2 text-sm rounded-md border 
            ${selectedMarket === market
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          {market}
        </button>
      ))}
    </div>
  </div>
);

const Card = ({ label, index }: { label: string; index: number }) => (
  <div
    className="bg-white rounded-md p-4 shadow-sm flex items-center space-x-3 hover:bg-gray-50 cursor-pointer border border-gray-300"
    onClick={() => alert(`${label} clicked`)}
  >
    <div className="text-blue-500 font-bold">{index + 1}</div>
    <div className="text-sm font-medium">{label}</div>
  </div>
);

export default TradePro;
