import React from "react";

export default function LoadingPage() {
  return (
    <div className="fixed left-0 top-0 bottom-0 right-0 w-screen h-screen bg-white  bg-opacity-75  flex items-center justify-center">
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-14 h-14 border-8   animate-spin border-gray-400 flex items-center justify-center border-t-blue-500 rounded-full duration-300 ease-linear"></div>
      </div>
    </div>
  );
}
