import React from 'react';
import { Star, Play, User } from 'lucide-react';
import StarRating from './StarRating';
import ProgressBar from './ProgressBar';

const CourseCard = ({ course, onViewDetails, onEnroll }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      <div className="relative overflow-hidden" onClick={() => onViewDetails(course)}>
        <img 
          src={course.thumbnail} 
          alt={course.title} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-3 right-3 bg-white px-3 py-1.5 rounded-full text-xs font-bold text-indigo-600 shadow-md">
          {course.category}
        </div>
        {course.enrolled && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
            Enrolled
          </div>
        )}
      </div>
      <div className="p-5">
        <h3 
          className="font-bold text-lg mb-2 line-clamp-2 text-gray-800 group-hover:text-indigo-600 transition-colors" 
          onClick={() => onViewDetails(course)}
        >
          {course.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <User size={14} />
          <span>{course.instructor}</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <StarRating rating={Math.floor(course.rating)} size={16} showNumber={false} />
          <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
          <span className="text-sm text-gray-500">({course.reviewCount.toLocaleString()})</span>
        </div>
        
        {course.enrolled && (
          <div className="mb-4">
            <ProgressBar progress={course.progress} />
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          {course.price === 0 ? (
            <span className="text-2xl font-bold text-green-600">Free</span>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-green-600">₹{course.price}</span>
              <span className="text-sm text-gray-400 line-through">₹{course.originalPrice}</span>
            </div>
          )}
        </div>

        {course.enrolled ? (
          <button
            onClick={() => onViewDetails(course)}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Play size={18} />
            {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
          </button>
        ) : (
          <button
            onClick={() => onEnroll(course)}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Enroll Now
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;