import React from 'react';
import { ChevronLeft, Play, Award, User, Clock, Video, Check } from 'lucide-react';
import StarRating from './StarRating';
import ProgressBar from './ProgressBar';

const CourseDetailPage = ({ course, onBack, onEnroll, onStartLearning, onShowReview, reviewsData }) => {
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold text-lg transition-colors"
      >
        <ChevronLeft size={24} />
        Back to Courses
      </button>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="relative">
          <img src={course.thumbnail} alt={course.title} className="w-full h-80 md:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-white text-indigo-700 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                {course.category}
              </span>
              {course.enrolled && course.progress === 100 && (
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                  <Award size={16} /> Completed
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">{course.title}</h1>
          </div>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <StarRating rating={Math.floor(course.rating)} size={20} showNumber={false} />
              <span className="font-bold text-lg">{course.rating}</span>
              <span className="text-gray-500">({course.reviewCount.toLocaleString()} reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <User size={18} />
              <span>{course.students.toLocaleString()} students</span>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">{course.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">Instructor</p>
              <p className="font-bold text-gray-800">{course.instructor}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">Lessons</p>
              <p className="font-bold text-gray-800">{course.lessons} lessons</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">Duration</p>
              <p className="font-bold text-gray-800">{course.duration}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-semibold mb-1">Level</p>
              <p className="font-bold text-gray-800">Beginner</p>
            </div>
          </div>

          {course.enrolled && (
            <div className="mb-8">
              <ProgressBar progress={course.progress} />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            {course.enrolled ? (
              <>
                <button
                  onClick={() => onStartLearning(course)}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
                >
                  <Play size={24} />
                  {course.progress === 100 ? 'Review Course' : course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                </button>
                {course.progress === 100 && (
                  <button
                    onClick={onShowReview}
                    className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all"
                  >
                    Leave a Review
                  </button>
                )}
              </>
            ) : (
              <div className="flex-1 flex items-center justify-between p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl">
                <div>
                  {course.price === 0 ? (
                    <span className="text-3xl font-bold text-green-600">Free</span>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-green-600">${course.price}</span>
                      <span className="text-lg text-gray-400 line-through">${course.originalPrice}</span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => onEnroll(course)}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
                >
                  Enroll Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {course.modules && course.modules.length > 0 && (
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Course Content</h2>
          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <div
                key={module.id}
                className="flex items-center justify-between p-6 border-2 border-gray-200 rounded-2xl hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold ${
                    module.completed 
                      ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {module.completed ? <Check size={20} /> : index + 1}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">{module.title}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Clock size={14} />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
                {module.completed ? (
                  <span className="text-green-600 text-sm font-bold flex items-center gap-2">
                    <Check size={16} /> Completed
                  </span>
                ) : (
                  <Play className="text-indigo-600" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Student Reviews</h2>
        <div className="space-y-6">
          {reviewsData.map(review => (
            <div key={review.id} className="border-b-2 border-gray-100 pb-6 last:border-b-0">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-gray-800">{review.user}</p>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <StarRating rating={review.rating} size={16} showNumber={false} />
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed ml-16">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;