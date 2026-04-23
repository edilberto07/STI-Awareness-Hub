import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Clock, User, ChevronDown, ChevronUp, Shield } from 'lucide-react';
import { Article, articles as allArticles, CATEGORY_COLORS } from '@/data/articles';
import YouTubeVideo from './YouTubeVideo';

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
  onRelatedClick: (slug: string) => void;
}

function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(pct, 100));
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className="reading-progress-bar"
      style={{ width: `${progress}%` }}
    />
  );
}

function HealthTipsSidebar({ tips, category }: { tips: string[]; category: string }) {
  const [expanded, setExpanded] = useState(false);
  const colors = CATEGORY_COLORS[category as keyof typeof CATEGORY_COLORS];

  return (
    <div
      className="rounded-2xl overflow-hidden border"
      style={{ borderColor: 'rgba(13,79,92,0.12)' }}
    >
      <div className={`px-6 py-5 ${colors?.bg ?? 'bg-teal-50'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield size={18} className={colors?.text ?? 'text-teal-700'} />
            <h3
              className={`font-bold text-sm ${colors?.text ?? 'text-teal-700'}`}
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Quick Prevention Tips
            </h3>
          </div>
          {/* Mobile toggle */}
          <button
            className={`md:hidden ${colors?.text ?? 'text-teal-700'}`}
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle tips"
          >
            {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>

      <div className={`${!expanded ? 'hidden md:block' : 'block'} bg-white`}>
        <ul className="p-5 space-y-3">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${colors?.bg ?? 'bg-teal-50'}`}
              >
                <span className={`text-xs font-bold ${colors?.text ?? 'text-teal-700'}`}>
                  {i + 1}
                </span>
              </div>
              <p
                className="text-sm text-[#374151] leading-relaxed"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {tip}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function VideoPlayer({ videoId, videoTitle }: { videoId?: string; videoTitle?: string }) {
  if (!videoId) return null;
  
  return (
    <div className="my-10 rounded-2xl overflow-hidden">
      <YouTubeVideo 
        videoId={videoId} 
        title={videoTitle || 'Related Video'}
        description="Watch this educational video to learn more about this topic."
        className="w-full"
      />
    </div>
  );
}

export default function ArticlePage({ article, onBack, onRelatedClick }: ArticlePageProps) {
  const colors = CATEGORY_COLORS[article.category];
  const relatedArticles = allArticles.filter(a => article.relatedIds.includes(a.id)).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [article.slug]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F3EE' }}>
      <ReadingProgressBar />

      {/* Hero image */}
      <div className="relative w-full h-[50vh] lg:h-[65vh] overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EE] via-black/20 to-black/30" />

        {/* Back button overlay */}
        <div className="absolute top-24 left-6 lg:left-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors text-sm font-medium"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Article header card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 mb-8 shadow-sm">
              {/* Category + date */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                  {article.category}
                </span>
                <span
                  className="text-sm text-[#0D4F5C]/40"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {article.date}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-3xl lg:text-5xl font-bold text-[#0D4F5C] mb-6 leading-tight"
                style={{ fontFamily: 'Fraunces, serif', fontWeight: 900 }}
              >
                {article.title}
              </h1>

              {/* Excerpt */}
              <p
                className="text-lg text-[#374151] leading-relaxed mb-8 border-l-4 pl-5"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontWeight: 300,
                  borderColor: 'rgba(13,79,92,0.2)',
                }}
              >
                {article.excerpt}
              </p>

              {/* Author + meta */}
              <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-[#0D4F5C]/8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0D4F5C]/10 flex items-center justify-center">
                    <User size={18} className="text-[#0D4F5C]" />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-[#0D4F5C] text-sm"
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
              </div>
            </div>

            {/* Article body */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 mb-8 shadow-sm">
              {article.videoId && <VideoPlayer videoId={article.videoId} videoTitle={article.videoTitle} />}
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>

            {/* Mobile health tips */}
            <div className="lg:hidden mb-8">
              <HealthTipsSidebar tips={article.healthTips} category={article.category} />
            </div>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="mb-16">
                <h2
                  className="text-2xl font-bold text-[#0D4F5C] mb-6"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Related Articles
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  {relatedArticles.map(rel => {
                    const relColors = CATEGORY_COLORS[rel.category];
                    return (
                      <button
                        key={rel.id}
                        onClick={() => { onRelatedClick(rel.slug); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="article-card group flex gap-4 bg-white rounded-2xl p-4 text-left"
                      >
                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={rel.coverImage}
                            alt={rel.title}
                            className="article-card-image w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold mb-2 ${relColors.bg} ${relColors.text}`}
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {rel.category}
                          </span>
                          <p
                            className="text-sm font-bold text-[#0D4F5C] leading-tight line-clamp-2 group-hover:text-[#0a3d47] transition-colors"
                            style={{ fontFamily: 'Fraunces, serif' }}
                          >
                            {rel.title}
                          </p>
                          <p
                            className="text-xs text-[#0D4F5C]/40 mt-1"
                            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                          >
                            {rel.readTime} min read
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar — desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <HealthTipsSidebar tips={article.healthTips} category={article.category} />

              {/* Emergency resources callout */}
              <div className="bg-[#0D4F5C] rounded-2xl p-6">
                <h3
                  className="font-bold text-[#F7F3EE] mb-2"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  Need support?
                </h3>
                <p
                  className="text-sm text-[#F7F3EE]/70 mb-4 leading-relaxed"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Connect with sexual health resources and support services near you.
                </p>
                <a
                  href="https://gettested.cdc.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-3 rounded-xl bg-[#F7F3EE] text-[#0D4F5C] text-sm font-semibold hover:bg-white transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Find Testing Near You
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
