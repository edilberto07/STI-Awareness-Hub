import { useState, useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TopicCards from './TopicCards';
import FeaturedArticle from './FeaturedArticle';
import ArticleGrid from './ArticleGrid';
import ArticlePage from './ArticlePage';
import Footer from './Footer';
import { articles, featuredArticle, Category } from '@/data/articles';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [activeArticleSlug, setActiveArticleSlug] = useState<string>('');
  const articlesRef = useRef<HTMLDivElement>(null);

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  const activeArticle = articles.find(a => a.slug === activeArticleSlug);

  const handleExploreClick = () => {
    articlesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCategoryChange = (cat: Category | 'All') => {
    setActiveCategory(cat);
    setActiveArticleSlug('');
  };

  const handleArticleSelect = (slug: string) => {
    setActiveArticleSlug(slug);
  };

  if (activeArticle) {
    return (
      <div style={{ backgroundColor: '#F7F3EE', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <Navbar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          onArticleSelect={handleArticleSelect}
        />
        <ArticlePage
          article={activeArticle}
          onBack={() => { setActiveArticleSlug(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          onRelatedClick={handleArticleSelect}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F7F3EE', minHeight: '100vh', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onArticleSelect={handleArticleSelect}
      />
      <main>
        <Hero onExplore={handleExploreClick} />
        <TopicCards onCategoryChange={handleCategoryChange} />
        {activeCategory === 'All' && (
          <FeaturedArticle
            article={featuredArticle}
            onRead={handleArticleSelect}
          />
        )}
        <div ref={articlesRef}>
          <ArticleGrid
            articles={filteredArticles}
            activeCategory={activeCategory}
            onArticleClick={handleArticleSelect}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
