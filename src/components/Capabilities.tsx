import { FadingVideo } from './animations/FadingVideo';
import { BlurText } from './animations/BlurText';
import { Blocks, BrainCircuit, Layers } from 'lucide-react';

export function Capabilities() {
  return (
    <section id="capabilities" className="relative min-h-screen bg-black flex flex-col justify-center py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8">
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-light text-white/70 mb-4 sm:mb-6 uppercase tracking-widest">
            // Systems engineered.
          </p>
          <BlurText
            text="Decentralized Architecture. AI Integration. Full-Stack Solutions."
            className="text-3xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.1] max-w-4xl tracking-tight"
          />
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mb-10 sm:mb-12">
          <div className="liquid-glass rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-5 w-[160px] sm:w-[220px]">
            <h4 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight mb-1 sm:mb-2">15+</h4>
            <p className="text-[10px] sm:text-xs text-white/80 font-light">Technologies Mastered</p>
          </div>
          <div className="liquid-glass rounded-[1rem] sm:rounded-[1.25rem] p-4 sm:p-5 w-[160px] sm:w-[220px]">
            <h4 className="text-2xl sm:text-3xl font-serif italic text-white tracking-tight mb-1 sm:mb-2">10+</h4>
            <p className="text-[10px] sm:text-xs text-white/80 font-light">Production Projects</p>
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {/* Card 1 */}
          <div className="liquid-glass rounded-2xl p-6 sm:p-8 h-full flex flex-col border border-white/5 transition-transform hover:-translate-y-1 duration-300">
            <div className="flex items-start justify-between gap-4 mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 liquid-glass rounded-xl flex items-center justify-center flex-shrink-0">
                <Blocks className="w-6 h-6 sm:w-7 sm:h-7 text-[#E1E0CC]" />
              </div>
              <div className="flex flex-wrap justify-end gap-1.5">
                {['Smart Contracts', 'DeFi', 'Web3'].map(tag => (
                  <span key={tag} className="liquid-glass px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[11px] text-white/90 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl text-white font-medium tracking-tight mb-3">Decentralized Architecture</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                Building robust, scalable, and secure blockchain infrastructure for the next generation of the web.
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/10">
                <ul className="space-y-2.5">
                  {[
                    'Custom ERC-20 & ERC-721 tokenomics',
                    'EVM-compatible smart contract auditing',
                    'Gas-optimized DeFi protocols'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-white/60 leading-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC]/50 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="liquid-glass rounded-2xl p-6 sm:p-8 h-full flex flex-col border border-white/5 transition-transform hover:-translate-y-1 duration-300">
            <div className="flex items-start justify-between gap-4 mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 liquid-glass rounded-xl flex items-center justify-center flex-shrink-0">
                <BrainCircuit className="w-6 h-6 sm:w-7 sm:h-7 text-[#E1E0CC]" />
              </div>
              <div className="flex flex-wrap justify-end gap-1.5">
                {['LLMs', 'RAG', 'Agents'].map(tag => (
                  <span key={tag} className="liquid-glass px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[11px] text-white/90 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl text-white font-medium tracking-tight mb-3">AI Integration</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                Embedding advanced artificial intelligence and large language models into real-world applications.
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/10">
                <ul className="space-y-2.5">
                  {[
                    'Conversational AI for healthcare workflows',
                    'RAG pipelines for dynamic document querying',
                    'Automated analysis & computer vision'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-white/60 leading-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC]/50 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="liquid-glass rounded-2xl p-6 sm:p-8 h-full flex flex-col border border-white/5 transition-transform hover:-translate-y-1 duration-300">
            <div className="flex items-start justify-between gap-4 mb-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 liquid-glass rounded-xl flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-[#E1E0CC]" />
              </div>
              <div className="flex flex-wrap justify-end gap-1.5">
                {['React', 'Node', 'Cloud'].map(tag => (
                  <span key={tag} className="liquid-glass px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[11px] text-white/90 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl sm:text-2xl text-white font-medium tracking-tight mb-3">Full-Stack Solutions</h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed mb-6">
                End-to-end software development from interactive interfaces to high-performance scalable backends.
              </p>
              
              <div className="mt-auto pt-6 border-t border-white/10">
                <ul className="space-y-2.5">
                  {[
                    'Modern React.js & Tailwind responsive UIs',
                    'Scalable Python FastAPI & Node.js servers',
                    'Secure authentication & database architecture'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[11px] sm:text-xs text-white/60 leading-tight">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC]/50 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
