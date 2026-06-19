import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Copy, CheckCheck, ExternalLink, Code, Mail, Phone } from 'lucide-react';
import { WordsPullUp } from './animations/WordsPullUp';
import { useTypewriter } from '../hooks/useTypewriter';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { displayed, done } = useTypewriter(
    'Whether it\'s blockchain, AI, or full-stack — I\'m ready to build.',
    38,
    300
  );

  const copyEmail = async () => {
    await navigator.clipboard.writeText('atharvamane2022@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative bg-black py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8">
      {/* Subtle noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.08] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <WordsPullUp
            text="Let's build something extraordinary."
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight font-serif italic"
          />
        </div>

        {/* Typewriter sub-text */}
        <div
          className="text-sm sm:text-base md:text-lg mb-10 sm:mb-12 min-h-[30px]"
          style={{ color: 'rgba(225, 224, 204, 0.5)', lineHeight: 1.5 }}
        >
          <p>
            {displayed}
            {!done && (
              <span className="inline-block w-[2px] h-[1.1em] bg-[#E1E0CC] align-middle ml-[2px] animate-blink" />
            )}
          </p>
        </div>

        {/* Contact Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2.5 mb-12 sm:mb-14"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="mailto:atharvamane2022@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.06] text-[#E1E0CC] border border-white/10 rounded-full text-[12px] sm:text-[14px] px-5 py-2.5 whitespace-nowrap hover:bg-primary hover:text-black transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5" />
            Email me
          </a>
          <a
            href="tel:+918329284039"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.06] text-[#E1E0CC] border border-white/10 rounded-full text-[12px] sm:text-[14px] px-5 py-2.5 whitespace-nowrap hover:bg-primary hover:text-black transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            Call me
          </a>
          <a
            href="https://www.linkedin.com/in/atharv-mane-10927a3ab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.06] text-[#E1E0CC] border border-white/10 rounded-full text-[12px] sm:text-[14px] px-5 py-2.5 whitespace-nowrap hover:bg-primary hover:text-black transition-colors duration-200"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/AtharvProjects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/[0.06] text-[#E1E0CC] border border-white/10 rounded-full text-[12px] sm:text-[14px] px-5 py-2.5 whitespace-nowrap hover:bg-primary hover:text-black transition-colors duration-200"
          >
            <Code className="w-3.5 h-3.5" />
            GitHub
          </a>

          {/* Copy email pill */}
          <button
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2.5 text-[#E1E0CC] bg-transparent border border-[#E1E0CC]/20 rounded-full text-[12px] sm:text-[14px] px-5 py-2.5 whitespace-nowrap hover:bg-primary hover:text-black transition-colors duration-200 cursor-pointer"
          >
            <span className="underline underline-offset-2 decoration-[#E1E0CC]/30">
              atharvamane2022@gmail.com
            </span>
            {copied ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </motion.div>

        {/* Liquid Glass CTA */}
        <motion.a
          href="mailto:atharvamane2022@gmail.com"
          className="group liquid-glass rounded-full px-10 sm:px-14 py-4 sm:py-5 text-sm sm:text-base inline-flex items-center gap-2.5 hover:scale-[1.03] transition-transform duration-200 cursor-pointer"
          style={{ color: '#E1E0CC' }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Send a message
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Footer */}
        <div className="mt-20 sm:mt-28 pt-8 border-t border-white/[0.06]">
          <p className="text-gray-600 text-[10px] sm:text-xs">
            © 2025 Atharv Anil Mane. Designed & built with React, TypeScript & Framer Motion.
          </p>
        </div>
      </div>
    </section>
  );
}
