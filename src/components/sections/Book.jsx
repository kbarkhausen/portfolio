import { Card, CardContent } from '../ui/card';
import { BookOpen, ExternalLink, Sparkles, Brain, Target, Zap } from 'lucide-react';

const Book = () => (
    <section className="transition-opacity duration-300 animate-fade-in">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                My Book
            </h2>
        </div>
        
        <div className="glass-dark rounded-2xl p-8 md:p-12 border border-blue-500/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-12">
                {/* Book Cover */}
                <div className="flex-shrink-0 w-full md:w-80 flex flex-col items-center gap-6">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                        <img
                            src="/images/Book_product-med-res-462x600.png"
                            alt="Book Cover"
                            className="relative w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <a
                        href="https://www.totalfitness.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-semibold neon-glow"
                    >
                        <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Learn More
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Book Content */}
                <div className="flex-1 space-y-6">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                            <span className="text-gradient">Total Fitness with Artificial Intelligence</span>
                        </h3>
                        <h4 className="text-xl md:text-2xl mb-6 text-cyan-300 font-semibold">
                            Practical Fitness and Cutting-Edge AI: The path to the best version of you!
                        </h4>
                        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full mb-6"></div>
                    </div>

                    <div className="space-y-5">
                        <div className="p-5 rounded-xl bg-gradient-to-r from-blue-900/30 via-cyan-900/30 to-slate-800/30 border border-cyan-500/20">
                            <div className="flex items-start gap-3 mb-2">
                                <Brain className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <p className="text-gray-200 leading-relaxed">
                                    As a technologist who has spent countless hours in front of screens, I intimately understand the challenges of maintaining a healthy lifestyle in our modern, desk-bound world. This drove me to explore how we can leverage <span className="text-cyan-400 font-semibold">AI, particularly ChatGPT</span>, to transform our sedentary routines into vibrant, healthy lifestyles.
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            This book is born from my personal journey and passion for combining technology with wellness. I've witnessed firsthand how our increasingly digital lives can impact our health, and I've discovered innovative ways to use AI as a powerful ally in our fitness journey.
                        </p>

                        <div className="p-5 rounded-xl glass-dark border border-blue-500/20">
                            <div className="flex items-start gap-3 mb-2">
                                <Target className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                <p className="text-gray-200 leading-relaxed">
                                    My approach combines technical expertise with practical wellness strategies. I show you how to harness ChatGPT for <span className="text-blue-400 font-semibold">personalized workout plans, nutrition guidance, and maintaining motivation</span>. The book provides concrete strategies for breaking free from sedentary patterns while embracing the very technology that often keeps us desk-bound.
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            What makes this guide unique is its focus on realistic, sustainable changes for busy professionals. I've included <span className="text-cyan-300 font-semibold">custom-crafted ChatGPT prompts</span> throughout, ensuring you have AI-powered support for every aspect of your wellness journey - from mindset shifts to practical exercise routines.
                        </p>

                        <div className="p-5 rounded-xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-blue-500/20">
                            <div className="flex items-start gap-3">
                                <Zap className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                                <p className="text-gray-200 leading-relaxed">
                                    This isn't just another fitness book - it's a <span className="text-cyan-400 font-semibold">technology-enhanced roadmap</span> to transforming your life, backed by my years of experience in both the tech and wellness spaces. Join me in discovering how AI can be the catalyst for living a healthier, more active life, regardless of your profession.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                        <a
                            href="https://www.totalfitness.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 font-semibold neon-glow"
                        >
                            <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            Explore Total Fitness AI
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Book; 