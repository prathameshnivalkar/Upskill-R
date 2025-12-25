import React from 'react';
import { BookOpen, TrendingUp, Award } from 'lucide-react';
import CourseCard from './CourseCard';

const DashboardPage = ({ onNavigate, onCourseSelect, userData, coursesData }) => {
  const enrolledCourses = coursesData.filter(c => c.enrolled);
  
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-3xl p-10 text-white shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">Welcome back, {userData.name}! </h1>
        <p className="text-lg text-indigo-100">Continue your learning journey and achieve your goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
              <BookOpen className="text-blue-600" size={28} />
            </div>
          </div>
          <p className="text-gray-600 text-sm font-semibold mb-2">Enrolled Courses</p>
          <p className="text-4xl font-bold text-gray-800">{userData.enrolledCourses}</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
              <TrendingUp className="text-purple-600" size={28} />
            </div>
          </div>
          <p className="text-gray-600 text-sm font-semibold mb-2">In Progress</p>
          <p className="text-4xl font-bold text-gray-800">{userData.inProgressCourses}</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
              <Award className="text-green-600" size={28} />
            </div>
          </div>
          <p className="text-gray-600 text-sm font-semibold mb-2">Completed</p>
          <p className="text-4xl font-bold text-gray-800">{userData.completedCourses}</p>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.filter(c => c.progress < 100).map(course => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onCourseSelect}
              onEnroll={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;