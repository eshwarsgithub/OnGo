import React from 'react';
import type { Task } from '../types';
import { CheckIcon, CalendarIcon } from './Icons';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onToggle }) => {
  const { id, title, isCompleted, dueDate } = task;

  return (
    <div
      onClick={() => onToggle(id)}
      className="bg-brand-surface p-4 rounded-xl flex items-start gap-4 cursor-pointer transition-all duration-300 hover:bg-zinc-800"
      role="button"
      aria-pressed={isCompleted}
    >
      <div className="flex-shrink-0 pt-1">
        <div className={`w-6 h-6 rounded-md flex items-center justify-center border-2 transition-all duration-300 ${isCompleted ? 'bg-electric-yellow border-electric-yellow' : 'border-gray-600'}`}>
          {isCompleted && <CheckIcon className="w-4 h-4 text-black" />}
        </div>
      </div>
      <div className="flex-grow">
        <p className={`text-base transition-colors duration-300 ${isCompleted ? 'text-gray-500 line-through' : 'text-white'}`}>
            {title}
        </p>
        {!isCompleted && dueDate && (
          <div className="flex items-center gap-1.5 mt-1 text-amber-500">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">{dueDate}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskCard;