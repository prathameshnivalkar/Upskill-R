import React from "react";
import { BookOpenText } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white" style={{
      background: `
      radial-gradient(ellipse 140% 90% at 70% 20%, rgba(255, 20, 147, 0.26), transparent 55%),
      radial-gradient(ellipse 120% 70% at 30% 10%, rgba(0, 255, 255, 0.22), transparent 65%),
      radial-gradient(ellipse 110% 80% at 50% 0%, rgba(160, 80, 240, 0.28), transparent 70%),
      radial-gradient(ellipse 130% 60% at 80% 30%, rgba(255, 215, 0, 0.18), transparent 45%),
      radial-gradient(ellipse 120% 80% at 20% 40%, rgba(0, 255, 140, 0.14), transparent 60%),
      #030303
    `,
    }}>

    {/* ================= NAVBAR ================= */}
<nav className="sticky top-4 z-50 px-4">
  <div className="max-w-7xl mx-auto bg-white/15 backdrop-blur-xl rounded-full shadow-2xl px-6 py-4 border border-white/20">
    <div className="flex items-center justify-between">

      {/* 🔁 REPLACED LOGO (FROM OLD NAVBAR) */}
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
      <ul className="hidden md:flex gap-8 text-gray-200 font-semibold">
        <li className="hover:text-indigo-300 transition cursor-pointer">
          Home
        </li>
        <li className="hover:text-indigo-300 transition cursor-pointer">
          Courses
        </li>
        <li
          className="hover:text-indigo-300 transition cursor-pointer"
          onClick={() => navigate('/dashboard')}
        >
          Learner
        </li>
        <li className="hover:text-indigo-300 transition cursor-pointer">
          Instructor
        </li>
      </ul>

      {/* Actions */}
      <div className="flex gap-3 items-center">
        <button className="px-5 py-2 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition">
          Login
        </button>
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:opacity-90 transition shadow-md">
          Sign Up
        </button>
      </div>

    </div>
  </div>
</nav>


      {/* ================= HERO ================= */}
      <section className="text-center px-[5%] pt-28 pb-24">
        <p className="text-indigo-300 font-semibold mb-4">
          🚀 Top #1 Premium Online Learning Platform
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Learn & Grow <br /> Master New Skills
        </h1>

        <p className="max-w-2xl mx-auto text-gray-300 mb-10">
          Expand your knowledge with our premium online courses.
          Learn from industry experts and advance your career.
        </p>

        <div className="flex justify-center gap-4 mb-16">
          <button className="px-8 py-4 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700" onClick={() => navigate('/dashboard')}>
            Start Learning →
          </button>
          <button className="px-8 py-4 border border-white/40 rounded-lg hover:bg-white/10">
            Watch Intro
          </button>
        </div>

        <div className="flex justify-center gap-14 flex-wrap">
          <Stat value="500+" label="Expert Instructors" />
          <Stat value="500+" label="Premium Courses" />
          <Stat value="95%" label="Success Rate" />
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <Section
        title="Explore Categories"
        subtitle="Browse our wide range of courses across different categories"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Category emoji="💼" title="Graphic Design" count="24 Courses" />
          <Category emoji="💖" title="Finance" count="36 Courses" />
          <Category emoji="📊" title="Business" count="48 Courses" />
          <Category emoji="📷" title="Photography" count="32 Courses" />
          <Category emoji="🎨" title="Art & Design" count="28 Courses" />
          <Category emoji="💻" title="Web Development" count="52 Courses" />
          <Category emoji="🎯" title="Marketing" count="40 Courses" />
          <Category emoji="📱" title="Mobile Dev" count="24 Courses" />
        </div>
      </Section>

      {/* ================= FEATURED COURSES ================= */}
      <Section
        title="Featured Courses"
        subtitle="Top-rated courses from our expert instructors"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Course title="Complete Web Development Bootcamp 2024" price="$49.99" badge="Bestseller" />
          <Course title="Master in C++ Beginner to Advanced" price="$59.99" badge="Popular" />
          <Course title="Machine Learning, Data Science & Gen AI" price="$69.99" badge="New" />
          <Course title="UI/UX Design Masterclass" price="Free" />
        </div>
      </Section>

      {/* ================= FEATURES ================= */}
      <Section
        title="Everything You Need to Succeed"
        subtitle="We provide all the tools and resources for your learning journey"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Feature emoji="📚" title="Learn At Your Own Pace" />
          <Feature emoji="👨‍🏫" title="Expert Instructors" />
          <Feature emoji="📜" title="Earn Certificates" />
          <Feature emoji="💼" title="Practical Projects" />
          <Feature emoji="🤝" title="Community Support" />
          <Feature emoji="📱" title="Mobile Learning" />
        </div>
      </Section>

      {/* ================= CTA ================= */}
      <section className="px-[5%] py-28 text-center">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-3xl py-20 px-8">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-gray-300 mb-10">
            Join over 500,000+ students already learning on UpSkillR.
          </p>

          <button className="bg-white text-indigo-600 font-semibold px-10 py-4 rounded-lg text-lg">
            Explore Courses
          </button>

          <div className="flex justify-center gap-14 mt-14 flex-wrap">
            <Stat value="500+" label="Courses" />
            <Stat value="95%+" label="Success Rate" />
            <Stat value="200+" label="Mentors" />
            <Stat value="4.8" label="Rating" />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="px-[5%] py-16 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">🎓 UpSkillR</h3>
            <p className="text-gray-400">
              Empowering learners worldwide with quality education.
            </p>
          </div>

          <FooterCol title="Platform" items={["Browse Courses", "Categories", "Pricing", "For Business"]} />
          <FooterCol title="Resources" items={["Blog", "Help Center", "Community", "Careers"]} />
          <FooterCol title="Company" items={["About Us", "Contact", "Privacy Policy", "Terms"]} />
        </div>

        <div className="text-center text-gray-500">
          © 2024 UpSkillR Learning Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

const Section = ({ title, subtitle, children }) => (
  <section className="px-[5%] py-24">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
      {title}
    </h2>
    <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
      {subtitle}
    </p>
    {children}
  </section>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <h3 className="text-3xl font-bold">{value}</h3>
    <p className="text-gray-400">{label}</p>
  </div>
);

const Category = ({ emoji, title, count }) => (
  <div className="bg-white/95 text-[#1a1a2e] p-8 rounded-xl shadow-lg hover:-translate-y-1 transition text-center">
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-gray-500 text-sm">{count}</p>
  </div>
);

const Course = ({ title, price, badge }) => (
  <div className="bg-white/95 text-[#1a1a2e] rounded-xl shadow-lg hover:-translate-y-1 transition overflow-hidden">
    <div className="h-44 bg-gradient-to-br from-indigo-500 to-purple-600 relative">
      {badge && (
        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-semibold">
          {badge}
        </span>
      )}
    </div>
    <div className="p-6">
      <h3 className="font-semibold mb-3">{title}</h3>
      <span className="text-xl font-bold">{price}</span>
    </div>
  </div>
);

const Feature = ({ emoji, title }) => (
  <div className="text-center">
    <div className="text-4xl mb-6">{emoji}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-400">
      High-quality learning experience designed for modern learners.
    </p>
  </div>
);

const FooterCol = ({ title, items }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-3 text-gray-400">
      {items.map((i) => (
        <li key={i} className="hover:text-white cursor-pointer">{i}</li>
      ))}
    </ul>
  </div>
);
