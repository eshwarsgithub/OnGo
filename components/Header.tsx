import React from 'react';

export const OnGoLogo: React.FC = () => (
    <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.25 8.75L10.5 15.5L6.75 11.75" stroke="#FCEE09" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-xl font-bold text-white">OnGo</span>
    </div>
);


const Header: React.FC = () => {
  return (
    <header className="bg-black border-b border-gray-800 px-4 py-3 flex items-center justify-between flex-shrink-0">
      <OnGoLogo />
      <div className="w-8 h-8 bg-brand-surface rounded-full">
        {/* User Avatar Placeholder */}
      </div>
    </header>
  );
};

export default Header;
