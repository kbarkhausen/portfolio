import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin, Twitter, Download } from 'lucide-react';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Book from './components/sections/Book';

const Portfolio = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 w-full overflow-x-hidden">
        {/* Header/Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
              <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/images/profile-photo.jpg"
                  alt="Klaus Barkhausen"
                  className="h-40 w-40 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <NavLink to="/" className="hover:text-blue-200 transition-colors">
                      <h1 className="text-4xl font-bold">Klaus Barkhausen</h1>
                    </NavLink>
                    <div className="flex flex-col gap-0 mt-2">
                      <p className="text-xl text-blue-100">AI Enterprise Software Architect</p>
                    </div>
                    <p className="mt-3 text-blue-200">Miami, Florida</p>
                  </div>
                  <div className="flex justify-center md:justify-start gap-4">
                    <a 
                      href="/assets/Resume of Klaus Barkhausen.pdf" 
                      target="_blank" 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
                    >
                      <Download className="w-5 h-5" />
                      Download my resume
                    </a>
                  </div>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                  <a href="mailto:klaus@barkhausen.us" className="inline-flex items-center justify-center gap-2 text-white hover:text-blue-200 transition-colors">
                    <Mail className="w-5 h-5" />
                    klaus@barkhausen.us
                  </a>
                  <a href="tel:+17863908337" className="inline-flex items-center justify-center gap-2 text-white hover:text-blue-200 transition-colors">
                    <Phone className="w-5 h-5" />
                    (786) 390-8337
                  </a>
                </div>
                <div className="mt-4 flex justify-center md:justify-start gap-6">
                  <a 
                    href="https://github.com/kbarkhausen" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/klausbarkhausen" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://twitter.com/kbarkhausen" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-blue-200 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Modified Navigation Tabs */}
        <div className="bg-white shadow-md sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center space-x-4 sm:space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) => `px-2 sm:px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                About
              </NavLink>
              {['skills', 'experience', 'book'].map((tab) => (
                <NavLink
                  key={tab}
                  to={`/${tab}`}
                  className={({ isActive }) => `px-2 sm:px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                    isActive
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Modified Main Content */}
        <main className="w-full max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-center text-blue-100">
              © {new Date().getFullYear()} Klaus Barkhausen. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default Portfolio;