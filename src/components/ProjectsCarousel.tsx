import { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'E-Voting System',
    subtitle: 'Secure Digital Voting',
    desc: 'A secure, unhackable voting platform that ensures every vote is counted accurately while protecting voter identity. Replaces manual voting with a 100% transparent digital system.',
    bg: '#F4845F',
    panel: '#F79B7F',
    tech: ['Blockchain', 'Web Security', 'React.js', 'Smart Contracts'],
    link: 'https://github.com/AtharvProjects/Swaraajya-Voting',
    image: '/images/evoting-mockup.png',
  },
  {
    title: 'Arogyavani AI',
    subtitle: 'Voice AI for Healthcare',
    desc: 'A smart voice assistant that brings essential healthcare advice to rural areas through simple phone calls. It speaks naturally to users in their local language, breaking digital barriers.',
    bg: '#6BBF7A',
    panel: '#85CC92',
    tech: ['AI Voice Bots', 'Twilio', 'Natural Language AI', 'FastAPI'],
    link: 'https://github.com/AtharvProjects/arogyavaani-letest',
    image: '/images/arogyavani-mockup.png',
  },
  {
    title: 'Pharmacy Manager',
    subtitle: 'Business Automation System',
    desc: 'A complete management system that saves hours of manual work for pharmacies. It automates billing, tracks inventory in real-time, and sends alerts before medicines expire.',
    bg: '#E882B4',
    panel: '#ED9DC4',
    tech: ['Python Automation', 'Databases', 'Desktop Apps'],
    link: 'https://github.com/AtharvProjects/medical_letest',
    image: '/images/ss3.png',
  },
  {
    title: 'Portfolio Site',
    subtitle: 'Modern Web Experience',
    desc: 'A highly engaging, interactive website designed to grab attention. Features smooth animations and a premium feel to showcase work and convert visitors into clients.',
    bg: '#6EB5FF',
    panel: '#8DC4FF',
    tech: ['React UI/UX', 'Framer Motion', 'Responsive Design'],
    link: 'https://github.com/AtharvProjects',
    image: '/images/portfolio-mockup.png',
  },
  {
    title: 'HIRKANI',
    subtitle: 'Maternal Health Assistant',
    desc: 'A smart app that helps expecting mothers easily check if their food is safe. By simply scanning a barcode, it instantly analyzes the ingredients for pregnancy safety.',
    bg: '#B8A1D3', // Purple theme
    panel: '#C9B6E1',
    tech: ['AI Vision', 'Mobile Apps', 'Data Analysis', 'Python'],
    link: 'https://github.com/AtharvProjects/hirkani-app',
    image: '/images/ss2.png',
  },
  {
    title: 'TMS Pro',
    subtitle: 'Transport Dashboard',
    desc: 'An all-in-one business dashboard for transport companies. It simplifies operations by easily tracking vehicle trips, managing drivers, and handling financial settlements in one place.',
    bg: '#9D9DD8',
    panel: '#C4C4F0',
    tech: ['React Dashboards', 'TypeScript', 'Business Logic'],
    link: 'https://github.com/AtharvProjects/transport-pro',
    image: '/images/ss1.png',
  },
];

export function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const navigate = useCallback(
    (dir: 'next' | 'prev') => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((prev) =>
        dir === 'next' ? (prev + 1) % PROJECTS.length : (prev + PROJECTS.length - 1) % PROJECTS.length
      );
      setTimeout(() => setIsAnimating(false), 650);
    },
    [isAnimating]
  );

  const roles = {
    center: activeIndex,
    left: (activeIndex + PROJECTS.length - 1) % PROJECTS.length,
    right: (activeIndex + 1) % PROJECTS.length,
    // Note: back is not explicitly used below since all non-center, non-left, non-right get the back styling by default
  };

  const getStyle = (idx: number): React.CSSProperties => {
    const transition = 'all 650ms cubic-bezier(0.4,0,0.2,1)';
    const base: React.CSSProperties = {
      position: 'absolute',
      transition,
      willChange: 'transform, filter, opacity',
    };

    if (idx === roles.center) {
      return {
        ...base,
        left: '50%',
        bottom: isMobile ? '25%' : '15%',
        height: isMobile ? '40%' : '55%',
        aspectRatio: '3 / 4',
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 20,
      };
    }
    if (idx === roles.left) {
      return {
        ...base,
        left: isMobile ? '8%' : '18%',
        bottom: isMobile ? '30%' : '20%',
        height: isMobile ? '22%' : '35%',
        aspectRatio: '3 / 4',
        transform: 'translateX(-50%) scale(0.95)',
        filter: 'blur(3px)',
        opacity: 0.7,
        zIndex: 10,
      };
    }
    if (idx === roles.right) {
      return {
        ...base,
        left: isMobile ? '92%' : '82%',
        bottom: isMobile ? '30%' : '20%',
        height: isMobile ? '22%' : '35%',
        aspectRatio: '3 / 4',
        transform: 'translateX(-50%) scale(0.95)',
        filter: 'blur(3px)',
        opacity: 0.7,
        zIndex: 10,
      };
    }
    // back
    return {
      ...base,
      left: '50%',
      bottom: isMobile ? '33%' : '22%',
      height: isMobile ? '18%' : '28%',
      aspectRatio: '3 / 4',
      transform: 'translateX(-50%) scale(0.9)',
      filter: 'blur(5px)',
      opacity: 0.4,
      zIndex: 5,
    };
  };

  const activeProject = PROJECTS[activeIndex];

  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: activeProject.bg,
        transition: 'background-color 650ms cubic-bezier(0.4,0,0.2,1)',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="relative w-full" style={{ height: '100vh', overflow: 'hidden' }}>
        {/* Grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none grain-overlay"
          style={{ zIndex: 50, opacity: 0.3 }}
        />

        {/* Giant ghost text */}
        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none"
          style={{
            zIndex: 2,
            top: '12%',
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(50px, 18vw, 280px)',
            fontWeight: 900,
            color: 'white',
            opacity: 1, // Changed from 0.12 to 1 so it's solid white
            lineHeight: 1,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          PROJECTS
        </div>

        {/* Project Cards */}
        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          {PROJECTS.map((project, idx) => (
            <div key={idx} style={getStyle(idx)}>
              <div
                className="w-full h-full rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col overflow-hidden relative group"
                style={{
                  backgroundColor: project.panel,
                  boxShadow: idx === roles.center ? '0 25px 80px rgba(0,0,0,0.25)' : 'none',
                }}
              >
                {/* Image Section */}
                <div className="w-full h-[55%] sm:h-[60%] rounded-xl sm:rounded-2xl overflow-hidden relative flex-shrink-0 bg-black/5">
                  {/* Blurred background image to fill the empty space */}
                  <img 
                    src={project.image} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-50 scale-125" 
                  />
                  {/* Actual image contained neatly */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="relative w-full h-full object-contain p-3 transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
                
                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-between pt-3 sm:pt-4 px-1 sm:px-2">
                  <div>
                    <p className="text-black/50 text-[8px] sm:text-[10px] font-semibold uppercase tracking-widest mb-1 sm:mb-1.5 line-clamp-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-black text-sm sm:text-lg md:text-xl font-bold leading-tight line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 mt-1 sm:mt-2">
                      {project.tech.slice(0, isMobile ? 2 : 3).map((t) => (
                        <span
                          key={t}
                          className="text-[8px] sm:text-[9px] px-2 py-0.5 rounded-full bg-black/10 text-black/70 font-medium whitespace-nowrap"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top-left brand */}
        <div className="absolute top-6 left-5 sm:left-8" style={{ zIndex: 60 }}>
          <p className="text-[10px] sm:text-xs font-semibold uppercase text-white/90" style={{ letterSpacing: '0.18em' }}>
            ATHARV MANE
          </p>
        </div>

        {/* Bottom info bar with glass backdrop */}
        <div
          className="absolute bottom-0 left-0 right-0 px-5 sm:px-10 md:px-16 pb-6 sm:pb-10 pt-16 sm:pt-24"
          style={{
            zIndex: 55,
            background: `linear-gradient(to top, ${activeProject.bg} 0%, ${activeProject.bg}ee 40%, transparent 100%)`,
          }}
        >
          <div className="flex items-end justify-between gap-4">
            {/* Left: title + nav */}
            <div className="max-w-md">
              <p className="text-white/50 text-[10px] sm:text-xs font-medium uppercase tracking-widest mb-1">
                {activeProject.subtitle}
              </p>
              <h2
                className="font-bold text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3 leading-tight"
              >
                {activeProject.title}
              </h2>
              <p className="hidden sm:block text-white/80 text-xs sm:text-sm leading-relaxed mb-5">
                {activeProject.desc}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => navigate('prev')}
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-white/80 flex items-center justify-center text-white bg-transparent hover:bg-white/15 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <ArrowLeft size={isMobile ? 18 : 22} strokeWidth={2.25} />
                </button>
                <button
                  onClick={() => navigate('next')}
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-white/80 flex items-center justify-center text-white bg-transparent hover:bg-white/15 hover:scale-105 transition-all duration-200 cursor-pointer"
                >
                  <ArrowRight size={isMobile ? 18 : 22} strokeWidth={2.25} />
                </button>
              </div>
            </div>

            {/* Right: VIEW CODE link */}
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 no-underline hover:opacity-80 transition-opacity duration-200"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(18px, 3.5vw, 48px)',
                fontWeight: 400,
                color: 'white',
                opacity: 0.9,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              VIEW CODE
              <ExternalLink className="w-4 h-4 sm:w-6 sm:h-6" strokeWidth={2.25} />
            </a>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 pb-3 sm:pb-4" style={{ zIndex: 60 }}>
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(idx);
                  setTimeout(() => setIsAnimating(false), 650);
                }
              }}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
