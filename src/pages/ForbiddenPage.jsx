import React from "react";

const ForbiddenPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8 bg-white">
        <h1 className="text-6xl font-bold text-red-500">403</h1>
        <p className="text-xl mt-4 mb-8">
          Forbidden: You don't have permission to access this resource.
        </p>
        <a
          href="/home"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default ForbiddenPage;
