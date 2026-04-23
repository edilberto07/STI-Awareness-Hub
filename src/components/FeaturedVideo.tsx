import React from 'react';
import { Play, BookOpen } from 'lucide-react';
import YouTubeVideo from './YouTubeVideo';

interface FeaturedVideoProps {
  onExplore?: () => void;
}

export default function FeaturedVideo({ onExplore }: FeaturedVideoProps) {
  return (
    <section className="py-8 lg:py-16 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-8 animate-fade-slide-up">
        <p
          className="text-sm font-semibold tracking-widest uppercase text-[#0D4F5C]/50"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Educational Resources
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Video */}
        <div className="animate-fade-slide-up stagger-1">
          <YouTubeVideo
            videoId="JY1qi3bf-Os"
            title="HIV Basics: Testing, Prevention, and Living with HIV"
            description="Learn about HIV transmission, testing, prevention, and living well with modern treatment options."
          />
        </div>

        {/* Content */}
        <div className="animate-fade-slide-up stagger-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center">
              <Play size={20} className="text-rose-700 ml-0.5" fill="currentColor" />
            </div>
            <h3
              className="text-sm font-semibold tracking-widest uppercase text-[#0D4F5C]/50"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Video Overview
            </h3>
          </div>

          <h2
            className="text-3xl lg:text-4xl font-bold text-[#0D4F5C] mb-5 leading-tight"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Education Through Video
          </h2>

          <p
            className="text-base text-[#374151] mb-6 leading-relaxed"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Watch expert-created videos from healthcare professionals to learn more about STI prevention, testing, and treatment. Video content is complementary to our comprehensive written articles.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'Learn from medical professionals',
              'Understand prevention strategies',
              'Get clear information about testing',
              'Explore treatment options',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-teal-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className="text-[#374151]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={onExplore}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D4F5C] text-white font-medium hover:bg-[#0a3d47] transition-colors"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            <BookOpen size={18} />
            Explore All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
