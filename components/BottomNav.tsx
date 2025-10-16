import React from 'react';
import { HomeIcon, MoreIcon, PlusIcon, SearchIcon, SettingsIcon } from './Icons';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onQuickAdd: () => void;
  onMoreClick: () => void;
}

const NavItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${
      isActive ? 'text-electric-yellow' : 'text-gray-500 hover:text-gray-200'
    }`}
    aria-label={label}
  >
    {icon}
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab, onQuickAdd, onMoreClick }) => {
  return (
    <nav className="flex items-center justify-around bg-brand-surface flex-shrink-0 h-16">
       <NavItem
        label="Home"
        icon={<HomeIcon className="w-7 h-7" />}
        isActive={activeTab === 'Home'}
        onClick={() => setActiveTab('Home')}
      />
       <NavItem
        label="More"
        icon={<MoreIcon className="w-7 h-7" />}
        isActive={false}
        onClick={onMoreClick}
      />
      <button 
        onClick={onQuickAdd}
        className="w-14 h-14 bg-electric-yellow rounded-full flex items-center justify-center text-black -mt-8 shadow-lg shadow-yellow-500/20 transform hover:scale-105 transition-transform"
        aria-label="Add new task"
      >
        <PlusIcon className="w-7 h-7"/>
      </button>
       <NavItem
        label="Search"
        icon={<SearchIcon className="w-7 h-7" />}
        isActive={activeTab === 'Search'}
        onClick={() => setActiveTab('Search')}
      />
       <NavItem
        label="Settings"
        icon={<SettingsIcon className="w-7 h-7" />}
        isActive={activeTab === 'Settings'}
        onClick={() => setActiveTab('Settings')}
      />
    </nav>
  );
};

export default BottomNav;