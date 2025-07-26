import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

function Dashboard() {
  const [prompts] = useState([
    {
      id: 1,
      title: "Creative Writing Assistant",
      description: "Generate compelling stories, articles, and creative content",
      category: "Writing",
      uses: 1247
    },
    {
      id: 2,
      title: "Code Documentation Generator",
      description: "Automatically create comprehensive documentation for your code",
      category: "Development",
      uses: 892
    },
    {
      id: 3,
      title: "Marketing Copy Creator",
      description: "Craft persuasive marketing content and ad copy",
      category: "Marketing",
      uses: 2156
    },
    {
      id: 4,
      title: "Email Response Assistant",
      description: "Generate professional email responses quickly",
      category: "Business",
      uses: 743
    }
  ]);

  return (
    <>
      <Logo />
      
      {/* Header */}
      <div className="w-full max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome to IntelliPrompt</h1>
            <p className="text-white/80">Your intelligent AI prompt creation platform</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors">
              Create New Prompt
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white/80 text-sm font-medium mb-2">Total Prompts</h3>
            <p className="text-3xl font-bold text-white">24</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white/80 text-sm font-medium mb-2">This Month</h3>
            <p className="text-3xl font-bold text-white">8</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white/80 text-sm font-medium mb-2">Total Uses</h3>
            <p className="text-3xl font-bold text-white">5,038</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-white/80 text-sm font-medium mb-2">Success Rate</h3>
            <p className="text-3xl font-bold text-white">94%</p>
          </div>
        </div>

        {/* Popular Prompts */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Popular Prompts</h2>
            <Link to="/prompts" className="text-blue-600 hover:text-blue-800 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {prompts.map((prompt) => (
              <div key={prompt.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-800">{prompt.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {prompt.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{prompt.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{prompt.uses.toLocaleString()} uses</span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Use Prompt
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
              <div className="text-center">
                <div className="text-2xl mb-2">✨</div>
                <h3 className="font-medium text-gray-800">Create Prompt</h3>
                <p className="text-sm text-gray-600">Build a new AI prompt</p>
              </div>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors">
              <div className="text-center">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-medium text-gray-800">Analytics</h3>
                <p className="text-sm text-gray-600">View prompt performance</p>
              </div>
            </button>
            <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-medium text-gray-800">Templates</h3>
                <p className="text-sm text-gray-600">Browse prompt templates</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
