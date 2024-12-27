"use client";
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Counter({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);
  const router = useRouter();

  const navigateToRoute = () => {
    router.push("/admin");
  }

  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setCount(count + 1)}>Increase
        </button>
      </div>
      <hr/>
      <div className="my-5">
        <p>Navigation to useRouter</p>
        <button type="button"
                onClick={navigateToRoute}
                className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Navigate
        </button>
      </div>
      <hr/>
      {children} {/* Server Component */}
    </>
  );
}