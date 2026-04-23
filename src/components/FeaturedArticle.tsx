import { ArrowRight, Clock, User } from 'lucide-react';
import { Article, CATEGORY_COLORS } from '@/data/articles';

interface FeaturedArticleProps {
  article: Article;
  onRead: (slug: string) => void;
}

export default function FeaturedArticle({ article, onRead }: FeaturedArticleProps) {
  const colors = CATEGORY_COLORS[article.category];

  return (
    <section className="py-8 lg:py-16 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8 animate-fade-slide-up">
        <p
          className="text-sm font-semibold tracking-widest uppercase text-[#0D4F5C]/50"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Featured Article
        </p>
      </div>

      <div
        className="group relative rounded-3xl overflow-hidden cursor-pointer animate-fade-slide-up stagger-2 hover:shadow-2xl transition-all duration-500"
        onClick={() => { onRead(article.slug); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        style={{ backgroundColor: '#fff' }}
      >
        <div className="grid lg:grid-cols-2 min-h-[480px]">
          {/* Image side */}
          <div className="relative overflow-hidden lg:order-2">
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover min-h-[280px] lg:min-h-0 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/20 lg:to-transparent" />
          </div>

          {/* Content side */}
          <div className="relative p-8 lg:p-12 flex flex-col justify-center lg:order-1">
            {/* Category tag */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                {article.category}
              </span>
              <span
                className="text-[#0D4F5C]/40 text-xs"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Featured
              </span>
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold text-[#0D4F5C] mb-5 leading-tight group-hover:text-[#0a3d47] transition-colors"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              {article.title}
            </h2>

            <p
              className="text-[#374151] leading-relaxed mb-8 text-base lg:text-lg"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300 }}
            >
              {article.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0D4F5C]/10 flex items-center justify-center">
                  <User size={14} className="text-[#0D4F5C]" />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold text-[#0D4F5C]"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {article.author}
                  </p>
                  <p
                    className="text-xs text-[#0D4F5C]/50"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {article.authorRole}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[#0D4F5C]/50">
                <Clock size={14} />
                <span
                  className="text-sm"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {article.readTime} min read
                </span>
              </div>
              <span
                className="text-sm text-[#0D4F5C]/40"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {article.date}
              </span>
            </div>

            <button
              className="cta-button inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#F7F3EE] transition-all duration-200 self-start hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#0D4F5C', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Read Article
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
