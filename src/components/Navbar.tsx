import { useState, useEffect } from 'react';
import { Search, X, Menu, ChevronRight } from 'lucide-react';
import { Category, articles, CATEGORY_COLORS } from '@/data/articles';

interface NavProps {
  activeCategory: Category | 'All';
  onCategoryChange: (cat: Category | 'All') => void;
  onArticleSelect: (slug: string) => void;
}

const NAV_LINKS: { label: string; category: Category | 'All' }[] = [
  { label: 'All', category: 'All' },
  { label: 'HIV', category: 'HIV' },
  { label: 'Gonorrhea', category: 'Gonorrhea' },
  { label: 'Syphilis', category: 'Syphilis' },
  { label: 'Prevention', category: 'Prevention' },
  { label: 'Resources', category: 'Resources' },
];

export default function Navbar({ activeCategory, onCategoryChange, onArticleSelect }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredArticles = searchQuery.length > 1
    ? articles.filter(a =>
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleArticleClick = (slug: string) => {
    onArticleSelect(slug);
    setSearchOpen(false);
    setSearchQuery('');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'frosted-nav shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => { onCategoryChange('All'); onArticleSelect(''); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#0D4F5C] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#F7F3EE]" />
              </div>
              <span
                className="font-fraunces text-xl font-bold text-[#0D4F5C] tracking-tight"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                HealthWise
              </span>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.category}
                  onClick={() => { onCategoryChange(link.category); onArticleSelect(''); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 font-jakarta ${
                    activeCategory === link.category
                      ? 'bg-[#0D4F5C] text-[#F7F3EE]'
                      : 'text-[#0D4F5C]/70 hover:text-[#0D4F5C] hover:bg-[#0D4F5C]/8'
                  }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#0D4F5C]/10 transition-colors text-[#0D4F5C]"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#0D4F5C]/10 transition-colors text-[#0D4F5C]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F7F3EE] border-t border-[#0D4F5C]/10 px-6 py-4 space-y-1 animate-fade-slide-up">
            {NAV_LINKS.map(link => (
              <button
                key={link.category}
                onClick={() => {
                  onCategoryChange(link.category);
                  onArticleSelect('');
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeCategory === link.category
                    ? 'bg-[#0D4F5C] text-[#F7F3EE]'
                    : 'text-[#0D4F5C] hover:bg-[#0D4F5C]/8'
                }`}
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Search Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] search-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) { setSearchOpen(false); setSearchQuery(''); } }}
        >
          <div className="w-full max-w-2xl mx-auto px-4 mt-24">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F7F3EE]/60" size={20} />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search articles, topics..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 text-[#F7F3EE] placeholder-[#F7F3EE]/50 rounded-2xl pl-12 pr-6 py-4 text-lg outline-none focus:border-white/40 transition-colors"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                />
              </div>
              <button
                onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/20 text-[#F7F3EE] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {filteredArticles.length > 0 && (
              <div className="mt-4 bg-white/10 backdrop-blur rounded-2xl overflow-hidden border border-white/15 animate-search-expand">
                {filteredArticles.map((article, i) => {
                  const colors = CATEGORY_COLORS[article.category];
                  return (
                    <button
                      key={article.id}
                      onClick={() => handleArticleClick(article.slug)}
                      className={`w-full flex items-center gap-4 px-5 py-4 hover:bg-white/10 transition-colors text-left ${
                        i < filteredArticles.length - 1 ? 'border-b border-white/10' : ''
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${colors.dot}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[#F7F3EE] font-medium text-sm truncate" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{article.title}</p>
                        <p className="text-[#F7F3EE]/50 text-xs mt-0.5">{article.category} · {article.readTime} min read</p>
                      </div>
                      <ChevronRight size={16} className="text-[#F7F3EE]/40 flex-shrink-0" />
                    </button>
                  );
                })}
              </div>
            )}

            {searchQuery.length > 1 && filteredArticles.length === 0 && (
              <div className="mt-4 bg-white/10 rounded-2xl px-5 py-6 text-center text-[#F7F3EE]/60" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                No articles found for "{searchQuery}"
              </div>
            )}

            {searchQuery.length === 0 && (
              <div className="mt-6 text-center text-[#F7F3EE]/40 text-sm" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Start typing to search articles...
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
