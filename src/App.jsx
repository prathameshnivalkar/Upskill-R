import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';

// NEW: Landing Page
import LandingPage from './Learner/components/LandingPage';
import Navbar from './Learner/components/Navbar';
import DashboardPage from './Learner/components/DashboardPage';
import BrowseCoursesPage from './Learner/components/BrowseCoursesPage';
import CourseDetailPage from './Learner/components/CourseDetailPage';
import LearningPage from './Learner/components/LearningPage';
import ProgressTrackingPage from './Learner/components/ProgressTrackingPage';
import ReviewModal from './Learner/components/ReviewModal';

// Wrapper components for routes with course ID
const CourseDetailWrapper = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find(c => c.id === parseInt(courseId));

  const handleBackToCourses = () => {
    navigate('/browse');
  };

  const handleEnroll = (course) => {
    const courseIndex = coursesData.findIndex(c => c.id === course.id);
    coursesData[courseIndex].enrolled = true;
    coursesData[courseIndex].progress = 0;
    userData.enrolledCourses++;
    userData.inProgressCourses++;
    alert(`Successfully enrolled in "${course.title}"!`);
    navigate('/dashboard');
  };

  const handleStartLearning = (course) => {
    navigate(`/learning/${course.id}`);
  };

  const [showReviewModal, setShowReviewModal] = useState(false);

  if (!course) return <div>Course not found</div>;

  return (
    <>
      <Navbar currentPage="courseDetail" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CourseDetailPage
          course={course}
          onBack={handleBackToCourses}
          onEnroll={handleEnroll}
          onStartLearning={handleStartLearning}
          onShowReview={() => setShowReviewModal(true)}
          reviewsData={reviewsData}
        />
      </div>
      <ReviewModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        onSubmit={(reviewData) => {
          console.log('Review submitted:', reviewData);
          setShowReviewModal(false);
          alert('Thank you for your review!');
        }}
        courseName={course.title}
      />
    </>
  );
};

const LearningWrapper = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find(c => c.id === parseInt(courseId));

  const handleBackToCourseDetail = () => {
    navigate(`/course-detail/${courseId}`);
  };

  if (!course) return <div>Course not found</div>;

  return (
    <>
      <Navbar currentPage="learning" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <LearningPage
          course={course}
          onBack={handleBackToCourseDetail}
          onComplete={() => {}}
        />
      </div>
    </>
  );
};
const userData = {
  name: "Prathamesh Nivalkar",
  enrolledCourses: 3,
  completedCourses: 1,
  inProgressCourses: 2
};

const coursesData = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp 2024",
    instructor: "John Smith",
    category: "Development",
    rating: 4.8,
    reviewCount: 1234,
    price: 49.99,
    originalPrice: 199.99,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
    description: "Master web development from scratch...",
    lessons: 45,
    duration: "12 hours",
    enrolled: true,
    progress: 65,
    students: 12450,
    modules: [
      { id: 1, title: "Introduction to Web Development", completed: true, duration: "30 min" },
      { id: 2, title: "HTML Fundamentals", completed: true, duration: "45 min" },
      { id: 3, title: "CSS Styling & Flexbox", completed: true, duration: "1 hour" },
      { id: 4, title: "JavaScript Essentials", completed: false, duration: "2 hours" },
      { id: 5, title: "React Framework Deep Dive", completed: false, duration: "3 hours" }
    ]
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Emma Wilson",
    category: "Design",
    rating: 4.9,
    reviewCount: 892,
    price: 39.99,
    originalPrice: 149.99,
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
    description: "Master the art of UI/UX design...",
    lessons: 32,
    duration: "8 hours",
    enrolled: true,
    progress: 40,
    students: 8920,
    modules: []
  },
  {
    id: 3,
    title: "Python for Data Science & Machine Learning",
    instructor: "Michael Chen",
    category: "Data Science",
    rating: 4.7,
    reviewCount: 2156,
    price: 0,
    originalPrice: 0,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    description: "Complete Python programming course...",
    lessons: 56,
    duration: "15 hours",
    enrolled: false,
    progress: 0,
    students: 21560,
    modules: []
  },
  {
    id: 4,
    title: "Digital Marketing Fundamentals",
    instructor: "Lisa Anderson",
    category: "Marketing",
    rating: 4.6,
    reviewCount: 745,
    price: 29.99,
    originalPrice: 129.99,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    description: "Learn SEO, social media marketing...",
    lessons: 28,
    duration: "6 hours",
    enrolled: true,
    progress: 100,
    students: 7450,
    modules: []
  },
  {
    id: 5,
    title: "Mobile App Development with React Native",
    instructor: "David Kim",
    category: "Development",
    rating: 4.8,
    reviewCount: 1567,
    price: 54.99,
    originalPrice: 189.99,
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop",
    description: "Build beautiful cross-platform apps...",
    lessons: 40,
    duration: "10 hours",
    enrolled: false,
    progress: 0,
    students: 15670,
    modules: []
  },
  {
    id: 6,
    title: "Graphic Design with Adobe Creative Suite",
    instructor: "Rachel Green",
    category: "Design",
    rating: 4.9,
    reviewCount: 934,
    price: 44.99,
    originalPrice: 169.99,
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop",
    description: "Master Photoshop, Illustrator...",
    lessons: 38,
    duration: "9 hours",
    enrolled: true,
    progress: 25,
    students: 9340,
    modules: []
  }
];

const reviewsData = [
  { id: 1, user: "Alex Johnson", rating: 5, comment: "Excellent course!", date: "2 days ago", avatar: "AJ" },
  { id: 2, user: "Maria Garcia", rating: 4, comment: "Great content!", date: "1 week ago", avatar: "MG" },
  { id: 3, user: "Tom Wilson", rating: 5, comment: "Best course!", date: "2 weeks ago", avatar: "TW" }
];

// --------------------
// MAIN APP
// --------------------
function AppContent() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    if (course.enrolled && course.modules && course.modules.length > 0) {
      navigate(`/learning/${course.id}`);
    } else {
      navigate(`/course-detail/${course.id}`);
    }
  };

  return (
    <div className="min-h-screen w-full relative">
      {/* Azure Depths Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(130% 130% at 50% 100%, #050505 30%, #03036d 100%)",
        }}
      />

      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={
            <>
              <Navbar currentPage="dashboard" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <DashboardPage
                  onNavigate={navigate}
                  onCourseSelect={handleCourseSelect}
                  userData={userData}
                  coursesData={coursesData}
                />
              </div>
            </>
          } />
          <Route path="/browse" element={
            <>
              <Navbar currentPage="browse" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <BrowseCoursesPage
                  onCourseSelect={handleCourseSelect}
                  onEnroll={(course) => {
                    const courseIndex = coursesData.findIndex(c => c.id === course.id);
                    coursesData[courseIndex].enrolled = true;
                    coursesData[courseIndex].progress = 0;
                    userData.enrolledCourses++;
                    userData.inProgressCourses++;
                    alert(`Successfully enrolled in "${course.title}"!`);
                    navigate('/dashboard');
                  }}
                  coursesData={coursesData}
                />
              </div>
            </>
          } />
          <Route path="/course-detail/:courseId" element={<CourseDetailWrapper />} />
          <Route path="/learning/:courseId" element={<LearningWrapper />} />
          <Route path="/progress" element={
            <>
              <Navbar currentPage="progress" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ProgressTrackingPage
                  onCourseSelect={handleCourseSelect}
                  userData={userData}
                  coursesData={coursesData}
                />
              </div>
            </>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
