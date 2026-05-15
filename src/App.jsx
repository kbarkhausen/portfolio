import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin, Twitter, Download, Sparkles, Zap } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Articles from './components/sections/Articles';
import Book from './components/sections/Book';

const AwsCertificationIcon = ({ title }) => (
  <svg viewBox="0 0 64 64" className="h-9 w-9" role="img" aria-label={title}>
    <title>{title}</title>
    <text x="32" y="29" textAnchor="middle" fontSize="17" fontWeight="700" fill="#ffffff" fontFamily="Arial, sans-serif">aws</text>
    <path d="M17 40c8.5 5.8 21 7.8 32.2 2.9" fill="none" stroke="#FF9900" strokeWidth="3.8" strokeLinecap="round" />
    <path d="M44.8 39.3l5 1.3-2.2 4.6" fill="none" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const AzureCertificationIcon = ({ title }) => (
  <svg viewBox="0 0 64 64" className="h-9 w-9" role="img" aria-label={title}>
    <title>{title}</title>
    <path d="M14 51 30.2 13h10.4L24.4 51Z" fill="#0078D4" />
    <path d="M31.2 13H50L35.3 51H24.4Z" fill="#50A8F2" />
    <path d="M30.6 13 24.3 28.2l11 12.9L50 13Z" fill="#83C7FF" opacity="0.9" />
  </svg>
);

const GoogleCertificationIcon = ({ title }) => (
  <svg viewBox="0 0 64 64" className="h-9 w-9" role="img" aria-label={title}>
    <title>{title}</title>
    <path d="M17.6 38.4a12.7 12.7 0 0 1 0-12.8l-6.2-4.8a22 22 0 0 0 0 22.4Z" fill="#FBBC05" />
    <path d="M32 18.7c3.2 0 6.1 1.1 8.4 3.1l5.6-5.6A21.1 21.1 0 0 0 32 11a21.8 21.8 0 0 0-20.6 9.8l6.2 4.8A12.8 12.8 0 0 1 32 18.7Z" fill="#EA4335" />
    <path d="M32 53a21 21 0 0 0 14.3-5.2l-5.8-5.7A12.9 12.9 0 0 1 17.6 38.4l-6.2 4.8A21.8 21.8 0 0 0 32 53Z" fill="#34A853" />
    <path d="M53 32c0-1.4-.1-2.8-.4-4.1H32v8.2h11.8a10.8 10.8 0 0 1-3.3 6l5.8 5.7C50.6 43.8 53 38.6 53 32Z" fill="#4285F4" />
  </svg>
);

const certifications = [
  {
    provider: 'AWS',
    title: 'AWS AI Practitioner',
    Icon: AwsCertificationIcon,
    badgeBorder: 'border-orange-400/20 hover:border-orange-300/50',
    iconShell: 'border-orange-400/25 bg-slate-950/80',
    providerColor: 'text-orange-300',
  },
  {
    provider: 'Microsoft Azure',
    title: 'Microsoft Azure AI Fundamentals',
    Icon: AzureCertificationIcon,
    badgeBorder: 'border-sky-400/20 hover:border-sky-300/50',
    iconShell: 'border-sky-400/25 bg-slate-950/80',
    providerColor: 'text-sky-300',
  },
  {
    provider: 'Google',
    title: 'Google AI Essentials',
    Icon: GoogleCertificationIcon,
    badgeBorder: 'border-emerald-400/20 hover:border-emerald-300/50',
    iconShell: 'border-emerald-400/25 bg-slate-950/80',
    providerColor: 'text-emerald-300',
  },
];

const CertificationBadge = ({ provider, title, Icon, badgeBorder, iconShell, providerColor }) => (
  <div
    className={`group glass-dark h-full rounded-2xl border px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 ${badgeBorder}`}
    title={title}
    aria-label={`${provider} certification: ${title}`}
  >
    <div className="flex items-center gap-3 text-left">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-lg shadow-cyan-950/20 ${iconShell}`}>
        <Icon title={title} />
      </div>
      <div className="min-w-0">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${providerColor}`}>{provider}</p>
        <p className="text-sm font-semibold leading-snug text-white sm:text-[15px]">{title}</p>
      </div>
    </div>
  </div>
);

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
              {/* Profile Image with 3D Tilt Effect */}
              <Tilt
                className="flex-shrink-0 relative group"
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1500}
                gyroscope={true}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#06b6d4"
                glarePosition="all"
                glareBorderRadius="9999px"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse-slow"></div>
                <div className="relative">
                  <img 
                    src="/images/profile-photo.jpg"
                    alt="Klaus Barkhausen"
                    loading="lazy"
                    className="h-48 w-48 rounded-full object-cover border-4 border-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 p-1 shadow-2xl"
                  />
                </div>
              </Tilt>

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
                        AI Business Transformation Architect
                      </p>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start text-cyan-300">
                      <Zap className="w-5 h-5" />
                      <p className="text-lg">I design AI systems that reduce costs, improve efficiency, and deliver measurable results</p>
                    </div>
                    <div className="grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {certifications.map((certification) => (
                        <CertificationBadge
                          key={certification.provider}
                          provider={certification.provider}
                          title={certification.title}
                          Icon={certification.Icon}
                          badgeBorder={certification.badgeBorder}
                          iconShell={certification.iconShell}
                          providerColor={certification.providerColor}
                        />
                      ))}
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
              {['skills', 'experience', 'articles', 'book'].map((tab) => (
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
            <Route path="/articles" element={<Articles />} />
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