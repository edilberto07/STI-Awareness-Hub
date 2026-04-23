import { ArrowRight } from 'lucide-react';
import { TOPIC_CARDS, Category } from '@/data/articles';

interface TopicCardsProps {
  onCategoryChange: (cat: Category | 'All') => void;
}

export default function TopicCards({ onCategoryChange }: TopicCardsProps) {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10 animate-fade-slide-up">
        <p
          className="text-sm font-semibold tracking-widest uppercase text-[#0D4F5C]/50 mb-3"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          Explore by Topic
        </p>
        <h2
          className="text-3xl lg:text-4xl font-bold text-[#0D4F5C]"
          style={{ fontFamily: 'Fraunces, serif' }}
        >
          What do you want to learn about?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TOPIC_CARDS.map((topic, i) => (
          <button
            key={topic.id}
            onClick={() => onCategoryChange(topic.category)}
            className={`group relative overflow-hidden rounded-3xl text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl animate-fade-slide-up stagger-${i + 1}`}
            style={{
              backgroundColor: topic.color,
              minHeight: '240px',
            }}
          >
            {/* Background image with tint */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <img
                src={topic.image}
                alt={topic.title}
                className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${topic.color}ee 0%, ${topic.color}99 100%)` }} />
            </div>

            <div className="relative z-10 p-7 flex flex-col h-full" style={{ minHeight: '240px' }}>
              <div
                className="text-xs font-semibold tracking-wider uppercase mb-auto"
                style={{ color: topic.textColor, fontFamily: 'Plus Jakarta Sans, sans-serif', opacity: 0.6 }}
              >
                Health Topic
              </div>

              <div className="mt-8">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: topic.textColor, fontFamily: 'Fraunces, serif' }}
                >
                  {topic.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: topic.textColor, fontFamily: 'Plus Jakarta Sans, sans-serif', opacity: 0.75 }}
                >
                  {topic.description}
                </p>
                <div
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200"
                  style={{ color: topic.textColor, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Explore
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
