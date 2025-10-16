import React, { useState } from 'react';

interface QuickAddModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (title: string) => void;
}

const QuickAddModal: React.FC<QuickAddModalProps> = ({ isOpen, onClose, onAddTask }) => {
  const [title, setTitle] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle('');
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-end justify-center z-50"
      onClick={onClose}
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Call Mom tomorrow at 5pm"
                autoFocus
                className="w-full bg-transparent text-white text-lg placeholder-gray-500 focus:outline-none py-2"
            />
            <div className="flex justify-end mt-4">
                <button
                    type="submit"
                    className="px-5 py-2 bg-electric-yellow text-black rounded-lg text-sm font-bold hover:opacity-90 disabled:opacity-50"
                    disabled={!title.trim()}
                >
                    Add Task
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default QuickAddModal;