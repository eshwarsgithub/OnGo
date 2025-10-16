import React from 'react';
import { TrashIcon, SortIcon, XMarkIcon } from './Icons';

interface MoreOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClearCompleted: () => void;
}

const MoreOptionsModal: React.FC<MoreOptionsModalProps> = ({ isOpen, onClose, onClearCompleted }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-end justify-center z-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-brand-surface rounded-t-2xl shadow-xl w-full max-w-sm mx-auto p-4 transform transition-transform animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          .animate-slide-up { animation: slide-up 0.3s ease-out; }
        `}</style>

        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-white">More Options</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-white" aria-label="Close options menu">
                <XMarkIcon className="w-6 h-6" />
            </button>
        </div>
        
        <div className="space-y-2">
            <button
                className="w-full flex items-center gap-4 px-3 py-3 text-left text-white rounded-lg hover:bg-zinc-800 transition-colors"
                onClick={() => alert('Sorting feature coming soon!')}
            >
                <SortIcon className="w-6 h-6 text-gray-400" />
                <span>Sort Tasks</span>
            </button>
            <button
                onClick={onClearCompleted}
                className="w-full flex items-center gap-4 px-3 py-3 text-left text-red-400 rounded-lg hover:bg-red-600/20 transition-colors"
            >
                <TrashIcon className="w-6 h-6" />
                <span>Clear Completed Tasks</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MoreOptionsModal;