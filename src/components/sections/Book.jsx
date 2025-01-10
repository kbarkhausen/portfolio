import { Card, CardContent } from '../ui/card';
import { BookOpen, ExternalLink } from 'lucide-react';

const Book = () => (
    <section className="transition-opacity duration-300">
        <h2 className="text-3xl font-bold mb-8 text-indigo-600">My Book</h2>
        <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0 w-full md:w-64 flex flex-col items-center gap-4">
                        <img
                            src="/images/Book_product-med-res-462x600.png"
                            alt="Book Cover"
                            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                        <a
                            href="https://www.totalfitness.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            <BookOpen className="w-5 h-5" />
                            Learn more about it
                            <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Total Fitness with Artificial Intelligence</h3>
                        <h4 className="text-2xl mb-4 text-gray-900">Practical Fitness and Cutting-Edge AI : The path to the best version of you!</h4>
                        <p className="text-lg text-gray-600 mb-6">
                            As a technologist who has spent countless hours in front of screens, I intimately understand the challenges of maintaining a healthy lifestyle in our modern, desk-bound world. This drove me to explore how we can leverage AI, particularly ChatGPT, to transform our sedentary routines into vibrant, healthy lifestyles.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            This book is born from my personal journey and passion for combining technology with wellness. I've witnessed firsthand how our increasingly digital lives can impact our health, and I've discovered innovative ways to use AI as a powerful ally in our fitness journey.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            My approach combines technical expertise with practical wellness strategies. I show you how to harness ChatGPT for personalized workout plans, nutrition guidance, and maintaining motivation. The book provides concrete strategies for breaking free from sedentary patterns while embracing the very technology that often keeps us desk-bound.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            What makes this guide unique is its focus on realistic, sustainable changes for busy professionals. I've included custom-crafted ChatGPT prompts throughout, ensuring you have AI-powered support for every aspect of your wellness journey - from mindset shifts to practical exercise routines.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            This isn't just another fitness book - it's a technology-enhanced roadmap to transforming your life, backed by my years of experience in both the tech and wellness spaces. Join me in discovering how AI can be the catalyst for living a healthier, more active life, regardless of your profession.
                        </p>

                        <div className="flex-shrink-0 w-full md:w-64 flex flex-col items-center gap-4">
                            <a
                                href="https://www.totalfitness.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                            >
                                <BookOpen className="w-5 h-5" />
                                Learn more about it
                                <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </section>
);

export default Book; 