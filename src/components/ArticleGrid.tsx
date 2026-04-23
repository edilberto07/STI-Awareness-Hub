import { useEffect, useRef, useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { Article, CATEGORY_COLORS, Category } from '@/data/articles';

interface ArticleGridProps {
  articles: Article[];
  activeCategory: Category | 'All';
  onArticleClick: (slug: string) => void;
}

function ArticleCard({ article, index, onArticleClick }: { article: Article; index: number; onArticleClick: (slug: string) => void }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const colors = CATEGORY_COLORS[article.category];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 80);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`article-card group cursor-pointer bg-white rounded-3xl overflow-hidden transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
      onClick={() => { onArticleClick(article.slug); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <img
          src={article.coverImage}
          alt={article.title}
          className="article-card-image w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${colors.bg} ${colors.text} border ${colors.border}`}
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
            {article.category}
          </span>
        </div>
        {/* Read time */}
        <div className="absolute bottom-4 right-4">
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs bg-black/30 backdrop-blur-sm text-white"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <Clock size={10} />
            {article.readTime} min
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-lg font-bold text-[#0D4F5C] mb-2.5 leading-tight group-hover:text-[#0a3d47] transition-colors"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          {article.title}
        </h3>
        <p
          className="text-sm text-[#374151] leading-relaxed mb-5 line-clamp-2"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300 }}
        >
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-xs font-semibold text-[#0D4F5C]"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {article.author}
            </p>
            <p
              className="text-xs text-[#0D4F5C]/45 mt-0.5"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              {article.date}
            </p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#0D4F5C]/8 flex items-center justify-center group-hover:bg-[#0D4F5C] transition-colors duration-200">
            <ArrowRight size={14} className="text-[#0D4F5C] group-hover:text-white transition-colors duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArticleGrid({ articles, activeCategory, onArticleClick }: ArticleGridProps) {
  return (
    <section className="py-8 lg:py-16 px-6 lg:px-8 max-w-7xl mx-auto" id="articles">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p
            className="text-sm font-semibold tracking-widest uppercase text-[#0D4F5C]/50 mb-2"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            {activeCategory === 'All' ? 'All Articles' : activeCategory}
          </p>
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#0D4F5C]"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
          </h2>
        </div>
        <span
          className="text-sm text-[#0D4F5C]/50 hidden sm:block"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          {articles.length} article{articles.length !== 1 ? 's' : ''}
        </span>
      </div>

      {articles.length === 0 ? (
        <div className="text-center py-24">
          <p
            className="text-2xl font-bold text-[#0D4F5C]/40 mb-3"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            No articles yet
          </p>
          <p
            className="text-[#0D4F5C]/30 text-sm"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Check back soon for articles on this topic.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={i}
              onArticleClick={onArticleClick}
            />
          ))}
        </div>
      )}
    </section>
  );
}
