import React from "react";

function Header({ children }) {
  return (
    <header className="flex item-center py-10 bg-gray-900">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold mb-5">
          Find Images
        </h1>
        {children}
      </div>
    </header>
  );
}

export default Header;
