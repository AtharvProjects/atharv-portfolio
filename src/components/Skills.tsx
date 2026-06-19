import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Code2 } from 'lucide-react';
import { WordsPullUpMultiStyle } from './animations/WordsPullUpMultiStyle';

interface FeatureCard {
  number: string;
  title: string;
  icon: string;
  items: string[];
  tools?: string[];
  isVideo?: boolean;
  videoUrl?: string;
  videoText?: string;
}

const FEATURES: FeatureCard[] = [
  {
    number: '',
    title: '',
    icon: '',
    items: [],
    isVideo: true,
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    videoText: 'Building the future.',
  },
  {
    number: '01',
    title: 'Blockchain & Web3.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Smart contract development with Solidity',
      'Ethereum DApp architecture',
      'Web3.js & MetaMask integration',
      'Decentralized system design',
      'Tokenomics & ERC Standards',
      'Gas Optimization & Security Auditing'
    ],
    tools: ['Solidity', 'Hardhat', 'Ethers.js', 'IPFS']
  },
  {
    number: '02',
    title: 'AI & Machine Learning.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'LLM integration & RAG pipelines',
      'NLP & conversational AI systems',
      'LangChain & HuggingFace workflows',
      'Custom model fine-tuning',
      'Computer Vision & OCR systems',
      'Automated data pipelines'
    ],
    tools: ['Python', 'PyTorch', 'TensorFlow', 'OpenAI']
  },
  {
    number: '03',
    title: 'Full-Stack Development.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'React.js & Node.js applications',
      'FastAPI & Flask backends',
      'Supabase & database architecture',
      'RESTful APIs & GraphQL',
      'Scalable Cloud Architecture',
      'Responsive UI/UX Engineering'
    ],
    tools: ['TypeScript', 'React', 'Next.js', 'PostgreSQL']
  },
];

function FeatureCardComponent({ card, index }: { card: FeatureCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  if (card.isVideo) {
    return (
      <motion.div
        ref={ref}
        className="relative rounded-2xl overflow-hidden min-h-[300px] h-full"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
        transition={{
          duration: 0.7,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={card.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-6 left-6">
          <p className="text-base font-medium mb-1" style={{ color: '#E1E0CC' }}>
            {card.videoText}
          </p>
          <p className="text-white/40 text-xs">Creative showcase reel</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full border border-white/[0.04]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <img
            src={card.icon}
            alt=""
            className="w-12 h-12 rounded-xl object-cover"
          />
          <span className="text-gray-600 text-xs font-mono">{card.number}</span>
        </div>
        
        <h3 className="text-base sm:text-lg font-semibold mb-5" style={{ color: '#E1E0CC' }}>
          {card.title}
        </h3>
        
        <div className="space-y-3.5">
          {card.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-gray-400 text-xs leading-relaxed">{item}</span>
            </div>
          ))}
        </div>

        {card.tools && (
          <div className="mt-8 pt-5 border-t border-white/[0.04]">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-3.5 h-3.5 text-gray-500" />
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Core Tech</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {card.tools.map(tool => (
                <span key={tool} className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] text-gray-300 border border-white/[0.05]">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative min-h-screen bg-black py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.12] pointer-events-none" />

      <div className="relative z-10 max-w-[85rem] mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle
              containerClassName="justify-start"
              segments={[
                { text: 'Studio-grade skills for building the future.', className: 'font-normal' },
              ]}
            />
          </div>
          <div className="mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <WordsPullUpMultiStyle
              containerClassName="justify-start"
              delay={0.5}
              segments={[
                { text: 'Blockchain • AI/ML • Full-Stack.', className: 'font-normal text-gray-500' },
              ]}
            />
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {FEATURES.map((card, i) => (
            <FeatureCardComponent key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
