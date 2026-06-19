import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { WordsPullUp } from './animations/WordsPullUp';
import { useTypewriter } from '../hooks/useTypewriter';
import { ThunderRain } from './animations/ThunderRain';

const NAV_ITEMS = ['About', 'Projects', 'Capabilities', 'Skills', 'Experience', 'Labs', 'Contact'];

export function Hero() {
  const { displayed, done } = useTypewriter(
    'Full-Stack Developer • Blockchain Architect • AI Engineer',
    38,
    800
  );
  const [pillsVisible, setPillsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPillsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="h-screen p-3 sm:p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Thunder & Rain Animation Overlay */}
        <ThunderRain />

        {/* Noise Overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none z-[1]" />

        {/* Gradient Overlay - stronger at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-[2]" />

        {/* Navbar */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-[10]">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2.5 md:px-8 md:py-3 flex items-center gap-4 sm:gap-6 md:gap-12 lg:gap-14">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200 whitespace-nowrap"
                style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E1E0CC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Content - Bottom Aligned with proper spacing */}
        <div className="absolute bottom-0 left-0 right-0 z-[5] px-5 sm:px-8 md:px-10 pb-6 sm:pb-8 md:pb-10">
          {/* Mobile: stacked layout, Desktop: side by side */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
            {/* Giant Name - Left */}
            <div className="flex-shrink-0">
              <WordsPullUp
                text="ATHARV"
                showAsterisk={true}
                className="text-[22vw] sm:text-[18vw] md:text-[15vw] lg:text-[14vw] xl:text-[13vw] font-medium leading-[0.85] tracking-[-0.07em]"
              />
            </div>

            {/* Right Column - Typewriter + Description + CTA */}
            <div className="flex flex-col gap-4 sm:gap-5 md:max-w-sm lg:max-w-md pb-1">
              {/* Typewriter tagline */}
              <div
                className="text-xs sm:text-sm md:text-base min-h-[20px] sm:min-h-[28px]"
                style={{ color: '#E1E0CC', lineHeight: 1.4 }}
              >
                <p>
                  {displayed}
                  {!done && (
                    <span className="inline-block w-[2px] h-[1.1em] bg-[#E1E0CC] align-middle ml-[2px] animate-blink" />
                  )}
                </p>
              </div>

              {/* Description */}
              <motion.p
                className="text-primary/70 text-[11px] sm:text-sm md:text-[15px] leading-[1.5]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Computer Science Engineer specializing in Blockchain, AI/ML, and Full-Stack Development. Building decentralized systems and AI-powered applications that solve real-world problems.
              </motion.p>

              {/* Pill Buttons */}
              <motion.div
                className="flex flex-wrap gap-2"
                style={{
                  opacity: pillsVisible ? 1 : 0,
                  transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
              >
                {['View Projects', 'Download CV'].map((label) => (
                  <a
                    key={label}
                    href={label === 'View Projects' ? '#projects' : '/Atharv_Anil_Mane_CV.pdf'}
                    download={label === 'Download CV' ? true : undefined}
                    className="inline-flex items-center justify-center bg-white/10 text-[#E1E0CC] border border-white/15 rounded-full text-[11px] sm:text-[13px] px-4 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap hover:bg-primary hover:text-black transition-colors duration-200 backdrop-blur-sm"
                  >
                    {label}
                  </a>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-2 hover:gap-3 bg-primary rounded-full text-black font-medium text-sm sm:text-base pl-5 pr-1.5 py-1.5 w-fit transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <span>Let's Connect</span>
                <span className="bg-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ArrowRight className="w-4 h-4" style={{ color: '#E1E0CC' }} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
