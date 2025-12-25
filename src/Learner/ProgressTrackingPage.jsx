import React from 'react';
import { Play, Award, User } from 'lucide-react';
import CircularProgress from './CircularProgress';
import ProgressBar from './ProgressBar';

const ProgressTrackingPage = ({ onCourseSelect, userData, coursesData }) => {
  const enrolledCourses = coursesData.filter(c => c.enrolled);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-3 text-gray-200">My Learning Progress</h1>
        <p className="text-lg text-gray-400">Track your achievements and continue learning</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {enrolledCourses.map(course => (
          <div key={course.id} className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <CircularProgress progress={course.progress} size={140} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{course.title}</h3>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mb-4">
                  <User size={16} />
                  <span className="font-semibold">{course.instructor}</span>
                </div>
                <div className="mb-6">
                  <ProgressBar progress={course.progress} showLabel={false} />
                </div>
                <button
                  onClick={() => onCourseSelect(course)}
                  className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  {course.progress === 100 ? (
                    <>
                      <Award size={18} />
                      Review Course
                    </>
                  ) : (
                    <>
                      <Play size={18} />
                      Resume Course
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {enrolledCourses.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
          <p className="text-gray-500 text-xl mb-4">You haven't enrolled in any courses yet.</p>
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-8 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
            Browse Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default ProgressTrackingPage;