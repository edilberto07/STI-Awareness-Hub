import { ExternalLink, Heart, Twitter, Instagram, Facebook, Mail, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer style={{ backgroundColor: '#0D4F5C' }} className="text-[#F7F3EE]">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3
                className="text-3xl font-bold mb-3"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                Stay informed.
              </h3>
              <p
                className="text-[#F7F3EE]/60 text-base"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                Get the latest articles, prevention tips, and health resources delivered to your inbox — no spam, ever.
              </p>
            </div>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F7F3EE]/40" size={16} />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-white/15 text-[#F7F3EE] placeholder-[#F7F3EE]/40 rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-white/30 transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  />
                </div>
                <button
                  type="submit"
                  className="cta-button flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#0D4F5C] text-sm transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: '#F7F3EE', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  Subscribe
                  <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3 bg-white/10 rounded-xl px-6 py-4">
                <Heart size={18} className="text-rose-400" fill="currentColor" />
                <p
                  className="text-[#F7F3EE] font-medium text-sm"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  You're subscribed! Thanks for joining our community.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#F7F3EE] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#0D4F5C]" />
              </div>
              <span
                className="font-bold text-xl text-[#F7F3EE]"
                style={{ fontFamily: 'Fraunces, serif' }}
              >
                HealthWise
              </span>
            </div>
            <p
              className="text-[#F7F3EE]/50 text-sm leading-relaxed mb-5"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Trusted sexual health education for everyone. No stigma, just facts.
            </p>
            <div className="flex gap-3">
              {[Twitter, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider text-[#F7F3EE]/50 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Topics
            </h4>
            <ul className="space-y-3">
              {['HIV', 'Gonorrhea', 'Syphilis', 'Prevention', 'Resources'].map(topic => (
                <li key={topic}>
                  <a
                    href="#"
                    className="text-sm text-[#F7F3EE]/70 hover:text-[#F7F3EE] transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {topic}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider text-[#F7F3EE]/50 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              External Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'CDC — STI Info', url: 'https://www.cdc.gov/std' },
                { name: 'WHO — STI Fact Sheets', url: 'https://www.who.int/news-room/fact-sheets' },
                { name: 'GetTested.cdc.gov', url: 'https://gettested.cdc.gov' },
                { name: 'Planned Parenthood', url: 'https://www.plannedparenthood.org' },
                { name: 'HRSA HIV/AIDS Programs', url: 'https://hab.hrsa.gov' },
              ].map(link => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#F7F3EE]/70 hover:text-[#F7F3EE] transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {link.name}
                    <ExternalLink size={11} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider text-[#F7F3EE]/50 mb-4"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              About
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Editorial Policy', 'Privacy Policy', 'Terms of Use', 'Contact'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-[#F7F3EE]/70 hover:text-[#F7F3EE] transition-colors"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p
              className="text-xs text-[#F7F3EE]/40 max-w-2xl leading-relaxed"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              <strong className="text-[#F7F3EE]/60">Medical Disclaimer:</strong> The content on HealthWise is for informational and educational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified health provider with any questions you may have regarding a medical condition.
            </p>
            <p
              className="text-xs text-[#F7F3EE]/30 flex-shrink-0"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              © 2025 HealthWise
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
