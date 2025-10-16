import React, { useState } from 'react';
import { OnGoLogo } from '../components/Header';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const canLogin = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canLogin) {
      // Simulate successful login
      onLogin();
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-black shadow-2xl rounded-3xl overflow-hidden h-[85vh] max-h-[900px] flex flex-col justify-center items-center font-sans text-white p-8">
      <div className="w-full">
        <div className="text-center mb-10">
          <div className="inline-block">
            <OnGoLogo />
          </div>
          <h1 className="text-2xl font-bold mt-4">Welcome Back</h1>
          <p className="text-gray-400 text-sm">Log in to continue to OnGo</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              className="w-full bg-brand-surface px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-yellow"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              className="w-full bg-brand-surface px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-yellow"
            />
          </div>
          <button
            type="submit"
            disabled={!canLogin}
            className="w-full py-3 bg-electric-yellow text-black rounded-lg font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-6">
          <a href="#" className="text-sm text-gray-400 hover:text-electric-yellow">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
