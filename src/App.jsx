import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin, Twitter, Download, Sparkles, Zap } from 'lucide-react';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Book from './components/sections/Book';

const Portfolio = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full overflow-x-hidden relative">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-slate-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
        </div>

        {/* Header/Hero Section */}
        <header className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-12">
              {/* Profile Image with Glow Effect */}
              <div className="flex-shrink-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse-slow"></div>
                <div className="relative">
                  <img 
                    src="/images/profile-photo.jpg"
                    alt="Klaus Barkhausen"
                    className="h-48 w-48 rounded-full object-cover border-4 border-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-1 shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Hero Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                  <div className="space-y-4">
                    <NavLink to="/" className="block hover:opacity-80 transition-opacity">
                      <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                        <span className="text-gradient">Klaus Barkhausen</span>
                      </h1>
                    </NavLink>
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
                      <p className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                        AI Enterprise Software Architect
                      </p>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start text-cyan-300">
                      <Zap className="w-5 h-5" />
                      <p className="text-lg">Transforming Business Processes with AI & Automation</p>
                    </div>
                    <p className="text-gray-300 text-lg">Miami, Florida</p>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <a 
                      href="/assets/Resume of Klaus Barkhausen.pdf" 
                      target="_blank" 
                      className="group inline-flex items-center gap-2 px-6 py-3 glass-dark rounded-xl hover:scale-105 transition-all duration-300 neon-glow text-white font-semibold"
                    >
                      <Download className="w-5 h-5 group-hover:animate-bounce" />
                      Download Resume
                    </a>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
                  <a 
                    href="mailto:klaus@barkhausen.us" 
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors glass-dark px-4 py-2 rounded-lg"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="hidden sm:inline">klaus@barkhausen.us</span>
                    <span className="sm:hidden">Email</span>
                  </a>
                  <a 
                    href="tel:+17863908337" 
                    className="inline-flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors glass-dark px-4 py-2 rounded-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="hidden sm:inline">(786) 390-8337</span>
                    <span className="sm:hidden">Call</span>
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-6">
                  <a 
                    href="https://github.com/kbarkhausen" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125"
                  >
                    <Github className="w-7 h-7" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/klausbarkhausen" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125"
                  >
                    <Linkedin className="w-7 h-7" />
                  </a>
                  <a 
                    href="https://twitter.com/kbarkhausen" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-125"
                  >
                    <Twitter className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Modern Navigation */}
        <div className="sticky top-0 z-20 backdrop-blur-md bg-slate-900/80 border-b border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex justify-center space-x-1">
              <NavLink
                to="/"
                className={({ isActive }) => `relative px-6 py-4 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">About</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></span>
                    )}
                  </>
                )}
              </NavLink>
              {['skills', 'experience', 'book'].map((tab) => (
                <NavLink
                  key={tab}
                  to={`/${tab}`}
                  className={({ isActive }) => `relative px-6 py-4 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {({ isActive }) => (
                    <>
                      <span className="relative z-10 capitalize">{tab}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/book" element={<Book />} />
          </Routes>
        </main>

        {/* Modern Footer */}
        <footer className="relative z-10 w-full mt-20 border-t border-blue-500/20">
          <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Klaus Barkhausen. All rights reserved.
            </p>
            <p className="text-center text-gray-500 text-sm mt-2">
              Architecting the future of AI-powered enterprise solutions
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default Portfolio;