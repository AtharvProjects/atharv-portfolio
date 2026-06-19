import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';
import { AnimatedLetter } from './animations/AnimatedLetter';

const BIO_TEXT = "Currently in my final year of B-Tech in Computer Science Engineering with specialization in IoT, Cyber Security and Blockchain. Over the past four years, I have built tamper-proof voting systems on Ethereum, conversational AI platforms for rural healthcare using Twilio and LLMs, and pharmacy management systems that automate real-world operations. My work has been recognized at The Economics Times GenAI Hackathon, IBM RAG and Agentic AI certifications, and the OpenAI X NXT Wave Buildathon. I am driven by a relentless passion to architect systems that are secure, scalable, and genuinely impactful.";

export function About() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start 0.9', 'end 0.3'],
  });

  const chars = BIO_TEXT.split('');

  return (
    <section id="about" className="bg-black py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl p-8 sm:p-10 md:p-14 lg:p-20">
          {/* Label */}
          <p className="text-primary text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-8 sm:mb-10 text-center animate-fade-rise">
            Computer Science Engineer
          </p>

          {/* Mixed Typography Heading */}
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-3xl mx-auto leading-[1.05] sm:leading-[1] mb-14 sm:mb-18 text-center">
            <WordsPullUpMultiStyle
              containerClassName="justify-center"
              segments={[
                { text: 'I am Atharv Mane,', className: 'font-normal' },
                { text: 'a full-stack developer & blockchain architect.', className: 'italic font-serif' },
                { text: 'I build decentralized systems, AI-powered applications, and production-grade software.', className: 'font-normal' },
              ]}
            />
          </div>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-primary/20 mx-auto mb-14 sm:mb-18" />

          {/* Scroll-linked Character Opacity Bio */}
          <div ref={scrollRef} className="max-w-2xl mx-auto text-center">
            <p className="text-sm sm:text-base md:text-lg leading-[1.8] sm:leading-[1.9]" style={{ color: '#DEDBC8' }}>
              {chars.map((char, i) => (
                <AnimatedLetter
                  key={i}
                  char={char}
                  index={i}
                  totalChars={chars.length}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
