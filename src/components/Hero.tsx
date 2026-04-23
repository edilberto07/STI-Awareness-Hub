import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: '#0D4F5C' }}>
      {/* Mesh gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #2a9d8f 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #e9c46a 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #264653 0%, transparent 70%)' }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-slide-up stagger-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <Sparkles size={14} className="text-[#e9c46a]" />
            <span
              className="text-white/80 text-sm font-medium"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Trusted Health Education
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-slide-up stagger-2 text-[#F7F3EE] leading-tight mb-6"
            style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
            }}
          >
            Real information.
            <br />
            <span style={{ color: '#2a9d8f' }}>No stigma.</span>
          </h1>

          {/* Sub headline */}
          <p
            className="animate-fade-slide-up stagger-3 text-[#F7F3EE]/70 text-lg lg:text-xl mb-10 max-w-xl leading-relaxed"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300 }}
          >
            Evidence-based articles, prevention guides, and resources about sexual health — written with warmth, clarity, and respect.
          </p>

          {/* CTA */}
          <div className="animate-fade-slide-up stagger-4 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onExplore}
              className="cta-button inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[#0D4F5C] transition-all duration-200 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-0.5"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                backgroundColor: '#F7F3EE',
              }}
            >
              Explore Articles
              <ArrowRight size={18} />
            </button>
            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white border border-white/25 hover:bg-white/10 transition-all duration-200"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Prevention Tips
            </button>
          </div>

          {/* Stats */}
          <div className="animate-fade-slide-up stagger-5 flex flex-wrap gap-8 mt-16">
            {[
              { value: '6+', label: 'In-depth Articles' },
              { value: '4', label: 'Health Topics' },
              { value: '100%', label: 'Stigma-free' },
            ].map(stat => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-bold text-[#F7F3EE]"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-[#F7F3EE]/50 mt-1"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, #F7F3EE)' }}
      />
    </section>
  );
}
