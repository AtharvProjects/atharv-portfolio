import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Trophy } from 'lucide-react';
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';

const TIMELINE = [
  {
    year: '2021 – 2025',
    title: 'B-Tech — Computer Science Engineering',
    subtitle: 'IoT, Cyber Security & Blockchain',
    org: 'Annasaheb Dange College of Engineering and Technology, Ashta',
    detail: 'CGPA: 8.0 / 10.0',
    icon: 'grad',
  },
  {
    year: '2026',
    title: 'The Economics Times GenAI Hackathon',
    subtitle: 'Finalist',
    org: 'The Economics Times',
    detail: 'Selected as finalist in national-level GenAI competition',
    icon: 'trophy',
  },
  {
    year: '2026',
    title: 'IBM RAG and Agentic AI Professional Certificate',
    subtitle: 'Coursera',
    org: 'IBM',
    detail: 'Professional certification in RAG and Agentic AI systems',
    icon: 'award',
  },
  {
    year: '2025',
    title: 'National Level Hackathon Participant',
    subtitle: 'OpenAI X NXT Wave Buildathon',
    org: 'OpenAI & NXT Wave',
    detail: 'Built production-quality AI solutions in fast-paced environment',
    icon: 'trophy',
  },
];

function TimelineItem({ item, index }: { item: typeof TIMELINE[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const Icon = item.icon === 'grad' ? GraduationCap : item.icon === 'trophy' ? Trophy : Award;

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-5 sm:gap-6 pb-12 sm:pb-14"
      initial={{ x: -30, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Timeline line */}
      {index < TIMELINE.length - 1 && (
        <div className="absolute left-[19px] sm:left-[23px] top-14 bottom-0 w-[1px] bg-white/8" />
      )}

      {/* Icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#181818] flex items-center justify-center flex-shrink-0 border border-white/[0.06]">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <p className="text-primary/40 text-[10px] sm:text-xs font-medium tracking-wider uppercase mb-1.5">{item.year}</p>
        <h3 className="text-sm sm:text-base font-semibold mb-1.5" style={{ color: '#E1E0CC' }}>
          {item.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-1">{item.subtitle}</p>
        <p className="text-gray-600 text-[11px] sm:text-xs">{item.org} — {item.detail}</p>
      </div>
    </motion.div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-black py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle
              containerClassName="justify-start"
              segments={[
                { text: 'Education &', className: 'font-normal' },
                { text: 'achievements.', className: 'italic font-serif' },
              ]}
            />
          </div>
          <div className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle
              containerClassName="justify-start"
              delay={0.4}
              segments={[
                { text: 'The journey so far.', className: 'font-normal text-gray-500' },
              ]}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="ml-1">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
