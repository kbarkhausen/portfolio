import { ExternalLink, Calendar, Newspaper } from 'lucide-react';

const articles = [
  {
    title: "In 2026, Great Developers Don't Write More Code — They Deliver More Value",
    url: "https://www.linkedin.com/pulse/2026-great-developers-dont-write-more-code-deliver-klaus-barkhausen-gt34e",
    date: "March 2026",
    description: "If you're still hiring developers the way you did in 2016, you're quietly sabotaging your own AI strategy."
  },
  {
    title: "Stop Shipping Guesswork: Why Specification-First Beats Ultra-Rapid MVPs in the AI Era",
    url: "https://www.linkedin.com/pulse/stop-shipping-guesswork-why-specification-first-beats-barkhausen-jtqle",
    date: "February 2026",
    description: "Why specification-first development outperforms rapid prototyping when working with AI tools."
  },
  {
    title: "How AI Is Changing the Way We Write Code: Lessons from Real Projects",
    url: "https://www.linkedin.com/pulse/how-ai-changing-way-we-write-code-lessons-from-real-klaus-barkhausen-aqowe",
    date: "January 2026",
    description: "Exploring the benefits and limitations of AI tools in software development, with lessons learned from real projects."
  }
];

const Articles = () => (
  <section className="transition-opacity duration-300 animate-fade-in">
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
        <Newspaper className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
        Articles
      </h2>
    </div>

    <div className="glass-dark rounded-2xl p-8 md:p-12 border border-blue-500/20 shadow-2xl">
      <p className="text-gray-300 text-lg mb-8">
        Insights on AI-powered development, software architecture, and the future of engineering leadership.
      </p>

      <div className="space-y-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="glass-dark rounded-xl p-6 border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 flex items-center gap-2">
                    {article.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-400 mb-3">{article.description}</p>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-blue-500/20">
        <a
          href="https://www.linkedin.com/in/klausbarkhausen/recent-activity/articles/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 glass-dark rounded-xl hover:scale-105 transition-all duration-300 border border-blue-500/20 hover:border-cyan-500/40 text-white font-semibold"
        >
          View All Articles on LinkedIn
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

export default Articles;
