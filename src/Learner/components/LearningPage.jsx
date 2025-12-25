import React, { useState } from 'react';
import { ChevronLeft, Play, Check, Clock, Video, BookOpen, X, ChevronRight } from 'lucide-react';

const LearningPage = ({ course, onBack, onComplete }) => {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(
    course.modules.findIndex(m => !m.completed) !== -1 
      ? course.modules.findIndex(m => !m.completed)
      : 0
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const currentModule = course.modules[currentModuleIndex];
  const isLastLesson = currentModuleIndex === course.modules.length - 1;

  const handleNext = () => {
    if (currentModuleIndex < course.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setSidebarOpen(false);
    }
  };

  const handlePrevious = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
      setSidebarOpen(false);
    }
  };

  const handleMarkComplete = () => {
    course.modules[currentModuleIndex].completed = true;
    const completedCount = course.modules.filter(m => m.completed).length;
    course.progress = Math.round((completedCount / course.modules.length) * 100);
    if (!isLastLesson) {
      handleNext();
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg sticky top-20 z-40 mb-6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Course
          </button>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold"
          >
            <BookOpen size={18} />
            Lessons
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="bg-gray-900 rounded-3xl overflow-hidden mb-6 aspect-video flex items-center justify-center shadow-2xl">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur">
                <Play className="text-white" size={40} />
              </div>
              <p className="text-white text-2xl font-bold mb-2">Video Player</p>
              <p className="text-gray-400">Lesson: {currentModule.title}</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{currentModule.title}</h1>
            <p className="text-gray-700 mb-6 leading-relaxed">
              In this lesson, you'll learn about {currentModule.title.toLowerCase()}. This comprehensive module covers all the essential concepts you need to master this topic. Follow along with the video and practice the exercises.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span className="font-semibold">{currentModule.duration}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <Video size={16} />
                <span className="font-semibold">Lesson {currentModuleIndex + 1} of {course.modules.length}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentModuleIndex === 0}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
              >
                <ChevronLeft size={20} />
                Previous
              </button>

              <button
                onClick={handleMarkComplete}
                disabled={currentModule.completed}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-2xl hover:scale-105 transition-all"
              >
                <Check size={20} />
                {currentModule.completed ? 'Completed ✓' : 'Mark as Complete'}
              </button>

              <button
                onClick={handleNext}
                disabled={isLastLesson}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className={`${sidebarOpen ? 'fixed inset-0 z-50 bg-black bg-opacity-50 md:relative md:bg-transparent' : 'hidden'} md:block md:w-96`}>
          <div className={`${sidebarOpen ? 'absolute right-0 top-0 bottom-0 w-80' : ''} md:sticky md:top-20 bg-white rounded-3xl shadow-2xl p-6 h-fit max-h-[calc(100vh-6rem)] overflow-y-auto`}>
            {sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            )}
            <h3 className="text-xl font-bold mb-6 text-gray-800">Course Content</h3>
            <div className="space-y-3">
              {course.modules.map((module, index) => (
                <button
                  key={module.id}
                  onClick={() => {
                    setCurrentModuleIndex(index);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    index === currentModuleIndex
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                      module.completed 
                        ? 'bg-green-500 text-white' 
                        : index === currentModuleIndex
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {module.completed ? <Check size={16} /> : index + 1}
                    </div>
                    <p className={`font-semibold flex-1 ${
                      index === currentModuleIndex ? 'text-white' : 'text-gray-800'
                    }`}>
                      {module.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm ml-11">
                    <Clock size={14} />
                    <span>{module.duration}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;