import React from "react";

const Strategy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      <main className="flex justify-center items-center h-[calc(100vh-72px)]">
        <div className="bg-white p-10 rounded-md shadow-md text-center max-w-md w-full">
          <h1 className="text-xl font-semibold mb-2">Create a Strategy</h1>
          <p className="text-gray-600 mb-6">to Simulate Returns</p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
            BEGIN
          </button>
          <p className="mt-6 text-gray-500 text-sm">
            Or test with built-in strategies...
          </p>
        </div>
      </main>
    </div>
  );
};

export default Strategy;
