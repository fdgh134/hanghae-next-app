'use client'

import { useState } from 'react';
import Image from "next/image";

export default function Home() {
  const [count, setCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    setLastUpdated(new Date());
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
    setLastUpdated(new Date());
  };

  const handleReset = () => {
    setCount(0);
    setLastUpdated(new Date());
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-gray-900 flex flex-col items-center justify-center p-4">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mb-6">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
      
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">
          간단한 카운터 테스트
        </h1>
        
        <div className="text-center mb-8">
          <span className="text-8xl font-bold text-gray-800 dark:text-white">
            {count}
          </span>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={handleDecrement}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            감소
          </button>
          
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            리셋
          </button>
          
          <button
            onClick={handleIncrement}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            증가
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
