import React, { useState } from 'react';
import { BookOpenText, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ currentPage }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 px-4 mb-8">
      <div className="max-w-7xl mx-auto 
        bg-white/70 backdrop-blur-xl 
        rounded-full shadow-xl 
        px-6 py-4 
        border border-white/30">
        
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/dashboard')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-md">
              <BookOpenText className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-wide">
              UpSkillR
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigate('/dashboard')}
              className={`font-semibold transition-colors ${
                currentPage === 'dashboard'
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => navigate('/browse')}
              className={`font-semibold transition-colors ${
                currentPage === 'browse'
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Browse Courses
            </button>

            <button
              onClick={() => navigate('/progress')}
              className={`font-semibold transition-colors ${
                currentPage === 'progress'
                  ? 'text-indigo-600'
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              My Progress
            </button>

            {/* Avatar */}
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-lg transition-shadow">
              PN
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 
          bg-white/80 backdrop-blur-xl 
          rounded-2xl shadow-2xl 
          overflow-hidden border border-white/30">
          
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => { navigate('/dashboard'); setMobileMenuOpen(false); }}
              className="block w-full text-left font-semibold text-gray-700 hover:text-indigo-600"
            >
              Dashboard
            </button>

            <button
              onClick={() => { navigate('/browse'); setMobileMenuOpen(false); }}
              className="block w-full text-left font-semibold text-gray-700 hover:text-indigo-600"
            >
              Browse Courses
            </button>

            <button
              onClick={() => { navigate('/progress'); setMobileMenuOpen(false); }}
              className="block w-full text-left font-semibold text-gray-700 hover:text-indigo-600"
            >
              My Progress
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
