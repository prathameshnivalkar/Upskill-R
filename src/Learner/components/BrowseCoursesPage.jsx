import React, { useState } from 'react';
import { Search } from 'lucide-react';
import CourseCard from './CourseCard';
import ShinyText from '../../ui/ShinyText';

const BrowseCoursesPage = ({ onCourseSelect, onEnroll, coursesData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'Design', 'Data Science', 'Marketing'];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ===== DARK + BLUR OVERLAY ===== */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl z-10" />

      {/* ===== PAGE CONTENT ===== */}
      <div className="relative z-20 min-h-screen text-white space-y-12 px-6 py-12">

        {/* ===== PAGE TITLE ===== */}
        <div className="text-center mb-12">
          <ShinyText
            text="LEARN & GROW"
            speed={3}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-wide"
          />

          <p className="text-xl text-gray-300">
            Master New Skills with Expert-Led Courses
          </p>
        </div>

        {/* ===== SEARCH BAR ===== */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Search
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400"
              size={24}
            />
            <input
              type="text"
              placeholder="Search courses by name, instructor, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-gray-900/90 text-white
                         border-2 border-gray-700 rounded-full
                         focus:outline-none focus:border-indigo-500
                         text-lg shadow-lg transition-all placeholder-gray-500"
            />
          </div>
        </div>

        {/* ===== CATEGORY FILTER ===== */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-900/80 text-gray-300 hover:bg-gray-800 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ===== COURSES GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onCourseSelect}
              onEnroll={onEnroll}
            />
          ))}
        </div>

        {/* ===== EMPTY STATE ===== */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">
              No courses found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseCoursesPage;
