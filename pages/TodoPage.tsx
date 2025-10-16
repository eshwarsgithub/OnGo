import React, { useState } from 'react';
import { Task } from '../types';
import Header from '../components/Header';
import TaskCard from '../components/NotificationCard';
import BottomNav from '../components/BottomNav';
import QuickAddModal from '../components/SummaryModal';
import MoreOptionsModal from '../components/MoreOptionsModal';

interface TodoPageProps {
  onLogout: () => void;
}

const TodoPage: React.FC<TodoPageProps> = ({ onLogout }) => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Design the OnGo logo', isCompleted: true, dueDate: null },
    { id: '2', title: 'Develop the main UI components', isCompleted: true, dueDate: null },
    { id: '3', title: 'Implement task creation logic', isCompleted: false, dueDate: 'Today' },
    { id: '4', title: 'Set up bottom navigation', isCompleted: false, dueDate: 'Tomorrow' },
    { id: '5', title: 'Read a book', isCompleted: false, dueDate: null },
  ]);

  const [activeTab, setActiveTab] = useState('Home');
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);
  const [isMoreOptionsOpen, setIsMoreOptionsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const handleAddTask = (title: string) => {
    const newTask: Task = {
      id: new Date().toISOString(),
      title,
      isCompleted: false,
      dueDate: null,
    };
    setTasks([newTask, ...tasks]);
  };
  
  const handleClearCompleted = () => {
    setTasks(tasks.filter(task => !task.isCompleted));
    setIsMoreOptionsOpen(false); // Close modal after action
  };


  const renderHome = () => {
    const upcomingTasks = tasks.filter(t => !t.isCompleted);
    const completedTasks = tasks.filter(t => t.isCompleted);

    return (
      <div className="p-4 space-y-3">
        {upcomingTasks.length > 0 ? (
          upcomingTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={handleToggleTask}
            />
          ))
        ) : (
          <div className="text-center text-gray-500 pt-16">
            <p className="text-lg">All tasks completed!</p>
            <p className="text-sm">Enjoy your day.</p>
          </div>
        )}
        
        {completedTasks.length > 0 && (
          <div className="pt-6">
            <h2 className="text-gray-500 text-sm font-semibold px-1 pb-2">Completed</h2>
             <div className="space-y-3">
              {completedTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={handleToggleTask}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderSearch = () => {
    const filteredTasks = tasks.filter(task => 
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="p-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a task..."
          autoFocus
          className="w-full bg-brand-surface px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-yellow mb-4"
        />
        {searchQuery.length > 0 ? (
          filteredTasks.length > 0 ? (
            <div className="space-y-3">
              {filteredTasks.map(task => (
                <TaskCard key={task.id} task={task} onToggle={handleToggleTask} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 pt-16">
              <p>No tasks found for "{searchQuery}"</p>
            </div>
          )
        ) : (
          <div className="text-center text-gray-500 pt-16">
            <p>Find any task in an instant.</p>
          </div>
        )}
      </div>
    );
  };

  const renderSettings = () => (
    <div className="p-4 space-y-6">
       <div className="flex items-center gap-4 pt-4">
          <div className="w-16 h-16 bg-brand-surface rounded-full flex-shrink-0">
            {/* User Avatar Placeholder */}
          </div>
          <div>
              <p className="font-semibold text-white text-lg">Guest User</p>
              <p className="text-sm text-gray-400">guest@ongo.app</p>
          </div>
       </div>
       <div className="space-y-2">
         {/* Add other settings items here in the future */}
       </div>
       <button
          onClick={onLogout}
          className="w-full py-3 bg-red-600/20 text-red-400 rounded-lg font-bold hover:bg-red-600/30 transition-colors"
       >
         Log Out
       </button>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'Search':
        return renderSearch();
      case 'Settings':
        return renderSettings();
      case 'Home':
      default:
        return renderHome();
    }
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-black shadow-2xl rounded-3xl overflow-hidden h-[85vh] max-h-[900px] flex flex-col font-sans text-white">
      <Header />
      <main className="flex-grow overflow-y-auto">
        {renderContent()}
      </main>
      <BottomNav 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onQuickAdd={() => setIsQuickAddOpen(true)}
        onMoreClick={() => setIsMoreOptionsOpen(true)}
      />
      <QuickAddModal
        isOpen={isQuickAddOpen}
        onClose={() => setIsQuickAddOpen(false)}
        onAddTask={handleAddTask}
      />
      <MoreOptionsModal
        isOpen={isMoreOptionsOpen}
        onClose={() => setIsMoreOptionsOpen(false)}
        onClearCompleted={handleClearCompleted}
      />
    </div>
  );
};

export default TodoPage;